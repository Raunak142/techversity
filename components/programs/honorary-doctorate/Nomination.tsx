"use client";

import Image from "next/image";

import { useState } from "react";
import { Loader2, Check, AlertCircle } from "lucide-react";

export default function Nomination() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData, // name, email, phone, message (mapped from achievements)
          source: "Honorary Doctorate Nomination Form",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage(error.message || "Failed to submit. Please try again.");
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Nomination Form */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003B95] mb-6">
            Nominate / Apply Now
          </h2>

          {status === "success" ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                Nomination Received!
              </h3>
              <p className="text-green-700">
                Thank you for submitting your nomination. We will review it
                carefully.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-[#0049AC] font-semibold hover:underline"
              >
                Submit another nomination
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                  <p>{errorMessage}</p>
                </div>
              )}

              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name of Candidate
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="achievements"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Achievements / Impact Summary
                </label>
                <textarea
                  id="achievements"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe major contributions, publications, recognitions, etc."
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="px-8 py-3 bg-[#0d3b85] text-white font-bold rounded-lg hover:bg-blue-900 transition-colors shadow-md mt-2 flex items-center justify-center gap-2 min-w-[200px]"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Nomination"
                )}
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Contact & Support */}
        <div className="lg:col-span-1 pt-2">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Contact & Support
          </h2>
          <p className="text-gray-600 font-bold mb-6">
            Techversity — AMU Facilitation
          </p>

          <div className="space-y-2 text-gray-600 mb-8">
            <p>
              <span className="font-medium text-gray-500">Email:</span>{" "}
              <a
                href="mailto:info@techversity.ai"
                className="text-blue-600 hover:underline"
              >
                info@techversity.ai
              </a>
            </p>
            <p>
              <span className="font-medium text-gray-500">Phone (UK):</span> +44
              7452 024431
            </p>
          </div>

          <div className="flex items-start">
            {/* Logo Placeholder */}
            <div className="w-16 h-12 relative">
              {/* Replace with actual logo component or image */}
              <span className="font-black text-2xl italic tracking-tighter">
                <span className="text-black">T</span>
                <span className="text-[#0088cc]">V</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
