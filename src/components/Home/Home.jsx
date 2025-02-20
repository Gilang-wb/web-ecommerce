import React from 'react'
import OurNewProduct from './OurNewProduct'
import HighlightFilter from '../Product/HighlightFilter'
import Footer from '../../ui/Footer'
import { useProduct } from '../Product/useProduct'
import Loading from '../../ui/Loading'


function Home() {
    return (
        <div className=''>
            <div className="flex justify-evenly gap-32 items-center p-5 pt-24 pb-24 relative">
                <div className='mt-16'>
                    <p className="max-w-screen-sm text-6xl font-bold">Everything You Need, All in One Place!</p>
                    <p className="text-2xl max-w-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere et</p>
                </div>
                    <img className="rounded-lg absolute ml-[35%] mt-28" src="/public/assets/cotton-1.webp" alt="Logo" width="300" />
                    <img className="rounded-lg" src="/public/assets/cotton-2.webp" alt="Logo" width="300" />
            </div>
            {/* <HighlightFilter /> */}
            <OurNewProduct />
            <Footer />
        </div>
    )
}

export default Home
