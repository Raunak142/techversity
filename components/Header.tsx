"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  return (
    <header className="w-full font-sans shadow-md relative z-50">
      {/* Top Bar */}
      <div className="bg-[#0049AC] text-white py-2.5 px-4 md:px-8 lg:px-16 flex justify-between items-center text-sm font-medium">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <a
            href="mailto:info@techversity.ai"
            className="hover:text-gray-200 transition-colors"
          >
            info@techversity.ai
          </a>
        </div>
        <Link
          href="/contact"
          className="flex items-center gap-1.5 hover:text-gray-200 transition-all hover:translate-x-1"
        >
          Get In Touch <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Main Navigation */}
      <div className="bg-white px-4 md:px-8 lg:px-16 h-20 flex justify-between items-center relative z-50">
        {/* Logo */}
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Logo.png"
            alt="Techversity"
            width={60}
            height={60}
            className="h-20 w-auto object-contain"
            priority
            unoptimized
          />
          <span className="text-lg md:text-xl font-bold bg-linear-to-r from-[#0049AC] to-[#9C4486] bg-clip-text text-transparent tracking-tight">
            TECHVERSITY.AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12 font-semibold text-gray-800 absolute left-1/2 transform -translate-x-1/2">
          <Link
            href="/"
            className="text-[15px] uppercase tracking-wide hover:text-[#003B95] transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#003B95] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Home
          </Link>

          <Link
            href="/about-us"
            className="text-[15px] uppercase tracking-wide hover:text-[#003B95] transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#003B95] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            About Us
          </Link>

          {/* Programs Dropdown */}
          <div
            className="relative group h-full flex items-center"
            onMouseEnter={() => setIsProgramsOpen(true)}
            onMouseLeave={() => setIsProgramsOpen(false)}
          >
            <button className="flex items-center gap-1 text-[15px] uppercase tracking-wide hover:text-[#003B95] transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#003B95] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Programs
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${isProgramsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Premium Dropdown Menu */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[420px] bg-white rounded-2xl shadow-2xl ring-1 ring-gray-100 transition-all duration-300 origin-top ${
                isProgramsOpen
                  ? "opacity-100 transform scale-100 translate-y-0 visible"
                  : "opacity-0 transform scale-95 -translate-y-2 invisible"
              }`}
            >
              {/* Dropdown Arrow */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100" />

              <div className="p-4 relative">
                {/* Header */}
                <div className="px-2 pb-3 mb-3 border-b border-gray-100">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Our Programs
                  </p>
                </div>

                {/* Program Links */}
                <div className="space-y-1">
                  <Link
                    href="/programs/honorary-doctorate"
                    onClick={() => setIsProgramsOpen(false)}
                    className="group/item flex items-start gap-4 p-3 rounded-xl hover:bg-linear-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-[#0049AC] to-[#6366f1] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover/item:scale-110 transition-transform duration-200">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-[15px] font-semibold text-gray-900 group-hover/item:text-[#0049AC] transition-colors">
                          Honorary Doctorate
                        </h4>
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-amber-100 text-amber-700 rounded-full">
                          4-8 Weeks
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        Recognition for distinguished professionals
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover/item:text-[#0049AC] group-hover/item:translate-x-1 transition-all mt-1" />
                  </Link>

                  <Link
                    href="/programs/dba"
                    onClick={() => setIsProgramsOpen(false)}
                    className="group/item flex items-start gap-4 p-3 rounded-xl hover:bg-linear-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-[#0049AC] to-[#0ea5e9] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover/item:scale-110 transition-transform duration-200">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-[15px] font-semibold text-gray-900 group-hover/item:text-[#0049AC] transition-colors">
                          Doctor of Business Administration
                        </h4>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        For senior executives & business leaders
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover/item:text-[#0049AC] group-hover/item:translate-x-1 transition-all mt-1" />
                  </Link>

                  <Link
                    href="/programs/phd-doctorate"
                    onClick={() => setIsProgramsOpen(false)}
                    className="group/item flex items-start gap-4 p-3 rounded-xl hover:bg-linear-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-[#0049AC] to-[#8b5cf6] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover/item:scale-110 transition-transform duration-200">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-[15px] font-semibold text-gray-900 group-hover/item:text-[#0049AC] transition-colors">
                          PhD / Doctorate
                        </h4>
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase bg-green-100 text-green-700 rounded-full">
                          Research
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        Advanced research & academic excellence
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover/item:text-[#0049AC] group-hover/item:translate-x-1 transition-all mt-1" />
                  </Link>
                </div>

                {/* Footer CTA */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link
                    href="/contact"
                    onClick={() => setIsProgramsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-linear-to-r from-[#0049AC] to-[#003B95] text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200"
                  >
                    Not sure? Get a Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/universities"
            className="text-[15px] uppercase tracking-wide hover:text-[#003B95] transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#003B95] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Universities
          </Link>

          <Link
            href="/contact"
            className="text-[15px] uppercase tracking-wide hover:text-[#003B95] transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#003B95] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Book a Call Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#003B95] text-white text-[15px] font-bold uppercase tracking-wide rounded-md hover:bg-[#002a70] transition-colors shadow-md transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            Book a Call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[106px] left-0 w-full bg-white shadow-xl border-t z-40 animate-slide-down">
          <nav className="flex flex-col p-6 gap-4 font-semibold text-gray-800">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about-us" },
              { name: "Programs", path: "/programs" },
              { name: "Universities", path: "/universities" },
              { name: "Contact", path: "/contact" },
              { name: "Book a Call", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="py-2 border-b border-gray-100 hover:text-[#003B95] hover:pl-2 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
