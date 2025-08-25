"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { HiChevronDoubleDown } from "react-icons/hi2";

export const Mouse = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {isVisible && (
        <motion.div
          onClick={handleClick}
          initial={{ opacity: 1 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="
            fixed bottom-10 left-1/2 -translate-x-1/2 cursor-pointer
            z-50
          "
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="flex items-center justify-center w-full h-full"
          >
            <HiChevronDoubleDown className="text-white w-8 h-8" />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
