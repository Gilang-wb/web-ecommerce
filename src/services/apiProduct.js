import supabase from "./supabase";


export async function fetchProduct () {
  const { data, error } = await supabase.rpc('get_random_products')
    

  if (error) throw new Error(error.message);
  return data;
};

export async function fetchFashionByGender (gender) {
  const { data, error } = await supabase
    .from("product")
    .select("*")
    .eq("gender", gender); // Filter berdasarkan gender

  if (error) throw new Error(error.message);
  return data;
};

export async function fetchFashionByCategory(category) {
  const { data, error } = await supabase
    .from("product")
    .select("*")
    .eq("category", category); // Filter berdasarkan gender

  if (error) throw new Error(error.message);
  return data;
};

export async function fetchProductById(id) {
  const { data, error } = await supabase
    .from('product')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data 
}