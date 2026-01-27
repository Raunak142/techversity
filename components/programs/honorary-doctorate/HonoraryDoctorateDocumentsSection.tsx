"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  User,
  BookOpen,
  Users,
  Award,
  CreditCard,
  FolderOpen,
  ArrowRight,
} from "lucide-react";

interface DocumentItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const documents: DocumentItem[] = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Comprehensive CV or Resume",
    description:
      "Detailed professional history, key achievements, positions held, and career progression.",
  },
  {
    icon: <User className="w-6 h-6" />,
    title: "Professional Bio / Personal Statement",
    description:
      "A written statement (500–1000 words) describing your contributions, impact, and achievements.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Published Work or Portfolio",
    description:
      "Copies of books, articles, research papers, white papers, or other significant publications (if applicable).",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Professional References",
    description:
      "Contact details for 2–3 professional references who can speak to your achievements and leadership.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Certificates & Awards",
    description:
      "Copies of notable industry certifications, awards, or recognitions received.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Valid Identification",
    description: "Government-issued ID or passport copy.",
  },
  {
    icon: <FolderOpen className="w-6 h-6" />,
    title: "Supporting Documentation",
    description:
      "Any additional materials demonstrating your contributions (press coverage, project portfolios, speaking engagements, etc.).",
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

const HonoraryDoctorateDocumentsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Application Requirements
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            To ensure a thorough and accurate evaluation, you'll need to provide
            documentation that demonstrates your professional achievements and
            impact.
          </p>
        </motion.div>

        {/* Documents Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-5 border border-gray-100 hover:border-[#0049AC]/20 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-[#0049AC]/10 flex items-center justify-center text-[#0049AC]">
                  {doc.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {doc.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {doc.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Support Message & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Need help preparing your documents?
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Our admissions team provides expert guidance on compiling and
            presenting your application materials effectively.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0049AC] hover:bg-[#003B95] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Contact Us for Document Guidance
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HonoraryDoctorateDocumentsSection;
