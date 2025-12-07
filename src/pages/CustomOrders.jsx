import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../contaxt/ProductsContext";
import LiveRates from "../components/LiveRates";

export default function CustomOrders() {
   const { CustomData, loading } = useContext(ProductsContext);

   // ------------- PRICE TABLE -------------
   const metalRates = {
      Gold: 7000,
      "White Gold": 8500,
      Silver: 120,
      Platinum: 15000,
   };

   const gemstoneRates = {
      Diamond: 5000,
      Ruby: 1500,
   };

   const designRates = {
      Necklace: 3000,
      Ring: 1500,
      Earrings: 1200,
      Bangle: 2500,
   };

   // ------------ STATES --------------
   const [material, setMaterial] = useState("");
   const [gemstone, setGemstone] = useState("");
   const [designType, setDesignType] = useState("");
   const [weight, setWeight] = useState("");
   const [stoneCost, setStoneCost] = useState("");

   // Set default values

   useEffect(() => {
      if (!CustomData || !CustomData.formFields) return;
      setMaterial(CustomData.formFields.material[0] || "");
      setGemstone(CustomData.formFields.gemstone[0] || "");
      setDesignType(CustomData.formFields.designType[0] || "");
   }, [CustomData]);

   if (!CustomData || !CustomData.formFields)
      return <p className="text-center py-10">Loading...</p>;
   // ------------ TOTAL PRICE CALC --------------
   const totalAmount = (() => {
      const w = Number(weight) || 0;
      const sCost = Number(stoneCost) || 0;

      const metalPrice = metalRates[material] || 0;
      const gemPrice = gemstoneRates[gemstone] || 0;
      const designPrice = designRates[designType] || 0;

      return (w * metalPrice + gemPrice + designPrice + sCost).toFixed(2);
   })();

   return (
      <section className="w-full my-10 bg-[#033670] py-16 px-4 md:px-12 lg:px-20">
         <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-5xl text-yellow-100 font-bold drop-shadow-[0_0_3px_rgba(247,206,57,1)] mb-3">
                  {CustomData.title} / কাস্টম ডিজাইন
               </h2>
               <p className="text-gray-200 text-xl font-semibold max-w-2xl mx-auto">
                  {CustomData.description}
               </p>
            </div>
            <LiveRates />
            {/* Calculator + Form */}
            <div className="bg-[#033670] rounded-3xl drop-shadow-[0_0_3px_rgba(247,206,57,1)] p-10 mb-16 border border-gray-200">
               <h3 className="text-2xl text-center mb-8 font-bold text-yellow-300">
                  Custom Jewelry Order Form
               </h3>

               <form className="space-y-6">
                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <input
                        type="text"
                        placeholder="Full Name"
                        className="border text-yellow-500 border-gray-300 rounded-xl px-4 py-3"
                     />
                     <input
                        type="number"
                        placeholder="Phone Number"
                        className="border text-yellow-500 border-gray-300 rounded-xl px-4 py-3"
                     />
                  </div>

                  {/* Material + Gemstone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <select
                        value={material}
                        onChange={(e) => setMaterial(e.target.value)}
                        className="border border-yellow-400 rounded-xl px-4 py-3 bg-yellow-50 text-black"
                     >
                        {CustomData.formFields.material.map((m, i) => (
                           <option key={i}>{m}</option>
                        ))}
                     </select>

                     <select
                        value={gemstone}
                        onChange={(e) => setGemstone(e.target.value)}
                        className="border border-yellow-400 rounded-xl px-4 py-3 bg-yellow-50 text-black"
                     >
                        {CustomData.formFields.gemstone.map((g, i) => (
                           <option key={i}>{g}</option>
                        ))}
                     </select>
                  </div>

                  {/* Design + Weight */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <select
                        value={designType}
                        onChange={(e) => setDesignType(e.target.value)}
                        className="border border-yellow-400 rounded-xl px-4 py-3 bg-yellow-50 text-black"
                     >
                        {CustomData.formFields.designType.map((d, i) => (
                           <option key={i}>{d}</option>
                        ))}
                     </select>

                     <input
                        type="number"
                        placeholder="Weight (grams)"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="border border-gray-300 rounded-xl px-4 py-3"
                     />
                  </div>

                  {/* Extra Stone Cost */}
                  <input
                     type="number"
                     placeholder="Extra Stone Cost (optional)"
                     value={stoneCost}
                     onChange={(e) => setStoneCost(e.target.value)}
                     className="border border-gray-300 rounded-xl px-4 py-3 w-full"
                  />

                  {/* Notes */}
                  <textarea
                     rows="4"
                     placeholder="Design Details"
                     className="border border-gray-300 text-yellow-500 rounded-xl px-4 py-3 w-full"
                  />

                  {/* Price Display */}
                  {(weight || stoneCost) && (
                     <p className="text-center text-xl font-bold text-yellow-200 mt-4">
                        Total Payable Amount:
                        <span className="text-yellow-400">
                           {" "}
                           ৳ {totalAmount}
                        </span>
                     </p>
                  )}

                  <button
                     onClick={() => alert("Order Success")}
                     className="w-full bg-yellow-500 text-white py-3 rounded-2xl font-semibold text-lg"
                  >
                     Submit Custom Order
                  </button>
               </form>
            </div>

            {/* Previous Designs */}
            <h3 className="text-2xl font-bold text-yellow-300 mb-8 text-center">
               Previous Custom Designs / পূর্বের কাস্টম ডিজাইন
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
               {CustomData.examples.map((ex) => (
                  <div
                     key={ex.id}
                     className="bg-white rounded-3xl shadow-lg p-5 border"
                  >
                     <div
                        className="w-full h-56 rounded-2xl mb-4"
                        style={{
                           backgroundImage: `url(${ex.image})`,
                           backgroundSize: "cover",
                           backgroundPosition: "center",
                        }}
                     ></div>
                     <h4 className="font-semibold text-gray-900 text-lg">
                        {ex.name}
                     </h4>
                     <p className="text-gray-700 text-sm mt-1">
                        Material: {ex.material} | Gemstone: {ex.gemstone}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
