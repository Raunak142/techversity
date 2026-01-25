"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

interface AnimatedCircularProgressProps {
  percentage: number;
  label: string;
  description?: string;
  size?: number;
  strokeWidth?: number;
  duration?: number;
}

const AnimatedCircularProgress: React.FC<AnimatedCircularProgressProps> = ({
  percentage,
  label,
  description,
  size = 120,
  strokeWidth = 8,
  duration = 1.5,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, percentage, {
        duration: duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, percentage, duration, count]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center max-w-[250px]"
    >
      <div className="relative flex items-center justify-center mb-6">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Background Ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#E5E7EB" // gray-200
            strokeWidth={strokeWidth}
          />
          {/* Progress Ring */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#003B95" // Brand blue
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={
              isInView
                ? {
                    strokeDashoffset:
                      circumference - (percentage / 100) * circumference,
                  }
                : {}
            }
            transition={{ duration: duration, ease: "easeOut" }}
            style={{ transformOrigin: "center", rotate: -90 }}
          />
        </svg>
        {/* Percentage Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span className="text-2xl font-bold text-[#1C1C1E]">
            {rounded}
          </motion.span>
          <span className="text-2xl font-bold text-[#1C1C1E]">%</span>
        </div>
      </div>

      <h3 className="text-lg font-bold text-black mb-2">{label}</h3>
      {description && (
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default AnimatedCircularProgress;
