import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
   {
      image: "/image/slideshow-home2-2.jpg",
      title: "Timeless Elegance",
      subtitle: "Discover the Art of Fine Jewellery",
   },
   {
      image: "/image/slideshow-home2-1.jpg",
      title: "Grace in Every Detail",
      subtitle: "Where Luxury Meets Craftsmanship",
   },
];

export default function Hero() {
   return (
      <div className="w-full h-screen">
         <Swiper
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="w-full h-full"
         >
            {slides.map((item, index) => (
               <SwiperSlide key={index}>
                  <div
                     className="relative flex items-center h-screen bg-cover bg-center bg-no-repeat"
                     style={{ backgroundImage: `url(${item.image})` }}
                  >
                     {/* Elegant Overlay */}
                     <div className="absolute inset-0 bg-black/40"></div>

                     {/* Text Content */}
                     <div className="relative text-white px-6 md:px-16 lg:px-32 max-w-2xl flex flex-col justify-center h-full">
                        <h1
                           className="text-3xl md:text-5xl lg:text-6xl font-[Playfair_Display] font-bold leading-snug mb-4"
                           style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                           {item.title}
                        </h1>

                        <p
                           className="text-lg md:text-xl lg:text-2xl tracking-wide opacity-95 mb-8"
                           style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                           {item.subtitle}
                        </p>

                        {/* Premium Gold Button */}
                        <button className="relative inline-block px-8 py-3 text-lg uppercase tracking-wider font-medium text-white border-2 border-[#d6b26f] rounded-md overflow-hidden group hover:text-[#d6b26f] transition-all duration-300">
                           <span className="absolute inset-0 bg-gradient-to-r from-[#d6b26f] to-[#ffd700] opacity-30 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                           <span className="relative z-10">Shop Now</span>
                        </button>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
}
