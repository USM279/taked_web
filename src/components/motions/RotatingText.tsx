"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotatingTextProps {
  words: string[];
  className?: string;
  interval?: number;
  highlight?: boolean;
  highlightClass?: string;
}

export const RotatingText: React.FC<RotatingTextProps> = ({
  words,
  className = "",
  interval = 2000,
  highlight = false,
  highlightClass = "bg-sky-500/20",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={`inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 300,
          }}
          className="inline-block relative"
        >
          <span className="relative z-10">{words[currentIndex]}</span>
          {highlight && (
            <span
              className={`absolute bottom-0 left-0 w-full h-2 ${highlightClass} -z-0`}
            ></span>
          )}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
