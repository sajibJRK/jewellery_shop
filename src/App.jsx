import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import ProductsCard from "./components/ProductsCard";
import TrendingProduct from "./components/TrendingProduct";
import CategoryNav from "./components/CategoryNav";
import CategoryShowcase from "./components/CategoryShowcase";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";

function App() {
   const [products, setProducts] = useState([]);
   const [SelectCategory, setSelectCategory] = useState("All");
   const [SelectMaterial, setSelectMaterial] = useState("All");
   const [showAll, setshowAll] = useState(false);

   // Search related states
   const [searchTerm, setSearchTerm] = useState("");
   const [searchResults, setSearchResults] = useState([]);

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

   return (
      <>
         <div id="main" className="contaicer mx-auto ">
            {/* Nav with search */}
            <Nav
               products={products}
               searchTerm={searchTerm}
               setSearchTerm={setSearchTerm}
               setSearchResults={setSearchResults}
            />
            <div id="Home">
               <Hero />
            </div>

            <div id="Product" className="w-full">
               {/* Trending section */}
               <div className="text-center my-10">
                  <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_0_3px_rgba(247,206,57,1)] tracking-wide uppercase">
                     Find New-in
                  </h1>
                  <p className="text-lg md:text-2xl text-amber-200 mt-2 font-semibold tracking-wide">
                     Top Trending
                  </p>
               </div>
               <div>
                  <TrendingProduct products={products} />
               </div>

               {/* Best Selling */}
               <div className="text-center my-10">
                  <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_0_3px_rgba(247,206,57,1)] tracking-wide uppercase">
                     Best Selling Collection
                  </h1>
                  <p className="text-lg md:text-2xl text-amber-200 mt-2 font-semibold tracking-wide">
                     Elegance • Crafted • Timeless
                  </p>
               </div>

               {/* Category Filters */}
               <div className="flex gap-2">
                  <CategoryNav
                     category={category}
                     SelectCategory={SelectCategory}
                     setSelectCategory={setSelectCategory}
                     material={material}
                     SelectMaterial={SelectMaterial}
                     setSelectMaterial={setSelectMaterial}
                  />
               </div>

               <div id="Shop">
                  <ProductsCard visibleProduct={visibleProduct} />
               </div>

               <div className="flex justify-center mt-[-15px] mb-2">
                  <button
                     onClick={() => setshowAll(!showAll)}
                     className=" bg-[#f7ce39] text-black py-1 px-2 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                  >
                     {showAll ? "Show Less" : "Show More"}
                  </button>
               </div>
            </div>

            <CategoryShowcase />

            <div>
               <ContactSection/>
            </div>

            <Footer />

            {/* Modal for search results */}
            <dialog id="search_modal" className="modal">
               <div className="modal-box w-[90%] max-w-md bg-[#0F1B2B] border border-amber-400 shadow-[0_0_20px_rgba(247,206,57,0.4)] rounded-md  overflow-hidden">
                  {/* Fixed Top Bar with Close Button */}
                  <div className="sticky top-0 bg-[#0F1B2B] border-b border-amber-400 z-50 flex justify-between items-center px-4 py-3">
                     <h3 className="font-bold text-lg text-amber-300">{`Results for "${searchTerm}"`}</h3>

                     <form method="dialog">
                        <button className="btn btn-sm btn-circle bg-amber-300 text-black hover:bg-amber-400 border-none">
                           ✕
                        </button>
                     </form>
                  </div>

                  {/* Scrollable Results Area */}
                  <div className="max-h-[60vh] overflow-y-auto px-4 py-3">
                     {searchResults.length > 0 ? (
                        <div className="flex flex-col justify-center items-center gap-4">
                           {searchResults.map((item) => (
                              <ProductsCard
                                 key={item.id}
                                 visibleProduct={[item]}
                              />
                           ))}
                        </div>
                     ) : (
                        <p className="text-center text-amber-200 py-5">
                           No results found
                        </p>
                     )}
                  </div>
               </div>
            </dialog>
         </div>
      </>
   );
}

export default App;
