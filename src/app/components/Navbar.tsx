import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <nav className="flex h-20 items-center justify-between">
        <input type="checkbox" id="menu" className="peer/menu hidden" />
        <label
          htmlFor="menu"
          className="w-10 h-10 i-open-menu cursor-pointer bg-contain bg-center 
          bg-transparent rounded-3xl peer-checked/menu:bg-[url('./assets/menu-close.svg')] bg-no-repeat transition-all z-40 md:hidden"
        ></label>
        <ul
          className="fixed tracking-widest top-0 left-0 h-full w-[85%] bg-[#f8f9fa] text-slate-900 px-[6%] font-semibold grid auto-rows-max content-start justify-items-start pt-[100px] space-y-4 clip-square-0 peer-checked/menu:[clip-path:inset(0_10_0_0)]
        md:relative md:grid-flow-col md:pt-2 md:px-0 md:bg-transparent md:text-[#f8f9fa] md:content-center md:mx-auto md:justify-center md:items-center md:gap-7 md:w-full md:text-lg z-20"
        >
          <li>
            <Link href="#home">{"// Inicio"}</Link>
          </li>
          <li>
            <Link href="#skills">{"// Capacidades"}</Link>
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
