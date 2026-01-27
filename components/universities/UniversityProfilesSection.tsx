"use client";

import { motion } from "framer-motion";
import UniversityProfileCard from "./UniversityProfileCard";
import { universities } from "./universityData";

export default function UniversityProfilesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Partner Universities
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Globally recognized institutions offering doctoral programs through
            Techversity.ai.
          </p>
        </motion.div>

        {/* Universities List */}
        <div>
          {universities.map((uni, index) => (
            <UniversityProfileCard
              key={uni.id}
              university={uni}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
