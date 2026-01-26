"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

interface University {
  id: number;
  name: string;
  location: string;
  description: string;
  logo: string;
}

const universities: University[] = [
  {
    id: 1,
    name: "Kennedy University",
    location: "United States",
    description:
      "A premier institution focused on innovation and leadership in business education.",
    logo: "/images/partners/kennedy.png",
  },
  {
    id: 2,
    name: "American Management University",
    location: "California, USA",
    description:
      "Empowering professionals with practical, industry-aligned management doctoral management programs.",
    logo: "/images/partners/amu.png",
  },
  {
    id: 3,
    name: "EU Business School",
    location: "Switzerland, Spain, Germany",
    description:
      "High-ranking international business school offering personalized and flexible business education.",
    logo: "/images/partners/eu.png",
  },
  {
    id: 4,
    name: "Central Global University",
    location: "Malaysia",
    description:
      "Dedicated to providing accessible quality education for working adults globally.",
    logo: "/images/partners/cgu.png",
  },
  {
    id: 5,
    name: "GUST University",
    location: "Global",
    description:
      "Global University of Science & Technology, fostering excellence in technical and professional education.",
    logo: "/images/partners/gust.png",
  },
];

export default function UniversityCardsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Partner Universities
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Explore globally recognized institutions offering flexible,
          industry-aligned doctoral programs through Techversity.ai.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {universities.map((uni) => (
          <div
            key={uni.id}
            className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col border border-gray-100"
          >
            {/* Card Content */}
            <div className="p-8 flex-grow flex flex-col items-center text-center">
              {/* Logo Area */}
              <div className="w-full h-24 mb-6 flex items-center justify-center">
                {/* Using a placeholder text/box if image is missing, but structure assumes image path */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Placeholder for Logo content - in real app use Next/Image */}
                  <div className="text-gray-400 font-bold text-lg border-2 border-dashed border-gray-200 rounded-lg w-full h-full flex items-center justify-center p-2">
                    {uni.name} Logo
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0049AC] transition-colors">
                {uni.name}
              </h3>

              <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-4 font-medium">
                <MapPin className="w-4 h-4 text-[#0049AC]" />
                {uni.location}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {uni.description}
              </p>
            </div>

            {/* Buttons Area */}
            <div className="p-6 pt-0 mt-auto flex flex-col gap-3 w-full">
              <Link
                href="/contact"
                className="w-full py-3 bg-[#0049AC] hover:bg-[#003B95] text-white font-semibold rounded-lg text-center transition-colors flex items-center justify-center gap-2"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-full py-3 bg-white border border-gray-200 hover:border-[#0049AC] hover:text-[#0049AC] text-gray-700 font-semibold rounded-lg text-center transition-all"
              >
                View Programs
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
