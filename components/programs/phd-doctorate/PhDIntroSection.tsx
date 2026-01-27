"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle } from "lucide-react";

const characteristics = [
  "Original research contribution",
  "Dissertation requirement",
  "Typical 3–5 year commitment",
  "Close faculty mentorship",
  "Rigorous academic training",
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

export default function PhDIntroSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              What is a PhD / Doctorate?
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              A Doctor of Philosophy (PhD) or equivalent research doctorate is
              the highest academic degree awarded in most fields of study. PhD
              programs emphasize original research, critical inquiry, and the
              creation of new knowledge that advances academic understanding.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Doctoral candidates work closely with faculty supervisors to
              design and conduct sophisticated research, contribute to academic
              literature, and defend their findings before expert committees.
              PhD graduates are prepared for careers in academia, advanced
              research roles, policy development, and thought leadership
              positions.
            </motion.p>

            {/* Available Disciplines Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 border-l-4 border-[#0049AC] p-6 rounded-r-lg mt-8"
            >
              <p className="text-gray-700 font-medium">
                Our partner universities offer PhD programs across{" "}
                <span className="text-[#0049AC] font-bold">
                  business, management, education, technology, social sciences
                </span>
                , and specialized{" "}
                <span className="text-[#0049AC] font-bold">
                  interdisciplinary fields
                </span>
                .
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-50 rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100"
          >
            <motion.h3
              variants={itemVariants}
              className="text-xl font-bold text-gray-900 mb-6"
            >
              Key Characteristics
            </motion.h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {characteristics.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[#0049AC]/10 flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#0049AC]" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm leading-relaxed">
                    {item}
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
