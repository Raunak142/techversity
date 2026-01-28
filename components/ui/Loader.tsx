"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#FAF9F6]"
    >
      {/* Logo with X-axis rotation */}
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="relative w-20 h-20 mb-6"
        style={{ perspective: "1000px" }}
      >
        <Image
          src="/images/Logo.png"
          alt="Techversity"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Brand Name Text */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-3xl font-bold text-gray-900 tracking-wide"
      >
        Techversity.ai
      </motion.h1>

      {/* Loading Bar */}
      <div className="mt-10 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#0049AC]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>

      {/* Status Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-sm text-gray-500 font-medium tracking-widest uppercase"
      >
        Loading
      </motion.p>
    </motion.div>
  );
}
