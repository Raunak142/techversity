"use client";

import { useState } from "react";
import { Check, Loader2, AlertCircle } from "lucide-react";

export default function ContactForm() {
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
          source: "PhD Doctorate Page Form",
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
      <div className="relative rounded-3xl overflow-hidden min-h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/graduation-celebration.jpg')",
            backgroundColor: "#1a1a1a",
          }}
        >
          {/* Dark overlay to match the design's dark feel */}
          <div className="absolute inset-0 bg-gray-900/40" />
        </div>

        {/* Form Container with unique shape/overlay look */}
        <div className="relative z-10 w-full max-w-lg bg-[#0f172a]/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-700/50">
          {status === "success" ? (
            <div className="bg-green-900/40 border border-green-500/30 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Request Sent!
              </h3>
              <p className="text-gray-300 mb-6">
                Our advisors will review your inquiry and contact you shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === "error" && (
                <div className="bg-red-900/40 border border-red-500/30 text-red-200 px-4 py-3 rounded-lg flex items-start gap-2 text-sm">
                  <AlertCircle className="w-5 h-5 mt-0.5 shrink-0 text-red-400" />
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
                  className="w-full px-4 py-3 bg-[#1e293b] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400 transition-all"
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
                  className="w-full px-4 py-3 bg-[#1e293b] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400 transition-all"
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
                  className="w-full px-4 py-3 bg-[#1e293b] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400 transition-all"
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
                  className="w-full px-4 py-3 bg-[#1e293b] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3 bg-[#0049AC] hover:bg-[#003B95] disabled:bg-blue-800/50 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <div className="bg-white rounded-full p-0.5">
                      <Check
                        className="w-3 h-3 text-[#0049AC]"
                        strokeWidth={4}
                      />
                    </div>
                    Submit
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
