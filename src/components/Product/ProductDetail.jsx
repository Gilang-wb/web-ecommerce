import React, { useState } from 'react'
import { IoIosStar } from 'react-icons/io'
import Selector from '../../ui/Selector'
import { FaRegHeart } from 'react-icons/fa'
import { useQuery } from '@tanstack/react-query'
import { fetchProductById } from '../../services/apiProduct'
import { useParams } from 'react-router-dom'
import { useAddToCart } from '../Cart/useCart'
import Loading from '../../ui/Loading'
import OurNewProduct from '../Home/OurNewProduct'
import Footer from '../../ui/Footer'

function ProductDetail() {
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");

    const { id } = useParams()

    const { data = {}, isLoading } = useQuery({ queryKey: ["product", id], queryFn: () => fetchProductById(id), })

    const imageUrl = data.image_url ?? [];

    const { addToCart } = useAddToCart()

    function handleAddToCart() {
        if (!selectedSize) {
            alert("pilih size dan warna terlebih dahulu")
            return
        }

        addToCart({ productId: data.id, size: selectedSize, color: selectedColor });
    }

    if (isLoading) return <Loading height='h-screen' />

    return (
        <div>
            <div className='flex gap-16 justify-center mt-24 mb-20'>
                <div className='flex flex-wrap max-w-md gap-2'>
                    {imageUrl.map((url, index) => (
                        <img className='rounded-xl' key={index} src={url} width='210' />
                    ))}
                </div>
                <div className=''>
                    <div className='text-3xl flex  items-center'>
                        <h1 className=' font-bold'>{data.name}</h1>
                        <strong className='ml-10 border-2 rounded-xl p-2'><FaRegHeart /></strong>
                    </div>
                    <p className='mt-24 font-semibold text-2xl'>${data.price}</p>
                    <p className='flex justify-center items-center gap-1 px-3 bg-yellow-500 text-xl max-w-16 text-center text-white p-1 rounded-full'>4.8 <IoIosStar /></p>
                    <Selector size={data.size} variation={data.variation} setSelectedColor={setSelectedColor} setSelectedSize={setSelectedSize} selectedSize={selectedSize} selectedColor={selectedColor} />
                    <button onClick={handleAddToCart} className='mt-10 cursor-pointer bg-black text-white p-2 w-md rounded-xl'>Add To Cart</button>
                </div>
            </div>
            <OurNewProduct />
            <Footer />
        </div>
    )
}

export default ProductDetail