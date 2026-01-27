"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "Research-based doctoral program",
  "Designed for working professionals",
  "Flexible online or hybrid formats",
  "Focus on applied business research",
  "Dissertation requirement",
  "Internationally recognized credential",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function DBAIntroSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              What is a Doctor of Business Administration (DBA)?
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              A Doctor of Business Administration (DBA) is a terminal degree
              designed for experienced business professionals who seek to
              combine academic rigor with real-world application.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Unlike an MBA, which focuses on managerial and operational skills,
              a DBA emphasizes original research, critical analysis, and thought
              leadership across business disciplines.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              DBA programs are tailored for working executives, entrepreneurs,
              and senior leaders who want to contribute new knowledge to
              business practice while continuing their professional careers. The
              curriculum blends advanced theory, applied research methodologies,
              and practical problem-solving.
            </motion.p>
          </motion.div>

          {/* Right Side - Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-50 rounded-2xl p-8 lg:p-10"
          >
            <motion.h3
              variants={itemVariants}
              className="text-xl font-semibold text-gray-900 mb-6"
            >
              Key Features
            </motion.h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0049AC]/10 flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#0049AC]" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm leading-relaxed">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
