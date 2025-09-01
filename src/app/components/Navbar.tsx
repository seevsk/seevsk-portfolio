"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
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
  }, []);
  return (
    <>
      <nav
        className={`flex h-20 items-center justify-between mx-auto transition-all duration-300 
      ${
        fixed
          ? "md:fixed md:top-0 md:left-0 md:w-full bg-[#171717]/70 md:backdrop-blur-4xl text-[#f8f9fa] shadow-lg z-50"
          : "absolute top-0 left-0 w-[95%] text-white"
      }
      `}
      >
        <input type="checkbox" id="menu" className="peer/menu hidden" />
        <label
          htmlFor="menu"
          className="w-10 h-10 i-open-menu cursor-pointer bg-contain bg-center 
          bg-transparent rounded-3xl peer-checked/menu:bg-[url('./assets/menu-close.svg')] bg-no-repeat transition-all z-40 md:hidden"
        ></label>
        <ul
          className="fixed tracking-widest top-0 left-0 h-full w-[85%] bg-[#f8f9fa] text-slate-900 px-[6%] font-semibold grid auto-rows-max content-start justify-items-start pt-[100px] space-y-4 space-x-1 clip-square-0 peer-checked/menu:[clip-path:inset(0_10_0_0)]
        md:relative md:grid-flow-col md:pt-2 md:px-0 md:bg-transparent md:text-[#f8f9fa] md:content-center md:mx-auto md:justify-center md:items-center md:gap-7 md:w-full md:text-[18px] md:tracking-[0px] md:font-sans z-20
        lg:text-[18.5px] lg:tracking-[0px] lg:space-x-3 "
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
