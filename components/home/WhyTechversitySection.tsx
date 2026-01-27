"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  Building2,
  Search,
  Users,
  Clock,
  Globe,
  Layers,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Expert Admissions Guidance",
    description:
      "Dedicated advisors with deep knowledge of international higher education requirements and processes.",
    icon: UserCheck,
  },
  {
    id: 2,
    title: "Accredited University Partners",
    description:
      "We work exclusively with established, accredited institutions across the US, Europe, and beyond.",
    icon: Building2,
  },
  {
    id: 3,
    title: "Transparent Process",
    description:
      "No hidden fees or surprises. Clear timelines and honest program assessments from day one.",
    icon: Search,
  },
  {
    id: 4,
    title: "Personalized Service",
    description:
      "One-on-one support tailored to your background, goals, and timeline — not a faceless marketplace.",
    icon: Users,
  },
  {
    id: 5,
    title: "Fast Response Times",
    description:
      "Get answers within 24 hours via WhatsApp, email, or scheduled calls.",
    icon: Clock,
  },
  {
    id: 6,
    title: "Global Accessibility",
    description:
      "Designed for busy professionals in the US, UK, and worldwide with flexible consultation hours.",
    icon: Globe,
  },
  {
    id: 7,
    title: "End-to-End Support",
    description:
      "From initial inquiry through graduation, we support you at every stage of your academic journey.",
    icon: Layers,
  },
  {
    id: 8,
    title: "Results-Driven",
    description:
      "Our success is measured by your success. We’ve helped hundreds of professionals achieve their educational goals.",
    icon: TrendingUp,
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const WhyTechversitySection = () => {
  return (
    <section className="py-20 md:py-32 bg-[#F5F5F7] overflow-hidden">
      <div className="container mx-auto px-8 lg:px-32">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Why Choose Techversity.ai
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-600 text-lg md:text-xl leading-relaxed"
          >
            We’re more than an admissions service — we’re your trusted partner
            in educational advancement.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="group flex gap-6 items-start p-6 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-gray-100"
            >
              {/* Icon Circle */}
              <div className="shrink-0 w-16 h-16 rounded-full bg-[#1C1C1E] relative overflow-hidden flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-500 ease-out">
                {/* Icon 1: Visible by default, slides out to right on hover */}
                <feature.icon
                  className="w-7 h-7 absolute transition-transform duration-500 ease-in-out group-hover:translate-x-16"
                  strokeWidth={1.5}
                />
                {/* Icon 2: Hidden to left, slides in to center on hover */}
                <feature.icon
                  className="w-7 h-7 absolute transition-transform duration-500 ease-in-out -translate-x-16 group-hover:translate-x-0"
                  strokeWidth={1.5}
                />
              </div>

              {/* Text */}
              <div className="pt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0049AC] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTechversitySection;
