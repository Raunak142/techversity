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
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold font-sans uppercase mb-6">
          Elevate Your Success With <br className="hidden md:block" />
          Global Academic <br className="hidden md:block" />
          Recognition
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-light">
          At HNtrix, we are more than an education platform —{" "}
          <br className="hidden md:block" />
          We are your partners in global academic growth and recognition.
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
