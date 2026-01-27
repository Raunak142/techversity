"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Lightbulb,
  Users,
  Target,
  GraduationCap,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const candidateProfiles = [
  {
    title: "C-Suite Executives",
    description:
      "CEOs, CFOs, COOs, and senior executives seeking to deepen strategic and analytical capabilities.",
    icon: Briefcase,
  },
  {
    title: "Business Owners & Entrepreneurs",
    description:
      "Founders who want to formalize expertise, contribute research, and gain academic credentials.",
    icon: Lightbulb,
  },
  {
    title: "Senior Consultants",
    description:
      "Experienced consultants aiming to strengthen thought leadership and consulting credibility.",
    icon: Users,
  },
  {
    title: "Industry Specialists",
    description:
      "Professionals with deep domain expertise seeking to research, publish, and influence their field.",
    icon: Target,
  },
  {
    title: "Aspiring Academics",
    description:
      "Business leaders considering future teaching, publishing, or advisory board roles.",
    icon: GraduationCap,
  },
  {
    title: "Policy & Strategy Leaders",
    description:
      "Individuals involved in high-level strategy, policy development, or organizational transformation.",
    icon: TrendingUp,
  },
];

const requirements = [
  "Master's degree (MBA or related field)",
  "5–10+ years of senior-level professional experience",
  "Demonstrated leadership track record",
  "Commitment to research and academic writing",
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

const cardVariants = {
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

export default function DBAAudienceSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Who Should Pursue a DBA?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The DBA is ideal for accomplished professionals who are ready to
            make scholarly contributions to business knowledge while advancing
            their leadership careers.
          </p>
        </motion.div>

        {/* Candidate Profiles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {candidateProfiles.map((profile, index) => {
            const IconComponent = profile.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0049AC]/10 flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-[#0049AC]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {profile.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {profile.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Typical Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 mb-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Typical Requirements
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {requirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-center gap-2 px-5 py-3 bg-gray-50 rounded-full border border-gray-200"
              >
                <CheckCircle className="w-5 h-5 text-[#0049AC] flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm">
                  {requirement}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/eligibility"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0049AC] hover:bg-[#003B95] text-white font-bold rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Check Your Eligibility
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
