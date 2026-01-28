"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/pagebgImage.png')", // Consistent placeholder
            backgroundColor: "#222",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 w-full flex flex-col items-center justify-center h-full mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-wide">
            About Us
          </h1>

          {/* Breadcrumb / Subheading */}
          <div className="flex items-center gap-2 text-sm md:text-base text-gray-200 font-medium justify-center">
            <span className="text-white">About Us</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
