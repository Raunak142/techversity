"use client";

import { motion, Variants } from "framer-motion";
import {
  MessageCircle,
  Search,
  Landmark,
  FileEdit,
  Send,
  UserCheck,
  Users,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
  Clock,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "Discuss your research interests, academic background, career aspirations, and program preferences with our PhD admissions specialists.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "Research Interest Development",
    description:
      "Refine your research questions and identify potential faculty supervisors aligned with your academic interests.",
    icon: Search,
  },
  {
    step: 3,
    title: "University & Program Selection",
    description:
      "We recommend suitable PhD programs from our partner universities based on your discipline, research focus, and goals.",
    icon: Landmark,
  },
  {
    step: 4,
    title: "Application Preparation",
    description:
      "Our team provides expert feedback on your research proposal, statement of purpose, CV, and supporting documents.",
    icon: FileEdit,
  },
  {
    step: 5,
    title: "Application Submission",
    description:
      "Techversity.ai submits your complete application package to the university’s PhD admissions committee.",
    icon: Send,
  },
  {
    step: 6,
    title: "Faculty Review",
    description:
      "Academic departments assess applications for research potential, academic preparation, and program fit.",
    icon: UserCheck,
  },
  {
    step: 7,
    title: "Interview",
    description:
      "Participate in interviews with potential supervisors and admissions committees to discuss your research interests.",
    icon: Users,
  },
  {
    step: 8,
    title: "Offer & Enrollment",
    description:
      "Upon acceptance, review offer terms, supervision arrangements, and complete enrollment formalities.",
    icon: CheckCircle2,
  },
  {
    step: 9,
    title: "Program Commencement",
    description:
      "Begin your doctoral studies with orientation sessions, supervisor meetings, and initial coursework.",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function PhDAdmissionProcessSection() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            PhD Admission Process
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We support you through every stage of the doctoral admissions
            journey, from refining your research interests to enrolling in your
            chosen program.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                {/* Step Badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#0049AC] text-white rounded-xl flex items-center justify-center font-bold shadow-lg shadow-[#0049AC]/20">
                  {step.step}
                </div>

                <div className="w-14 h-14 rounded-full bg-[#0049AC]/5 group-hover:bg-[#0049AC]/10 flex items-center justify-center mb-6 transition-colors duration-300">
                  <IconComponent className="w-7 h-7 text-[#0049AC] transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0049AC] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Info & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center text-center gap-8"
        >
          {/* Timeline Highlight */}
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 text-[#0049AC]">
            <Clock className="w-5 h-5" />
            <span className="font-semibold text-sm md:text-base">
              Typical Admissions Timeline: 4–8 weeks from submission to decision
            </span>
          </div>

          {/* CTA Button */}
          <Link href="/apply/phd">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#0049AC] text-white font-bold rounded-xl shadow-lg shadow-[#0049AC]/20 hover:bg-[#003d91] transition-all flex items-center gap-2"
            >
              Start Your PhD Application
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
