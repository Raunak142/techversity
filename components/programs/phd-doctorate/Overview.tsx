"use client";

import React from "react";

export default function Overview() {
  const programs = [
    {
      title: "Doctor of Business Administration",
      description:
        "Develop advanced skills in leadership, strategy, and corporate growth to drive organizational success.",
    },
    {
      title: "Doctor of Public Administration",
      description:
        "Build expertise in public policy, governance, and community development for impactful public service.",
    },
    {
      title: "Doctor of Education",
      description:
        "Focus on advanced educational research and leadership to improve teaching methods and institutional practices.",
    },
    {
      title: "PhD in Media Communication",
      description:
        "Analyze media trends and communication strategies to influence the modern information landscape.",
    },
    {
      title: "PhD in Counseling Psychology",
      description:
        "Research mental health issues and therapeutic methods to better support individuals and communities.",
    },
    {
      title: "PhD in Human Arts",
      description:
        "Study human culture, philosophy, and modern society to contribute to interdisciplinary knowledge.",
    },
    {
      title: "PhD in Fine Arts",
      description:
        "Advance your creative practice and contribute scholarly research in visual and performing arts.",
    },
    {
      title: "PhD in Music",
      description:
        "Pursue research in music theory, history, and performance to enrich the musical arts.",
    },
    {
      title: "PhD in Social Work",
      description:
        "Prepare to lead social programs and policies that address complex community needs.",
    },
    {
      title: "Doctor of Theology",
      description:
        "Deepen your understanding of religious studies, ethics, and spiritual leadership.",
    },
    {
      title: "Doctor of Science",
      description:
        "Conduct high-level scientific research to solve complex real-world problems.",
    },
    {
      title: "Programs in Other Areas",
      description:
        "Customize your doctorate in emerging or interdisciplinary fields of study.",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Advance Your Expertise Section */}
      <div className="space-y-6">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Advance Your Expertise With Hntrix’s Regular Doctorate Program
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
          <p>
            At HNtrix, our Regular Doctorate Program is designed for passionate
            learners committed to deep academic research and innovation. This
            program provides a comprehensive curriculum that nurtures critical
            thinking, research skills, and subject mastery, empowering students
            to contribute original knowledge in their field.
          </p>
          <p>
            With personalized mentorship and access to cutting-edge resources,
            HNtrix supports scholars through every step of their doctoral
            journey. Whether you aim for a career in academia, industry
            research, or leadership, our Regular Doctorate Program equips you
            with the credentials and expertise needed to excel globally.
          </p>
        </div>
      </div>

      {/* Fast-track Mode Section */}
      <div className="space-y-6">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Fast-track Mode Doctorate Program (6-12 Months)
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
          <p>
            The Doctorate program is designed for experienced professionals who
            wish to deepen their expertise and strengthen their academic and
            research capabilities.
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2">
            <li>
              Fields of Study: Business/Management, Leadership, Education, and
              Research
            </li>
            <li>
              Program Structure: 60-unit program with two pathways — Coursework
              + Research (Can be skipped in Fast-Track) Dissertation Only (for
              those who have exceptional skills)
            </li>
            <li>
              Ideal for senior professionals, consultants, and academicians
              aiming to enhance their scholarly impact and leadership in their
              field.
            </li>
          </ul>
          <p>
            This doctorate focuses on academic excellence, critical thinking,
            and advanced research, empowering professionals to advance their
            careers and contribute meaningfully to global knowledge.
          </p>
        </div>
      </div>

      {/* Program Grid Section */}
      <div>
        <div className="mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Program Overview: Doctorate Programs at AMU
          </h2>
          <p className="text-gray-700">
            American Management University (AMU) offers a wide range of
            doctorate programs designed for experienced professionals and
            academic practitioners. These programs recognize your expertise,
            research orientation, and domain knowledge, providing a credible
            path to formal academic recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow h-full"
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                {program.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
