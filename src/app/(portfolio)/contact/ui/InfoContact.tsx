import Link from "next/link";
import { IoLogoLinkedin, IoLogoGithub, IoLogoWhatsapp } from "react-icons/io";

export const InfoContact = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="text-center space-y-8.5 max-w-sm mx-auto px-2">
        <h3 className="text-3xl font-mono tracking-[0px]">
          Disponible para proyectos seleccionados
        </h3>
        <p className="text-lg font-semibold font-mono leading-6.5 tracking-[0.4px]">
          Si tu proyecto requiere dedicacion y resultados, estare dispuesto a
          conversar. Puedes contactarme por correo electronico o mensaje
          directo.
        </p>
        <ul className="text-[19px] tracking-[0.5px] space-y-1.5 font-mono font-semibold mb-5">
          <li>
            <Link href="#" className="inline-flex items-center gap-2">
              <IoLogoLinkedin />
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href="#" className="inline-flex items-center gap-2">
              <IoLogoGithub />
              GitHub
            </Link>
          </li>
          <li>
            <Link href="#" className="inline-flex items-center gap-2">
              <IoLogoWhatsapp />
              WhatsApp
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
