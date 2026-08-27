"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations, t } from "@/data/translations";

export const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-[#101010]">
      <div className="mx-auto max-w-[1200px] px-4 py-10 text-center md:py-14">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-sm tracking-[0.5px] text-[#bcb8b1] md:text-[15px]">
          <Link
            href="/#home"
            className="transition-colors hover:text-[#EDEDED]"
          >
            {t(translations.nav.home, language)}
          </Link>
          <Link
            href="/#experience"
            className="transition-colors hover:text-[#EDEDED]"
          >
            {t(translations.nav.experience, language)}
          </Link>
          <Link
            href="/#projects"
            className="transition-colors hover:text-[#EDEDED]"
          >
            {t(translations.nav.projects, language)}
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-[#EDEDED]"
          >
            {t(translations.nav.contact, language)}
          </Link>
        </nav>
        <div className="mt-6 space-y-1 font-mono text-sm tracking-[0.5px] text-[#bcb8b1] md:text-[15px]">
          <p>{t(translations.footer.copyrightLine1, language)}</p>
          <p>{t(translations.footer.copyrightLine2, language)}</p>
        </div>
      </div>
    </footer>
  );
};
