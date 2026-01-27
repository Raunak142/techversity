"use client";

import { motion, Variants } from "framer-motion";
import {
  MessageCircle,
  Building2,
  FileEdit,
  Send,
  ClipboardCheck,
  Video,
  CheckCircle,
  GraduationCap,
  ArrowRight,
  Clock,
} from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Free Consultation",
    description:
      "Discuss your background, research interests, career goals, and timeline with our admissions experts.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "University Matching",
    description:
      "We recommend the most suitable DBA program from our partner universities based on your profile and research interests.",
    icon: Building2,
  },
  {
    step: 3,
    title: "Application Preparation",
    description:
      "Our team assists with statement of purpose drafting, CV optimization, research interest articulation, and document preparation.",
    icon: FileEdit,
  },
  {
    step: 4,
    title: "Submit Application",
    description:
      "Techversity.ai submits your complete application package to the university admissions committee on your behalf.",
    icon: Send,
  },
  {
    step: 5,
    title: "Admissions Review",
    description:
      "The university evaluates your academic qualifications, professional experience, research potential, and overall program fit.",
    icon: ClipboardCheck,
  },
  {
    step: 6,
    title: "Interview (If Required)",
    description:
      "Participate in an admissions interview with faculty members or the admissions committee (varies by university).",
    icon: Video,
  },
  {
    step: 7,
    title: "Acceptance & Enrollment",
    description:
      "Upon acceptance, review program details, complete enrollment formalities, and arrange tuition payment.",
    icon: CheckCircle,
  },
  {
    step: 8,
    title: "Program Commencement",
    description:
      "Begin your DBA journey with orientation, initial coursework, and faculty introductions.",
    icon: GraduationCap,
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
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function DBAAdmissionProcessSection() {
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
            DBA Admission Process
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We guide you through every stage of the DBA application and
            enrollment process, ensuring clarity, transparency, and expert
            support.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mb-16"
        >
          {/* Desktop Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-[#0049AC] text-white flex items-center justify-center font-bold text-sm shadow-lg">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-5 group-hover:bg-[#0049AC]/10 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-[#0049AC]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#0049AC] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connector Line (Desktop) */}
                  {index < steps.length - 1 && index % 4 !== 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline Highlight & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Timeline Info */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#0049AC]/10 flex items-center justify-center">
                <Clock className="w-7 h-7 text-[#0049AC]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-1">
                  Admissions Decision Timeline
                </p>
                <p className="text-2xl lg:text-3xl font-bold text-gray-900">
                  2–4 weeks
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-[#0049AC] text-white font-semibold py-4 px-8 rounded-xl hover:bg-[#003d91] transition-colors duration-300 shadow-lg shadow-[#0049AC]/20"
            >
              Start Your DBA Application
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
