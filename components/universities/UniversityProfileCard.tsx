"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { University } from "./universityData";

interface UniversityProfileCardProps {
  university: University;
  index: number;
}

export default function UniversityProfileCard({
  university,
  index,
}: UniversityProfileCardProps) {
  // Alternating layout logic (optional, keeping it consistent image-top for mobile, side-by-side desktop is handled by grid or flex)
  // For scalable clean layout as per prompt "Desktop: Vertical stacked cards OR alternating left-right"
  // Let's go with a stacked vertical card that switches to flex-row on desktop for a "list" feel, or just a grid.
  // The Prompt asks for "Vertical stacked cards OR alternating left-right image layout".
  // Let's do Alternating Left-Right for maximum "Premium" feel.

  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 lg:gap-12 items-center mb-20 last:mb-0`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-1/2 relative group">
        <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={university.image}
            alt={university.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-60" />
        </div>

        {/* Floating Badge (Location) */}
        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm py-2 px-4 rounded-full shadow-md flex items-center gap-2 text-sm font-semibold text-gray-800">
          <MapPin className="w-4 h-4 text-[#0049AC]" />
          {university.location}
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
            {university.name}
          </h3>
          <a
            href={university.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#0049AC] hover:text-[#003B95] font-medium text-sm transition-colors"
          >
            <Globe className="w-4 h-4" />
            Visit Website
          </a>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed">
          {university.about}
        </p>

        {/* Programs */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
            Programs Offered
          </h4>
          <div className="flex flex-wrap gap-2">
            {university.programs.map((prog, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
              >
                {prog}
              </span>
            ))}
          </div>
        </div>

        {/* Why Choose (Trust Points) */}
        <div className="space-y-3 pt-2">
          {university.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 py-3 bg-[#0049AC] text-white font-bold rounded-xl shadow-lg hover:bg-[#003d91] transition-colors flex items-center justify-center gap-2"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>

          <Link href="#" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 py-3 bg-[#25D366] text-white font-bold rounded-xl shadow-lg hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Admissions Expert
            </motion.button>
          </Link>

          <Link
            href={university.website}
            target="_blank"
            className="w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-[#0049AC] hover:text-[#0049AC] transition-colors flex items-center justify-center gap-2"
            >
              View Programs
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
