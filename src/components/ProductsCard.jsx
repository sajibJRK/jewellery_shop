import React, { use } from "react";
import Card from "./Card";
import { ProductsContext } from "../contaxt/ProductsContext";

export default function ProductsCard() {
   const {
      products,
      SelectCategory,
      visibleProduct,
      filterdByCategory,
      filterdByMaterial,
      setSelectCategory,
      SelectMaterial,
      setSelectMaterial,
      showAll,
      setshowAll,
      searchTerm,
      setSearchTerm,
      searchResults,
      setSearchResults,
      category,
      material,
      cartItems,
   } = use(ProductsContext);
   return (
      <>
         <div className="px-4 py-4 flex justify-center">
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
               {visibleProduct.map((item) => (
                  <Card key={item.id} item={item} />
               ))}
            </div>
         </div>
         <div className="flex justify-center mt-[-15px] mb-2">
            <button
               onClick={() => setshowAll(!showAll)}
               className=" bg-[#f7ce39] text-black py-1 px-2 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            >
               {showAll ? "Show Less" : "Show More"}
            </button>
         </div>
      </>
   );
}
