import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full bg-[#0049AC]/10 py-24 md:py-32 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      <div className="max-w-6xl mx-auto bg-[#242B30] rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden group">
        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-[#0049AC]/20 to-transparent opacity-50 blur-2xl group-hover:opacity-70 transition-opacity duration-500"></div>

        <div className="text-center md:text-left relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Build Your Future <br className="hidden md:block" /> with HNtrix
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Join thousands of students achieving their global academic dreams.
            Your journey to excellence begins with a single conversation.
          </p>
        </div>

        <div className="shrink-0 relative z-10">
          <Link
            href="/chat"
            className="inline-flex items-center gap-3 bg-[#003B95] hover:bg-[#002a6b] text-white font-bold text-lg py-5 px-10 transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,59,149,0.39)] hover:shadow-[0_6px_20px_rgba(0,59,149,0.23)] hover:-translate-y-1 active:scale-95 rounded-lg border border-white/10"
          >
            <MessageCircle className="w-6 h-6 fill-white text-[#003B95]" />
            Chat with Us
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default CTASection;
