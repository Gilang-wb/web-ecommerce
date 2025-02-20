import { useQuery } from "@tanstack/react-query";
import { fetchFashionByCategory, fetchFashionByGender, fetchProduct } from "../../services/apiProduct";

export function useProduct() {
  const {
    isLoading,
    data: product,
    error
  } = useQuery({
    queryKey: ["product"],
    queryFn: fetchProduct,
    refetchInterval: 600000, // 10 menit
    staleTime: 600000, // Hindari refetch sebelum waktu habis
    cacheTime: 900000, // Simpan cache lebih lama
  });

  return { isLoading, error, product };
}

export function useFashionByGender(gender) {
    const {
      isLoading,
      data: product,
      error, refetch
    } = useQuery({
      queryKey: ["product", gender],
      queryFn: () => fetchFashionByGender(gender),
      staleTime: 0,
    });
  
    return { isLoading, error, product,  refetch };
  }

  export function useFashionShoes(category) {
    const {
      isLoading,
      data: productShoes,
      error, refetch
    } = useQuery({
      queryKey: ["product", category ],
      queryFn: () => fetchFashionByCategory(category),
    });
  
    return { isLoading, error, productShoes,  refetch };
  }

  export function useFashionByCategory(category) {
    const {
      isLoading,
      data: product,
      error, refetch
    } = useQuery({
      queryKey: ["product", category ],
      queryFn: () => fetchFashionByCategory(category),
    });
  
    return { isLoading, error, product,  refetch };
  }
