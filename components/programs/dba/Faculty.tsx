"use client";

import { useState } from "react";
import { Check, Loader2, AlertCircle } from "lucide-react";

export default function Faculty() {
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
          ...formData,
          source: "DBA Faculty Page Form",
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
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12 text-center">
      {/* ... keeping header and video ... */}
      <div className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-black">Faculty</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base text-justify md:text-center">
          <p>
            EU’s faculty is composed of highly qualified academics,
            entrepreneurs, consultants and business leaders.
          </p>
          <p>
            All courses are taught by lecturers with a wealth of practical
            experience in their fields. Our teaching staff create a personalized
            and interactive learning environment that promotes and fosters the
            skills and knowledge required for a successful career in business.
            The caliber of the faculty and a culture that values and rewards an
            entrepreneurial spirit are what make EU Business School stand out.
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=placeholder"
          title="EU Business School: The EU Experience"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full object-cover"
        ></iframe>
      </div>

      <div className="w-full max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl p-8 shadow-sm text-left">
        {status === "success" ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-2">
              Review Request Sent!
            </h3>
            <p className="text-green-700">
              Our faculty team will review your inquiry.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-[#0049AC] font-semibold hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-2">
                <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                <p>{errorMessage}</p>
              </div>
            )}

            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name*"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400 transition-all font-light"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email*"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400 transition-all font-light"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400 transition-all font-light"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Message*"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400 transition-all resize-none font-light"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 bg-[#0049AC] hover:bg-[#003B95] disabled:bg-blue-800/70 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <div className="bg-white rounded-full p-0.5">
                    <Check className="w-3 h-3 text-[#0049AC]" strokeWidth={4} />
                  </div>
                  Submit
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
