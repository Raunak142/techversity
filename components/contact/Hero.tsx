"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: "url('/images/pagebgImage.png')", // Placeholder - user should update
            backgroundColor: "#111",
          }}
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 bg-linear-to-b from-black/30 via-black/60 to-black/90" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Start Your Application Today
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto mb-8 font-light">
            Complete this application to begin your journey toward an Honorary
            Doctorate, DBA, PhD, or Master's degree. Our admissions team will
            review your information and contact you within 24 hours.
          </p>

          {/* Trust Line */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white shadow-lg">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              Your information is secure and confidential
            </span>
            <span className="hidden sm:inline w-px h-4 bg-white/30" />
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              Response within 24 hours
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
