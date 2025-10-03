"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const skills = document.getElementById("skills");
    if (!skills) return;

    const triggerY = skills.offsetTop;

    const onScroll = () => {
      setScrolled(window.scrollY >= triggerY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Menu Icons */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-5 left-5 md:hidden w-10 h-10 flex items-center justify-center z-[9999]"
        aria-controls="main-menu"
        aria-expanded={menuOpen}
        aria-label="Abrir menú de navegación"
      >
        {menuOpen ? <X className="text-black" /> : <Menu />}
      </button>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)} // permite cerrar tocando fuera
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 md:hidden"
        />
      )}

      <nav
        className={`flex h-20 items-center justify-between mx-auto transition-all duration-300 
      ${
        scrolled
          ? "md:fixed md:top-0 md:left-0 md:w-full bg-[#171717] md:backdrop-blur-4xl text-[#f8f9fa] shadow-lg"
          : "absolute top-0 left-0 w-[95%] text-white"
      }
      `}
      >
        {/* Menu Links */}
        <ul
          id="main-menu"
          className={`fixed top-0 left-0 h-full w-[85%] bg-[#f8f9fa] text-slate-900 px-[6%] font-semibold grid auto-rows-max content-start justify-items-start pt-[100px] space-y-4 z-30 transition-transform duration-300 md:relative md:grid-flow-col md:pt-2 md:px-0 md:bg-transparent md:text-[#f8f9fa] md:content-center md:mx-auto md:justify-center md:items-center md:gap-7 md:w-full md:text-[18px] md:tracking-[0px] md:font-sans lg:text-[18.5px] lg:tracking-[0px] lg:space-x-3 ${
            menuOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0 md:relative"
          }`}
        >
          <li className="md:pl-12">
            <Link href="#home">{"// Inicio"}</Link>
          </li>
          <li>
            <Link href="#skills-exp">{"// Capacidades"}</Link>
          </li>
          <li>
            <Link href="#projects">{"// Proyectos"}</Link>
          </li>
          {/* <li>
            <Link href="#experience">{"// Experiencia"}</Link>
          </li> */}
          <li>
            <Link href="#contact">{"// Contacto"}</Link>
          </li>
          <li>
            <p className="py-3 font-light w-[75%] tracking-wide md:hidden">
              © 2025. Hecho por Sebastian Salas. Todos los derechos reservados.
            </p>
          </li>
        </ul>
      </nav>
    </>
  );
};
