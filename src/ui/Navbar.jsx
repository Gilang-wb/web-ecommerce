import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="flex justify-center items-center gap-8 font-semibold mx-20 text-lg">
            <Link className="cursor-pointer px-4 py-2 transition duration-300 text-gray-600 border-b-2 border-transparent hover:text-emerald-600 hover:border-emerald-600 focus:text-emerald-600" to="/">Home</Link>
            <Link className="cursor-pointer px-4 py-2 transition duration-300 text-gray-600 border-b-2 border-transparent hover:text-emerald-600 hover:border-emerald-600 focus:text-emerald-600" to="/product/Men">Man</Link>
            <Link className="cursor-pointer px-4 py-2 transition duration-300 text-gray-600 border-b-2 border-transparent hover:text-emerald-600 hover:border-emerald-600 focus:text-emerald-600" to="/product/Women">Woman</Link>
            <Link className="cursor-pointer px-4 py-2 transition duration-300 text-gray-600 border-b-2 border-transparent hover:text-emerald-600 hover:border-emerald-600 focus:text-emerald-600" to="/cart">Cart</Link>
        </div>
    )
}

export default Navbar