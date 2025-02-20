import { useState } from "react";
import { useUpdateQuantityCart } from "../components/Cart/useCart";

export default function QuantitySelector({ cartItem, quantity }) {
    // const { updateQuantity } = useUpdateQuantityCart()

    // const handleIncrease = () => {
    //     updateQuantity({ cartId, quantity: quantity + 1 });
    // };

    // const handleDecrease = () => {
    //     if (quantity > 1) {
    //         updateQuantity({ cartId, quantity: quantity - 1 });
    //     }
    // };

    const { updateQuantity } = useUpdateQuantityCart();

    const handleUpdateQuantity = (newQuantity) => {
        updateQuantity({ cartId: cartItem.id, quantity: newQuantity });
    };

    return (
        <div className="border border-stone-50 flex items-center gap-2 bg-gray-100 p-2 rounded-full shadow-sm w-fit">
            <button
                onClick={() => handleUpdateQuantity(cartItem.quantity - 1)}
                disabled={quantity === 1}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 disabled:opacity-50"
            >
                -
            </button>
            <span className="w-8 text-center text-lg font-medium">{quantity}</span>
            <button
                onClick={() => handleUpdateQuantity(cartItem.quantity + 1)}
                disabled={quantity === 15}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 disabled:opacity-50"
            >
                +
            </button>
        </div>
    );
}
