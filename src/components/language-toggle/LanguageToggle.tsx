"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const LanguageToggle = ({ className = "" }: { className?: string }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-slate-900/20 py-1 pl-2 pr-1 font-mono text-xs tracking-wide text-slate-600 md:border-white/20 md:text-[#bcb8b1] ${className}`}
    >
      <Globe size={14} className="opacity-70" />
      <button
        type="button"
        onClick={() => setLanguage("es")}
        aria-pressed={language === "es"}
        className={`rounded-full px-2 py-0.5 transition-colors ${
          language === "es"
            ? "bg-slate-900/10 text-slate-900 md:bg-white/15 md:text-[#EDEDED]"
            : "hover:text-slate-900 md:hover:text-[#EDEDED]"
        }`}
      >
        ES
      </button>
      <span aria-hidden="true">|</span>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`rounded-full px-2 py-0.5 transition-colors ${
          language === "en"
            ? "bg-slate-900/10 text-slate-900 md:bg-white/15 md:text-[#EDEDED]"
            : "hover:text-slate-900 md:hover:text-[#EDEDED]"
        }`}
      >
        EN
      </button>
    </div>
  );
};
