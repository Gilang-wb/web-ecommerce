import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Banner() {

    const product = [
        {
            id: 1,
            title: "Hush Puppie",
            image: '/public/assets/hush-puppie.webp',
            description: "Lorem ipsum dolor sit",
            price: 850,
        },
        {
            id: 2,
            title: "Converse",
            image: '/public/assets/converse.webp',
            description: "Lorem ipsum dolor sit",
            price: 850,
        },
        {
            id: 3,
            title: "Nike",
            image: '/public/assets/cotton-1.webp',
            description: "Lorem ipsum dolor sit",
            price: 850,
        },
        {
            id: 4,
            title: "Cotton Well",
            image: '/public/assets/cotton-well.webp',
            description: "Lorem ipsum dolor sit",
            price: 850,
        },
        {
            id: 5,
            title: "Cotton",
            image: '/public/assets/cotton-1.webp',
            description: "Lorem ipsum dolor sit",
            price: 850,
        },
    ]

    const navigate = useNavigate()

    // return (
    //     <div className="flex justify-center items-center mt-32">
    //         <div className="bg-slate-300 py-36 p-20 rounded-3xl absolute mr-[30%]">
    //             <p className="text-3xl">Experience Luxury & Comfort</p>
    //             <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere et</p>
    //         </div>
    //         <img className="rounded-3xl ml-[40%]" src="public/images/cabin-008.jpg" alt="Logo" width="520" />
    //     </div>
    // )

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % product.length); // Mengubah index setiap 3 detik
        }, 3000);
        return () => clearInterval(interval); // Membersihkan interval saat komponen dibersihkan
    }, []);

    return (
        <div className="relative rounded-2xl w-full max-w-6xl mx-auto overflow-hidden mt-32">
            {/* Slider Wrapper */}
            <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {product.map((item) => (
                    <div
                        className={`flex-shrink-0 w-full cursor-pointer relative flex items-center justify-center text-center`} key={item.id}
                    >
                        <div className="flex justify-center items-center w-full">
                            <div className="flex gap-20  justify-center items-center bg-slate-500 text-white p-10 w-full">
                                <div className="">
                                    <p className="text-4xl font-bold mb-9">{item.title}</p>
                                    <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere et</p>
                                </div>
                                <img className="rounded-3xl" src={item.image} alt="Logo" width="220" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full"
                disabled={currentIndex === 0}

            >
                ◀
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                disabled={currentIndex === product.length - 1}
            >
                ▶
            </button>
        </div>
    );
}

export default Banner