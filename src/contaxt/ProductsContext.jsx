import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
   // ✅ Destructure children properly

   const [products, setProducts] = useState([]);
   const [SelectCategory, setSelectCategory] = useState("All");
   const [SelectMaterial, setSelectMaterial] = useState("All");
   const [showAll, setshowAll] = useState(false);

   // Search related states
   const [searchTerm, setSearchTerm] = useState("");
   const [searchResults, setSearchResults] = useState([]);

   // custom data related
   const [CustomData, setCustomData] = useState({});
   const [loading, setLoading] = useState(true);

   // data fetch section
   //  customData.json
   useEffect(() => {
      fetch("/Custom.json")
         .then((res) => res.json())
         .then((data) => {
            setCustomData(data);
            setLoading(false);
         });
   }, []);

   // products.json
   useEffect(() => {
      fetch("/Products.json")
         .then((res) => res.json())
         .then((Data) => setProducts(Data))
         .catch(() => console.log("Products JSON load failed"));
   }, []);

   const category = ["All", ...new Set(products.map((p) => p.category))];
   const material = ["All", ...new Set(products.map((m) => m.material))];

   const filterdByCategory =
      SelectCategory === "All"
         ? products
         : products.filter((p) => p.category === SelectCategory);

   const filterdByMaterial =
      SelectMaterial === "All"
         ? filterdByCategory
         : filterdByCategory.filter((m) => m.material === SelectMaterial);

   const visibleProduct = showAll
      ? filterdByMaterial
      : filterdByMaterial.slice(0, 8);

   // add to card
   const [cartItems, setCartItems] = useState([]);
   const [likeItem, setlikeItem] = useState([]);

   const value = {
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

      // custom data
      CustomData,
      loading,

      //add to card section
      cartItems,
      setCartItems,
      //like item
      likeItem,
      setlikeItem,
   };

   return (
      <ProductsContext.Provider value={value}>
         {children}
      </ProductsContext.Provider>
   );
};

export default ProductsProvider;
