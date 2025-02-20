import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchOrder, updateOrderStatus } from "../../services/apiOrder";


export function useOrder(user_id) {
    const {
      isLoading,
      data,
    } = useQuery({
      queryKey: ["order_items", user_id],
      queryFn: () => fetchOrder(user_id),
      enabled: !!user_id,
    });
  
    return { data, isLoading };
  }

  export function useTansactionOrder() {
    const queryClient = useQueryClient();

    const { mutate: updateTransaction, isLoading: isTransaction } = useMutation({
        mutationFn: ({orderId, userId, status}) => updateOrderStatus({orderId, userId, status}),
        onSuccess: () => {
            alert('berhasil selesaikan pesanan')
            queryClient.invalidateQueries({ queryKey: ["order_items"] });
        },
        onError: (error) => {
            console.error('Gagal selesaikan pesanan:', error.message);
        },
    });

    return { updateTransaction, isTransaction };
}