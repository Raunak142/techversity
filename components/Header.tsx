"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowRight, Menu, X, ChevronDown } from "lucide-react";

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

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 origin-top-left ${
                isProgramsOpen
                  ? "opacity-100 transform scale-100 visible"
                  : "opacity-0 transform scale-95 invisible"
              }`}
            >
              <div className="py-2 flex flex-col items-start bg-white rounded-lg">
                <Link
                  href="/programs/honorary-doctorate"
                  className="block w-full text-left px-4 py-3 text-[14px] normal-case tracking-normal text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                  Honorary Doctorate
                </Link>
                <Link
                  href="/programs/dba"
                  className="block w-full text-left px-4 py-3 text-[14px] normal-case tracking-normal text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                  DBA
                </Link>
                <Link
                  href="/programs/phd-doctorate"
                  className="block w-full text-left px-4 py-3 text-[14px] normal-case tracking-normal text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                  PhD / Doctorate
                </Link>
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

        {/* Apply Now Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-[#003B95] text-white text-[15px] font-bold uppercase tracking-wide rounded-md hover:bg-[#002a70] transition-colors shadow-md transform hover:-translate-y-0.5"
          >
            Apply Now
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
              { name: "Apply Now", path: "/contact" },
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
