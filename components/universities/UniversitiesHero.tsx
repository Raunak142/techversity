"use client";

import { motion } from "framer-motion";

export default function UniversitiesHero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop')", // Academic library/campus placeholder
          }}
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-center md:text-left"
        >
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-300 font-medium mb-6">
            <span className="text-white">Universities</span>
          </nav>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Our University Partners
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light mb-8 max-w-2xl mx-auto md:mx-0">
            Techversity.ai has established partnerships with accredited
            universities offering flexible, recognized programs for ambitious
            professionals worldwide. Each institution maintains its own academic
            standards, accreditation, and program offerings.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
