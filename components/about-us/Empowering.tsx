"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Empowering() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/pagebgImage.png')",
              }}
            />
          </div>
          {/* Optional decorative element if needed, clean for now */}
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Empowering Businesses Through Expertise
          </h2>

          <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify md:text-left">
            <p>
              At <strong className="text-gray-900">HNtrix</strong>, we are
              reshaping the future of consulting by bringing together global
              insights, cross-industry experience, and a people-first
              philosophy. As a multi-industry consultancy firm with clients and
              partners across the world, we specialize in solving complex
              business challenges and driving innovation through tailored
              strategies.
            </p>
            <p>
              Founded with a vision to bridge global gaps in business,
              education, and technology, HNtrix stands at the intersection of
              strategy and execution. Our solutions are built not only for
              today's needs but also for tomorrow's opportunities.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
