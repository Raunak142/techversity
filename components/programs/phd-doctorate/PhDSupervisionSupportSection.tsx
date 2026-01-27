"use client";

import { motion, Variants } from "framer-motion";
import {
  UserCheck,
  Users,
  CalendarCheck2,
  Library,
  Lightbulb,
  PenTool,
  TrendingUp,
} from "lucide-react";

const supportItems = [
  {
    icon: UserCheck,
    title: "Dedicated Dissertation Supervisor",
    description:
      "An experienced faculty member with expertise in your research area who guides your doctoral journey from proposal to defense.",
  },
  {
    icon: Users,
    title: "Supervisory Committee",
    description:
      "A panel of faculty members providing diverse academic perspectives, feedback, and subject-matter expertise.",
  },
  {
    icon: CalendarCheck2,
    title: "Regular Meetings",
    description:
      "Scheduled one-on-one meetings, progress reviews, and committee consultations to ensure steady research advancement.",
  },
  {
    icon: Library,
    title: "Research Resources",
    description:
      "Access to university libraries, academic journals, databases, research tools, and institutional support services.",
  },
  {
    icon: Users,
    title: "Peer Community",
    description:
      "Opportunities to connect with fellow doctoral candidates for collaboration, feedback, and mutual academic support.",
  },
  {
    icon: PenTool,
    title: "Writing & Research Training",
    description:
      "Workshops, seminars, and structured resources to strengthen research design, academic writing, and presentation skills.",
  },
  {
    icon: TrendingUp,
    title: "Career Development",
    description:
      "Guidance on academic career pathways, publishing strategies, conference participation, and job market preparation.",
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

export default function PhDSupervisionSupportSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 border-t border-gray-100">
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
            Supervision & Academic Support
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Successful PhD completion requires strong faculty mentorship,
            structured guidance, and comprehensive institutional support.
          </p>
        </motion.div>

        {/* Support Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {supportItems.map((item, index) => {
            const IconComponent = item.icon;
            // Span the last item if total is odd to fill the row on wide screens, optional aesthetic choice
            // Here simply mapping them.
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 ${
                  index === supportItems.length - 1
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                <div className="w-14 h-14 rounded-xl bg-[#0049AC]/10 group-hover:bg-[#0049AC] flex items-center justify-center mb-6 transition-colors duration-300">
                  <IconComponent className="w-7 h-7 text-[#0049AC] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0049AC] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
          {/* Fill last spot if needed or center ? No, grid-auto-flow handles it well enough */}
        </motion.div>
      </div>
    </section>
  );
}
