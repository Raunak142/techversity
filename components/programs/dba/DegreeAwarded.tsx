"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function DegreeAwarded() {
  const images = [
    "/images/pagebgImage.png",
    "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=800&auto=format&fit=crop",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;
  // Calculate max index correctly.
  // If we have 6 images and show 3, indices are: 0 (displays 0,1,2), 1 (displays 1,2,3), 2 (displays 2,3,4), 3 (displays 3,4,5).
  // So maxIndex = length - itemsToShow.
  const maxIndex = images.length - itemsToShow;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12 text-center bg-white">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Degree Awarded
        </h2>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          A DBA degree from EU Business School Switzerland, which is
          institutionally accredited by IQA and certified by eduQua and
          programmatically by ACBSP and IACBE.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-7xl mx-auto group">
        {/* Left Navigation Button */}
        <button
          onClick={prevSlide}
          className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white border border-gray-200 shadow-xl text-gray-800 hover:text-[#0049AC] hover:scale-110 transition-all z-20"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Right Navigation Button */}
        <button
          onClick={nextSlide}
          className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white border border-gray-200 shadow-xl text-gray-800 hover:text-[#0049AC] hover:scale-110 transition-all z-20"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Carousel Window */}
        <div className="overflow-hidden w-full py-4">
          <motion.div
            className="flex gap-6"
            initial={false}
            animate={{
              x: `calc(-${currentIndex * (100 / itemsToShow)}% - ${currentIndex * 24}px)`,
            }} // accounting for gap is tricky with calc, simplest is usually percentage width container or fixed gap
            // Let's settle on a safer approach for gap:
            // If we treat each item as flex-shrink-0 with width: calc((100% - (itemsToShow - 1) * gap) / itemsToShow)
            // And animate x by -(itemWidth + gap) * currentIndex
            // gap-6 is 24px (usually).
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              x: `calc(-${currentIndex} * ((100% / ${itemsToShow}) + (16px / ${itemsToShow})))`, // Approximation for gap support, usually flex gap is easier handled by wrapper width
            }}
          >
            {/* Simpler Approach for Framer Motion Grid: 
                   Just animate x percentage. 
                   If width is 33.333%, moving x by -100% moves 3 items. 
                   Moving x by -33.33% moves 1 item.
               */}
          </motion.div>

          {/* Re-rendering properly with explicit width style for smoother sliding */}
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="min-w-[33.333%] px-3" // Using padding for localized gap instead of flex gap makes math easier
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="w-full h-[250px] md:h-[400px] bg-cover bg-center rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 relative overflow-hidden group/image"
                  style={{ backgroundImage: `url('${src}')` }}
                >
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex
                ? "w-8 h-2.5 bg-[#0049AC]"
                : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide group ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
