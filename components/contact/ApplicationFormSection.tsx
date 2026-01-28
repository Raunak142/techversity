"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

import ApplicationSuccessSection from "./ApplicationSuccessSection";

export default function ApplicationFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    country: "",
    program: "",
    education: "",
    experience: "",
    role: "",
    budget: "",
    timeline: "",
    source: "",
    notes: "",
    consent: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      // Reset form or redirect logic here
    }, 2000);
  };

  if (isSuccess) {
    return (
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <ApplicationSuccessSection />
        </div>
      </section>
    );
  }

  return (
    <section
      id="application-form"
      className="py-20 bg-gray-50 border-t border-gray-100"
    >
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        {/* Intro */}
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-blue-50/50 rounded-xl p-6 md:p-8 border border-blue-100 mb-8"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-4 text-base font-medium">
              Thank you for your interest in advancing your education with
              Techversity.ai. This application takes approximately{" "}
              <strong className="text-[#0049AC]">5 minutes</strong> to complete.
              Once submitted, an admissions expert will review your information
              and reach out to discuss:
            </p>
            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 mb-4">
              {[
                "Program options aligned with your goals",
                "University recommendations",
                "Admission requirements and timelines",
                "Pricing and payment options",
                "Clear next steps in the process",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0049AC] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 italic flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              Note: All fields marked with{" "}
              <span className="text-red-500">*</span> are required.
            </p>
          </div>
        </motion.div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-[#001F3F] py-6 px-8 md:px-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Techversity.ai Application Form
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Full Name */}
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Enter your full name as it appears on official documents"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0049AC] focus:border-transparent outline-none transition-all"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0049AC] focus:border-transparent outline-none transition-all"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* WhatsApp */}
              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0049AC] focus:border-transparent outline-none transition-all"
                  value={formData.whatsapp}
                  onChange={handleChange}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Include country code. We’ll contact you via WhatsApp.
                </p>
              </div>

              {/* Country */}
              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Country of Residence <span className="text-red-500">*</span>
                </label>
                <select
                  name="country"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0049AC] focus:border-transparent outline-none transition-all bg-white"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Country
                  </option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="India">India</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Interested Program */}
              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Interested Program <span className="text-red-500">*</span>
                </label>
                <select
                  name="program"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0049AC] focus:border-transparent outline-none transition-all bg-white"
                  value={formData.program}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Program
                  </option>
                  <option value="Honorary Doctorate">Honorary Doctorate</option>
                  <option value="DBA">DBA</option>
                  <option value="PhD/Doctorate Program">
                    PhD/Doctorate Program
                  </option>
                  <option value="Master’s Program">
                    Master’s Program (Coming Soon)
                  </option>
                  <option value="Not Sure">Not Sure / Need Guidance</option>
                </select>
              </div>

              {/* Education Level */}
              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Education Level{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  name="education"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0049AC] focus:border-transparent outline-none transition-all bg-white"
                  value={formData.education}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Level
                  </option>
                  <option value="Bachelor’s Degree">Bachelor’s Degree</option>
                  <option value="Master’s Degree">Master’s Degree</option>
                  <option value="Doctorate/PhD">Doctorate/PhD</option>
                  <option value="Professional Certifications">
                    Professional Certifications Only
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Experience */}
              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Years of Professional Experience{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  name="experience"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0049AC] focus:border-transparent outline-none transition-all bg-white"
                  value={formData.experience}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Range
                  </option>
                  <option value="0–5">0–5 years</option>
                  <option value="5–10">5–10 years</option>
                  <option value="10–15">10–15 years</option>
                  <option value="15–20">15–20 years</option>
                  <option value="20+">20+ years</option>
                </select>
              </div>

              {/* Role */}
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Professional Role{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="role"
                  required
                  placeholder="e.g., CEO, Senior Consultant, Director of Marketing"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0049AC] focus:border-transparent outline-none transition-all"
                  value={formData.role}
                  onChange={handleChange}
                />
              </div>

              {/* Budget */}
              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget Range (USD) <span className="text-red-500">*</span>
                </label>
                <select
                  name="budget"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0049AC] focus:border-transparent outline-none transition-all bg-white"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Budget
                  </option>
                  <option value="Under $5,000">Under $5,000</option>
                  <option value="$5,000–$10,000">$5,000–$10,000</option>
                  <option value="$10,000–$20,000">$10,000–$20,000</option>
                  <option value="$20,000–$30,000">$20,000–$30,000</option>
                  <option value="$30,000+">$30,000+</option>
                  <option value="Prefer to Discuss">Prefer to Discuss</option>
                </select>
              </div>

              {/* Timeline */}
              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Timeline / Urgency <span className="text-red-500">*</span>
                </label>
                <select
                  name="timeline"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0049AC] focus:border-transparent outline-none transition-all bg-white"
                  value={formData.timeline}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Timeline
                  </option>
                  <option value="Immediate">Immediate</option>
                  <option value="Within 30 days">Within 30 days</option>
                  <option value="Within 60 days">Within 60 days</option>
                  <option value="Within 90 days">Within 90 days</option>
                  <option value="Exploring options">Exploring options</option>
                </select>
              </div>

              {/* Source */}
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  How did you hear about us?
                </label>
                <select
                  name="source"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0049AC] focus:border-transparent outline-none transition-all bg-white"
                  value={formData.source}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Option
                  </option>
                  <option value="Google Search">Google Search</option>
                  <option value="Social Media">Social Media</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Referral">Referral</option>
                  <option value="Online Advertisement">
                    Online Advertisement
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Additional Notes */}
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Notes or Questions
                </label>
                <textarea
                  name="notes"
                  rows={4}
                  placeholder="Tell us about your goals, specific interests, or any questions you have…"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0049AC] focus:border-transparent outline-none transition-all resize-y"
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>

              {/* Consent */}
              <div className="col-span-1 md:col-span-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 bg-white checked:bg-[#0049AC] checked:border-transparent transition-all"
                      checked={formData.consent}
                      onChange={handleCheckboxChange}
                    />
                    <CheckCircle2 className="pointer-events-none absolute left-0.5 top-0.5 h-4 w-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    I agree to receive communications from Techversity.ai
                    regarding my application and programs. I understand my
                    information will be used according to the Privacy Policy.
                  </span>
                </label>
              </div>
            </div>

            {/* Error/Success Messages (Placeholder) */}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-800"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>
                  Application submitted successfully! We will contact you
                  shortly.
                </span>
              </motion.div>
            )}

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading || isSuccess}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#0049AC] hover:bg-[#003B95] text-white font-bold text-lg rounded-xl shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
