import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from '../types';

interface CartStore {
  items: CartItem[];
  isCartDrawerOpen: boolean;
  couponCode: string | null;
  couponDiscount: number;
  openCartDrawer: () => void;
  closeCartDrawer: () => void;
  addItem: (item: Omit<CartItem, 'id' | 'quantity'>, qty?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  setQuantity: (id: string, qty: number) => void;
  applyCoupon: (code: string, discount: number) => void;
  removeCoupon: () => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isCartDrawerOpen: false,
      couponCode: null,
      couponDiscount: 0,

      openCartDrawer: () => set({ isCartDrawerOpen: true }),
      closeCartDrawer: () => set({ isCartDrawerOpen: false }),

      addItem: (newItem, qty = 1) => {
        set((state) => {
          const existingIndex = state.items.findIndex(
            (i) => i.productId === newItem.productId && i.size === newItem.size && i.color === newItem.color
          );

          if (existingIndex > -1) {
            const updated = [...state.items];
            updated[existingIndex].quantity += qty;
            return { items: updated, isCartDrawerOpen: true };
          }

          const cartItem: CartItem = {
            ...newItem,
            id: `${newItem.productId}-${newItem.size}-${newItem.color}-${Date.now()}`,
            quantity: qty
          };

          return { items: [...state.items, cartItem], isCartDrawerOpen: true };
        });
      },

      removeItem: (id) => {
        set((state) => ({ items: state.items.filter((item) => item.id !== id) }));
      },

      updateQuantity: (id, delta) => {
        set((state) => ({
          items: state.items
            .map((item) => {
              if (item.id === id) {
                const newQty = item.quantity + delta;
                return newQty > 0 ? { ...item, quantity: newQty } : null;
              }
              return item;
            })
            .filter(Boolean) as CartItem[]
        }));
      },

      setQuantity: (id, qty) => {
        set((state) => ({
          items: state.items
            .map((item) => (item.id === id ? (qty > 0 ? { ...item, quantity: qty } : null) : item))
            .filter(Boolean) as CartItem[]
        }));
      },

      applyCoupon: (code, discount) => set({ couponCode: code, couponDiscount: discount }),
      removeCoupon: () => set({ couponCode: null, couponDiscount: 0 }),
      clearCart: () => set({ items: [], couponCode: null, couponDiscount: 0 }),

      getSubtotal: () => {
        return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },

      getTotal: () => {
        const sub = get().getSubtotal();
        const disc = get().couponDiscount;
        const shipping = sub >= 999 || sub === 0 ? 0 : 150;
        return Math.max(0, sub - disc + shipping);
      },

      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      }
    }),
    {
      name: 'aurelia-cart-storage',
      partialize: (state) => ({
        items: state.items,
        couponCode: state.couponCode,
        couponDiscount: state.couponDiscount
      })
    }
  )
);

