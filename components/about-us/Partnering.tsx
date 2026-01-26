"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Partnering() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Personalized Guidance",
      description:
        "At HNtrix, we don’t believe in one-size-fits-all solutions.",
      image: "/images/uploaded_media_1769414918707.png",
    },
    {
      title: "Strong Global Network",
      description:
        "HNtrix partners with top universities and institutions around the world.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "End-to-End Support",
      description:
        "From your first counselling session to your first day abroad — we handle everything.",
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10 border-b border-gray-100 pb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 max-w-2xl leading-tight tracking-tight">
          Partnering for Progress,{" "}
          <span className="text-[#0049AC]">Built on Vision</span>
        </h2>
        <p className="text-gray-500 max-w-md text-lg leading-relaxed font-light">
          We don’t just offer advice — we walk with you through every stage of
          transformation.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Side: Interactive List */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-4">
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group cursor-pointer p-6 md:p-8 rounded-2xl transition-all duration-300 ease-out border-l-4 ${
                  isActive
                    ? "bg-[#003B95] border-black shadow-lg transform scale-[1.02]"
                    : "bg-transparent border-transparent hover:bg-gray-50 hover:pl-10"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3
                    className={`text-xl font-bold transition-colors ${isActive ? "text-white" : "text-gray-800 group-hover:text-gray-900"}`}
                  >
                    {item.title}
                  </h3>
                  {isActive && <ChevronRight className="w-5 h-5 text-white" />}
                </div>

                <p
                  className={`text-base leading-relaxed transition-all duration-300 ${isActive ? "text-gray-200 opacity-100 max-h-24" : "text-gray-500 opacity-70 group-hover:text-gray-600"}`}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Side: Image Display with Framer Motion */}
        <div className="w-full lg:w-7/12 min-h-[400px] lg:h-auto relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-100/50 bg-gray-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }} // Simple fade out, StudentSupport used exiting image underneath potentially or wait mode. 'mode="wait"' makes it sequential.
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('${items[activeIndex].image}')`,
                }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
