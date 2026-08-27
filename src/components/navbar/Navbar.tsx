"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations, t } from "@/data/translations";
import { LanguageToggle } from "@/components/language-toggle/LanguageToggle";

export const Navbar = () => {
  const pathname = usePathname();
  const { language } = useLanguage();
  const isHome = pathname === "/";
  const isContact = pathname === "/contact";
  const [fixed, setFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!isHome) return;

    const skills = document.getElementById("skills");
    if (!skills) return;

    const triggerY = skills.offsetTop;

    const onScroll = () => {
      setFixed(window.scrollY >= triggerY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isHome]);
  return (
    <>
      <nav
        className={`navbar ${
          isHome && fixed ? "navbar-scrolled" : "navbar-top"
        }`}
      >
        <input
          type="checkbox"
          id="menu"
          checked={menuOpen}
          onChange={(e) => setMenuOpen(e.target.checked)}
          className="peer/menu hidden"
        />
        <label
          htmlFor="menu"
          className={`menu-toggle ${isContact ? "menu-toggle-dark" : ""}`}
        ></label>
        <div aria-hidden="true" onClick={closeMenu} className="menu-backdrop"></div>
        <ul className="menu-panel group">
          <li className="md:pl-4 lg:pl-12">
            <Link
              href="/#home"
              onClick={closeMenu}
              className="transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100"
            >
              {`// ${t(translations.nav.home, language)}`}
            </Link>
          </li>
          <li>
            <Link
              href="/#experience"
              onClick={closeMenu}
              className="transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100"
            >
              {`// ${t(translations.nav.experience, language)}`}
            </Link>
          </li>
          <li>
            <Link
              href="/#projects"
              onClick={closeMenu}
              className="transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100"
            >
              {`// ${t(translations.nav.projects, language)}`}
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100"
            >
              {`// ${t(translations.nav.contact, language)}`}
            </Link>
          </li>
          <li className="mt-2 w-full md:hidden">
            <LanguageToggle />
          </li>
          <li aria-hidden="true" className="menu-divider"></li>
          <li className="w-full md:hidden">
            <p className="menu-copyright">{t(translations.nav.copyright, language)}</p>
          </li>
        </ul>
        <div className="hidden md:absolute md:right-4 md:top-1/2 md:z-30 md:block md:-translate-y-1/2 lg:right-12">
          <LanguageToggle />
        </div>
      </nav>
    </>
  );
};
