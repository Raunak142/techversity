"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Plane, UserCheck } from "lucide-react";

const supportServices = [
  {
    id: "scholarships",
    title: "Scholarships Assistance",
    description:
      "We help you identify and apply for scholarships that match your profile, making global education more accessible and affordable.",
    icon: GraduationCap,
    image:
      "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Graduation/Scholarship context
  },
  {
    id: "post-arrival",
    title: "Post-Arrival Help",
    description:
      "From finding accommodation to understanding local culture, our team ensures you settle in comfortably once you land in your dream destination.",
    icon: Plane,
    image:
      "https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Travel/Arrival context
  },
  {
    id: "expert-support",
    title: "Expert Support",
    description:
      "Our experienced counselors provide personalized guidance at every step, from university selection to visa processing and beyond.",
    icon: UserCheck,
    image:
      "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Counseling/Support context
  },
];

const StudentSupportSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-8 lg:px-32">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-4">
            Comprehensive Student Support
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            We don't just help you apply; we support your entire journey from
            dreaming to arriving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Left Column: Interactive List (Tabs) */}
          <div className="flex flex-col justify-center gap-4">
            {supportServices.map((service, index) => {
              const isActive = activeTab === index;
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`p-6 md:p-8 rounded-2xl cursor-pointer transition-all duration-300 border-l-4 group ${
                    isActive
                      ? "bg-[#003B95] border-[#242B30] shadow-xl scale-[1.02]"
                      : "bg-white border-transparent hover:border-[#242B30] hover:bg-gray-50 shadow-sm"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-full shrink-0 transition-colors ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "bg-[#003B95]/10 text-[#003B95]"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-bold mb-2 transition-colors ${
                          isActive
                            ? "text-white"
                            : "text-black group-hover:text-[#003B95]"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-sm md:text-base transition-colors leading-relaxed ${
                          isActive ? "text-white/80" : "text-gray-600"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Image */}
          <div className="relative h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTab}
                src={supportServices[activeTab].image}
                alt={supportServices[activeTab].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Optional Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent pointer-events-none"></div>

            {/* Context Label on Image */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg">
              <span className="text-[#003B95] font-bold text-sm md:text-base uppercase tracking-wider">
                {supportServices[activeTab].title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSupportSection;
