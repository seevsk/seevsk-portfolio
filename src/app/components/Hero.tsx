import { Carousels } from "./Carousels";

export const Hero = () => {
  return (
    <>
      <section className="pt-30 pb-16">
        <article className="uppercase text-center font-mono w-[100%] max-w-sm mx-auto ">
          <h1 className="text-5xl tracking-[1.8px]">SALAS SEB</h1>
          <h2 className="text-lg mt-6 font-semibold tracking-widest text-center">
            Desarrollador de Software, Front-end & Aplicaciones
          </h2>
        </article>
        <div className="mt-12 max-w-sm mx-auto">
          <h3 className="uppercase text-sm text-center font-sans mb-2 font-semibold tracking-widest text-gray-400">
            Herramientas y tecnologias
          </h3>
          <Carousels />
        </div>
        {/* <Mouse/> */}
      </section>
    </>
  );
};
