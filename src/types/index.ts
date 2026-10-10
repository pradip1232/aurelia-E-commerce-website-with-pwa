// Product & Catalog Types
export type CategorySlug = 'men' | 'women' | 'kids' | 'electronics' | 'home' | 'beauty' | 'accessories';

export interface ProductVariant {
  id: string;
  size: string;
  color: string;
  colorCode: string;
  stock: number;
  sku: string;
  price?: number;
}

export interface ProductReview {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  helpfulCount: number;
}

export interface Product {
  id: string;
  sku: string;
  brand: string;
  name: string;
  slug: string;
  description: string;
  category: CategorySlug;
  subcategory: string;
  price: number;
  mrp: number;
  discount: number;
  currency: string;
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  variants: ProductVariant[];
  rating: number;
  reviewCount: number;
  stock: number;
  tags: string[];
  badges: ('NEW' | 'SALE' | 'BESTSELLER' | 'EXCLUSIVE')[];
  specifications: Record<string, string>;
  deliveryInfo: {
    estimatedDays: number;
    freeDelivery: boolean;
    codAvailable: boolean;
  };
  offers: string[];
  reviews: ProductReview[];
}

// Cart Types
export interface CartItem {
  id: string;
  productId: string;
  name: string;
  brand: string;
  price: number;
  mrp: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
  stock: number;
}

// Wishlist Types
export interface WishlistItem {
  productId: string;
  addedAt: string;
}

// Filter State Types
export interface FilterState {
  categories: CategorySlug[];
  brands: string[];
  priceRange: [number, number];
  sizes: string[];
  colors: string[];
  rating: number | null;
  discount: number | null;
  inStockOnly: boolean;
  sortBy: 'recommended' | 'newest' | 'price-low-high' | 'price-high-low' | 'best-rated' | 'discount';
}

// Checkout & Address Types
export interface Address {
  id: string;
  name: string;
  phone: string;
  pincode: string;
  locality: string;
  address: string;
  city: string;
  state: string;
  landmark?: string;
  addressType: 'HOME' | 'WORK' | 'OTHER';
  isDefault: boolean;
}

export interface DeliveryOption {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedArrival: string;
}

export interface Coupon {
  code: string;
  discountPercent: number;
  maxDiscount?: number;
  minOrderValue: number;
  description: string;
  freeShipping?: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  couponDiscount: number;
  shippingFee: number;
  tax: number;
  total: number;
  couponCode?: string;
  shippingAddress: Address;
  deliveryOption: DeliveryOption;
  paymentMethod: 'UPI' | 'CARD' | 'NETBANKING' | 'WALLET' | 'COD';
  paymentStatus: 'PAID' | 'PENDING';
  orderStatus: 'PLACED' | 'CONFIRMED' | 'PACKED' | 'SHIPPED' | 'OUT_FOR_DELIVERY' | 'DELIVERED' | 'CANCELLED' | 'RETURNED';
  trackingNumber: string;
  timeline: {
    status: string;
    date: string;
    completed: boolean;
    location: string;
  }[];
}

// User & Auth Types
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  gender?: 'MALE' | 'FEMALE' | 'OTHER';
  dateOfBirth?: string;
  rewardPoints: number;
}

// Toast Types
export interface Toast {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}
