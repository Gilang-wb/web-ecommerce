import CartItem from "./CartItem";
import { useCart } from "./useCart";


function Cart() {

  // const { cartItems = [], isLoading } = useCart();

  // console.log(cartItems)

  // if (isLoading) return <p>Loading cart...</p>;

  return (
    <div className="App bg-gray-100 min-h-screen flex justify-center">
      <CartItem />
    </div>
  );
};

export default Cart;
