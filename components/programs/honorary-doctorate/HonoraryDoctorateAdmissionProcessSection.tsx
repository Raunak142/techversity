"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Phone,
  ClipboardCheck,
  FileText,
  Send,
  Search,
  CheckCircle,
  Package,
  ArrowRight,
  Headphones,
} from "lucide-react";

interface ProcessStep {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    step: 1,
    icon: <Phone className="w-5 h-5" />,
    title: "Initial Consultation",
    description:
      "Schedule a free consultation with our admissions team to discuss your background and eligibility via phone, video call, or WhatsApp.",
  },
  {
    step: 2,
    icon: <ClipboardCheck className="w-5 h-5" />,
    title: "Eligibility Assessment",
    description:
      "Our experts review your professional background, achievements, and career trajectory to determine the best program and university fit.",
  },
  {
    step: 3,
    icon: <FileText className="w-5 h-5" />,
    title: "Document Preparation",
    description:
      "We guide you through gathering and organizing all required documents to ensure your achievements are presented effectively.",
  },
  {
    step: 4,
    icon: <Send className="w-5 h-5" />,
    title: "Application Submission",
    description:
      "Techversity.ai submits your complete application package to the selected university on your behalf.",
  },
  {
    step: 5,
    icon: <Search className="w-5 h-5" />,
    title: "University Review",
    description:
      "The university's honorary awards committee evaluates your credentials, contributions, and professional impact.",
  },
  {
    step: 6,
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Approval & Conferral",
    description:
      "Upon approval, you receive official notification and conferral documentation from the university.",
  },
  {
    step: 7,
    icon: <Package className="w-5 h-5" />,
    title: "Receive Credentials",
    description:
      "Your official honorary doctorate certificate and supporting documents are delivered via secure courier.",
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
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const HonoraryDoctorateAdmissionProcessSection: React.FC = () => {
  return (
    <section id="admission" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Step-by-Step Admission Process
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We've made applying for an honorary doctorate simple, transparent,
            and fully supported at every stage.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start gap-6"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 shrink-0 w-12 md:w-16 h-12 md:h-16 rounded-full bg-[#0049AC] flex items-center justify-center text-white shadow-lg">
                  <span className="text-lg md:text-xl font-bold">
                    {step.step}
                  </span>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-[#0049AC]/20 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#0049AC]">{step.icon}</span>
                    <h3 className="text-lg font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ongoing Support Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 p-6 bg-[#0049AC]/5 border border-[#0049AC]/20 rounded-xl"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-full bg-[#0049AC] flex items-center justify-center">
              <Headphones className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Ongoing Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team remains available throughout the entire process to
                answer questions and provide timely updates.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0049AC] hover:bg-[#003B95] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Begin Your Application
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HonoraryDoctorateAdmissionProcessSection;
