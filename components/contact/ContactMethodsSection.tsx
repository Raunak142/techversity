"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Shield,
  UserCheck,
  HeartHandshake,
  Globe,
} from "lucide-react";

export default function ContactMethodsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* SECTION 1: Preferred Contact Methods */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Preferred Contact Methods
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the channel that works best for you. We recommend WhatsApp
              for the fastest response.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-green-50 rounded-2xl p-8 border border-green-100 flex flex-col items-center text-center hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600 mb-2 font-medium">
                (Fastest Response)
              </p>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Message us anytime and get a response within hours.
              </p>
              <Link
                href="https://wa.me/1234567890"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#20bd5a] transition-colors w-full justify-center"
              >
                WhatsApp Us
              </Link>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-blue-50 rounded-2xl p-8 border border-blue-100 flex flex-col items-center text-center hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-[#0049AC]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-sm text-gray-600 mb-2 font-medium">
                admissions@techversity.ai
              </p>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                For detailed inquiries or document sharing. We respond within 24
                hours.
              </p>
              <Link
                href="mailto:admissions@techversity.ai"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0049AC] text-white font-bold rounded-lg hover:bg-[#003B95] transition-colors w-full justify-center"
              >
                Send Email
              </Link>
            </motion.div>

            {/* Schedule Call */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-purple-50 rounded-2xl p-8 border border-purple-100 flex flex-col items-center text-center hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Phone className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Schedule a Call
              </h3>
              <p className="text-sm text-gray-600 mb-2 font-medium">
                Free Consultation
              </p>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Book a free 20–30 minute consultation call at a time that works
                for you.
              </p>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors w-full justify-center"
              >
                Book a Call
              </Link>
            </motion.div>
          </div>
        </div>

        {/* SECTION 2: Office Hours & Response Times */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#0049AC]" />
                Office Hours
              </h2>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-gray-700 font-medium">
                    Monday – Friday
                  </span>
                  <span className="text-gray-900 font-bold">
                    9:00 AM – 6:00 PM GMT
                  </span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-gray-700 font-medium">Saturday</span>
                  <span className="text-gray-900 font-bold">
                    10:00 AM – 2:00 PM GMT
                  </span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-2 text-gray-400">
                  <span className="font-medium">Sunday</span>
                  <span className="font-bold">Closed</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-gray-500 italic flex items-start gap-2">
                <Globe className="w-4 h-4 mt-0.5 shrink-0" />
                We serve clients across multiple time zones and accommodate
                international consultation schedules.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#0049AC]" />
                Response Times
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-gray-700">WhatsApp</span>
                  </div>
                  <span className="text-sm font-bold bg-green-50 text-green-700 px-3 py-1 rounded-full">
                    Within 4 hours
                  </span>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-gray-700">Email</span>
                  </div>
                  <span className="text-sm font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                    Within 24 hours
                  </span>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <span className="font-medium text-gray-700">
                      Call Requests
                    </span>
                  </div>
                  <span className="text-sm font-bold bg-purple-50 text-purple-700 px-3 py-1 rounded-full">
                    Scheduled within 48h
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SECTION 3: FAQ Quick Links */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Quick Answers to Common Questions
            </h2>
            <p className="text-gray-600 mb-8">
              Looking for immediate answers? Explore our comprehensive FAQ
              resources:
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "General FAQs",
                "Honorary Doctorate FAQs",
                "DBA Program FAQs",
                "PhD Program FAQs",
                "University Information",
              ].map((text, i) => (
                <Link href="/faqs" key={i}>
                  <button className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 font-medium rounded-full hover:border-[#0049AC] hover:text-[#0049AC] hover:bg-blue-50 transition-all text-sm flex items-center gap-2">
                    {text} <ArrowRight className="w-3 h-3" />
                  </button>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* SECTION 4: Contact Assurance */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-5 text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Our Commitment to You
            </h2>
          </div>
          {[
            {
              icon: Clock,
              title: "Fast Response",
              desc: "All inquiries answered within 24h",
            },
            {
              icon: UserCheck,
              title: "Expert Guidance",
              desc: "Speak with specialists, not bots",
            },
            {
              icon: HeartHandshake,
              title: "No Pressure",
              desc: "Honest advice, no pushy sales",
            },
            {
              icon: Shield,
              title: "Confidential",
              desc: "Complete discretion guaranteed",
            },
            {
              icon: HelpCircle,
              title: "Personalized",
              desc: "Guidance tailored to your goals",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-xl border border-gray-100 text-center hover:border-blue-100 transition-colors"
              >
                <div className="w-10 h-10 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-3 text-[#0049AC]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* SECTION 5: Alternative Resources */}
        <div className="bg-[#001F3F] text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Explore on Your Own</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Prefer to research independently? These resources may help:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { text: "Browse All Programs", href: "/programs" },
              { text: "View University Partners", href: "/universities" },
              { text: "Read Application Process", href: "/admissions" },
              { text: "Apply Directly", href: "/apply" },
            ].map((link, i) => (
              <Link href={link.href} key={i}>
                <span className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 rounded-lg text-sm font-semibold transition-all cursor-pointer">
                  {link.text} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
