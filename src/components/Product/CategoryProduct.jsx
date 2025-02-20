import { IoCartOutline } from 'react-icons/io5'
import { useFashionByCategory } from './useProduct'
import { useNavigate, useParams } from 'react-router-dom'

function CategoryProduct() {

    const { category } = useParams()

    const navigate = useNavigate()

    const { product = [] } = useFashionByCategory(category)
    // const product = [
    //     {
    //         id: 1,
    //         title: "Hush Puppie",
    //         image: '/public/assets/hush-puppie.webp',
    //         description: "Lorem ipsum dolor sit",
    //         price: 850,
    //     },
    //     {
    //         id: 2,
    //         title: "Converse",
    //         image: '/public/assets/converse.webp',
    //         description: "Lorem ipsum dolor sit",
    //         price: 850,
    //     },
    //     {
    //         id: 3,
    //         title: "Nike",
    //         image: '/public/assets/nike-product-1.webp',
    //         description: "Lorem ipsum dolor sit",
    //         price: 850,
    //     },
    //     {
    //         id: 4,
    //         title: "Cotton Well",
    //         image: '/public/assets/cotton-well.webp',
    //         description: "Lorem ipsum dolor sit",
    //         price: 850,
    //     },
    //     {
    //         id: 5,
    //         title: "Cotton",
    //         image: '/public/assets/cotton-1.webp',
    //         description: "Lorem ipsum dolor sit",
    //         price: 850,
    //     },
    //     {
    //         id: 5,
    //         title: "Cotton",
    //         image: '/public/assets/cotton-1.webp',
    //         description: "Lorem ipsum dolor sit",
    //         price: 850,
    //     },
    //     {
    //         id: 4,
    //         title: "Cotton Well",
    //         image: '/public/assets/cotton-well.webp',
    //         description: "Lorem ipsum dolor sit",
    //         price: 850,
    //     },
    //     {
    //         id: 4,
    //         title: "Cotton Well",
    //         image: '/public/assets/cotton-well.webp',
    //         description: "Lorem ipsum dolor sit",
    //         price: 850,
    //     },
    // ]

    return (
        <div>
            <div className='p-4 mt-10 mb-20'>
                <h1 className='text-3xl font-semibold mt-10 mb-7 ml-60'>{category}</h1>
                <div className='grid grid-cols-4 items-center justify-center mx-56'>
                    {product.map((item) => (
                        <div onClick={() => navigate(`/product-detail/${item.id}`)} className='rounded-xl p-2' key={item.id}>
                            <img className='rounded-xl hover:scale-105 transition-all' src={item.image_url[0]} alt='' width="250" />
                            <p className='mt-2 font-bold'>{item.name}</p>
                            <p className=''>{item.description}</p>
                            <h1 className='font-semibold'>${item.price}</h1>
                            <button className='border p-1 rounded-lg mt-2 text-2xl cursor-pointer hover:bg-stone-50 text-center px-16'><IoCartOutline /></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryProduct