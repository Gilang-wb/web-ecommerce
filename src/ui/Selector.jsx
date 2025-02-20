import { useState } from "react";

function Selector({ size = [], variation = [], setSelectedColor, setSelectedSize, selectedSize, selectedColor }) {

  const sizes = ["38", "39", "40", "41", "42", "43"];
  const colors = [
    { name: "Hitam", code: "#000000" },
    { name: "Putih", code: "#FFFFFF" },
    { name: "Merah", code: "#FF0000" },
    { name: "Biru", code: "#0000FF" },
    { name: "Hijau", code: "#008000" }
  ];

  // const colors = [
  //   { name: "Hitam", image: '/public/assets/nike-product-1.webp' },
  //   { name: "Putih", image: '/public/assets/nike-product-1.webp' },
  //   { name: "Merah", image: '/public/assets/nike-product-1.webp' },
  //   { name: "Biru", image: '/public/assets/nike-product-1.webp' },
  //   { name: "Hijau", image: '/public/assets/nike-product-1.webp' }
  // ];

  return (
    <div className="flex mt-32 flex-col gap-4">
      <div>
        <label className="text-lg font-medium">Choose Size:</label>
        <div className="flex gap-2 mt-2">
          {size.map((size) => (
            <button
              key={size}
              className={`px-4 py-2 border rounded-lg transition-all cursor-pointer ${selectedSize === size ? 'bg-black text-white' : 'bg-white text-black'}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* <div>
        <label className="text-lg font-medium">Variation:</label>
        <div className="flex gap-2 mt-2">
          {variation.map((variation) => (
            <button
              key={variation}
              className={`w-16 rounded-lg border-2 transition-all cursor-pointer ${selectedColor === variation ? 'border-black' : 'border-transparent'}`}
              onClick={() => setSelectedColor(variation)}
            >
              <img src={variation} alt={variation} className="w-full h-full object-cover rounded-lg" />
            </button>
          ))}
        </div>
      </div> */}

      <div>
        <label className="text-lg font-medium">Pilih Warna:</label>
        <div className="flex gap-2 mt-2">
          {colors.map((color) => (
            <button
              key={color.name}
              className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor === color.name ? 'border-black' : 'border-transparent'}`}
              style={{ backgroundColor: color.code }}
              onClick={() => setSelectedColor(color.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Selector
