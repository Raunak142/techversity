"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

export default function UniversityFinalCTASection() {
  return (
    <section className="w-full bg-[#111827] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 text-center text-white border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Find Your Perfect University Match
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Ready to explore which university and program aligns best with your
            goals? Our admissions experts are here to help you make an informed
            decision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 w-full sm:w-auto">
            {/* Primary Button */}
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0049AC] hover:bg-[#003B95] text-white font-bold rounded-xl transition-all shadow-lg shadow-[#0049AC]/20"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            {/* Secondary Button - WhatsApp */}
            <Link
              href="https://wa.me/1234567890" // Replace with actual number
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp for Guidance
              </motion.button>
            </Link>

            {/* Tertiary Button - Consultation */}
            <Link href="/consultation" className="w-full sm:w-auto">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 hover:border-white text-white font-semibold rounded-xl transition-all hover:bg-white/5"
              >
                <Calendar className="w-5 h-5" />
                Book Free Consultation
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
