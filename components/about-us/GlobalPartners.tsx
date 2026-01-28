"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GlobalPartners() {
  const partners = [
    { name: "Kennedy University", logo: "/images/partners/kennedy.png" }, // Placeholders
    { name: "Kennedy University of Baptist", logo: "/images/partners/kub.png" },
    {
      name: "American Management University",
      logo: "/images/partners/amu.png",
    },
    { name: "EU Business School", logo: "/images/partners/eu.png" },
    { name: "Central Global University", logo: "/images/partners/cgu.png" },
    { name: "Cyprus Aydin University", logo: "/images/partners/cau.png" },
    { name: "GUST", logo: "/images/partners/gust.png" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
        Our Global Partners
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 items-center justify-items-center">
        {/* 
            Since we don't have the individual logo assets yet, 
            I'll render a placeholder structure that the user can easily swap.
            For now, I'll use the uploaded screenshot as a visual reference 
            for the whole grid if they prefer, or individual placeholders.
            
            Given the user usually wants it "made", I'll use text placeholders 
            styled to look like the grid slots.
        */}
        {partners.map((partner, index) => (
          <div
            key={index}
            className={`w-full max-w-[250px] h-32 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 ${index === 6 ? "md:col-start-2" : ""}`}
          >
            {/* Actual implementation would be: 
                <Image src={partner.logo} alt={partner.name} width={200} height={100} className="object-contain" />
             */}
            <div className="w-full h-full bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center text-center text-gray-400 font-medium text-sm p-4">
              {partner.name} Logo
            </div>
          </div>
        ))}
      </div>

      {/* 
        Note to User: 
        Since I don't have the individual logo files, I've created the grid layout above.
        You can replace the text placeholders with your <Image /> components once you have the assets.
      */}
    </motion.section>
  );
}
