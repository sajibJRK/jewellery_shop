import React, { use, useState } from "react";
import { ProductsContext } from "../contaxt/ProductsContext";
import { BuypageContext } from "../contaxt/BuypageContext";
import { IoHeart } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import BuyPage from "../components/BuyPage";

export default function Offers() {
   const { products, setCartItems, setlikeItem } = use(ProductsContext);
   const { OpenBuy, setOpenBuy, BuyItem, setBuyItem } = use(BuypageContext);

   // Favorites and Cart states outside map
   const [favourites, setFavourites] = useState({});
   const [cartStates, setCartStates] = useState({});

   const toggleFavourite = (item) => {
      setFavourites((prev) => ({
         ...prev,
         [item.id]: !prev[item.id],
      }));

      setlikeItem((prev) => {
         if (prev.find((i) => i.id === item.id)) {
            return prev.filter((i) => i.id !== item.id);
         } else {
            return [...prev, item];
         }
      });
   };

   const toggleCart = (item) => {
      setCartStates((prev) => ({
         ...prev,
         [item.id]: !prev[item.id],
      }));

      setCartItems((prev) => {
         if (prev.find((i) => i.id === item.id)) {
            return prev.filter((i) => i.id !== item.id);
         } else {
            return [...prev, item];
         }
      });
   };

   return (
      <div className="pt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
         {products.map((item) => {
            const discount = item.price > 50000 ? 10 : 20; // 10% or 20%
            const discountedPrice = Math.floor(
               item.price - (item.price * discount) / 100,
            );

            const isFav = favourites[item.id] || false;
            const isInCart = cartStates[item.id] || false;

            return (
               <div
                  key={item.id}
                  className="relative group bg-linear-to-b from-[#0F1B2B] to-[#1C2A3B] border border-amber-400 rounded-xl w-[230px] md:w-[300px] h-[400px] mx-auto my-6 text-center shadow-[0_0_5px_rgba(247,206,57,0.4)] hover:shadow-[0_0_20px_rgba(247,206,57,0.8)] transition-all hover:-translate-y-3 duration-700"
               >
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-md font-semibold text-sm shadow-md">
                     {discount}% OFF
                  </div>

                  {/* Favorite & Cart Buttons */}
                  <div className="absolute top-8 right-8 flex flex-col gap-2 text-md group-hover:scale-150 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-7 transition-all duration-500">
                     <button
                        onClick={() => toggleFavourite(item)}
                        className={`transition-all duration-300 hover:scale-125 ${
                           isFav ? "text-[#FF4D67]" : "text-[#F7CE39]"
                        }`}
                     >
                        <IoHeart />
                     </button>

                     <button
                        onClick={() => toggleCart(item)}
                        className={`transition-all duration-300 hover:scale-125 ${
                           isInCart ? "text-green-500" : "text-[#F7CE39]"
                        }`}
                     >
                        <FaShoppingCart />
                     </button>
                  </div>

                  {/* Product Image */}
                  <div className="w-[150px] h-[150px] mx-auto mt-6 mb-3">
                     <img
                        className="w-full h-full object-contain"
                        src={item.image}
                        alt={item.name}
                     />
                  </div>

                  <h2 className="font-semibold text-xl text-[#F7CE39] tracking-wide mb-1 drop-shadow-[0_0_1px_#F7CE39]">
                     {item.name}
                  </h2>

                  {/* Material & Karat */}
                  <p className="text-sm text-[#F7CE39] mb-2">
                     {item.material} • {item.karat}
                  </p>

                  {/* Price Section */}
                  <div className="mb-3">
                     <p className="text-gray-400 line-through text-md">
                        {item.price} Tk
                     </p>
                     <p className="font-bold text-2xl text-[#F7CE39] drop-shadow-[0_0_1px_#F7CE39]">
                        {discountedPrice} Tk
                     </p>
                  </div>

                  {/* BUY NOW Button */}
                  <button
                     className="mt-1 bg-[#F7CE39] text-[#1C1C1C] py-2 px-5 rounded-lg cursor-pointer hover:scale-110 hover:shadow-[0_0_12px_rgba(247,206,57,0.6)] transition-all duration-300"
                     onClick={() => {
                        setBuyItem(item);
                        setOpenBuy(true);
                     }}
                  >
                     BUY NOW
                  </button>
                  <BuyPage />
               </div>
            );
         })}
      </div>
   );
}
