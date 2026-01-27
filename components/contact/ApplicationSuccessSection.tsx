"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, MessageCircle, ArrowRight, Clock } from "lucide-react";

export default function ApplicationSuccessSection() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden p-8 md:p-16 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center max-w-2xl mx-auto"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2,
          }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
        >
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </motion.div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Application Received!
        </h2>

        {/* Body Text */}
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Thank you for applying to Techversity.ai. We’ve successfully received
          your application, and an admissions expert will review your
          information shortly.
        </p>

        {/* Timeline Checklist */}
        <div className="w-full bg-gray-50 rounded-xl p-8 mb-10 text-left space-y-6 border border-gray-100">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
            What Happens Next:
          </h3>

          {[
            {
              time: "Within 4 Hours",
              text: "You’ll receive a confirmation email at the address you provided.",
            },
            {
              time: "Within 24 Hours",
              text: "An admissions expert will contact you via WhatsApp or email to discuss your application.",
            },
            {
              time: "Next Steps",
              text: "We’ll schedule a free consultation to review program options, answer your questions, and outline the admissions process.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.15 }}
              className="flex items-start gap-4"
            >
              <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 shrink-0">
                <Clock className="w-3.5 h-3.5 text-[#0049AC]" />
              </div>
              <div>
                <span className="block font-bold text-gray-900 mb-1">
                  {item.time}
                </span>
                <span className="text-gray-600 text-sm">{item.text}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Immediate Support */}
        <div className="mb-10 bg-blue-50 p-6 rounded-xl border border-blue-100 w-full">
          <p className="text-[#0049AC] font-medium text-sm md:text-base mb-1">
            Need Immediate Assistance?
          </p>
          <p className="text-gray-600 text-sm">
            Don’t want to wait? Reach out to us now via WhatsApp for instant
            support.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <Link
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Admissions Team Now
            </motion.button>
          </Link>

          <Link href="/" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-600 font-semibold rounded-xl border border-gray-200 hover:border-gray-400 hover:text-gray-900 transition-all"
            >
              Return to Home
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
