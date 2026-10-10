import { create } from 'zustand';
import { Product, Toast } from '../types';

interface UIStore {
  // Search Overlay
  isSearchOpen: boolean;
  searchQuery: string;
  recentSearches: string[];
  openSearch: () => void;
  closeSearch: () => void;
  setSearchQuery: (query: string) => void;
  addRecentSearch: (query: string) => void;
  clearRecentSearches: () => void;

  // Quick View Modal
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;

  // Toast System
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'error' | 'info' | 'warning', duration?: number) => void;
  removeToast: (id: string) => void;

  // Mobile Menu
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isSearchOpen: false,
  searchQuery: '',
  recentSearches: ['Cashmere Overcoat', 'Titanium Headphones', 'Calfskin Bag', 'Chronograph'],

  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false, searchQuery: '' }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  addRecentSearch: (query) => {
    if (!query.trim()) return;
    set((state) => ({
      recentSearches: [query, ...state.recentSearches.filter((q) => q.toLowerCase() !== query.toLowerCase())].slice(0, 8)
    }));
  },
  clearRecentSearches: () => set({ recentSearches: [] }),

  quickViewProduct: null,
  openQuickView: (product) => set({ quickViewProduct: product }),
  closeQuickView: () => set({ quickViewProduct: null }),

  toasts: [],
  showToast: (message, type = 'success', duration = 3000) => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    set((state) => ({ toasts: [...state.toasts, { id, message, type, duration }] }));

    setTimeout(() => {
      set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
    }, duration);
  },
  removeToast: (id) => {
    set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
  },

  isMobileMenuOpen: false,
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false })
}));

