"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="w-full bg-[#111827] py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
          Find Your Perfect University Match
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
          Ready to explore which university and program aligns best with your
          goals? Our admissions experts are here to help you make an informed
          decision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary Button */}
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0049AC] hover:bg-[#003B95] text-white font-bold rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Secondary Button - WhatsApp */}
          <Link
            href="https://wa.me/1234567890" // Replace with actual number
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp for Guidance
          </Link>

          {/* Tertiary Button - Consultation */}
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white text-white font-semibold rounded-lg transition-all hover:bg-white/5"
          >
            <Calendar className="w-5 h-5" />
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
