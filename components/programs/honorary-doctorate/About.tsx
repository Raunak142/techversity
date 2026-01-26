"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Header Section (Left Column) */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#003B95] mb-4">
            About American Management University (AMU)
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            At AMU, in collaboration with HNtrix, the Honorary Doctorate Program
            is designed for exceptional individuals whose achievements have
            shaped industries, societies, and global communities. Unlike
            traditional doctorate paths, this program recognises real-world
            impact, leadership, innovation, and service — giving you a
            prestigious credential that honours your legacy rather than your
            coursework. Founded in 2017 and headquartered in Paris, with roots
            in the USA, AMU is dedicated to empowering professionals worldwide.
            Through HNtrix’s facilitation, this program offers leaders the
            chance to gain recognition swiftly and globally.
          </p>
        </div>

        {/* Content Image (Right Column) */}
        <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          {/* Note: User should replace this with their actual image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/pagebgImage.png')",
              // Fallback visual
              backgroundColor: "#f0f4f8",
            }}
          />
        </div>
      </div>
    </section>
  );
}
