"use client";

import { motion, Variants } from "framer-motion";
import {
  BookOpen,
  FileSearch,
  PenTool,
  Award,
  Monitor,
  MapPin,
  Clock,
  Video,
} from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    title: "Foundational Coursework",
    duration: "6–12 months",
    description:
      "Advanced courses in research methodology, business theory, quantitative and qualitative analysis, and specialized electives aligned with your research interests.",
    icon: BookOpen,
  },
  {
    phase: "Phase 2",
    title: "Research Development",
    duration: "6–12 months",
    description:
      "Develop your research proposal, identify your dissertation topic, complete literature reviews, and design your research methodology under faculty guidance.",
    icon: FileSearch,
  },
  {
    phase: "Phase 3",
    title: "Dissertation Research",
    duration: "12–24 months",
    description:
      "Conduct original research, collect and analyze data, and write your dissertation with regular supervision and feedback from your dissertation committee.",
    icon: PenTool,
  },
  {
    phase: "Phase 4",
    title: "Defense & Graduation",
    duration: "1–3 months",
    description:
      "Present and defend your dissertation before an academic committee. Upon successful defense, earn your DBA degree.",
    icon: Award,
  },
];

const deliveryFeatures = [
  {
    icon: Monitor,
    text: "Primarily online / distance learning",
  },
  {
    icon: MapPin,
    text: "Optional in-person residencies or workshops (varies by university)",
  },
  {
    icon: Clock,
    text: "Flexible scheduling for working professionals",
  },
  {
    icon: Video,
    text: "Regular faculty interaction via video conferencing",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
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

const deliveryVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function DBAProgramStructureSection() {
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
            Program Structure & Curriculum
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            DBA programs combine coursework, research training, and dissertation
            work in a flexible format designed for working professionals.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mb-20"
        >
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2" />

          {phases.map((phase, index) => {
            const IconComponent = phase.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col lg:flex-row items-center mb-12 lg:mb-16 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div
                  className={`w-full lg:w-5/12 ${
                    isEven ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:text-left"
                  }`}
                >
                  <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300">
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        isEven ? "lg:justify-end" : "lg:justify-start"
                      }`}
                    >
                      <span className="text-sm font-semibold text-[#0049AC] uppercase tracking-wide">
                        {phase.phase}
                      </span>
                      <span className="text-sm text-gray-500">
                        ({phase.duration})
                      </span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node - Desktop */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-white border-4 border-[#0049AC] items-center justify-center shadow-md z-10">
                  <IconComponent className="w-6 h-6 text-[#0049AC]" />
                </div>

                {/* Mobile Icon */}
                <div className="lg:hidden flex w-12 h-12 rounded-full bg-[#0049AC] items-center justify-center mb-4">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Program Delivery Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            Program Delivery
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6 mb-10"
          >
            {deliveryFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={deliveryVariants}
                  className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-[#0049AC]/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-[#0049AC]" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Total Duration Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center bg-linear-to-r from-[#0049AC] to-[#0066CC] rounded-xl p-6 lg:p-8"
          >
            <p className="text-white text-lg lg:text-xl font-semibold">
              Total Duration: 18–36 months
            </p>
            <p className="text-white/80 text-sm mt-1">
              (varies by university and student pace)
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
