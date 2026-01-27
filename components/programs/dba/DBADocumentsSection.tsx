"use client";

import { motion, Variants } from "framer-motion";
import {
  FileText,
  Briefcase,
  PenTool,
  Lightbulb,
  Users,
  Languages,
  CreditCard,
  MessageSquare,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

const documents = [
  {
    icon: FileText,
    title: "Master's Degree Transcript",
    description:
      "Official transcripts from an accredited MBA or related master's program. Minimum GPA requirements vary by university.",
  },
  {
    icon: Briefcase,
    title: "Comprehensive CV / Resume",
    description:
      "Detailed professional history highlighting leadership roles, achievements, and career progression.",
  },
  {
    icon: PenTool,
    title: "Statement of Purpose",
    description:
      "A written statement (1000–1500 words) outlining research interests, career goals, and motivation for pursuing a DBA.",
  },
  {
    icon: Lightbulb,
    title: "Research Proposal (Optional / Preferred)",
    description:
      "Preliminary ideas about potential research topics or business problems you wish to investigate.",
  },
  {
    icon: Users,
    title: "Professional References",
    description:
      "2–3 academic or professional references who can speak to your qualifications and research potential.",
  },
  {
    icon: Languages,
    title: "English Proficiency (if applicable)",
    description:
      "TOEFL, IELTS, or equivalent scores for non-native English speakers (requirements vary by university).",
  },
  {
    icon: CreditCard,
    title: "Valid Identification",
    description: "Passport or government-issued identification.",
  },
  {
    icon: MessageSquare,
    title: "Interview (if required)",
    description:
      "Some programs include an admissions interview to assess research interests and program fit.",
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

export default function DBADocumentsSection() {
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
            Application Requirements
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            DBA admission is competitive and requires comprehensive
            documentation of your academic and professional background.
          </p>
        </motion.div>

        {/* Documents Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {documents.map((doc, index) => {
            const IconComponent = doc.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#0049AC]/10 flex items-center justify-center group-hover:bg-[#0049AC] transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-[#0049AC] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#0049AC] transition-colors duration-300">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {doc.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Support Message & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#0049AC]/10 flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-[#0049AC]" />
            </div>
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Need application support?
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Our admissions team helps you compile strong, well-presented
            applications that effectively highlight your qualifications.
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-[#0049AC] text-white font-semibold py-4 px-8 rounded-xl hover:bg-[#003d91] transition-colors duration-300 shadow-lg shadow-[#0049AC]/20"
          >
            Get Application Help
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
