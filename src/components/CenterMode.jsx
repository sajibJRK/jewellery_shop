import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrendingCard from "./TrendingCard";

function CenterMode({ products }) {
   const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1000,
      centerPadding: "60px",
      slidesToShow: 5,
      focusOnSelect: true, // ✅ click slide → go center

      responsive: [
         {
            breakpoint: 1124,
            settings: { slidesToShow: 3 },
         },
         {
            breakpoint: 600,
            settings: { slidesToShow: 1 },
         },
      ],
   };

   return (
      <div className="w-full mx-auto my-10">
         {/* ✅ Center zoom effect added DIRECTLY here */}
         <style>
            {`
  .center .slick-slide {
    opacity: 0.5;
    transition: all 0.4s ease;
    position: relative;
    z-index: 30; /* Default */
  }

  .center .slick-active {
    opacity: 0.8;
    z-index: 40; /* Side slides */
  }

   .center .slick-active:hover {
    opacity: 1;
  }

  .center .slick-center {
    transform: scale(1.1);
    opacity: 1;
    z-index: 50; /* Center slide */
  }
`}
         </style>

         <Slider {...settings}>
            {products.map((item) => (
               <div key={item.id} className="relative z-0 px-2">
                  <TrendingCard item={item} />
               </div>
            ))}
         </Slider>
      </div>
   );
}

export default CenterMode;
