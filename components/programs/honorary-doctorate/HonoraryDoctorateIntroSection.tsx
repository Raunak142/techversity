"use client";

import React from "react";
import { Info } from "lucide-react";

const HonoraryDoctorateIntroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center md:text-left">
          What is an Honorary Doctorate?
        </h2>

        {/* Body Text */}
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            An Honorary Doctorate is an award-based academic title bestowed by
            universities to recognize individuals who have made significant
            contributions to their profession, industry, or society. Unlike
            traditional earned doctorates that require years of research and
            coursework, an honorary doctorate acknowledges your existing
            accomplishments and impact.
          </p>

          <p>
            This prestigious recognition can enhance your professional profile,
            strengthen your credibility in business and academic circles, and
            formalize the expertise you've built throughout your career.
          </p>
        </div>

        {/* Important Note Block */}
        <div className="mt-10 p-6 bg-blue-50 border-l-4 border-[#0049AC] rounded-r-lg">
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
                academic degree. It does not require research, coursework, or
                dissertation. Recipients are acknowledged for past achievements
                rather than new academic work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HonoraryDoctorateIntroSection;
