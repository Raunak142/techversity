"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Ban } from "lucide-react";

// Data
const originalPrograms = [
  {
    title: "Honorary Doctorate",
    description:
      "Gain global recognition for your professional achievements and industry expertise.",
    details: [
      "Timeline: 4-8 weeks",
      "Ideal for: Established leaders & experts",
      "Format: Recognition-based",
    ],
    image: "/images/Doctratecard.png",
    link: "/programs/honorary-doctorate",
    cta: "Learn More",
    disabled: false,
  },
  {
    title: "Doctor of Business Administration (DBA)",
    description:
      "Earn a research-focused doctoral degree designed for senior executives and business leaders.",
    details: [
      "Timeline: 18-36 months",
      "Ideal for: C-suite & senior leaders",
      "Format: Online & flexible",
    ],
    image: "/images/DBAcard.png",
    link: "/programs/dba",
    cta: "Learn More",
    disabled: false,
  },
  {
    title: "PhD / Doctorate Programs",
    description:
      "Pursue rigorous academic research in your field with internationally recognized universities.",
    details: [
      "Timeline: 24-48 months",
      "Ideal for: Academics & researchers",
      "Format: Research-based",
    ],
    image: "/images/Phdcard.png",
    link: "/programs/phd-doctorate",
    cta: "Learn More",
    disabled: false,
  },
  {
    title: "Master's Programs",
    description:
      "Coming Soon! Expand your expertise with specialized master's degrees across business, technology, and more.",
    image: "/images/Mastercard.png",
    link: "#",
    cta: "Coming Soon",
    disabled: true,
  },
];

const OurPrograms = () => {
  // Logic: Clone items to create infinite loop illusion
  // We prepend the last few items and append the first few items
  // Visible count: Desktop: 3, Tablet: 2, Mobile: 1
  // We need enough clones to cover the visible area during transitions.
  // Safest is to clone the length of the list if small, or at least 3.
  const clonesStart = originalPrograms.slice(-3); // Last 3
  const clonesEnd = originalPrograms.slice(0, 3); // First 3
  const allPrograms = [...clonesStart, ...originalPrograms, ...clonesEnd];

  // Start index is the length of clonesStart so we show the real first item initially
  const [currentIndex, setCurrentIndex] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const totalItems = allPrograms.length;
  // Real items are from index 3 to 3 + originalPrograms.length - 1

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, [isTransitioning]);

  // Handle loop reset
  useEffect(() => {
    if (!isTransitioning) return;

    const transitionEndHandler = () => {
      setIsTransitioning(false);

      // If we reached the end clones (index >= 3 + originalLength)
      if (currentIndex >= originalPrograms.length + 3) {
        // Snap back to real start (index 3)
        // We must disable transition temporarily (handled by state logic in render usually not sufficient, need ref manipulation or state flush)
        // Actually, simpler to just reset state without transition
        // But React state updates batch.
        // A common trick:
      }
    };

    // We'll use a timeout matching the transition duration instead of event listener for simplicity in React
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      if (currentIndex >= originalPrograms.length + 3) {
        setCurrentIndex(3); // Reset to first real item
      } else if (currentIndex <= 2) {
        setCurrentIndex(originalPrograms.length + 2); // Reset to last real item
      }
    }, 500); // 500ms transition

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning]);

  // Calculate generic card width percentage based on viewport isn't easy with pure grid.
  // Using flex basis:
  // Mobile: 100%
  // Tablet: 50%
  // Desktop: 33.333%

  return (
    <section
      id="programs"
      className="relative z-10 py-16 md:py-24 bg-[#0049AC]/40 overflow-hidden"
    >
      <div className="container mx-auto px-8 lg:px-32 relative">
        {/* Heading */}
        <div className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Explore Our Programs
          </h2>
          <p className="text-white text-lg md:text-left hidden md:block max-w-lg ml-auto ">
            Select the qualification that aligns with your professional goals
            and aspirations.
          </p>
          <p className="text-white text-base md:hidden">
            Select the qualification that aligns with your professional goals
            and aspirations.
          </p>
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-hidden px-2">
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out lg:translate-x-[calc(var(--slide-index)*-33.333%)] md:translate-x-[calc(var(--slide-index)*-50%)] translate-x-[calc(var(--slide-index)*-100%)]"
            style={
              {
                "--slide-index": currentIndex,
                transitionDuration: isTransitioning ? "500ms" : "0ms",
              } as React.CSSProperties
            }
          >
            {allPrograms.map((program, index) => (
              <div
                key={index}
                className="shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 py-4"
              >
                {program.disabled ? (
                  // Non-clickable card for disabled programs (Master's Program)
                  <div className="bg-white rounded-none shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full border-b-4 border-transparent hover:border-gray-400 group transform hover:-translate-y-3 cursor-not-allowed relative">
                    {/* Image */}
                    <div className="h-56 w-full overflow-hidden relative">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      {/* Coming Soon Badge */}
                      <div className="absolute top-4 right-4 bg-gray-800/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Coming Soon
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col grow">
                      <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-600 transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 grow leading-relaxed">
                        {program.description}
                      </p>

                      {/* Non-clickable indicator */}
                      <div className="inline-flex items-center gap-2 text-gray-500 font-bold text-sm uppercase tracking-wider mt-auto">
                        {program.cta || "Coming Soon"}{" "}
                        <Ban className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
                      </div>
                    </div>
                  </div>
                ) : (
                  // Clickable card for active programs
                  <Link href={program.link} className="block h-full">
                    <div className="bg-white rounded-none shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full border-b-4 border-transparent hover:border-[#003B95] group transform hover:-translate-y-3 cursor-pointer">
                      {/* Image */}
                      <div className="h-56 w-full overflow-hidden relative">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col grow">
                        <h3 className="text-xl font-bold text-black mb-4 group-hover:text-[#003B95] transition-colors">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 grow leading-relaxed">
                          {program.description}
                        </p>

                        {/* Optional Details */}
                        {program.details && (
                          <div className="text-gray-600 text-sm mb-6 space-y-2">
                            {program.details.map((detail, idx) => (
                              <p key={idx}>● {detail}</p>
                            ))}
                          </div>
                        )}

                        <span className="inline-flex items-center gap-2 text-black font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all mt-auto">
                          {program.cta || "Read more"}{" "}
                          <ArrowRight className="w-5 h-5 text-[#003B95]" />
                        </span>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-6 mt-12">
          <button
            onClick={prevSlide}
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300group"
            aria-label="Previous Program"
          >
            <ArrowLeft className="w-6 h-6 text-black group-hover:text-[#003B95]" />
          </button>
          <button
            onClick={nextSlide}
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group"
            aria-label="Next Program"
          >
            <ArrowRight className="w-6 h-6 text-black group-hover:text-[#003B95]" />
          </button>
        </div>

        {/* American Management University Programs Section */}
        {/* American Management University Programs Section Removed */}
      </div>
    </section>
  );
};

export default OurPrograms;
