"use client";

import { motion, Variants } from "framer-motion";
import {
  FileText,
  BookOpen,
  PenTool,
  Award,
  Clock,
  ArrowRight,
} from "lucide-react";

const timelinePhases = [
  {
    months: "Months 1–6",
    title: "Admissions & Enrollment",
    description:
      "Application submission, document review, acceptance, and program commencement.",
    icon: FileText,
  },
  {
    months: "Months 6–18",
    title: "Coursework & Research Training",
    description:
      "Complete required courses while identifying and refining your research focus area.",
    icon: BookOpen,
  },
  {
    months: "Months 12–30",
    title: "Dissertation Development",
    description:
      "Proposal development, research design, data collection, and analysis.",
    icon: PenTool,
  },
  {
    months: "Months 30–36",
    title: "Writing & Defense",
    description:
      "Dissertation writing, faculty review, revisions, and final defense.",
    icon: Award,
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

export default function DBATimelineSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
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
            DBA Timeline
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            While program lengths vary, most working professionals complete
            their DBA in{" "}
            <span className="font-semibold text-gray-900">2–3 years</span>.
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
                  <div className="flex-1 bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <span className="inline-block text-sm font-semibold text-[#0049AC] uppercase tracking-wide mb-2">
                      {phase.months}
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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#0049AC]/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#0049AC]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Total Time Commitment
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Expect to invest{" "}
                <span className="font-semibold text-gray-900">
                  15–25 hours per week
                </span>{" "}
                on coursework, research, reading, and writing throughout the
                program.
              </p>
            </motion.div>

            {/* Flexible Pacing Note */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-100 rounded-2xl p-6 lg:p-8"
            >
              <h4 className="font-semibold text-gray-900 mb-3">
                Flexible Pacing
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                Many universities offer{" "}
                <span className="font-medium text-gray-800">
                  accelerated or extended timelines
                </span>{" "}
                based on your professional commitments and research progress.
              </p>
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
                className="w-full flex items-center justify-center gap-2 bg-[#0049AC] text-white font-semibold py-4 px-6 rounded-xl hover:bg-[#003d91] transition-colors duration-300 shadow-lg shadow-[#0049AC]/20"
              >
                Discuss Timeline Options
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
