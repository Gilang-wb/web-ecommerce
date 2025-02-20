import { create } from "zustand";
import { persist } from "zustand/middleware";

// const useCartStore = create((set, get) => ({
//   cartItems: [],
//   selectedItems: [],

//   // Set cartItems setelah fetch dari API
//   setCartItems: (items) => set({ cartItems: items }),

//   // Toggle item dari selectedItems
//   toggleSelectItem: (id) =>
//     set((state) => ({
//       selectedItems: state.selectedItems.includes(id)
//         ? state.selectedItems.filter((item) => item !== id)
//         : [...state.selectedItems, id],
//     })),

//   // Dapatkan item yang dipilih
//   selectedCartItems: () =>
//     get().cartItems.filter((item) => get().selectedItems.includes(item.id)),

//   // Hitung total harga
//   totalPrice: () =>
//     get()
//       .selectedCartItems()
//       .reduce((acc, item) => acc + item.product.price * item.quantity, 0),

//   // Hitung total jumlah barang
//   totalQuantity: () =>
//     get()
//       .selectedCartItems()
//       .reduce((acc, item) => acc + item.quantity, 0),
// }));
const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      selectedItems: [],

      setCartItems: (items) => set({ cartItems: items }),

      toggleSelectItem: (id) =>
        set((state) => {
          const newSelectedItems = state.selectedItems.includes(id)
            ? state.selectedItems.filter((item) => item !== id)
            : [...state.selectedItems, id];

          return { selectedItems: newSelectedItems };
        }),

      removeCartItemById: (id) =>
        set((state) => {
          const updatedCartItems = state.cartItems.filter((item) => item.id !== id);
          const updatedSelectedItems = state.selectedItems.filter((itemId) => itemId !== id);

          return {
            cartItems: updatedCartItems,
            selectedItems: updatedSelectedItems
          };
        }),

      selectedCartItems: () =>
        get().cartItems.filter((item) => get().selectedItems.includes(item.id)),

      totalPrice: () =>
        get()
          .selectedCartItems()
          .reduce((acc, item) => acc + item.product.price * item.quantity, 0),

      totalQuantity: () =>
        get()
          .selectedCartItems()
          .reduce((acc, item) => acc + item.quantity, 0),

    }),
    {
      name: "cart-storage", // Key untuk localStorage
      getStorage: () => localStorage, // Simpan di localStorage
    }
  )
);

export default useCartStore;
