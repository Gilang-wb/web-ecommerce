import { FiShoppingCart } from "react-icons/fi";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-gray-500">
      <FiShoppingCart className="text-8xl mb-4 mr-6" />
      <h2 className="text-xl font-semibold">Oops! Your cart is empty</h2>
      <p className="text-sm">Start shopping now and fill it with your favorite styles!</p>
      <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
        Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;