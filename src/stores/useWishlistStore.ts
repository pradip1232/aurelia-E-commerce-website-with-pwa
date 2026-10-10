import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistStore {
  wishlistProductIds: string[];
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
  toggleWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      wishlistProductIds: ['prod-2', 'prod-3'], // default favorites for discovery

      addToWishlist: (id) => {
        if (!get().wishlistProductIds.includes(id)) {
          set((state) => ({ wishlistProductIds: [...state.wishlistProductIds, id] }));
        }
      },

      removeFromWishlist: (id) => {
        set((state) => ({
          wishlistProductIds: state.wishlistProductIds.filter((productId) => productId !== id)
        }));
      },

      toggleWishlist: (id) => {
        if (get().isInWishlist(id)) {
          get().removeFromWishlist(id);
        } else {
          get().addToWishlist(id);
        }
      },

      isInWishlist: (id) => {
        return get().wishlistProductIds.includes(id);
      },

      clearWishlist: () => set({ wishlistProductIds: [] })
    }),
    {
      name: 'aurelia-wishlist-storage'
    }
  )
);

