import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";

export default function Card({ item }) {
   const [favourite, setFavourite] = useState(false);
   const [ AddToCart , setAddToCart] = useState(false)

   return (
      <div
         id={`"${item.id}"`}
         className="relative group bg-linear-to-b from-[#0F1B2B] to-[#1C2A3B] border border-amber-400 rounded-xl w-[230px] md:w-[300px] h-[380px] my-6 text-center  shadow-[0_0_5px_rgba(247,206,57,0.4)] hover:shadow-[0_0_20px_rgba(247,206,57,0.8)]  transition-all hover:-translate-y-3 duration-700 "
      >
         {/* Favorite & Cart Buttons */}
         <div className="absolute top-8 right-8 flex flex-col gap-2 text-md group-hover:scale-150 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-7 transition-all duration-500">
            <button
               onClick={() => setFavourite(!favourite)}
               className={`transition-all duration-300 hover:scale-125 ${
                  favourite?
                      "text-[#FF4D67] "
                     : "text-[#F7CE39] "
               }`}
            >
               <IoHeart />
            </button>
            <button onClick={()=> setAddToCart(!AddToCart)} className={`transition-all duration-300 hover:scale-125
               ${AddToCart ? "text-green-500" :"text-[#F7CE39] "}`}>
               <FaShoppingCart />
            </button>
         </div>

         {/* Product Image */}
         <div className="w-[150px] h-[150px] mx-auto mt-6 mb-3">
            <img
               className="w-full h-full object-contain ]"
               src={item.image}
               alt={item.name}
            />
         </div>

         <h2 className="font-semibold text-xl text-[#F7CE39] tracking-wide mb-1 drop-shadow-[0_0_2px_#F7CE39]">
            {item.name}
         </h2>

         {/* Material & Karat */}
         <p className="text-sm text-[#F7CE39] mb-2">
            {item.material} • {item.karat}
         </p>

         {/* Price */}
         <p className="font-semibold text-lg text-[#F7CE39] mb-3 drop-shadow-[0_0_1px_#F7CE39]">
            {item.price}Tk
         </p>

         {/* Shop Now Button */}
         <button className="mt-1 bg-[#F7CE39] text-[#1C1C1C] py-2 px-5 rounded-lg cursor-pointer hover:scale-110 hover:shadow-[0_0_12px_rgba(247,206,57,0.6)] transition-all duration-300">
            BUY NOW
         </button>
      </div>
   );
}
