"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  BookOpen,
  FileText,
  Send,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Initial Consultation",
    description:
      "Speak with our admissions experts to discuss your goals, qualifications, and the right program fit. Free, no-obligation consultation available via call or WhatsApp.",
    icon: MessageCircle,
  },
  {
    id: 2,
    title: "Program Selection",
    description:
      "Choose from Honorary Doctorate, DBA, PhD, or upcoming Master’s programs based on your career stage and objectives.",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Document Preparation",
    description:
      "We guide you through document requirements including CV, certifications, and supporting materials. Our team reviews everything before submission.",
    icon: FileText,
  },
  {
    id: 4,
    title: "University Application",
    description:
      "We submit your complete application to our partner universities and coordinate directly with admissions offices on your behalf.",
    icon: Send,
  },
  {
    id: 5,
    title: "Enrollment & Commencement",
    description:
      "Upon acceptance, complete payment and begin your program. Receive ongoing support throughout your academic journey.",
    icon: GraduationCap,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger effect for children
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const lineVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 1.5, delay: 0.5 },
  },
};

const HowItWorksSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gray-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
          className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Journey to Academic Excellence
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            We’ve streamlined the admissions process to make your educational
            advancement simple, transparent, and stress-free.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 relative"
        >
          {/* Connecting Line (Desktop Only) */}
          <motion.div
            variants={lineVariants}
            className="hidden xl:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gray-200 -z-10 origin-left"
          ></motion.div>

          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Step Number Badge */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 rounded-full bg-white border-4 border-blue-50 shadow-sm flex items-center justify-center mb-6 group-hover:border-blue-100 group-hover:shadow-md transition-all duration-300 relative z-10"
              >
                <step.icon className="w-8 h-8 text-[#0049AC] transition-transform duration-300" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0049AC] text-white flex items-center justify-center text-sm font-bold shadow-sm">
                  {step.id}
                </div>
              </motion.div>

              {/* Content Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full w-full flex flex-col hover:-translate-y-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0049AC] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0049AC] text-white rounded-full font-bold text-lg hover:bg-[#003B95] hover:shadow-lg hover:scale-105 transition-all duration-300 group"
          >
            Ready to Get Started? Apply Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
