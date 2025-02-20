import React, { useEffect } from 'react'
import QuantitySelector from '../../ui/QuantitySelector'
import { useCart, useDeleteCartItem } from './useCart';
import useCartStore from './useCartStore';
import { useNavigate } from 'react-router-dom';
import EmptyCart from '../../ui/EmptyCart';
import { hashKey } from '@tanstack/react-query';
import Loading from '../../ui/Loading';
import { useUser } from '../Auth/useUser';


function CartItem() {
    // const [selectedItems, setSelectedItems] = useState([]);

    // const { cartItems = [], isLoading } = useCart();

    // const handleSelect = (id) => {
    //     setSelectedItems((prev) =>
    //         prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    //     );
    // };

    // const selectedCartItems = cartItems.filter((item) =>
    //     selectedItems.includes(item.id)
    // );

    // // Hitung total quantity dan total harga dari item yang dipilih
    // const totalQuantity = selectedCartItems.reduce((acc, item) => acc + item.quantity, 0);

    // const totalPrice = selectedCartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    const { deleteItem } = useDeleteCartItem()
    const navigate = useNavigate()
    const { user = {} } =  useUser()
    const { cartItems: fetchedCartItems = [], isLoading } = useCart(user.id); // Ambil data dari API
    const {
        cartItems,
        setCartItems,
        selectedItems,
        toggleSelectItem,
        totalPrice,
        totalQuantity,
    } = useCartStore();

    useEffect(() => {
        if (fetchedCartItems.length > 0) {
            setCartItems(fetchedCartItems);
        }
    }, [fetchedCartItems, setCartItems]);

    function handleDelete (id) {
        deleteItem(id)
    }

    if (isLoading) return <Loading height='h-screen' />

    if(cartItems.length === 0) return <EmptyCart />

    if (isLoading) return <p>Loading cart...</p>;

    return (
        <div className='max-w-[88%] mt-20 mb-44'>
            <div className='flex bg-white p-5 rounded-sm mb-1'>
                <h1 className='ml-14'>Product</h1>
                <h1 className='ml-[35%]'>Price</h1>
                <h1 className='ml-[20%]'>Quantity</h1>
                <h1 className='ml-[19%]'>Action</h1>
            </div>
            {cartItems.map((item) => (
                <div className="flex p-5 shadow-sm px-10 bg-white rounded-xl justify-center items-center gap-44 mb-2" key={item.id}>
                    <div className="flex gap-3 w-full">
                        <input
                            checked={selectedItems.includes(item.id)}
                            onChange={() => toggleSelectItem(item.id)}
                            className='w-6 border mr-5' type='checkbox'
                        />
                        <img src={item.product.image_url[0]} width='90' />
                        <div>
                            <h1 className="text-xl font-semibold">{item.product.name}</h1>
                            <p>{item.size}</p>
                        </div>
                    </div>
                    <h1>${item.product.price}</h1>
                    <QuantitySelector quantity={item.quantity} cartItem={item} />
                    <button onClick={() => handleDelete(item.id)} className="text-red-600 cursor-pointer">hapus</button>
                </div>
            ))}
            <div className=''>
                <div className='fixed bottom-0 left-1/2 transform -translate-x-1/2 p-5 rounded-xl bg-white w-[80%]'>
                    <h1 className='text-xl font-bold mb-5'>Shopping Summary</h1>
                    <div className='flex justify-between mx-6'>
                        <p className='text-stone-500 text-lg'>Total</p>
                        <h1 className='text-2xl font-semibold'>{totalPrice() === 0 ? "-" : `$${totalPrice()}`}</h1>
                    </div>
                    <button onClick={() => navigate('/checkout')} className='cursor-pointer bg-black text-white w-full mt-3 p-2 flex justify-center item-center mx-auto  rounded-2xl'>Check Out ({totalQuantity()})</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem