"use client";

import { ArrowUp } from "lucide-react";

export const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className="fixed bottom-6 right-6 z-30 flex h-12 w-12 items-center justify-center bg-[#f8f9fa] text-[#891AD5] shadow-lg transition-colors hover:bg-white md:hidden"
    >
      <ArrowUp size={20} />
    </button>
  );
};
