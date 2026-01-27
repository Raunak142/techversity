"use client";

import { motion, Variants } from "framer-motion";
import {
  Award,
  BookOpen,
  Microscope,
  Lightbulb,
  Mic2,
  Users,
  BrainCircuit,
  Globe2,
} from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Expert Status & Credibility",
    description:
      "Earn the highest academic credential, establishing yourself as an expert and thought leader in your discipline.",
  },
  {
    icon: BookOpen,
    title: "Academic Career Pathway",
    description:
      "Qualify for tenure-track university roles, research fellowships, and professorships worldwide.",
  },
  {
    icon: Microscope,
    title: "Advanced Research Skills",
    description:
      "Master sophisticated research methodologies, critical analysis, theoretical frameworks, and scholarly communication.",
  },
  {
    icon: Lightbulb,
    title: "Contribution to Knowledge",
    description:
      "Produce original research that advances your field and benefits future scholars and practitioners.",
  },
  {
    icon: Mic2,
    title: "Publication & Speaking Opportunities",
    description:
      "Build a portfolio of peer-reviewed publications and present at international academic conferences.",
  },
  {
    icon: Users,
    title: "Network of Scholars",
    description:
      "Join a global community of researchers, faculty members, and fellow doctoral candidates.",
  },
  {
    icon: BrainCircuit,
    title: "Intellectual Fulfillment",
    description:
      "Engage deeply with meaningful ideas and achieve the satisfaction of scholarly accomplishment.",
  },
  {
    icon: Globe2,
    title: "Career Flexibility",
    description:
      "Open doors in academia, research, consulting, government, international organizations, and specialized industries.",
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function PhDBenefitsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
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
            Why Pursue a PhD?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            The personal, professional, and intellectual rewards of doctoral
            study.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.article
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 20px 40px -12px rgba(0, 0, 0, 0.15), 0 8px 20px -8px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group bg-gray-50 rounded-2xl p-6 shadow-sm border border-transparent hover:border-gray-100 hover:bg-white transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-[#0049AC]/10 group-hover:bg-[#0049AC] flex items-center justify-center mb-5 transition-colors duration-300">
                  <IconComponent className="w-7 h-7 text-[#0049AC] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#0049AC] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
