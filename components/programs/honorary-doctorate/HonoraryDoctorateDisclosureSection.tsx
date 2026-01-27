"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  AlertCircle,
  GraduationCap,
  BookX,
  FileWarning,
  Globe,
  Building2,
  ArrowRight,
  Shield,
} from "lucide-react";

interface DisclosureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const disclosureItems: DisclosureItem[] = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Recognition, Not an Earned Degree",
    description:
      "An Honorary Doctorate is an award recognizing past achievements. It is not equivalent to an earned PhD, DBA, or other research doctorate requiring years of study.",
  },
  {
    icon: <BookX className="w-5 h-5" />,
    title: "Not for Academic Teaching Positions",
    description:
      "Honorary doctorates typically do not qualify recipients for university faculty roles or positions requiring earned academic credentials.",
  },
  {
    icon: <FileWarning className="w-5 h-5" />,
    title: "Usage Guidelines",
    description:
      'Recipients may use the title "Dr." in many professional contexts, but should clearly indicate its honorary nature when appropriate, especially in academic settings.',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Recognition Varies by Jurisdiction",
    description:
      "Professional and legal recognition of honorary degrees varies by country and industry. Applicants should review applicable guidelines in their jurisdiction.",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "University-Issued Credential",
    description:
      "The honorary doctorate is conferred and certified by the partner university, not by Techversity.ai.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
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

const HonoraryDoctorateDisclosureSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12 md:mb-14"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 mb-4">
            <AlertCircle className="w-7 h-7 text-amber-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Understanding Honorary Doctorates
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Techversity.ai is committed to transparency and ethical admissions
            practices.
          </p>
        </motion.div>

        {/* Disclosure Items Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12"
        >
          {disclosureItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Commitment Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-[#0049AC]/5 border border-[#0049AC]/20 rounded-xl p-6 mb-10"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-full bg-[#0049AC] flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Our Commitment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We provide honest assessments and recommend only programs that
                genuinely align with your background, experience, and
                professional goals.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Have Questions? Speak with Our Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HonoraryDoctorateDisclosureSection;
