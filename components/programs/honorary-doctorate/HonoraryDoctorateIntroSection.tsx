"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

const HonoraryDoctorateIntroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/image5.png "
                alt="University graduation ceremony representing honorary doctorate recognition"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
            </div>
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
            >
              <p className="text-3xl font-bold text-[#0049AC]">4-8</p>
              <p className="text-sm text-gray-600 font-medium">
                Weeks Timeline
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              What is an Honorary Doctorate?
            </h2>

            {/* Body Text */}
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                An Honorary Doctorate is an award-based academic title bestowed
                by universities to recognize individuals who have made
                significant contributions to their profession, industry, or
                society. Unlike traditional earned doctorates that require years
                of research and coursework, an honorary doctorate acknowledges
                your existing accomplishments and impact.
              </p>

              <p>
                This prestigious recognition can enhance your professional
                profile, strengthen your credibility in business and academic
                circles, and formalize the expertise you've built throughout
                your career.
              </p>
            </div>

            {/* Important Note Block */}
            <div className="p-6 bg-blue-50 border-l-4 border-[#0049AC] rounded-r-lg">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#0049AC]/10 flex items-center justify-center">
                    <Info className="w-5 h-5 text-[#0049AC]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Important Note
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed italic">
                    An honorary doctorate is a recognition award, not an earned
                    academic degree. It does not require research, coursework,
                    or dissertation. Recipients are acknowledged for past
                    achievements rather than new academic work.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HonoraryDoctorateIntroSection;
