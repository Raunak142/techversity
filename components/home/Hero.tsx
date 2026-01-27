"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-black">
        <div className="absolute top-0 left-0 w-full h-full bg-white/4  0 z-10" />{" "}
        {/* Overlay */}
        <video
          className="w-full h-full object-cover opacity-60"
          autoPlay
          loop
          muted
          playsInline
          poster="/placeholder-hero.jpg"
        >
          {/* Placeholder video - replace 'src' with your actual local video file like '/hero-video.mp4' */}
          <source src="/video/bgvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8 text-white ">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-sans tracking-tight leading mb-6 drop-shadow-lg">
          Advance Your Career with <br className="hidden md:block" />Premium Higher Education<br className="hidden md:block" /> Programs from  Accredited Universities
        </h1>

        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl font-normal leading-relaxed drop-shadow-md">
          Techversity.ai connects ambitious professionals in the US and UK with
          world-class honorary doctorates, doctoral programs, and executive
          degrees. Expert guidance from application to graduation.
        </p>

        <Link
          href="/apply"
          className="inline-flex items-center gap-2 bg-[#003B95] hover:bg-[#002a6b] text-white px-8 py-3 rounded-md font-semibold transition-all hover:gap-3"
        >
          Apply Now <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
