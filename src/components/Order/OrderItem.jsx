import React from 'react'
import { IoBagOutline } from 'react-icons/io5'
import { useOrder, useTansactionOrder } from './useOrder'
import { useUser } from '../Auth/useUser'
import Loading from '../../ui/Loading'

function OrderItem() {

    const { user = {} } = useUser()
    const userId = user.id
    const { data = [], isLoading } = useOrder(userId)

    const { updateTransaction } = useTansactionOrder()

    function handleUpdateStatus(orderId) {
        const status = 'completed'

        updateTransaction({ orderId, userId, status })
    }

    function handleCancelOrder(orderId) {
        const status = 'canceled'

        updateTransaction({ orderId, userId, status })
    }


    const getStatusClass = (status) => {
        switch (status) {
            case "canceled":
                return "bg-red-100 text-red-700";
            case "completed":
                return "text-green-700 bg-green-100"
            default:
                return "bg-amber-200 text-amber-700";
        }
    };

    return (
        <div className='w-[60%] rounded-lg h-full mt-24 bg-white border border-stone-300 p-5'>
            <h1 className='text-2xl font-semibold p-2 ml-1'>Transaction</h1>
            {data.map((item) => (
                <div className='border border-stone-300 w-full bg-white rounded-lg p-2 px-5 mb-3 shadow-sm' key={item.id}>
                    <div className='flex items-center gap-3'>
                        <IoBagOutline />
                        <h1>Belanja</h1>
                        <p>{item.created_at}</p>
                        <p className={` p-1 px-2 rounded-sm text-sm ${getStatusClass(item.status)}`}>{item.status}</p>
                    </div>
                    <div className='flex justify-between items-center mt-2'>
                        <div className='flex gap-2'>
                            <img src={item.product.image_url[0]} width='100' />
                            <div>
                                <h1 className='font-bold'>{item.product.name}</h1>
                                <p className='text-stone-500'>{item.quantity}x barang x ${item.product.price}</p>
                            </div>
                        </div>
                        <div className='border-l border-stone-400 py-2 px-7'>
                            <h1>Total:</h1>
                            <h1 className='font-bold text-lg'>${item.subtotal}</h1>
                        </div>
                    </div>
                    {item.status === "processing" && (
                        <div className='mt-2 flex justify-self-end gap-5 mb-2'>
                            <button onClick={() => handleCancelOrder(item.id)} className='bg-white border text-sm text-black p-2 rounded-lg cursor-pointer transition-all font-semibold duration-300'>Batalkan Pesanan</button>
                            <button onClick={() => handleUpdateStatus(item.id)} className='bg-black text-sm text-white p-2 rounded-lg cursor-pointer transition font-semibold duration-300'>Selesaikan Pesanan</button>
                        </div>
                    )}

                </div>
            ))}
        </div>
    )
}

export default OrderItem