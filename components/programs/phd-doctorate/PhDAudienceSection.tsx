"use client";

import { motion, Variants } from "framer-motion";
import {
  GraduationCap,
  Microscope,
  Briefcase,
  Landmark,
  BookOpen,
  PenTool,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const candidates = [
  {
    icon: GraduationCap,
    title: "Aspiring Academics",
    description:
      "Individuals seeking university faculty positions, professorships, and long-term careers in higher education.",
  },
  {
    icon: Microscope,
    title: "Researchers & Scientists",
    description:
      "Those dedicated to research careers in think tanks, research institutions, laboratories, or corporate R&D.",
  },
  {
    icon: Briefcase,
    title: "Advanced Practitioners",
    description:
      "Professionals aiming to conduct research that bridges theory and real-world practice within their industry.",
  },
  {
    icon: Landmark,
    title: "Policy & Strategy Experts",
    description:
      "Individuals working in government, NGOs, or policy organizations requiring doctoral-level research and analysis.",
  },
  {
    icon: BookOpen,
    title: "Lifelong Learners",
    description:
      "Individuals passionate about intellectual inquiry and making meaningful scholarly contributions.",
  },
  {
    icon: PenTool,
    title: "Published Scholars",
    description:
      "Candidates with prior research or publications seeking to formalize and deepen their academic expertise.",
  },
];

const requirements = [
  "Master’s degree in a relevant field",
  "Strong academic record",
  "Research proposal",
  "Academic references",
  "Demonstrated research aptitude",
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

export default function PhDAudienceSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Who Should Pursue a PhD?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            PhD programs are designed for individuals committed to deep
            research, academic scholarship, and advancing knowledge within their
            chosen field.
          </p>
        </motion.div>

        {/* Candidates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20"
        >
          {candidates.map((candidate, index) => {
            const IconComponent = candidate.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0049AC]/10 flex items-center justify-center mb-5 group-hover:bg-[#0049AC] transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-[#0049AC] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0049AC] transition-colors duration-300">
                  {candidate.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {candidate.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Requirements & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Entry Requirements
              </h3>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {requirements.map((req, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0049AC]" />
                    {req}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-[#0049AC] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#003d91] transition-colors duration-300 shadow-lg shadow-[#0049AC]/20"
              >
                Assess Your PhD Eligibility
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
