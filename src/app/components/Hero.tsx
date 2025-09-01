import { Mouse } from "../tech-client/components/Mouse";
import { Carousels } from "./Carousels";

export const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="pt-50 pb-16 w-[95%] mx-auto
        sm:pt-26
        md:flex md:flex-col md:items-center md:justify-center md:min-h-screen md:pt-0"
      >
        <article
          className="uppercase text-center font-mono w-[100%] max-w-sm mx-auto
        sm:max-w-lg 
        md:max-w-[730px] 
        lg:max-w-3xl"
        >
          <h1
            className="text-5xl tracking-[1.8px] 
          sm:text-6xl sm:tracking-[2px]
          md:text-8xl md:tracking-[2px]
          lg:text-9xl lg:font-extrabold"
          >
            SALAS SEB
          </h1>
          <h2
            className="text-lg mt-6 font-semibold tracking-widest text-center 
            sm:text-[20px] sm:tracking-[2.3px]
            md:text-[21px] md:tracking-[2.5px]
            lg:tracking-[2.5px]"
          >
            Desarrollador de Software, Front-end & Aplicaciones
          </h2>
        </article>
        <div
          className="pt-27 max-w-sm mx-auto 
        sm:max-w-lg sm:pt-15
        md:max-w-[640px] md:pt-17 
        lg:max-w-3xl lg:pt-17"
        >
          <h3
            className="uppercase text-sm text-center font-sans mb-2 font-semibold tracking-widest text-gray-400
          sm:text-base md:text-lg"
          >
            Herramientas y tecnologias
          </h3>
          <Carousels />
        </div>
        <Mouse />
      </section>
    </>
  );
};
