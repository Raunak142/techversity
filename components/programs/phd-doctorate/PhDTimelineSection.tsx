"use client";

import { motion, Variants } from "framer-motion";
import {
  BookOpen,
  FileCheck,
  Search,
  PenTool,
  Award,
  Calendar,
  Clock,
  ArrowRight,
  Gauge,
} from "lucide-react";

const timelinePhases = [
  {
    period: "Months 1–12",
    title: "Coursework Phase",
    description:
      "Intensive advanced coursework, seminars, and research training.",
    icon: BookOpen,
  },
  {
    period: "Months 12–18",
    title: "Comprehensive Exams",
    description:
      "Preparation for and completion of comprehensive or qualifying examinations.",
    icon: FileCheck,
  },
  {
    period: "Months 18–24",
    title: "Proposal Development",
    description:
      "Research question refinement, literature review, methodology design, and proposal defense.",
    icon: Search,
  },
  {
    period: "Months 24–48",
    title: "Research & Data Collection",
    description:
      "Conduct original research, gather data, and perform ongoing analysis under faculty supervision.",
    icon: Calendar,
  },
  {
    period: "Months 48–60",
    title: "Dissertation Writing",
    description:
      "Write dissertation chapters, incorporate faculty feedback, and complete revisions.",
    icon: PenTool,
  },
  {
    period: "Months 60+",
    title: "Final Defense",
    description:
      "Defend your dissertation, complete final revisions, and graduate.",
    icon: Award,
  },
];

const factors = [
  "Research complexity",
  "Data collection requirements",
  "Field-of-study norms",
  "Individual pace and circumstances",
  "Faculty availability",
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

export default function PhDTimelineSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 border-t border-gray-200">
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
            PhD Timeline
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Doctoral programs require a substantial time commitment and deep
            intellectual dedication.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 relative"
          >
            {/* Vertical Line */}
            <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

            {timelinePhases.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex gap-6 lg:gap-8 mb-10 last:mb-0"
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white border-4 border-[#0049AC] flex items-center justify-center shadow-md">
                    <IconComponent className="w-5 h-5 lg:w-6 lg:h-6 text-[#0049AC]" />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <span className="inline-block text-sm font-semibold text-[#0049AC] uppercase tracking-wide mb-2">
                      {phase.period}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Time Commitment Callout */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0049AC]/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#0049AC]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Time Commitment
                </h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <span className="block text-sm text-gray-500 font-medium mb-1">
                    Full-time students
                  </span>
                  <span className="block text-xl font-bold text-gray-900">
                    40–60 hours/week
                  </span>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <span className="block text-sm text-gray-500 font-medium mb-1">
                    Part-time students
                  </span>
                  <span className="block text-xl font-bold text-gray-900">
                    20–30 hours/week
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Factors Affecting Duration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#0049AC] rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden"
            >
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Gauge className="w-6 h-6 text-blue-200" />
                  <h3 className="text-lg font-bold">
                    Factors Affecting Duration
                  </h3>
                </div>
                <ul className="space-y-3">
                  {factors.map((factor, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-300 shrink-0" />
                      <span className="text-blue-50 text-sm leading-relaxed">
                        {factor}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-white text-[#0049AC] font-bold py-4 px-6 rounded-xl border-2 border-[#0049AC] hover:bg-blue-50 transition-colors duration-300"
              >
                Discuss PhD Timelines
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
