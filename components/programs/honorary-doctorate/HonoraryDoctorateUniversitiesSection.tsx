"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, ExternalLink, MapPin, ArrowRight } from "lucide-react";

interface University {
  name: string;
  country: string;
  website: string;
  websiteDisplay: string;
}

const universities: University[] = [
  {
    name: "CC University",
    country: "USA",
    website: "https://ccuniversity.us",
    websiteDisplay: "ccuniversity.us",
  },
  {
    name: "Washington Digital University",
    country: "USA",
    website: "https://washingtondigitaluniversity.us",
    websiteDisplay: "washingtondigitaluniversity.us",
  },
  {
    name: "Euro-Asian University",
    country: "Estonia",
    website: "https://euroasianuniversity.ee",
    websiteDisplay: "euroasianuniversity.ee",
  },
  {
    name: "European School of Data Science and Technology",
    country: "EU",
    website: "https://esdst.eu",
    websiteDisplay: "esdst.eu",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const HonoraryDoctorateUniversitiesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Available Universities
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Techversity.ai partners with multiple accredited institutions
            offering honorary doctorate programs.
          </p>
        </motion.div>

        {/* Universities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        >
          {universities.map((university, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-gray-50 hover:bg-white rounded-xl p-6 border border-gray-100 hover:border-[#0049AC]/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-[#0049AC]/10 group-hover:bg-[#0049AC] flex items-center justify-center text-[#0049AC] group-hover:text-white transition-all duration-300">
                  <Building2 className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {university.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{university.country}</span>
                  </div>
                  <a
                    href={university.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#0049AC] hover:text-[#003B95] text-sm font-medium transition-colors"
                  >
                    {university.websiteDisplay}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Supporting Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Each university has unique requirements and conferral criteria. Our
          admissions team recommends the best fit based on your professional
          background and location.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href="/universities"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0049AC] hover:bg-[#003B95] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              View All Universities
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HonoraryDoctorateUniversitiesSection;
