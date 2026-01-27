"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const trustIndicators = [
  "Free research interest consultation",
  "Application guidance from experts",
  "Faculty matching support",
  "Transparent admissions process",
];

export default function PhDFinalCTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 lg:px-8 text-center">
        {/* Content Group */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to Begin Your Doctoral Journey?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Earning a PhD is a transformative intellectual endeavor. If you’re
            passionate about research and committed to advancing knowledge, our
            admissions team is here to support your path to doctoral success.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
        >
          {/* Primary CTA */}
          <Link href="/apply/phd" className="w-full md:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#0049AC] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#003d91] transition-colors duration-300 shadow-lg shadow-[#0049AC]/20"
            >
              Apply for PhD Program
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>

          {/* Secondary CTA */}
          <Link
            href="https://wa.me/yourwhatsapplink"
            className="w-full md:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#20bd5a] transition-colors duration-300 shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Our Team
            </motion.button>
          </Link>

          {/* Tertiary CTA */}
          <Link href="/consultation" className="w-full md:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold py-4 px-8 rounded-xl border border-gray-200 hover:border-[#0049AC] hover:text-[#0049AC] transition-colors duration-300 shadow-sm"
            >
              <Calendar className="w-5 h-5" />
              Schedule Consultation
            </motion.button>
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4"
        >
          {trustIndicators.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
              <span className="text-gray-600 font-medium text-sm md:text-base">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
