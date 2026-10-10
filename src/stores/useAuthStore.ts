import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Address } from '../types';

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  addresses: Address[];
  defaultAddressId: string | null;
  login: (email: string, name?: string) => void;
  logout: () => void;
  updateProfile: (updated: Partial<User>) => void;
  addAddress: (address: Omit<Address, 'id'>) => void;
  updateAddress: (id: string, address: Partial<Address>) => void;
  deleteAddress: (id: string) => void;
  setDefaultAddress: (id: string) => void;
}

const INITIAL_ADDRESSES: Address[] = [
  {
    id: 'addr-1',
    name: 'Kabir Singhania',
    phone: '+91 98201 44521',
    pincode: '400001',
    locality: 'Colaba Waterfront',
    address: 'Apt 1402, Sea Face Towers, Marine Drive',
    city: 'Mumbai',
    state: 'Maharashtra',
    landmark: 'Adjacent to Taj Mahal Palace',
    addressType: 'HOME',
    isDefault: true
  },
  {
    id: 'addr-2',
    name: 'Kabir Singhania (Atelier)',
    phone: '+91 98201 44521',
    pincode: '110001',
    locality: 'Barakhamba Road',
    address: 'Level 9, DLF Centre, Connaught Place',
    city: 'New Delhi',
    state: 'Delhi',
    addressType: 'WORK',
    isDefault: false
  }
];

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: {
        id: 'usr-vip-001',
        name: 'Kabir Singhania',
        email: 'kabir.singhania@aurelia.com',
        phone: '+91 98201 44521',
        gender: 'MALE',
        dateOfBirth: '1992-08-14',
        rewardPoints: 2450
      },
      isAuthenticated: true,
      addresses: INITIAL_ADDRESSES,
      defaultAddressId: 'addr-1',

      login: (email, name = 'Valued Guest') => {
        set({
          isAuthenticated: true,
          user: {
            id: `usr-${Date.now()}`,
            name,
            email,
            phone: '+91 98765 43210',
            rewardPoints: 500
          }
        });
      },

      logout: () => set({ user: null, isAuthenticated: false }),

      updateProfile: (updated) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...updated } : null
        }));
      },

      addAddress: (newAddr) => {
        const id = `addr-${Date.now()}`;
        const created: Address = { ...newAddr, id, isDefault: newAddr.isDefault || get().addresses.length === 0 };
        set((state) => {
          let updated = [...state.addresses];
          if (created.isDefault) {
            updated = updated.map((a) => ({ ...a, isDefault: false }));
          }
          return {
            addresses: [...updated, created],
            defaultAddressId: created.isDefault ? id : state.defaultAddressId
          };
        });
      },

      updateAddress: (id, updated) => {
        set((state) => ({
          addresses: state.addresses.map((a) => (a.id === id ? { ...a, ...updated } : a))
        }));
      },

      deleteAddress: (id) => {
        set((state) => ({
          addresses: state.addresses.filter((a) => a.id !== id),
          defaultAddressId: state.defaultAddressId === id ? null : state.defaultAddressId
        }));
      },

      setDefaultAddress: (id) => {
        set((state) => ({
          defaultAddressId: id,
          addresses: state.addresses.map((a) => ({
            ...a,
            isDefault: a.id === id
          }))
        }));
      }
    }),
    {
      name: 'aurelia-auth-storage'
    }
  )
);

