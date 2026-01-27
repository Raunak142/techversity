"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Scale, Compass } from "lucide-react";

const factors = [
  "Geographic location and regional recognition",
  "Program delivery format (online, hybrid, in-person)",
  "Specific research areas or academic specializations",
  "Timeline and scheduling flexibility",
  "Faculty expertise alignment",
  "Accreditation and recognition standards",
];

export default function UniversityComparisonSection() {
  return (
    <section className="w-full py-20 lg:py-28 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2">
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#001F3F] text-white relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0049AC]/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <Scale className="w-6 h-6 text-white" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Not Sure Which University to Choose?
                </h2>

                <p className="text-gray-200 text-lg leading-relaxed mb-8">
                  Each university offers unique strengths, geographic
                  positioning, and program emphases. During your free
                  consultation, our admissions experts will discuss your
                  background, goals, location preferences, and research
                  interests to recommend the university that best aligns with
                  your objectives.
                </p>

                <Link href="/consultation" className="inline-block">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-8 py-4 bg-white text-[#001F3F] font-bold rounded-xl shadow-lg hover:shadow-white/20 transition-all"
                  >
                    Get Personalized Recommendations
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Factors Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white"
            >
              <div className="flex items-center gap-3 mb-8">
                <Compass className="w-6 h-6 text-[#0049AC]" />
                <h3 className="text-xl font-bold text-gray-900">
                  Factors to Consider
                </h3>
              </div>

              <div className="grid gap-6">
                {factors.map((factor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-[#0049AC]/20 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#0049AC]/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#0049AC]" />
                    </div>
                    <span className="text-gray-700 font-medium">{factor}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
