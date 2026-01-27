"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Info } from "lucide-react";

interface TimelineStep {
  week: string;
  title: string;
  description: string;
}

const timelineSteps: TimelineStep[] = [
  {
    week: "Week 1–2",
    title: "Application & Review",
    description:
      "Submit your application with supporting documents. Our team reviews and submits your profile to the university.",
  },
  {
    week: "Week 3–4",
    title: "University Assessment",
    description:
      "The university evaluates your professional achievements, publications, contributions, and overall impact.",
  },
  {
    week: "Week 4–6",
    title: "Decision & Conferral",
    description:
      "Upon approval, receive official conferral confirmation and honorary doctorate documentation.",
  },
  {
    week: "Week 6–8",
    title: "Certification Delivery",
    description:
      "Receive official certificate, transcript, and documentation via secure courier.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const HonoraryDoctorateTimelineSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Application Timeline
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The honorary doctorate application process is designed to be
            straightforward and efficient.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0049AC] via-[#0049AC]/50 to-gray-200 transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-start gap-6 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Marker */}
                <div className="absolute left-6 md:left-1/2 w-12 h-12 bg-[#0049AC] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transform -translate-x-1/2 z-10">
                  {index + 1}
                </div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <span className="inline-block px-3 py-1 bg-[#0049AC]/10 text-[#0049AC] text-sm font-semibold rounded-full mb-3">
                    {step.week}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Total Timeline Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-[#0049AC] rounded-full text-white shadow-lg">
            <Clock className="w-6 h-6" />
            <span className="text-lg font-bold">
              Total Timeline: 4–8 weeks on average
            </span>
          </div>
        </motion.div>

        {/* Note Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 p-5 bg-amber-50 border border-amber-200 rounded-xl"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <Info className="w-5 h-5 text-amber-600" />
            </div>
            <p className="text-amber-800 text-sm leading-relaxed">
              <span className="font-semibold">Note:</span> Timelines may vary
              depending on university processing times and document verification
              requirements.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0049AC] hover:bg-[#003B95] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Start Your Application Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HonoraryDoctorateTimelineSection;
