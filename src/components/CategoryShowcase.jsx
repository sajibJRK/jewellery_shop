import React from "react";

export default function CategoryShowcase() {
  return (
    <div className="w-full mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-4">

      {/* Left Big Image */}

      <div className="relative group h-[520px]">
        <img
          src="https://i.ibb.co.com/fGXQ08p0/left-item-1-1.jpg"
          className="w-full h-full object-cover "
        />
        
        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 rounded-xl flex flex-col justify-center px-8 text-white">
          <h1 className="text-4xl font-bold  text-white drop-shadow-[0_0_3px_rgba(247,206,57,1)]">TOP CATEGORIES</h1>
          <button className="mt-4 border-b  text-white drop-shadow-[0_0_3px_rgba(247,206,57,1)] w-fit text-lg">
            SHOP NOW →
          </button>
        </div>
      </div>

      {/* Middle Column Grid */}
      <div className="grid grid-rows-2 gap-3 h-[520px] ">
        {/* Necklace */}
        <div className="relative h-[250px] group hover:scale-102 transition-transform duration-200 hover:shadow-[0_0_15px_rgba(247,206,57,1)]">
          <img
            src="https://i.ibb.co.com/tpnQcdST/item-1-2.jpg"
            className="w-full h-full object-cover "
          />
          <h2 className="absolute bottom-4 left-4 text-white drop-shadow-[0_0_3px_rgba(247,206,57,1)] text-3xl font-bold">
            Necklace
          </h2>
        </div>

        {/* Earrings */}
        <div className="relative h-[250px] group hover:scale-102 transition-transform duration-200 hover:shadow-[0_0_15px_rgba(247,206,57,1)]">
          <img
            src="https://i.ibb.co.com/B2hnVD02/item-1-3.jpg"
            className="w-full h-full object-cover "
          />
          <h2 className="absolute bottom-4 left-4 text-white  drop-shadow-[0_0_3px_rgba(247,206,57,1)] text-3xl font-bold ">
            Earrings
          </h2>
        </div>
      </div>

      {/* Right Tall Image */}
      <div className="relative group h-[520px] hover:scale-102 transition-transform duration-200 hover:shadow-[0_0_15px_rgba(247,206,57,1)]">
        <img
          src="https://i.ibb.co.com/xqGFJNvH/Right-item-1-4.jpg"
          className="w-full h-full object-cover"
        />
        <h2 className="absolute bottom-6 left-6  text-white drop-shadow-[0_0_3px_rgba(247,206,57,1)] text-4xl font-bold ">
          Bracelets
        </h2>
      </div>
    </div>
  );
}
