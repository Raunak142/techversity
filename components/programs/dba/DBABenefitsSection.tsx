"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Award,
  BarChart3,
  TrendingUp,
  Mic2,
  Globe2,
  Lightbulb,
  GraduationCap,
} from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Advanced Credibility & Authority",
    description:
      "Position yourself as a thought leader with terminal academic credentials that distinguish you from peers.",
  },
  {
    icon: BarChart3,
    title: "Research & Analytical Skills",
    description:
      "Master rigorous research methodologies, data analysis, and evidence-based decision-making for complex business challenges.",
  },
  {
    icon: TrendingUp,
    title: "Career Advancement",
    description:
      "Qualify for board positions, university teaching roles, senior consulting opportunities, and C-suite advancement.",
  },
  {
    icon: Mic2,
    title: "Thought Leadership Platform",
    description:
      "Publish research in academic journals, speak at conferences, and contribute influential insights to your industry.",
  },
  {
    icon: Globe2,
    title: "Global Network",
    description:
      "Connect with executive scholars, faculty researchers, and international business leaders.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Problem-Solving",
    description:
      "Develop frameworks for solving sophisticated organizational and industry-wide challenges.",
  },
  {
    icon: GraduationCap,
    title: "Personal Achievement",
    description:
      "Earn the highest academic credential in business and join a select global community of doctoral scholars.",
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

export default function DBABenefitsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Featured Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative h-[200px] md:h-[280px] w-full rounded-2xl overflow-hidden mb-12 shadow-xl"
        >
          <Image
            src="/images/image10.png"
            alt="Professionals celebrating success and career growth"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0049AC]/80 to-[#0049AC]/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <p className="text-xl md:text-2xl font-bold mb-2">
                Transform Your Career
              </p>
              <p className="text-sm md:text-base opacity-90">
                Unlock new opportunities with a DBA degree
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Earn a DBA?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            How a doctoral degree can transform your career and expand your
            impact.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
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
                className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#0049AC] to-[#0066CC] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0049AC] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
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
