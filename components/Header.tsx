"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  ArrowRight,
  Facebook,
  Linkedin,
  Instagram,
  X as XIcon, // Lucide's X is close icon, but can double as X logo or I can use custom SVG. I'll use generic X for now.
  Menu,
  X, // Close icon for menu
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full font-sans shadow-md relative z-50">
      {/* Top Bar */}
      <div className="bg-[#0049AC] text-white py-2.5 px-4 md:px-8 lg:px-16 flex justify-between items-center text-sm font-medium">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <a
            href="mailto:support@hntrix.com"
            className="hover:text-gray-200 transition-colors"
          >
            support@hntrix.com
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
        <Link href="/" className="flex flex-col leading-none group">
          <div className="flex items-center italic">
            <span className="text-4xl font-black text-black tracking-tighter transform -skew-x-6">
              H
            </span>
            <span className="text-4xl font-black text-[#003B95] tracking-tighter transform -skew-x-6">
              N
            </span>
          </div>
          <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] transform -skew-x-6 group-hover:text-[#003B95] transition-colors">
            HNTRIX
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12 font-semibold text-gray-800">
          {[
            { name: "Home", path: "/" },
            { name: "Programs", path: "/programs" },
            { name: "Universities", path: "/universities" },
            { name: "Contact", path: "/contact" },
            { name: "Apply Now", path: "/apply" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-[15px] uppercase tracking-wide hover:text-[#003B95] transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#003B95] after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${item.name === "Apply Now" ? "text-[#003B95]" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden lg:flex items-center gap-5 text-gray-700">
          <a
            href="#"
            className="hover:text-[#1877F2] transition-colors transform hover:-translate-y-1 duration-300"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="hover:text-black transition-colors transform hover:-translate-y-1 duration-300"
          >
            <XIcon className="w-5 h-5" />
          </a>{" "}
          {/* X / Twitter */}
          <a
            href="#"
            className="hover:text-[#0A66C2] transition-colors transform hover:-translate-y-1 duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="hover:text-[#E4405F] transition-colors transform hover:-translate-y-1 duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
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
              { name: "Programs", path: "/programs" },
              { name: "Universities", path: "/universities" },
              { name: "Contact", path: "/contact" },
              { name: "Apply Now", path: "/apply" },
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
            <div className="flex gap-6 mt-4 justify-center pt-4 border-t">
              <Facebook className="w-6 h-6 text-gray-600" />
              <XIcon className="w-6 h-6 text-gray-600" />
              <Linkedin className="w-6 h-6 text-gray-600" />
              <Instagram className="w-6 h-6 text-gray-600" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
