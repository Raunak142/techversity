"use client";

import Link from "next/link";
import { Headset } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="bg-[#0f1114] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">
          Leadership Begins with Learning
        </h2>

        <Link
          href="/contact"
          className="flex items-center gap-2 px-8 py-3 bg-[#0049AC] hover:bg-[#003B95] text-white font-bold rounded-md transition-all transform hover:translate-y-[-2px] shadow-lg"
        >
          <Headset className="w-5 h-5" />
          Contact Us
        </Link>
      </div>
    </section>
  );
}
