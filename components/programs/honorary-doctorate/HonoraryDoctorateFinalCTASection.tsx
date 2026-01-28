"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle, Calendar, Check } from "lucide-react";

interface TrustItem {
  text: string;
}

const trustItems: TrustItem[] = [
  { text: "Free eligibility assessment" },
  { text: "Transparent pricing" },
  { text: "Expert guidance every step" },
  { text: "Response within 24 hours" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const HonoraryDoctorateFinalCTASection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to Formalize Your Achievements?
          </h2>

          {/* Body Text */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Take the next step toward formal recognition of your professional
            excellence. Our admissions experts are ready to guide you through
            the honorary doctorate application process.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0049AC] hover:bg-[#003B95] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Secondary CTA - WhatsApp */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Tertiary CTA - Book Consultation */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-gray-300 text-gray-700 font-bold rounded-full hover:border-[#0049AC] hover:text-[#0049AC] transition-all"
              >
                <Calendar className="w-5 h-5" />
                Book a Free Consultation
              </Link>
            </motion.div>
          </div>

          {/* Trust Elements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
          >
            {trustItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm"
              >
                <Check className="w-4 h-4 text-green-500" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HonoraryDoctorateFinalCTASection;
