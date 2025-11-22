import React, { use, useState } from "react";
import { NavLink } from "react-router";
import { ProductsContext } from "../contaxt/ProductsContext";
import ProductsCard from "./ProductsCard";
import CartSection from "./CartSection";
import { UserContext } from "../contaxt/userContext";

function Nav() {
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
      likeItem,
   } = use(ProductsContext);
   const { user, setUser, login, gest, logout, setgest, userdata, gestdata } =
      use(UserContext);
   const [menuOpen, setMenuOpen] = useState(false);
   const [showSuggestions, setShowSuggestions] = useState(false);
   const [ViewUser, setViewUser] = useState(false);

   // Filter suggestions safely
   const suggestions =
      searchTerm && Array.isArray(products)
         ? products.filter((p) =>
              p.name.toLowerCase().includes(searchTerm.toLowerCase()),
           )
         : [];

   const handleSuggestionClick = (item) => {
      setSearchResults([item]);
      const modal = document.getElementById("search_modal");
      if (modal) modal.showModal();
      setSearchTerm("");
      setShowSuggestions(false);
   };
   const [viewlike, setviewlike] = useState(false);
   return (
      <>
         <div>
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

         <div className="fixed top-0 z-100 w-full bg-[#EEE3D0] text-black shadow-md">
            <div className="flex justify-between items-center m-1 relative px-4 md:px-10 py-2">
               {/* Search Bar */}
               <div className="relative ">
                  <input
                     type="text"
                     placeholder="Search products..."
                     value={searchTerm}
                     onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setShowSuggestions(true);
                     }}
                     onBlur={() =>
                        setTimeout(() => setShowSuggestions(false), 200)
                     }
                     className="w-24 md:w-40 lg:w-50 pl-2 pr-7 py-1 rounded-md border border-gray-600 focus:outline-none focus:shadow-[0_0_5px_rgba(247,206,57,1)] transition-all duration-200"
                  />
                  <button
                     onClick={() => {
                        if (searchTerm.trim() !== "") {
                           setSearchResults(suggestions);
                           const modal =
                              document.getElementById("search_modal");
                           if (modal) modal.showModal();
                        }
                     }}
                     className="absolute right-1 top-1.5 text-black hover:scale-110 transition-transform duration-300"
                  >
                     <i className="fa-solid fa-magnifying-glass"></i>
                  </button>

                  {/* Suggestions Dropdown */}
                  {showSuggestions && suggestions.length > 0 && (
                     <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                        {suggestions.slice(0, 5).map((item) => (
                           <li
                              key={item.id}
                              className="px-3 py-2 hover:bg-amber-200 cursor-pointer"
                              onClick={() => handleSuggestionClick(item)}
                           >
                              {item.name}
                           </li>
                        ))}
                     </ul>
                  )}
               </div>

               {/* Mobile Logo */}
               <div className="block md:hidden w-12">
                  <a href="#">
                     <img
                        src="/image/logo2.png"
                        alt="logo"
                        className="w-full p-0.5 rounded-md bg-gray-800 mx-auto cursor-pointer"
                     />
                  </a>
               </div>

               {/* Desktop Menu */}

               <div className="hidden md:block">
                  <ul className="font-bold flex gap-4 items-center justify-center">
                     <NavLink to="/root">
                        {" "}
                        <li className="hover:bg-gray-100 py-1 px-3 rounded-sm cursor-pointer hover:scale-110 transition-transform duration-300">
                           Home
                        </li>
                     </NavLink>
                     <NavLink to="offers">
                        <li className="hover:bg-gray-100 py-1 px-3 rounded-sm cursor-pointer hover:scale-110 transition-transform duration-300">
                           Offers
                        </li>
                     </NavLink>

                     <NavLink to="/root">
                        <li className="w-20 p-0.5 rounded-md bg-gray-800">
                           <img src="/image/logo2.png" alt="logo" />
                        </li>
                     </NavLink>

                     <NavLink to="customorders">
                        <li className="hover:bg-gray-100 py-1 px-3 rounded-sm cursor-pointer hover:scale-110 transition-transform duration-300">
                           Custom Orders
                        </li>
                     </NavLink>

                     <NavLink to="aboutus">
                        <li className="hover:bg-gray-100 py-1 px-3 rounded-sm cursor-pointer hover:scale-110 transition-transform duration-300">
                           About Us
                        </li>
                     </NavLink>
                  </ul>
               </div>

               {/* Right Icons */}
               {viewlike && (
                  <div className="absolute top-12 right-0 w-48 md:w-64 max-h-36 md:max-h-80 p-1 rounded-md border-2 border-amber-200 overflow-y-scroll overflow-x-hidden bg-black text-gray-50">
                     {likeItem.length > 0 ? (
                        likeItem.map((item, index) => (
                           <div
                              key={index}
                              className="flex gap-1 items-center border border-gray-500 hover:bg-gray-500"
                           >
                              <div className="w-8 p-2 md:w-12 h-8 md:h-12">
                                 <img
                                    className="w-full h-full"
                                    src={item.image}
                                    alt="image"
                                 />
                              </div>
                              <p className="md:text-xl text-nowrap">
                                 {item.name}
                              </p>
                           </div>
                        ))
                     ) : (
                        <div>
                           <p>You haven't added any items yet</p>
                        </div>
                     )}
                  </div>
               )}

               <div className="flex items-center gap-3">
                  <ul className="flex gap-3">
                     <button onClick={() => setViewUser(!ViewUser)}>
                        <li className="hover:bg-gray-100 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300">
                           <div className="w-6 rounded-full">
                              <img
                                 className="w-full rounded-full"
                                 src={
                                    user
                                       ? userdata.image
                                       : gest
                                       ? gestdata.image
                                       : null
                                 }
                                 alt=""
                              />
                           </div>
                        </li>
                     </button>
                     {!user && !gest && (
                        <button
                           className="bg-red-600 text-white py-0.5 px-2 rounded-md"
                           onClick={() => {
                              setUser(null);
                              window.location.replace("/");
                           }}
                        >
                           login
                        </button>
                     )}

                     {ViewUser && (
                        <section>
                           <section className="">
                              {user && (
                                 <div className="absolute bg-gray-500 top-12 rounded-md right-6 w-[180px] border ">
                                    <div>
                                       <div className="w-20 h-20 mx-auto mt-2">
                                          <img
                                             className="w-full h-full rounded-full"
                                             src={userdata.image}
                                             alt=""
                                          />
                                       </div>
                                       <h1 className="text-center font-semibold text-xl">
                                          {userdata.name}
                                       </h1>

                                       <div className="flex justify-around py-3">
                                          <NavLink to="cartsection">
                                             <button className="bg-green-700 cursor-pointer px-2 py-1 rounded-md hover:bg-green-600">
                                                go to cart
                                             </button>
                                          </NavLink>
                                          <button
                                             onClick={() => {
                                                setUser(null);
                                                window.location.replace("/");
                                             }}
                                             className="bg-red-700 cursor-pointer px-2 py-1 rounded-md hover:bg-red-600"
                                          >
                                             Log out
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              )}
                           </section>
                           <section>
                              {gest && (
                                 <div className="absolute bg-gray-500 rounded-md top-12 right-6 w-[180px] border ">
                                    <div>
                                       <div className="w-20 h-20 mx-auto mt-2">
                                          <img
                                             className="w-full h-full rounded-full"
                                             src={gestdata.image}
                                             alt=""
                                          />
                                       </div>
                                       <h1 className="text-center font-semibold text-xl">
                                          gest user
                                       </h1>
                                       <div className="flex justify-around py-3">
                                          <NavLink to="cartsection">
                                             <button className="bg-green-700 cursor-pointer px-1.5 py-1 rounded-md hover:bg-green-600 text-nowrap">
                                                go to cart
                                             </button>
                                          </NavLink>

                                          <button
                                             onClick={() => {
                                                setgest(null);
                                                window.location.replace("/");
                                             }}
                                             className="bg-red-700 cursor-pointer px-1.5 py-1 rounded-md hover:bg-red-600 text-nowrap"
                                          >
                                             please login
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              )}
                           </section>
                           <section>
                              {!user && !gest && (
                                 <div className="absolute rounded-md bg-gray-500 top-12 right-6 w-[180px] border ">
                                    <div>
                                       <div>
                                          <p className="text-center font-bold text-red-700 ">
                                             You’re not logged in
                                          </p>
                                          <NavLink to="/">
                                             <div className="flex justify-center py-3">
                                                <button className="bg-red-700 cursor-pointer  px-2 py-1 rounded-md hover:bg-red-600 text-nowrap">
                                                   login
                                                </button>
                                             </div>
                                          </NavLink>
                                       </div>
                                    </div>
                                 </div>
                              )}
                           </section>
                        </section>
                     )}

                     {(user || gest) && (
                        <div>
                           <li className="hover:bg-gray-100 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300">
                              <button onClick={() => setviewlike(!viewlike)}>
                                 <i className="fa-solid fa-heart"></i>
                              </button>
                           </li>
                        </div>
                     )}

                     <NavLink to={"cartsection"}>
                        {(user || gest) && (
                           <div className="relative">
                              {cartItems.length > 0 && (
                                 <p className="absolute -top-2.5 -right-2.5 z-10 text-white bg-red-500 w-4 h-4 flex justify-center items-center rounded-full font-bold text-md px-0.5">
                                    {cartItems.length}
                                 </p>
                              )}
                              <li className="hover:bg-gray-100 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300">
                                 <i className="fa-solid fa-cart-shopping"></i>
                              </li>
                           </div>
                        )}
                     </NavLink>
                  </ul>
                  {/* {carded && (
                     <div className="absolute top-12 right-5 bg-white shadow-lg p-3 rounded-md w-48">
                        
                          {cartItems.length>0?(
                           <div>
                              {
                                  cartItems.map((item) => (
                                    <div>
                                       <CartSection item={item}/>
                                    </div>
                              ))
                              }
                           </div>
                            ):(
                              <p>
                                 card is empty
                              </p>
                            )
                           
                          }
                        
                     </div>
                  )} */}

                  {/* Mobile menu toggle */}
                  <button
                     className="md:hidden text-2xl ml-2"
                     onClick={() => setMenuOpen(!menuOpen)}
                  >
                     <i
                        className={`fa-solid ${
                           menuOpen ? "fa-xmark" : "fa-bars"
                        }`}
                     ></i>
                  </button>
               </div>

               {/* Mobile Dropdown Menu */}
               {menuOpen && (
                  <div className="absolute top-full right-5 w-40 bg-amber-200 shadow-md rounded-b-md z-50 md:hidden">
                     <ul className="flex flex-col items-center py-3 font-semibold gap-2">
                        <NavLink to="/root">
                           <li className="hover:text-amber-600">Home</li>
                        </NavLink>

                        <NavLink to="aboutus">
                           <li className="hover:text-amber-600">About Us</li>
                        </NavLink>

                        <NavLink to="customorders">
                           <li className="hover:text-amber-600">
                              Custom Orders
                           </li>
                        </NavLink>
                        <NavLink to="offers">
                           <li className="hover:text-amber-600">Offers</li>
                        </NavLink>
                     </ul>
                  </div>
               )}
            </div>
         </div>
      </>
   );
}

export default Nav;
