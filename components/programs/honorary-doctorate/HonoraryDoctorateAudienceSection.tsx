"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

interface CandidateType {
  title: string;
  description: string;
}

const candidates: CandidateType[] = [
  {
    title: "Senior Business Leaders",
    description:
      "CEOs, founders, and executives with proven track records of industry innovation and leadership.",
  },
  {
    title: "Published Authors & Thought Leaders",
    description:
      "Individuals who have contributed original ideas, research, or insights influencing their field.",
  },
  {
    title: "Industry Experts & Consultants",
    description:
      "Professionals with 15+ years of specialized experience and recognized expertise.",
  },
  {
    title: "Philanthropists & Community Leaders",
    description:
      "Individuals who have made significant social, educational, or humanitarian contributions.",
  },
  {
    title: "Innovators & Entrepreneurs",
    description:
      "Founders who have built impactful businesses, products, or services.",
  },
  {
    title: "International Professionals",
    description:
      "Global professionals seeking formal recognition to enhance credibility across borders.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const HonoraryDoctorateAudienceSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Who Should Consider an Honorary Doctorate?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Honorary Doctorates are designed for established professionals who
            have demonstrated excellence and long-term impact in their field.
          </p>
        </motion.div>

        {/* Candidate Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16"
        >
          {candidates.map((candidate, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {candidate.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {candidate.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Statement & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-lg text-gray-700 mb-6">
            <span className="font-semibold text-gray-900">
              Not sure if you qualify?
            </span>{" "}
            Speak with our admissions team for a confidential assessment of your
            eligibility.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0049AC] hover:bg-[#003B95] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HonoraryDoctorateAudienceSection;
