import React from 'react'
import { FaTshirt } from 'react-icons/fa'
import { GiConverseShoe } from 'react-icons/gi'
import { PiPantsFill } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'

function HighlightFilter({ gender }) {

    const navigate = useNavigate()

    const productMenFilter = [
        {
            id: 1,
            title: "Shirt",
            images: '/public/assets/category/Shirt.jpg',
        },
        {
            id: 2,
            title: "Shoes",
            images: '/public/assets/category/shoes-filter.jpg',
        },
        {
            id: 3,
            title: "T-Shirt",
            images: '/public/assets/category/T-shirt-filter.jpg',
        },
        {
            id: 4,
            title: "Long Pants",
            images: '/public/assets/category/long-pants-filter.jpg',
        },
        {
            id: 5,
            title: "Hoodie",
            images: '/public/assets/category/hoodies-filter.jpg',
        },
    ]

    const productWomenFilter = [
        {
            id: 1,
            title: "Dress",
            images: '/public/assets/category/dress.jpg',
        },
        {
            id: 2,
            title: "Handbag",
            images: '/public/assets/category/handbag.jpg',
        },
        {
            id: 3,
            title: "Tops",
            images: '/public/assets/category/tops.jpg',
        },
        {
            id: 4,
            title: "Pants",
            images: '/public/assets/category/pants.jpg',
        },
        {
            id: 5,
            title: "Blouse",
            images: '/public/assets/category/Blouse.jpg',
        },
    ]

    return (
        // <div>
        //     <h1 className='text-center mt-10 text-4xl font-semibold'>Category</h1>
        //     <div className='flex justify-center gap-10 items-center mt-5'>
        //         <div className='text-center'>
        //             <h1 className='border-4 px-8 py-8 rounded-full'><GiConverseShoe /></h1>
        //             <p>Shoes</p>
        //         </div>
        //     </div>
        // </div>
        <div className='mt-10'>
            <h1 className='text-center text-3xl font font-semibold'>Category Product!</h1>
            <div className='flex justify-center items-center gap-10 mt-10'>
                {(gender === 'Women' ? productWomenFilter : productMenFilter).map((item) => (
                    <div onClick={() => navigate(`/category/${item.title}`)} className='overflow-hidden rounded-xl cursor-pointer' key={item.title}>
                        <div className='relative hover:scale-105 object-cover transition-transform duration-1000'>
                            <img className='rounded-xl' src={item.images} width='170' />
                            {/* <div className='w-full h-full bg-black/10 font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white px-5 rounded-xl'></div> */}
                            <h1 className="absolute text-2xl inset-0 flex justify-center items-center hover:bg-black/5 transition-transform duration-1000  text-white  rounded-xl font-bold">
                                {item.title}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HighlightFilter