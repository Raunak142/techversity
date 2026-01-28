"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Globe,
  Users,
  TrendingUp,
  Heart,
  Mic,
  Star,
} from "lucide-react";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Enhanced Professional Credibility",
    description:
      "Add a prestigious academic title to your name, strengthening authority in business, consulting, speaking, and advisory roles.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Recognition",
    description:
      "An honorary doctorate from an accredited institution provides international recognition beyond geographic boundaries.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expanded Networking Opportunities",
    description:
      "Join an exclusive community of honorees and university alumni, creating valuable global connections.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Career Advancement",
    description:
      "Formalize your expertise for board positions, advisory roles, international opportunities, and high-level consulting engagements.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Personal Achievement",
    description:
      "Celebrate your life's work with formal recognition from an established academic institution.",
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Credibility in Publishing & Speaking",
    description:
      "Use your honorary title when publishing books, articles, or speaking at conferences and industry events.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Legacy Building",
    description:
      "Create a lasting legacy of achievement recognized by academia and your professional community.",
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const HonoraryDoctorateBenefitsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-[#0049AC]/5 via-white to-purple-50">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Featured Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative h-[200px] md:h-[280px] w-full rounded-2xl overflow-hidden mb-12 shadow-xl"
        >
          <Image
            src="/images/passout.png"
            alt="Distinguished professional receiving academic recognition"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0049AC]/80 to-[#0049AC]/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <p className="text-xl md:text-2xl font-bold mb-2">
                Recognition You Deserve
              </p>
              <p className="text-sm md:text-base opacity-90">
                Formalize your legacy with academic honor
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#0049AC]/10 text-[#0049AC] text-sm font-semibold rounded-full mb-4">
            Why Choose This Program
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Benefits of an Honorary Doctorate
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            How formal academic recognition can advance your professional and
            personal goals.
          </p>
        </motion.div>

        {/* Benefits List - Alternating Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex items-start gap-5 bg-white rounded-xl p-5 border border-gray-100 hover:border-[#0049AC]/30 hover:shadow-md transition-all duration-300"
            >
              {/* Number Badge */}
              <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#0049AC] to-[#003B95] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#0049AC]">{benefit.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HonoraryDoctorateBenefitsSection;
