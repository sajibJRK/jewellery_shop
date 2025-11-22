import React, { useState, useEffect, use } from "react";
import { BuypageContext } from "../contaxt/BuypageContext";

export default function BuyPage() {
   const { OpenBuy, setOpenBuy, BuyItem, setBuyItem } = use(BuypageContext);
   const [fullName, setFullName] = useState("");
   const [phone, setPhone] = useState("");
   const [address, setAddress] = useState("");
   const [paymentMethod, setPaymentMethod] = useState("Credit Card");
   const [showModal, setShowModal] = useState(false);

   useEffect(() => {
      if (OpenBuy) {
         setShowModal(true);
      }
   }, [OpenBuy]);

   if (!OpenBuy) return null;

   const handleBuy = () => {
      alert(
         `Order placed for ${BuyItem.name}!\nName: ${fullName}\nPhone: ${phone}\nAddress: ${address}\nPayment: ${paymentMethod}`,
      );
      setOpenBuy(false);
      setBuyItem({});
      setFullName("");
      setPhone("");
      setAddress("");
      setPaymentMethod("Credit Card");
   };

   return (
      <div className="fixed inset-0 z-50 md:mt-14 flex items-center justify-center bg-black/60 p-4 overflow-scroll">
         {/* Close button */}
         <div className="fixed top-14 xl:top-24 right-2 xl:right-72 z-50">
            <button
               className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 w-9 h-9 rounded-full p-1 text-gray-500  font-bold text-lg md:text-xl"
               onClick={() => {
                  setOpenBuy(false);
                  setBuyItem({});
               }}
            >
               ×
            </button>
         </div>
         <div
            className={`bg-gray-600 h-[400px] md:h-[500px] w-full max-w-4xl rounded-xl shadow-2xl  flex flex-col md:flex-row transform transition-all duration-300 ease-in-out ${
               showModal ? "opacity-100 scale-100" : "opacity-0 scale-95"
            } max-h-[90vh]`}
         >
            {/* Product Image Info */}
            <div className="md:w-1/2 bg-gray-600 rounded-t-md p-6 flex flex-col items-center justify-center gap-4 ">
               <img
                  src={BuyItem.image}
                  alt={BuyItem.name}
                  className="w-48 h-48 p-3 bg-[#033670] md:w-64 md:h-64 object-contain rounded-lg shadow-lg"
               />
               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                  {BuyItem.name}
               </h2>
               <p className="text-gray-900">Material: {BuyItem.material}</p>
               <p className="text-gray-900">Karat: {BuyItem.karat}</p>
               <p className="text-gray-900">Category: {BuyItem.category}</p>
               <p className="text-[#FF0000] font-extrabold text-xl md:text-2xl">
                  Cost:{BuyItem.price}tk
               </p>
            </div>

            {/* Checkout Form */}
            <div className="md:w-1/2 p-6 bg-gray-600 flex flex-col gap-4 relative">
               <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  Delivery Information
               </h3>

               <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm md:text-base"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
               />

               <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm md:text-base"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
               />

               <input
                  type="text"
                  placeholder="Address"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm md:text-base"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
               />

               <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-4">
                  Payment Method
               </h3>
               <select
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm md:text-base"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
               >
                  <option value="Credit Card">Credit Card</option>
                  <option value="Cash on Delivery">Cash on Delivery</option>
                  <option value="bKash">bKash</option>
                  <option value="Nagad">Nagad</option>
               </select>

               <button
                  className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-md transition-all duration-200 text-sm md:text-base"
                  onClick={handleBuy}
               >
                  Place Order
               </button>
            </div>
         </div>
      </div>
   );
}
