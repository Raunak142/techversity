"use client";

import { motion, Variants } from "framer-motion";
import {
  BookOpen,
  FileCheck,
  Microscope,
  PenTool,
  GraduationCap,
  Briefcase,
  Monitor,
  Globe2,
  Clock,
} from "lucide-react";

const phases = [
  {
    phase: "Year 1",
    title: "Coursework & Foundations",
    description:
      "Complete advanced coursework in your field, research methodology, theoretical frameworks, and specialized topics. Begin refining potential research questions.",
    icon: BookOpen,
  },
  {
    phase: "Year 2",
    title: "Comprehensive Exams & Proposal",
    description:
      "Pass comprehensive examinations demonstrating mastery of your discipline. Develop and defend your dissertation proposal before a faculty committee.",
    icon: FileCheck,
  },
  {
    phase: "Years 2–4",
    title: "Dissertation Research",
    description:
      "Conduct original research, collect and analyze data, and work closely with your dissertation supervisor and committee.",
    icon: Microscope,
  },
  {
    phase: "Years 4–5",
    title: "Writing & Defense",
    description:
      "Write your dissertation, complete faculty reviews and revisions, and defend your research before an examination committee.",
    icon: PenTool,
  },
  {
    phase: "Post-Defense",
    title: "Graduation",
    description:
      "Make final revisions, submit your dissertation, and graduate with your doctoral degree.",
    icon: GraduationCap,
  },
];

const programFormats = [
  {
    icon: Briefcase,
    text: "Full-time or part-time enrollment",
  },
  {
    icon: Monitor,
    text: "On-campus, online, or hybrid delivery models",
  },
  {
    icon: Globe2,
    text: "Distance learning options for working professionals",
  },
  {
    icon: Clock,
    text: "Flexible timelines (varies by university)",
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

export default function PhDProgramStructureSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
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
            PhD Program Structure
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            While specific structures vary by university and discipline, most
            PhD programs follow a similar progression designed to build deep
            expertise and original research capability.
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

        {/* Program Formats & Duration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Program Formats
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {programFormats.map((format, index) => {
                const Icon = format.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#0049AC]/10 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-[#0049AC]" />
                    </div>
                    <div className="text-gray-700 font-medium text-sm">
                      {format.text}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Duration Highlight */}
            <div className="inline-block bg-linear-to-r from-[#0049AC] to-[#0066CC] rounded-xl px-8 py-4 text-white shadow-lg shadow-[#0049AC]/20">
              <span className="font-bold block text-lg mb-1">
                Typical Duration: 3–5 years
              </span>
              <span className="text-blue-100 text-sm">
                (varies by field, university, and student pace)
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
