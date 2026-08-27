"use client";

import { motion } from "framer-motion";
import { HiChevronDoubleDown } from "react-icons/hi2";

export const Mouse = () => {
  const handleClick = () => {
    const skillsSection = document.getElementById("experience");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
      <motion.div
        onClick={handleClick}
        animate={{
          y: [0, 10, 0],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="cursor-pointer flex items-center justify-center"
      >
        <HiChevronDoubleDown className="text-white w-8 h-8 lg:w-9 lg:h-9" />
      </motion.div>
    </div>
  );
};
