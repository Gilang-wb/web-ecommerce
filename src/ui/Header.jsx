import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { VscAccount } from 'react-icons/vsc'
import { useUser } from '../components/Auth/useUser'
import { useLogout } from '../components/Auth/useLogout'
import { FaRegBell } from 'react-icons/fa'
import { useOrder } from '../components/Order/useOrder'

function Header() {
    const [orderCount, setOrderCount] = useState(0);
    const { user = {}, isAuthenticated } = useUser()
    const { logout } = useLogout()
    const userId = user?.id;
    const { data: orders } = useOrder(userId)
    const navigate = useNavigate() 

    useEffect(() => {
        if (orders) {
            setOrderCount(orders.length); // Update jumlah order
        }
    }, [orders]);

    return (
        <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-10">
            <nav className="flex justify-evenly items-center p-3 mr-20">
                <Link to="/" className="text-4xl font-extrabold">Hype <strong className="text-emerald-600">Mode</strong></Link>
                <Navbar />
                <div className='flex justify-center items-center gap-4'>
                    <div className="flex gap-4 relative">
                        <FaRegBell onClick={() => navigate("/order")} className='text-2xl cursor-pointer' />
                       { orderCount > 0 && <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                            {orderCount}
                        </span>}
                    </div>
                    <button onClick={logout} className="w-28 cursor-pointer flex justify-center items-center gap-2 border-2 p-1 px-4 rounded-full border-indigo-600 hover:bg-indigo-600 hover:bg-gradient-to-tl from-purple-500 hover:text-white transition-all"><VscAccount /> {isAuthenticated ? "Logout" : "Login"}</button>
                </div>
            </nav>
        </div>
    )
}

export default Header