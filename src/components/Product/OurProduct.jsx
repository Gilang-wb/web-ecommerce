import { useState } from "react";
import { IoCartOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom";
import Modal from "../../ui/Modal";

function OurProduct({ product, title }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const handleOpenModal = (id) => {
        setSelectedProductId(id);
        setIsModalOpen(true)
    };


    const navigate = useNavigate()

    return (
        <div className='p-4 mt-10 mb-20'>
            <h1 className='text-3xl font-semibold mt-10 mb-7 text-center'>{title}</h1>
            <div className='grid grid-cols-5 gap-5 items-center justify-center mx-40'>
                {product.map((item) => (
                    <div className='rounded-xl p-2' key={item.id}>
                        <div onClick={() => navigate(`/product-detail/${item.id}`)}>
                            <img className='rounded-xl hover:scale-105 transition-all' src={item.image_url[0]} alt='' width="250" />
                            <p className='mt-2 font-bold'>{item.name}</p>
                            <p className=''>{item.description}</p>
                            <h1 className='font-semibold'>${item.price}</h1>
                        </div>
                        <button onClick={() => handleOpenModal(item.id)} className='border p-1 rounded-lg mt-2 text-2xl cursor-pointer hover:bg-stone-50 text-center px-16'><IoCartOutline /></button>
                    </div>
                ))}
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} productId={selectedProductId} />
        </div>
    )
}

export default OurProduct