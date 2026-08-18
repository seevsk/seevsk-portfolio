"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [fixed, setFixed] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!isHome) {
      setFixed(true);
      return;
    }

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
      <nav className={`navbar ${fixed ? "navbar-scrolled" : "navbar-top"}`}>
        <input
          type="checkbox"
          id="menu"
          checked={menuOpen}
          onChange={(e) => setMenuOpen(e.target.checked)}
          className="peer/menu hidden"
        />
        <label htmlFor="menu" className="menu-toggle"></label>
        <div aria-hidden="true" onClick={closeMenu} className="menu-backdrop"></div>
        <ul className="menu-panel">
          <li className="md:pl-12">
            <Link href="/#home" onClick={closeMenu}>
              {"// Inicio"}
            </Link>
          </li>
          <li>
            <Link href="/#skills-exp" onClick={closeMenu}>
              {"// Capacidades"}
            </Link>
          </li>
          <li>
            <Link href="/#projects" onClick={closeMenu}>
              {"// Proyectos"}
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu}>
              {"// Contacto"}
            </Link>
          </li>
          <li aria-hidden="true" className="menu-divider"></li>
          <li className="w-full md:hidden">
            <p className="menu-copyright">
              © 2026. Hecho por Sebastian Salas. Todos los derechos reservados.
            </p>
          </li>
        </ul>
      </nav>
    </>
  );
};
