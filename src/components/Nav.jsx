import React, { useState } from "react";

function Nav({ products = [], searchTerm, setSearchTerm, setSearchResults }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filter suggestions safely
  const suggestions =
    searchTerm && Array.isArray(products)
      ? products.filter((p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

  const handleSuggestionClick = (item) => {
    setSearchResults([item]);
    const modal = document.getElementById("search_modal");
    if (modal) modal.showModal();
    setSearchTerm("");
    setShowSuggestions(false);
  };

  return (
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
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className="w-24 md:w-40 lg:w-50 pl-2 pr-7 py-1 rounded-md border border-gray-600 focus:outline-none focus:shadow-[0_0_5px_rgba(247,206,57,1)] transition-all duration-200"
          />
          <button
            onClick={() => {
              if (searchTerm.trim() !== "") {
                setSearchResults(suggestions);
                const modal = document.getElementById("search_modal");
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
            <li className="hover:bg-gray-100 py-1 px-3 rounded-sm cursor-pointer hover:scale-110 transition-transform duration-300">
              <a href="#Home">Home</a>
            </li>
            <li className="hover:bg-gray-100 py-1 px-3 rounded-sm cursor-pointer hover:scale-110 transition-transform duration-300">
              <a href="#Shop">Shop</a>
            </li>
            <li className="hover:bg-gray-100 py-1 px-3 rounded-sm cursor-pointer hover:scale-110 transition-transform duration-300">
              <a href="#Product">Product</a>
            </li>
            <li className="w-20 p-0.5 rounded-md bg-gray-800">
              <a href="#">
                <img src="/image/logo2.png" alt="logo" />
              </a>
            </li>
            <li className="hover:bg-gray-100 py-1 px-3 rounded-sm cursor-pointer hover:scale-110 transition-transform duration-300">
              <a href="#">Blog</a>
            </li>
            <li className="hover:bg-gray-100 py-1 px-3 rounded-sm cursor-pointer hover:scale-110 transition-transform duration-300">
              <a href="#">Pages</a>
            </li>
            <li className="hover:bg-gray-100 py-1 px-3 rounded-sm cursor-pointer hover:scale-110 transition-transform duration-300">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <ul className="flex gap-3">
            <li className="hover:bg-gray-100 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300">
              <a href="#">
                <i className="fa-solid fa-user"></i>
              </a>
            </li>
            <li className="hover:bg-gray-100 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300">
              <a href="#">
                <i className="fa-solid fa-heart"></i>
              </a>
            </li>
            <li className="hover:bg-gray-100 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300">
              <a href="#">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </li>
          </ul>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-2xl ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full right-5 w-40 bg-amber-200 shadow-md rounded-b-md z-50 md:hidden">
            <ul className="flex flex-col items-center py-3 font-semibold gap-2">
              <li>
                <a href="#" className="hover:text-amber-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600">
                  Pages
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
