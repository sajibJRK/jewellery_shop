import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";

export default function TrendingCard({ item }) {
   const [favourite, setFavourite] = useState(false);

   return (
      <div className="relative group bg-linear-to-b from-[#FFF8E7] to-[#FDF1D5] rounded-xl w-[250px] h-[360px] my-6 text-center  shadow-[0_0_8px_rgba(247,206,57,1)] transition-all duration-500 overflow-hidden">
         {/* Action Buttons */}
         <div className="absolute top-4 right-4 flex flex-col gap-2 text-lg opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-2 transition-all duration-500">
            <button
               onClick={() => setFavourite(!favourite)}
               className={`transition-all duration-300 hover:scale-125 ${
                  favourite
                     ? "text-[#FF4D67] drop-shadow-[0_0_6px_#FF4D67]"
                     : "text-[#4B3F2F]"
               }`}
            >
               <IoHeart />
            </button>
            <button className="text-[#4B3F2F] hover:text-[#F7CE39] hover:scale-125 transition-transform duration-300">
               <FaShoppingCart />
            </button>
         </div>

         {/* Image */}
         <div className="w-[150px] h-[150px] mx-auto mt-6 mb-3">
            <img
               className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(247,206,57,0.4)]"
               src={item.image}
               alt={item.name}
            />
         </div>

         {/* Product Name */}
         <h2 className="font-semibold text-xl text-[#F7CE39] tracking-wide mb-1">
            {item.name}
         </h2>

         {/* Material & Karat */}
         <p className="text-sm text-[#4B3F2F] mb-2">
            {item.material} • {item.karat}
         </p>

         {/* Price */}
         <p className="font-semibold text-lg text-[#4B3F2F] mb-3">
            {item.price}Tk
         </p>

         {/* Shop Button */}
         <a href={`#${item.id}`}>
            <button className="mt-1 bg-[#F7CE39] text-[#4B3F2F] py-2 px-5 rounded-lg cursor-pointer hover:scale-110 hover:shadow-[0_0_12px_rgba(247,206,57,0.5)] transition-all duration-300">
               SHOP NOW
            </button>
         </a>
      </div>
   );
}
