import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Order } from '../types';

interface OrderStore {
  orders: Order[];
  currentOrder: Order | null;
  addOrder: (order: Order) => void;
  getOrderById: (id: string) => Order | undefined;
  cancelOrder: (id: string) => void;
  returnOrder: (id: string, reason: string) => void;
}

const INITIAL_ORDERS: Order[] = [
  {
    id: 'ord-88921',
    orderNumber: 'AUR-2026-88921',
    date: '18 Mar 2026',
    items: [
      {
        id: 'c-1',
        productId: 'prod-4',
        name: 'Atelier Wireless ANC Titanium Headphones',
        brand: 'AURELIA ACOUSTICS',
        price: 38990,
        mrp: 49990,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
        size: 'One Size',
        color: 'Matte Titanium',
        quantity: 1,
        stock: 14
      }
    ],
    subtotal: 38990,
    discount: 11000,
    couponDiscount: 3899,
    shippingFee: 0,
    tax: 0,
    total: 35091,
    couponCode: 'AURELIA10',
    shippingAddress: {
      id: 'addr-1',
      name: 'Kabir Singhania',
      phone: '+91 98201 44521',
      pincode: '400001',
      locality: 'Colaba Waterfront',
      address: 'Apt 1402, Sea Face Towers, Marine Drive',
      city: 'Mumbai',
      state: 'Maharashtra',
      addressType: 'HOME',
      isDefault: true
    },
    deliveryOption: {
      id: 'del-express',
      name: 'White-Glove Express Courier',
      description: 'Hand-delivered in signature climate-controlled packaging',
      price: 0,
      estimatedArrival: '21 Mar 2026'
    },
    paymentMethod: 'UPI',
    paymentStatus: 'PAID',
    orderStatus: 'OUT_FOR_DELIVERY',
    trackingNumber: 'BLUEDART-AUR-992140',
    timeline: [
      { status: 'Order Placed', date: '18 Mar 2026, 11:30 AM', completed: true, location: 'Online Atelier' },
      { status: 'Quality Assured & Boxed', date: '18 Mar 2026, 04:15 PM', completed: true, location: 'Mumbai Central Hub' },
      { status: 'Dispatched with Courier', date: '19 Mar 2026, 08:45 AM', completed: true, location: 'Bandra Transit Facility' },
      { status: 'Out For Delivery', date: '21 Mar 2026, 09:00 AM', completed: true, location: 'South Mumbai Route' },
      { status: 'Delivered', date: 'Pending', completed: false, location: 'Colaba Waterfront' }
    ]
  }
];

export const useOrderStore = create<OrderStore>()(
  persist(
    (set, get) => ({
      orders: INITIAL_ORDERS,
      currentOrder: null,

      addOrder: (newOrder) => {
        set((state) => ({
          orders: [newOrder, ...state.orders],
          currentOrder: newOrder
        }));
      },

      getOrderById: (id) => {
        return get().orders.find((o) => o.id === id || o.orderNumber === id);
      },

      cancelOrder: (id) => {
        set((state) => ({
          orders: state.orders.map((o) => (o.id === id ? { ...o, orderStatus: 'CANCELLED' } : o))
        }));
      },

      returnOrder: (id) => {
        set((state) => ({
          orders: state.orders.map((o) => (o.id === id ? { ...o, orderStatus: 'RETURNED' } : o))
        }));
      }
    }),
    {
      name: 'aurelia-orders-storage'
    }
  )
);

