// store/useCartStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      isOpen: false,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      addItem: (newItem) => {
        const currentCart = get().cart;
        // Ensure string conversion so comparisons like "1" === 1 don't fail
        const existingIndex = currentCart.findIndex(
          (item) => String(item.id) === String(newItem.id)
        );

        if (existingIndex > -1) {
          // Product already exists in cart: increment its quantity
          const updatedCart = [...currentCart];
          const existingItem = updatedCart[existingIndex];
          
          updatedCart[existingIndex] = {
            ...existingItem,
            quantity: existingItem.quantity + (newItem.quantity || 1),
          };

          set({ cart: updatedCart });
        } else {
          // New distinct product: append to array
          set({
            cart: [
              ...currentCart,
              {
                id: String(newItem.id),
                title: newItem.title,
                price: Number(newItem.price) || 0,
                image: newItem.image,
                quantity: newItem.quantity || 1,
              },
            ],
          });
        }
      },

      removeItem: (id) => {
        set({
          cart: get().cart.filter((item) => String(item.id) !== String(id)),
        });
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }

        set({
          cart: get().cart.map((item) =>
            String(item.id) === String(id) ? { ...item, quantity } : item
          ),
        });
      },

      clearCart: () => set({ cart: [] }),

      getTotalPrice: () => {
        return get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
      getTotalItems: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: "auto-shelter-cart",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true, // Allows your useCart hook to trigger rehydrate manually
    }
  )
);