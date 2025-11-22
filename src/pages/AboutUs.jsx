import React from "react";
import { GiInfinity } from "react-icons/gi";
import { IoHammer, IoShieldCheckmarkOutline } from "react-icons/io5";
import ContactSection from "../components/ContactSection";

export default function AboutUs() {
   return (
      <>
         {/* Header */}
         <div className="w-full max-w-[1430px] h-[250px] sm:h-[400px] md:h-[550px] xl:h-[700px] mx-auto pt-12 rounded-lg ">
            <img
               className=" w-full h-full rounded-lg object-cover"
               src="https://i.ibb.co.com/HLr8Fgz9/hero.jpg"
               alt=""
            />
         </div>
         <div className="w-full py-2  space-y-2 ">
            <div className="  mx-auto space-y-4">
               {/* Three Feature Cards */}
               <div className="grid md:grid-cols-3 gap-10">
                  {/* Card 1 */}
                  <div className="bg-[#033670] rounded-2xl shadow-lg p-8 text-center border-2 border-yellow-300 hover:shadow-2xl transition">
                     <div className=" flex justify-center items-center w-16 h-16 text-4xl bg-yellow-300 rounded-full mx-auto mb-4 shadow-[0_0_2px_gold]">
                        <p className=" ">
                           <IoHammer />
                        </p>
                     </div>
                     <h3 className="text-xl font-semibold mb-2 text-yellow-200 drop-shadow-[0_0_1px_gold]">
                        Handcrafted Luxury
                     </h3>
                     <p className="text-yellow-100">
                        Every jewellery piece is crafted by master artisans
                        ensuring precision and elegance in every detail.
                     </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-[#033670] rounded-2xl shadow-lg p-8 text-center border-2 border-yellow-300 hover:shadow-2xl transition">
                     <div className=" flex justify-center items-center w-16 h-16 text-4xl bg-yellow-300 rounded-full mx-auto mb-4 shadow-[0_0_2px_gold]">
                        <p className=" ">
                           <IoShieldCheckmarkOutline />
                        </p>
                     </div>
                     <h3 className="text-xl font-semibold mb-2 text-yellow-200 drop-shadow-[0_0_1px_gold]">
                        Assured Purity
                     </h3>
                     <p className="text-yellow-100">
                        Our gold is certified for purity and quality, ensuring
                        complete transparency and trust.
                     </p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-[#033670] rounded-2xl shadow-lg p-8 text-center border-2 border-yellow-300 hover:shadow-2xl transition">
                     <div className=" flex justify-center items-center w-16 h-16 text-4xl bg-yellow-300 rounded-full mx-auto mb-4 shadow-[0_0_2px_gold]">
                        <p className=" ">
                           <GiInfinity />
                        </p>
                     </div>
                     <h3 className="text-xl font-semibold mb-2 text-yellow-200 drop-shadow-[0_0_1px_gold]">
                        Timeless Design
                     </h3>
                     <p className="text-yellow-100">
                        We blend tradition with modern aesthetics to create
                        jewellery that stands out everywhere.
                     </p>
                  </div>
               </div>

               {/* Mission Section */}
               <div className="bg-[#033670] rounded-2xl shadow-lg p-10 border-2 border-yellow-300">
                  <h2 className="text-center text-3xl font-bold text-yellow-300 drop-shadow-[0_0_1px_gold] mb-4">
                     Our Mission
                  </h2>
                  <p className="text-yellow-100 text-lg leading-relaxed">
                     To deliver premium-quality jewellery crafted with passion,
                     ensuring an exceptional and trustworthy shopping experience
                     for every customer.
                  </p>
               </div>

               {/* Vision Section */}
               <div className="bg-[#033670] rounded-2xl shadow-lg p-10 border-2 border-yellow-300">
                  <h2 className="text-center text-3xl font-bold text-yellow-300 drop-shadow-[0_0_1px_gold] mb-4">
                     Our Vision
                  </h2>
                  <p className="text-yellow-100 text-lg leading-relaxed">
                     To become Bangladesh’s leading luxury gold jewellery brand,
                     representing purity, design excellence, and unmatched
                     elegance.
                  </p>
               </div>

               {/* Brand Values */}
               <div className="bg-[#033670] rounded-2xl shadow-lg p-10 border-2 border-yellow-300">
                  <h2 className="text-center text-3xl font-bold text-yellow-300 drop-shadow-[0_0_1px_gold] mb-10">
                     Our Brand Values
                  </h2>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-800">
                     <li className="bg-yellow-50 rounded-xl p-4 shadow">
                        Trust
                     </li>
                     <li className="bg-yellow-50 rounded-xl p-4 shadow">
                        Quality
                     </li>
                     <li className="bg-yellow-50 rounded-xl p-4 shadow">
                        Transparency
                     </li>
                     <li className="bg-yellow-50 rounded-xl p-4 shadow">
                        Modern Aesthetics
                     </li>
                     <li className="bg-yellow-50 rounded-xl p-4 shadow">
                        Customer Happiness
                     </li>
                  </ul>
               </div>
            </div>
            <div className="md:px-10">
               <ContactSection />
            </div>
         </div>
      </>
   );
}
