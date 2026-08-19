import Link from "next/link";
import { IoLogoLinkedin, IoLogoGithub, IoLogoWhatsapp } from "react-icons/io";

export const InfoContact = () => {
  return (
    <div className="flex flex-col items-center px-4 my-10 justify-center w-full">
      <div className="text-center space-y-8.5 max-w-sm mx-auto px-2">
        <h3 className="text-3xl font-mono tracking-[0px]">
          Disponible para proyectos, estas son mis redes sociales
        </h3>
        <p className="text-lg font-normal font-mono leading-6.5 tracking-[0.4px]">
          Si tu proyecto requiere dedicacion y resultados, estare dispuesto a
          conversar. Puedes contactarme personalmente por los siguientes medios.
        </p>
        <ul className="text-[19px] tracking-[0.5px] space-y-1.5 font-mono font-semibold mb-5">
          <li>
            <Link href="#" className="inline-flex items-center gap-2">
              <IoLogoLinkedin />
              <span className="inline-block border-b-5 border-[#00a6fb] leading-none">
                LinkedIn
              </span>
            </Link>
          </li>
          <li>
            <Link href="#" className="inline-flex items-center gap-2">
              <IoLogoGithub />
              <span className="inline-block border-b-5 border-[#891AD5] leading-none">
                GitHub
              </span>
            </Link>
          </li>
          <li>
            <Link href="#" className="inline-flex items-center gap-2">
              <IoLogoWhatsapp />
              <span className="inline-block border-b-5 border-[#65A700] leading-none">
                WhatsApp
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
