"use client";

import { motion, Variants } from "framer-motion";
import {
  FileText,
  ScrollText,
  PenTool,
  Briefcase,
  Users,
  BookOpen,
  Languages,
  CreditCard,
  MessageCircle,
  ArrowRight,
  LifeBuoy,
} from "lucide-react";
import Link from "next/link";

const requirements = [
  {
    icon: FileText,
    title: "Academic Transcripts",
    description:
      "Official transcripts from all post-secondary institutions, including bachelor’s and master’s degrees.",
  },
  {
    icon: ScrollText,
    title: "Research Proposal",
    description:
      "A detailed proposal (2000–3000 words) outlining your research question, methodology, significance, and contribution to the field.",
  },
  {
    icon: PenTool,
    title: "Statement of Purpose",
    description:
      "A personal statement explaining your academic background, research interests, career goals, and motivation for pursuing a PhD.",
  },
  {
    icon: Briefcase,
    title: "Curriculum Vitae (CV)",
    description:
      "An academic CV highlighting education, research experience, publications, presentations, awards, and relevant professional work.",
  },
  {
    icon: Users,
    title: "Academic References",
    description:
      "Three letters of recommendation from professors, research supervisors, or academic mentors who can assess your research potential.",
  },
  {
    icon: BookOpen,
    title: "Writing Sample",
    description:
      "A published paper, master’s thesis excerpt, or substantial research paper demonstrating scholarly writing ability.",
  },
  {
    icon: Languages,
    title: "English Language Proficiency",
    description:
      "TOEFL, IELTS, or equivalent scores for non-native English speakers (requirements vary by university).",
  },
  {
    icon: CreditCard,
    title: "Valid Identification",
    description: "Passport or government-issued identification.",
  },
  {
    icon: MessageCircle,
    title: "Interview",
    description:
      "Most programs require an interview with faculty or the admissions committee to assess research fit.",
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

export default function PhDDocumentsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white text-gray-900 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black leading-tight">
            PhD Application Requirements
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Doctoral admissions are highly competitive and require thorough
            documentation of academic preparation, research readiness, and
            scholarly potential.
          </p>
        </motion.div>

        {/* Requirements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {requirements.map((req, index) => {
            const IconComponent = req.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#0049AC]/10 group-hover:bg-[#0049AC] flex items-center justify-center transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-[#0049AC] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-[#0049AC] transition-colors">
                      {req.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {req.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Support Block & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-[#001F3F] rounded-2xl p-8 lg:p-12 text-center text-white relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
              <LifeBuoy className="w-4 h-4" />
              <span>Application Support</span>
            </div>

            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Techversity.ai provides expert guidance on developing strong
              research proposals, refining statements of purpose, and presenting
              your academic profile effectively.
            </p>

            <Link href="/contact" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#001F3F] font-bold rounded-xl shadow-lg hover:shadow-white/20 transition-all flex items-center gap-2"
              >
                Get PhD Application Support
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
