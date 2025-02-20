import React from 'react'
import useCartStore from './useCartStore'
import { useOrder } from './useCart';
import { useUser } from '../Auth/useUser';

function CheckOut() {

    const { selectedCartItems, totalPrice, totalQuantity } = useCartStore()

    const { addToOrder } = useOrder()

    const handleCheckout = () => {
       
        addToOrder();
    };

    return (
        <div className='bg-gray-100 flex gap-10 min-h-screen justify-center'>
            <div className='w-[55%] mt-28'>
                <div className='w-full bg-white text-2xl p-3 rounded-xl mb-1'>
                    <h1 className='ml-2'>Product</h1>
                </div>
                {selectedCartItems().map((item) => (
                    <div className='bg-white rounded-xl p-5 mb-5' key={item.id}>
                        <div className='flex justify-center items-center gap-20'>
                            <img src={item.product.image_url[0]} width='80' />
                            <div className='text-center'>
                                <h1 className='text-lg font-semibold'>{item.product.name}</h1>
                            </div>
                            <div className='text-center'>
                                <h1>Variation:</h1>
                                <h1 className='text-base font-semibold w-20'>{item.color} | {item.size}</h1>
                            </div>
                            <div className='text-center'>
                                <h1>Price:</h1>
                                <h1 className='text-lg  font-semibold'>${item.product.price}</h1>
                            </div>
                            <div className='text-center'>
                                <h1>Quantity:</h1>
                                <h1 className='text-lg font-semibold'>{item.quantity}</h1>
                            </div>
                            <div className='text-center'>
                                <h1>Total:</h1>
                                <h1 className='text-lg font-semibold'>{item.quantity * item.product.price}</h1>
                            </div>
                        </div>
                        <input className='border-b border-stone-400 focus:outline-none mt-3 p-2 w-[30%]' type='text' placeholder='Note' />
                    </div>
                ))}
            </div>
            <div className='p-10 rounded-xl bg-white w-[25%] h-[30%] mt-28'>
                <h1 className='text-xl font-bold mb-5'>Ringkasan Belanja</h1>
                <div className='flex justify-between'>
                    <p className='text-stone-500 text-lg'>Barang</p>
                    <h1 className='font-semibold'>{totalQuantity()}</h1>
                </div>
                <div className='flex justify-between'>
                    <p className='text-stone-500 text-lg'>Total Harga</p>
                    <h1 className='font-semibold'>${totalPrice()}</h1>
                </div>
                <button onClick={handleCheckout} className='cursor-pointer bg-black text-white w-full mt-3 p-2 flex justify-center item-center mx-auto  rounded-2xl'>Pay</button>
            </div>
        </div>
    )
}

export default CheckOut