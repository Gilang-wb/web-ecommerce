import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addToCarts, deleteCartItem, fetchCart, Order, updateCartQuantity } from "../../services/apiCart";
import useCartStore from "./useCartStore";
import { useNavigate } from "react-router-dom";

export function useAddToCart() {

    const { mutate: addToCart, isLoading: isAddToCart } = useMutation({
        mutationFn: ({ productId, size, color }) => addToCarts(productId, size, color),
        onSuccess: () => {
            alert('berhasil menambahkann data cart')
        },
        onError: (error) => {
            console.error('Gagal menambahkan data:', error.message);
        },
    });

    return { addToCart, isAddToCart };
}

export function useCart(user_id) {
    const {
        isLoading,
        data: cartItems,
        error
    } = useQuery({
        queryKey: ["carts"],
        queryFn: () => fetchCart(user_id),
        enabled: !!user_id,
    });

    return { cartItems, isLoading }
}

export function useUpdateQuantityCart() {
    const queryClient = useQueryClient();

    const { mutate: updateQuantity, isLoading } = useMutation({
        mutationFn: ({ cartId, quantity }) => updateCartQuantity(cartId, quantity),
        onMutate: async ({ cartId, quantity }) => {
            await queryClient.cancelQueries({ queryKey: ["carts"] });

            const previousCart = queryClient.getQueryData(["carts"]);

            queryClient.setQueryData(["carts"], (oldCart) =>
                oldCart?.map((item) =>
                    item.id === cartId ? { ...item, quantity } : item
                )
            );

            return { previousCart };
        },
        onError: (error, variables, context) => {
            console.error("Gagal mengupdate quantity:", error.message);
            queryClient.setQueryData(["carts"], context.previousCart);
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["carts"] });
        },
    });

    return { updateQuantity };
}

export function useOrder() {
    const navigate = useNavigate()

    const { mutate: addToOrder, isLoading: isAddToOrder } = useMutation({
        mutationFn: () => Order(),
        onSuccess: () => {
            alert('berhasil menambahkann data order')
            navigate('/order')
            window.location.reload();
        },
        onError: (error) => {
            console.error('Gagal menambahkan data:', error.message);
        },
    });

    return { addToOrder, isAddToOrder };
}

export function useDeleteCartItem() {
    const { removeCartItemById } = useCartStore()
    const queryClient = useQueryClient();

    const { mutate: deleteItem } = useMutation({
        mutationFn: (id) => deleteCartItem(id),
        onSuccess: () => {
            alert('berhasil menghapus item')
            queryClient.invalidateQueries({ queryKey: ['carts'] });
        },
        onError: (error) => {
            console.error('Gagal menghapus:', error.message);
        },
    });

    return { deleteItem };
}


// export function useUpdateQuantityCart() {
//     const queryClient = useQueryClient();

//     return useMutation({
//         mutationFn: ({ cartId, quantity }) => updateCartQuantity(cartId, quantity),
//         onMutate: async ({ cartId, quantity }) => {
//             await queryClient.cancelQueries({ queryKey: ["carts"] });

//             const previousCart = queryClient.getQueryData(["carts"]);

//             queryClient.setQueryData(["carts"], (oldCart) =>
//                 oldCart?.map((item) =>
//                     item.id === cartId ? { ...item, quantity } : item
//                 )
//             );

//             return { previousCart };
//         },
//         onError: (error, variables, context) => {
//             console.error("Gagal mengupdate quantity:", error.message);
//             queryClient.setQueryData(["carts"], context.previousCart);
//         },
//         onSettled: () => {
//             queryClient.invalidateQueries({ queryKey: ["carts"] });
//         },
//     });
// }