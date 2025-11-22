import React, { use } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { ProductsContext } from "../contaxt/ProductsContext";

export default function Root() {
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
   return (
      <>
         <Nav
            products={products}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setSearchResults={setSearchResults}
         />
         <Outlet />
         <Footer />
      </>
   );
}
