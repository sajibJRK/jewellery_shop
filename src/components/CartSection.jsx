import React, { useState, useContext } from "react";
import { ProductsContext } from "../contaxt/ProductsContext";

export default function CartSection() {
   const { cartItems, setCartItems } = useContext(ProductsContext);
   const [selectedItems, setSelectedItems] = useState([]);

   const removeFromCart = (id) => {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      setSelectedItems((prev) => prev.filter((idItem) => idItem !== id));
   };

   const handleQtyChange = (id, delta) => {
      setCartItems((prev) =>
         prev.map((item) =>
            item.id === id
               ? { ...item, qty: Math.max(1, (item.qty || 1) + delta) }
               : item,
         ),
      );
   };

   const handleSelectItem = (id) => {
      setSelectedItems((prev) =>
         prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
      );
   };

   const handleBuySelected = () => {
      if (selectedItems.length === 0) {
         alert("Please select at least one item to buy.");
         return;
      }
      const itemsToBuy = cartItems.filter((item) =>
         selectedItems.includes(item.id),
      );
      const totalPrice = itemsToBuy.reduce(
         (sum, item) => sum + item.price * (item.qty || 1),
         0,
      );
      alert(
         `Buying ${itemsToBuy
            .map((i) => `${i.name} x${i.qty || 1}`)
            .join(", ")} for total ${totalPrice} Tk`,
      );
   };

   const totalPrice = cartItems
      .filter((item) => selectedItems.includes(item.id))
      .reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

   return (
      <div className="mt-15 bg-[#3B2F2F] p-4 md:p-6 rounded-xl w-full min-h-screen">
         {cartItems.length > 0 ? (
            <>
               <div className="grid gap-4">
                  {cartItems.map((item) => (
                     <div
                        key={item.id}
                        className="flex flex-col sm:flex-row items-center sm:justify-between p-4 bg-linear-to-r from-gray-800 via-gray-900 to-black rounded-2xl shadow-xl border border-gray-700"
                     >
                        {/* Product Image */}
                        <div className="w-32 h-32 sm:w-28 sm:h-28 bg-gray-900 p-2 rounded-2xl flex items-center justify-center shadow-md mb-3 sm:mb-0">
                           <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-contain rounded-lg"
                           />
                        </div>

                        {/* Product Info + Quantity */}
                        <div className=" px-0 sm:px-4 flex flex-col  justify-center h-full w-full">
                           <div>
                              <p className="font-bold text-white  text-2xl ">
                                 {item.name}
                              </p>
                              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                                 Material: {item.material} • {item.karat}
                              </p>
                              <p className="text-amber-400 text-sm sm:text-base mt-1">
                                 Price: {item.price} Tk
                              </p>
                           </div>

                           <div className="flex items-center gap-2 mt-3">
                              <button
                                 onClick={() => handleQtyChange(item.id, -1)}
                                 className="bg-gray-700 text-white px-3 py-1 rounded-lg hover:bg-gray-600 transition"
                              >
                                 -
                              </button>
                              <span className="px-3 py-1 bg-gray-800 text-white rounded-lg">
                                 {item.qty || 1}
                              </span>
                              <button
                                 onClick={() => handleQtyChange(item.id, 1)}
                                 className="bg-gray-700 text-white px-3 py-1 rounded-lg hover:bg-gray-600 transition"
                              >
                                 +
                              </button>
                           </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                           {/* Select checkbox */}
                           <div className="flex items-center ">
                              <button
                                 onClick={() => handleSelectItem(item.id)}
                                 className={`px-3 py-1 text-2xl font-bold rounded-xl w-55  transition 
                                   ${
                                      selectedItems.includes(item.id)
                                         ? "bg-amber-400 text-black"
                                         : "bg-green-500 text-white hover:bg-gray-600"
                                   }`}
                              >
                                 {selectedItems.includes(item.id)
                                    ? "Selected"
                                    : "Add to Buy"}
                              </button>
                           </div>
                           {/* Remove Button */}
                           <div className="flex  flex-col items-end mt-2 sm:mt-0">
                              <button
                                 onClick={() => removeFromCart(item.id)}
                                 className="w-56 cursor-pointer text-nowrap border py-1 px-2 rounded-xl border-red-500 text-red-500 hover:text-red-400 text-2xl font-bold transition"
                              >
                                 Remove from cart
                              </button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               {/* Total and Buy Selected */}
               <div className="flex flex-col sm:flex-row justify-between items-center mt-6 p-4 bg-gray-900 rounded-2xl shadow-lg border border-gray-700 gap-3 sm:gap-0">
                  <p className="text-white font-semibold text-lg">
                     Total:{" "}
                     <span className="text-amber-400">{totalPrice} Tk</span>
                  </p>
                  <button
                     onClick={handleBuySelected}
                     className="bg-amber-400 text-black px-5 py-2 rounded-lg hover:bg-amber-500 font-semibold transition"
                  >
                     Buy Selected
                  </button>
               </div>
            </>
         ) : (
            <p className="text-center text-gray-400 py-10 text-lg">
               Your cart is empty
            </p>
         )}
      </div>
   );
}
