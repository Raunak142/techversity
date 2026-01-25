"use client";

import React from "react";

const StudyAbroad = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-8 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="sticky top-24">
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              Explore the World and Discover New Possibilities with Our Study
              Abroad Programs
            </h2>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Your education is more than just a degree — it’s an experience
              that shapes who you become. At HNtrix, we’re here to help you
              explore the world, build confidence, and follow a path that truly
              excites you.
            </p>
            <p>
              Whether you’re just starting your journey or aiming for the
              highest level of academic achievement, we offer a wide range of
              programs to support your goals, including:
            </p>
            <ul className="space-y-4">
              <li>Summer Camps for global exposure and personal growth</li>
              <li>Bachelor’s Programs to build a strong academic foundation</li>
              <li>Master’s Degrees to deepen your expertise</li>
              <li>
                Doctorate & PhD Programs for advanced research and leadership
              </li>
              <li>Professional Certification Programs to boost your career</li>
            </ul>
            <p>
              We partner with respected international universities such as EU
              Business School, Cyprus Aydın University.
            </p>
            <p>
              Our mission is simple: to make your academic dreams feel within
              reach. Each program is globally accepted and designed to open
              doors — whether you’re aiming for a better career, international
              exposure, or a fresh start in life.
            </p>
            <p>
              Wherever you want to go, we’re here to help you take the next step
              with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyAbroad;
