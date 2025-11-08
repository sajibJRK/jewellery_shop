import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function CategoryNav({
   category,
   SelectCategory,
   setSelectCategory,
   material,
   SelectMaterial,
   setSelectMaterial,
}) {
   const [openCategory, setOpenCategory] = useState(false);
   const [openMaterial, setOpenMaterial] = useState(false);

   return (
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 py-6 justify-center">
         {/* Category Dropdown */}
         <div className="relative">
            <button
               onClick={() => setOpenCategory(!openCategory)}
               className="flex items-center gap-2 bg-[#1c2a3b] border border-amber-400 text-amber-300 px-4 py-2 rounded-full hover:bg-amber-300 hover:text-gray-900 transition-all duration-300"
            >
               {SelectCategory || "Select Category"}
               <FaChevronDown
                  className={`transition-transform ${
                     openCategory ? "rotate-180" : "rotate-0"
                  }`}
               />
            </button>

            {openCategory && (
               <div className="absolute mt-2 w-48 bg-[#0f1b2b] border border-amber-400 rounded-xl shadow-lg overflow-hidden z-50 animate-fadeIn">
                  {category.map((catename) => (
                     <div
                        key={catename}
                        onClick={() => {
                           setSelectCategory(catename);
                           setOpenCategory(false);
                        }}
                        className={`px-4 py-2 cursor-pointer hover:bg-amber-300 hover:text-gray-900 transition-all 
                  ${
                     SelectCategory === catename
                        ? "bg-amber-400 text-black"
                        : "text-amber-300"
                  }
                `}
                     >
                        {catename}
                     </div>
                  ))}
               </div>
            )}
         </div>

         {/* Material Dropdown */}
         <div className="relative">
            <button
               onClick={() => setOpenMaterial(!openMaterial)}
               className="flex items-center gap-2 bg-[#1c2a3b] border border-amber-400 text-amber-300 px-4 py-2 rounded-full hover:bg-amber-300 hover:text-gray-900 transition-all duration-300"
            >
               {SelectMaterial || "Select Material"}
               <FaChevronDown
                  className={`transition-transform ${
                     openMaterial ? "rotate-180" : "rotate-0"
                  }`}
               />
            </button>

            {openMaterial && (
               <div className="absolute mt-2 w-48 bg-[#0f1b2b] border border-amber-400 rounded-xl shadow-lg overflow-hidden z-50 animate-fadeIn">
                  {material.map((mateName) => (
                     <div
                        key={mateName}
                        onClick={() => {
                           setSelectMaterial(mateName);
                           setOpenMaterial(false);
                        }}
                        className={`px-4 py-2 cursor-pointer hover:bg-amber-300 hover:text-gray-900 transition-all 
                  ${
                     SelectMaterial === mateName
                        ? "bg-amber-400 text-black"
                        : "text-amber-300"
                  }
                `}
                     >
                        {mateName}
                     </div>
                  ))}
               </div>
            )}
         </div>
      </div>
   );
}
