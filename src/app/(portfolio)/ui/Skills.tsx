import Image from "next/image";
import { skills } from "@/data/skills";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 max-w-sm mx-auto
    sm:max-w-[490px]
    md:max-w-2xl md:min-h-screen
    lg:max-w-[1070px] lg:min-h-screen"
    >
      <h2
        id="skills-exp"
        className="text-5xl text-center font-mono font-extrabold tracking-[-0.5px]
      sm:text-6xl sm:tracking-[0.5px]
      md:sm:tracking-[0px] md:pt-28 md:mt-17
      lg:pt-27"
      >
        Areas de Experiencia
      </h2>
      <div>
        <article className="mt-12 font-mono grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {skills.map((item, index) => (
            <div
              key={index}
              className="p-11 mt-4 max-w-sm bg-[#191919] aspect-auto border-[1.2px] border-gray-400 
              sm:max-w-lg
              md:mt-0 md:p-5.5"
            >
              <div className="flex flex-rows items-center justify-center space-x-5">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  className="object-cover"
                  width={48}
                  height={48}
                />
                <h3
                  className="text-3xl font-sans font-semibold text-left tracking-[1.2px]
                sm:text-4xl sm:tracking-[1px]
                md:text-2xl md:tracking-[0.1px]"
                >
                  {item.title.split(" ").map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-flex">
                      <span
                        className={
                          word === item.underlinedWord
                            ? item.underlineColor
                            : ""
                        }
                      >
                        {word}
                      </span>
                      &thinsp;
                    </span>
                  ))}
                </h3>
              </div>
              <p className="mt-5 font-sans font-ligth tracking-[1.5px] text-[17px] text-left">
                {item.description}
              </p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};
