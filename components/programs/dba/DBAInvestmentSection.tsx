"use client";

import { motion, Variants } from "framer-motion";
import {
  CreditCard,
  Building2,
  CalendarClock,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Wallet,
} from "lucide-react";

const paymentOptions = [
  {
    icon: Building2,
    text: "Direct payment to the university",
  },
  {
    icon: CreditCard,
    text: "Payment via Techversity.ai (we facilitate university payment)",
  },
  {
    icon: CalendarClock,
    text: "Installment plans (availability varies by university)",
  },
  {
    icon: Briefcase,
    text: "Corporate or employer sponsorship arrangements",
  },
];

const includedItems = [
  "All coursework and learning materials",
  "Dissertation supervision and guidance",
  "Library and academic research database access",
  "Faculty mentorship and academic support",
  "Official degree certificate and transcripts",
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

export default function DBAInvestmentSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side: Content & Payment Options */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-10"
          >
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Investment in Your Future
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 leading-relaxed"
              >
                A Doctor of Business Administration (DBA) represents a
                significant investment in your professional development,
                leadership credibility, and thought-leadership capabilities.
              </motion.p>
            </div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Wallet className="w-5 h-5 text-[#0049AC]" />
                Understanding Program Costs
              </h3>
              <p className="text-gray-600 leading-relaxed">
                DBA program fees vary by university and typically include
                tuition, dissertation supervision, library access, and academic
                support services. Total investment depends on the institution,
                delivery format, and program structure.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Payment Options
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {paymentOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#0049AC]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#0049AC]" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">
                        {option.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: What's Included & CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* What's Included Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                What’s Included
              </h3>
              <div className="space-y-4">
                {includedItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-4"
                  >
                    <div className="shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Financing Guidance */}
            <motion.div
              variants={itemVariants}
              className="bg-[#0049AC] rounded-2xl p-8 lg:p-10 text-white relative overflow-hidden"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

              <h3 className="text-xl font-bold mb-4 relative z-10">
                Financing Guidance
              </h3>
              <p className="text-blue-100 mb-8 leading-relaxed relative z-10">
                Our admissions team can discuss pricing structures, employer
                sponsorship strategies, and available payment plans during your
                consultation.
              </p>
              <motion.button
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-white text-[#0049AC] font-bold py-4 px-6 rounded-xl hover:bg-blue-50 transition-colors duration-300 relative z-10"
              >
                Discuss Pricing & Payment Options
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
