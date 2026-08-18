import Link from "next/link";

export const InfoContact = () => {
  return (
    <>
      <div
        className="grid 
      lg:order-first"
      >
        <div
          className="text-center space-y-8.5 max-w-sm mx-auto px-2 
        lg:flex lg:flex-col lg:justify-center"
        >
          <h3 className="text-3xl font-mono tracking-[0px]">
            Disponible para proyectos seleccionados
          </h3>
          <p className="text-lg font-semibold font-mono leading-6.5 tracking-[0.4px]">
            Si tu proyecto requiere dedicacion y resultados, estare dispuesto a
            conversar. Puedes contactarme por correo electronico o mensaje
            directo.
          </p>
          <ul className="text-[19px] tracking-[0.5px] space-y-1.5 font-mono font-semibold">
            <li className="mb-3 text-[20px] tracking-[0.3px]">
              <Link
                className="border-b-4 border-[#006DC6] font-sans inline-block leading-none"
                href="#"
              >
                devseevsk@gmail.com
              </Link>
            </li>
            <li>
              <Link href="#">LinkedIn</Link>
            </li>
            <li>
              <Link href="#">GitHub</Link>
            </li>
            <li>
              <Link href="#">Instagram</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
