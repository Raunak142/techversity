"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: "url('/images/dba.png')",
          }}
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-center md:text-left"
        >
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-300 font-medium mb-6">
            <span className="text-white">Programs</span>
            <span>/</span>
            <span className="text-white">
              Doctor of Business Administration
            </span>
          </nav>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Doctor of Business Administration (DBA): Executive Leadership Meets
            Academic Rigor
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light mb-8 max-w-2xl mx-auto md:mx-0">
            Earn a research-focused doctoral degree designed for senior business
            leaders. Advance your strategic thinking, contribute original
            research to your field, and join an elite community of executive
            scholars.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#0049AC] hover:bg-[#003B95] text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
