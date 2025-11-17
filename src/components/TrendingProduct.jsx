import React, { useEffect, useRef, useState } from "react";
import TrendingCard from "./TrendingCard";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function TrendingProduct({ products }) {
  const scrollRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  // Loop 3x for infinite effect
  const looped = [...products, ...products, ...products];
  const originalLength = products.length;

  // Card width based on screen
  const getCardWidth = () => {
    if (window.innerWidth >= 1280) return 260;
    if (window.innerWidth >= 1024) return 300;
    return 250;
  };
  const cardWidth = getCardWidth();
  const gap = 20;

  // Initialize scroll to middle loop
  useEffect(() => {
    const container = scrollRef.current;
    container.scrollLeft = originalLength * (cardWidth + gap);
  }, [cardWidth, gap, originalLength]);

  // Update center card for scaling
  const updateCenter = () => {
    const container = scrollRef.current;
    const mid = container.scrollLeft + container.clientWidth / 2;

    let closest = 0;
    let minDist = Infinity;

    [...container.children].forEach((el, i) => {
      const center = el.offsetLeft + el.clientWidth / 2;
      const dist = Math.abs(mid - center);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });

    setCenterIndex(closest);
  };

  // Infinite loop fix
  const fixLoop = () => {
    if (isAutoScrolling) return; // skip while auto scrolling
    const container = scrollRef.current;
    const maxOffset = originalLength * (cardWidth + gap);

    if (container.scrollLeft <= maxOffset - (cardWidth + gap)) {
      container.scrollLeft += maxOffset;
    } else if (container.scrollLeft >= maxOffset * 2) {
      container.scrollLeft -= maxOffset;
    }
  };

  const onScroll = () => {
    fixLoop();
    updateCenter();
  };

  useEffect(() => {
    const container = scrollRef.current;
    container.addEventListener("scroll", onScroll, { passive: true });
    updateCenter();
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Smooth auto scroll using requestAnimationFrame + easing
  useEffect(() => {
    const smoothScroll = () => {
      setIsAutoScrolling(true);

      const start = scrollRef.current.scrollLeft;
      const end = start + cardWidth + gap;
      const duration = 600;
      let startTime = null;

      const animate = (time) => {
        if (!startTime) startTime = time;
        const progress = (time - startTime) / duration;
        const ease =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        scrollRef.current.scrollLeft = start + (end - start) * Math.min(ease, 1);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setIsAutoScrolling(false);
        }
      };

      requestAnimationFrame(animate);
    };

    const interval = setInterval(smoothScroll, 2000);
    return () => clearInterval(interval);
  }, [cardWidth, gap]);

  // Manual scroll buttons
  const scrollLeft = () =>
    scrollRef.current.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current.scrollBy({ left: cardWidth + gap, behavior: "smooth" });

  return (
    <>
    <div className="text-center my-10">
                  <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_0_3px_rgba(247,206,57,1)] tracking-wide uppercase">
                     Find New-in
                  </h1>
                  <p className="text-lg md:text-2xl text-amber-200 mt-2 font-semibold tracking-wide">
                     Top Trending
                  </p>
               </div>
    <div className="relative w-full">
      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#f7ce39] p-2 rounded-full z-50"
      >
        <IoChevronBack size={20} />
      </button>

      {/* Cards Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll no-scrollbar px-6 py-6"
        style={{ gap: `${gap}px` }}
      >
        {looped.map((item, i) => {
          // Scale effect for center card
          const scale =
            i === centerIndex
              ? "scale-110 z-50"
              : i === centerIndex - 1 || i === centerIndex + 1
              ? "scale-105 z-20"
              : "scale-100 z-0";

          return (
            <div
              key={i}
              className={`transition-transform duration-500 flex-shrink-0 ${scale}`}
              style={{ width: `${cardWidth}px` }}
            >
              <TrendingCard item={item} />
            </div>
          );
        })}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#f7ce39] p-2 rounded-full z-50"
      >
        <IoChevronForward size={20} />
      </button>
    </div>
    </>
  );
}
