"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";

const universities = [
  {
    name: "CC University",
    location: "United States",
    website: "ccuniversity.us",
    image:
      "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // US Campus
    programs: ["Honorary Doctorate", "DBA", "PhD Programs"],
    link: "https://ccuniversity.us",
  },
  {
    name: "Washington Digital University",
    location: "United States",
    website: "washingtondigitaluniversity.us",
    image:
      "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Modern US building
    programs: ["Honorary Doctorate", "DBA", "PhD Programs"],
    link: "https://washingtondigitaluniversity.us",
  },
  {
    name: "Euro-Asian University",
    location: "Estonia, Europe",
    website: "euroasianuniversity.ee",
    image:
      "https://images.pexels.com/photos/208321/pexels-photo-208321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // European architecture
    programs: ["Honorary Doctorate", "DBA", "PhD Programs"],
    link: "https://euroasianuniversity.ee",
  },
  {
    name: "European School of Data Science and Technology",
    location: "European Union",
    website: "esdst.eu",
    image:
      "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Tech/Modern European
    programs: ["Honorary Doctorate", "DBA", "PhD Programs"],
    link: "https://esdst.eu",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const UniversityPartners = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-[#003B95]/50 overflow-hidden">
      {/* Decorative Background - slightly different from OurPrograms */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Our University Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto"
          >
            Techversity.ai has established partnerships with accredited
            universities offering flexible, recognized programs for working
            professionals.
          </motion.p>
        </div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {universities.map((uni, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-none shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-transparent hover:border-[#0049AC] flex flex-col h-full"
            >
              {/* Image Area */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={uni.image}
                  alt={uni.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>

                {/* Location Badge */}
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 text-xs text-white">
                  <MapPin className="w-3 h-3" />
                  {uni.location}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0049AC] transition-colors leading-snug">
                  {uni.name}
                </h3>

                <a
                  href={`https://${uni.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 mb-4 flex items-center gap-1 hover:underline"
                >
                  <Globe className="w-3 h-3" />
                  {uni.website}
                </a>

                <div className="border-t border-gray-100 pt-4 mb-6 grow">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Available Programs:
                  </p>
                  <ul className="space-y-1.5">
                    {uni.programs.map((program, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-700 flex items-start gap-2"
                      >
                        <span className="text-[#0049AC] mt-1">●</span> {program}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={uni.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-wider group-hover:text-[#0049AC] group-hover:gap-3 transition-all mt-auto self-start"
                >
                  View Programs <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-blue-200/80 max-w-3xl mx-auto mb-10 leading-relaxed italic">
            * All partner universities operate independently and maintain their
            own accreditation and academic standards. Techversity.ai facilitates
            admissions and provides advisory services.
          </p>

          {/* CTA Block */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0049AC] rounded-full font-bold text-lg hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
          >
            Find Your Ideal Program
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-4 text-white text-sm">
            or{" "}
            <Link href="/contact" className="underline hover:text-blue-100">
              Speak to an Admissions Expert
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UniversityPartners;
