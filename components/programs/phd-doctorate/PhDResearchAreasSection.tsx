"use client";

import { motion, Variants } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Cpu,
  Users,
  Layers,
  Search,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const disciplines = [
  {
    icon: Briefcase,
    title: "Business & Management",
    description:
      "Strategy, entrepreneurship, organizational behavior, leadership, marketing, finance, operations, and international business.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Educational leadership, curriculum development, learning sciences, higher education administration, and educational technology.",
  },
  {
    icon: Cpu,
    title: "Technology & Innovation",
    description:
      "Information systems, computer science, data science, digital transformation, and technology management.",
  },
  {
    icon: Users,
    title: "Social Sciences",
    description:
      "Psychology, sociology, public policy, communications, and international relations.",
  },
  {
    icon: Layers,
    title: "Interdisciplinary Studies",
    description:
      "Sustainability, innovation studies, organizational development, and custom interdisciplinary research areas.",
  },
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

export default function PhDResearchAreasSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Research Areas & Disciplines
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Our partner universities offer doctoral programs across a wide range
            of academic and interdisciplinary fields.
          </p>
        </motion.div>

        {/* Disciplines Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {disciplines.map((discipline, index) => {
            const IconComponent = discipline.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-[#0049AC]/10 group-hover:bg-[#0049AC] flex items-center justify-center mb-6 transition-colors duration-300">
                  <IconComponent className="w-7 h-7 text-[#0049AC] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0049AC] transition-colors">
                  {discipline.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {discipline.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Support Note & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center border border-gray-100 max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Search className="w-6 h-6 text-[#0049AC]" />
            </div>

            <p className="text-lg text-gray-700 font-medium max-w-2xl">
              During your consultation, we help identify programs and
              universities with faculty expertise aligned to your specific
              research interests.
            </p>

            <Link href="/research-areas">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#0049AC] text-white font-bold rounded-xl shadow-lg shadow-[#0049AC]/20 hover:bg-[#003d91] transition-all flex items-center gap-2"
              >
                Explore Research Areas
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
