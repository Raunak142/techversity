"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

// Data
const testimonials = [
  {
    name: "Dr. Amelia Roberts",
    role: "PhD in Business Administration",
    quote:
      "HNtrix made it seamless for me to earn a globally recognized PhD in Business Administration while continuing my full-time job. Their personalized support and placement guidance helped me gain credibility in my field and advance professionally.",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
    rating: 5,
  },
  {
    name: "Dr. Liam Matthews",
    role: "PhD in Information Technology",
    quote:
      "The PhD program was practical, research-driven, and aligned with current industry trends. Within a month of completing it, I secured a leadership role in my domain. Thank you, HNtrix, for making this journey possible!",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
    rating: 5,
  },
  {
    name: "Dr. Aurora Bennett",
    role: "PhD in Psychology",
    quote:
      "I was initially skeptical about pursuing a doctorate online, but HNtrix completely changed my perspective. The expert faculty, seamless learning platform, and dedicated mentorship made the entire journey meaningful and professionally rewarding.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
    rating: 5,
  },
];

const Testimonials = () => {
  // Logic: Clone items to create infinite loop illusion
  // We prepend the last few items and append the first few items
  // Visible count: Desktop: 3
  // We need enough clones to cover the visible area during transitions.
  const clonesStart = testimonials.slice(-3); // Last 3
  const clonesEnd = testimonials.slice(0, 3); // First 3
  const allTestimonials = [...clonesStart, ...testimonials, ...clonesEnd];

  // Start index is the length of clonesStart so we show the real first item initially
  const [currentIndex, setCurrentIndex] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

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

    const timer = setTimeout(() => {
      setIsTransitioning(false);
      if (currentIndex >= testimonials.length + 3) {
        setCurrentIndex(3); // Reset to first real item
      } else if (currentIndex <= 2) {
        setCurrentIndex(testimonials.length + 2); // Reset to last real item
      }
    }, 500); // 500ms transition

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative z-10 py-16 md:py-24 bg-[#0049AC]/90 overflow-hidden"
    >
      {/* Background decoration (optional, inferred from 'pattern' in similar sections) */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-8 lg:px-32 relative">
        {/* Header Section */}
        <div className="mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Our Students Speak. <br />
            Excellence Echoes
          </h2>
          <div className="flex flex-col gap-4">
            <h3 className="text-black font-bold text-lg hidden">
              Hear from Our PhD & Doctorate Achievers.
            </h3>
            <p className="text-white/90 text-lg md:text-left leading-relaxed">
              <span className="font-bold block mb-2 text-black/80">
                Hear from Our PhD & Doctorate Achievers.
              </span>
              Our learners’ success stories highlight how HNtrix empowers
              professionals with globally recognized credentials and
              transformative academic experiences.
            </p>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-visible px-2">
          {" "}
          {/* Changed to overflow-visible to allow floating elements if needed, but usually hidden for carousel */}
          <div className="overflow-hidden -mx-4">
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
              {allTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 pt-12 pb-4" // Added pt-12 for the floating image space
                >
                  <div className="bg-white p-8 relative shadow-xl h-full flex flex-col items-start pt-12 group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    {/* User Image (Floating) */}
                    <div className="absolute -top-10 right-8 ">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white group-hover:border-[#111] transition-all duration-300 shadow-lg bg-gray-200">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Quote Icon */}
                        <div className="absolute -bottom-2 -right-2 bg-black text-white p-1.5 rounded-full w-8 h-8 flex items-center justify-center">
                          <Quote className="w-4 h-4 fill-white" />
                        </div>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-6 text-yellow-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <p className="text-gray-600 text-[15px] leading-relaxed mb-6 italic grow">
                      "{testimonial.quote}"
                    </p>

                    {/* Name & Role */}
                    <div className="mt-auto">
                      <h4 className="text-[#003B95] font-bold text-lg leading-tight mb-1">
                        — {testimonial.name}
                      </h4>
                      <p className="text-gray-800 font-semibold text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-6 mt-12">
          <button
            onClick={prevSlide}
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 hover:bg-[#242B30] active:scale-95 transition-all duration-300 group"
            aria-label="Previous Testimonial"
          >
            <ArrowLeft className="w-6 h-6 text-black group-hover:text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 hover:bg-[#242B30] active:scale-95 transition-all duration-300 group"
            aria-label="Next Testimonial"
          >
            <ArrowRight className="w-6 h-6 text-black group-hover:text-white" />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
