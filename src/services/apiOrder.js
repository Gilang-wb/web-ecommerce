import supabase from "./supabase";


export async function fetchOrder (user_id) {
    const { data, error } = await supabase
      .from("order_items")
      .select(`
        id, quantity, status, subtotal, size, color, created_at,
        product (id, name, image_url, price)
      `)
      .eq("user_id", user_id)
      .order("created_at", { ascending: true });
  
    if (error) throw new Error(error.message);
    return data;
  };

  export const updateOrderStatus = async ({ orderId, userId, status }) => {
    const { data, error } = await supabase
      .from("order_items") // Ganti dengan nama tabelmu
      .update({ status })  // Kolom yang diupdate
      .match({ id: orderId, user_id: userId });
  
    if (error) throw new Error(error.message);
    return data;
  };