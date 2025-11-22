import React, { use } from "react";
import Hero from "../components/Hero";
import CategoryShowcase from "../components/CategoryShowcase";
import TrendingProduct from "../components/TrendingProduct";
import CategoryNav from "../components/CategoryNav";
import { ProductsContext } from "../contaxt/ProductsContext";
import ProductsCard from "../components/ProductsCard";
import LiveRates from "../components/LiveRates";
import Login from "../components/Login";
import BuyPage from "../components/BuyPage";
import { UserContext } from "../contaxt/userContext";

export default function Home() {
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
   } = use(ProductsContext);
   const { toast, setToast } = use(UserContext);
   return (
      <>
         {/* Simple toast */}
         {/* Center Toast */}
         {toast.visible && (
            <div
               role="status"
               aria-live="polite"
               className={`
      fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
      z-50 min-w-[260px] rounded-lg px-5 py-4 shadow-xl text-center 
      animate-[fadeInUp_0.4s_ease-out]
      ${toast.type === "success" ? "bg-green-600 text-white" : ""}
      ${toast.type === "error" ? "bg-red-600 text-white" : ""}
      ${toast.type === "warning" ? "bg-yellow-500 text-black" : ""}
      ${toast.type === "info" ? "bg-blue-600 text-white" : ""}
    `}
            >
               <div className="font-semibold text-lg">{toast.text}</div>
            </div>
         )}

         <Hero></Hero>
         <TrendingProduct products={products} />
         <LiveRates />
         <BuyPage />
         <CategoryNav
            category={category}
            SelectCategory={SelectCategory}
            setSelectCategory={setSelectCategory}
            material={material}
            SelectMaterial={SelectMaterial}
            setSelectMaterial={setSelectMaterial}
         />

         <ProductsCard visibleProduct={visibleProduct} />
         <CategoryShowcase />
      </>
   );
}
