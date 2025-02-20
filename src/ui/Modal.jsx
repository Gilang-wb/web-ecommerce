import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { fetchProductById } from "../services/apiProduct";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import { useState } from "react";
import ModalSelect from "./ModalSelector";
import { useAddToCart } from "../components/Cart/useCart";

const Modal = ({ isOpen, onClose, productId }) => {
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");

    const { data: product = {}, isLoading, isError } = useQuery({
        queryKey: ["product", productId],
        queryFn: () => fetchProductById(productId),
        enabled: !!productId, // Hanya fetch jika ada ID
    });
    
     const { addToCart } = useAddToCart()

    function handleAddToCart() {
        if (!selectedSize) {
            alert("pilih size dan warna terlebih dahulu")
            return
        }

        addToCart({ productId: product.id, size: selectedSize, color: selectedColor });
    }

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-black/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose} // Tutup modal jika klik di luar
                >
                    <motion.div
                        className="bg-white p-6 w-[45%] rounded-lg shadow-lg relative"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()} // Hindari close saat klik dalam modal
                    >
                        {isLoading ? <Loading height="" /> :
                            <>
                                <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
                                    ✖
                                </button>
                                <div className="flex gap-5 p-2 py-5">
                                    <img className="rounded-sm w-32" src={product.image_url[0]} />
                                    <div>
                                        <h1 className="font-bold max-w-32">{product.name}</h1>
                                        <h1>${product.price}</h1>
                                    </div>
                                    <div className="ml-10">
                                        <ModalSelect size={product.size} variation={product.variation} setSelectedSize={setSelectedSize} selectedSize={selectedSize} setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button onClick={handleAddToCart} className='mt-10 cursor-pointer bg-black text-white p-2 w-40 rounded-sm'>Add To Cart</button>
                                </div>
                            </>
                        }
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body // Render modal langsung ke body
    );
};

export default Modal;

