import useCartStore from "../components/Cart/useCartStore";
import supabase from "./supabase";

// export const addToCarts = async (productId) => {
//     const { data, error } = await supabase
//       .from("carts")
//       .upsert([{ product_id: productId, quantity: 1 }]);

//     if (error) throw error;
//     return data;
//   };


export const addToCarts = async (productId, size, color) => {

  // 1️⃣ Cek apakah produk sudah ada di cart
  const { data: existingCartItem, error } = await supabase
    .from("carts")
    .select("*")
    .eq("product_id", productId)
    .eq("size", size)
    .eq("color", color)
    .maybeSingle();

  if (error && error.code !== "PGRST116") throw error; // Jika error bukan karena "tidak ditemukan", lempar error

  if (existingCartItem) {
    // 2️⃣ Jika produk sudah ada, update quantity
    const { data, error: updateError } = await supabase
      .from("carts")
      .update({ quantity: existingCartItem.quantity + 1 })
      .eq("id", existingCartItem.id);

    if (updateError) throw updateError;
    return data;
  } else {
    // 3️⃣ Jika produk belum ada, tambahkan ke cart
    const { data, error: insertError } = await supabase
      .from("carts")
      .insert([{ product_id: productId, size, color, quantity: 1 }]);

    if (insertError) throw insertError;
    return data;
  }
};

export async function fetchCart(user_id) {
  const { data, error } = await supabase
    .from("carts")
    .select(`
      id, quantity, size, color,
      product (id, name, image_url, price)
    `)
    .eq("user_id", user_id)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

export async function updateCartQuantity(cartId, quantity) {
  const { data, error } = await supabase
    .from('carts')
    .update({ quantity })
    .eq('id', cartId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const Order = async () => {
  // Ambil data dari local storage (Zustand)
  const { selectedCartItems } = useCartStore.getState();

  // Ambil data cart items (panggil fungsi selectedCartItems)
  const cartItems = selectedCartItems();

  // Format data untuk Supabase tanpa mengubah id
  const orderItems = cartItems.map(({ product, quantity, size, color }) => ({
    product_id: product.id,
    quantity: quantity,
    price: product.price,
    subtotal: product.price * quantity,
    size: size,
    color: color,
  }));

  // Insert ke tabel order_items
  const { error } = await supabase.from("order_items").insert(orderItems);

  if (error) throw new Error(error.message);

  // Hapus data yang baru dimasukkan dari Supabase berdasarkan ID dari local storage
  const cartItemIds = cartItems.map((item) => item.id); // Ambil semua ID dari local
  const { error: deleteError } = await supabase
    .from("carts")
    .delete()
    .in("id", cartItemIds);

  if (deleteError) throw new Error(deleteError.message);

  localStorage.removeItem("cart-storage");

  return { deleted: cartItemIds };
};



export const deleteCartItem = async (id) => {
  const { removeCartItemById } = useCartStore.getState()
  const { data, error } = await supabase
    .from('carts') // Nama tabel order_items
    .delete()
    .eq('id', id); // id yang ingin dihapus

  if (error) throw new Error(error.message);

  removeCartItemById(id)

  return data;
};
