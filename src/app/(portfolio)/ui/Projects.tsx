import Link from "next/link";
import { FilterNav } from "./FilterNav";
import Image from "next/image";
import { projects } from "@/data/projects";

export const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="max-w-[1200px] mx-auto px-4 mb-14
       md:min-h-screen"
      >
        <FilterNav />

        <article
          className="grid gap-7 mt-8 space-y-3
    grid-cols-1
    sm:grid-cols-1 sm:space-y-3.5
    md:grid-cols-2 md:space-x-2.5
    lg:grid-cols-12
    "
        >
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.slug ? `/project/${project.slug}` : "#"}
              className={`
    group bg-transparent rounded-lg
    flex flex-col h-full
    overflow-hidden
    ${index === 0 ? "md:col-span-1 lg:col-span-4" : ""}
    ${index === 1 ? "md:col-span-1 lg:col-span-4" : ""}
    ${index === 2 ? "md:col-span-2 lg:col-span-4" : ""}
    ${index === 3 ? "md:col-span-1 lg:col-span-7" : ""}
    ${index === 4 ? "md:col-span-1 lg:col-span-5" : ""}
  `}
            >
              <div className="relative w-full aspect-[12/9] overflow-hidden">
                <Image
                  className={
                    project.hoverImage
                      ? "absolute inset-0 rounded-t-lg w-full h-full object-cover object-top transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                      : "rounded-t-lg w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.2]"
                  }
                  src={project.image}
                  alt={project.alt}
                  width={400}
                  height={250}
                />
                {project.hoverImage && (
                  <Image
                    className="absolute inset-0 rounded-t-lg w-full h-full object-cover object-top opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                    src={project.hoverImage}
                    alt={project.alt}
                    width={400}
                    height={250}
                  />
                )}
              </div>
              <div
                className="pt-4 rounded-b-lg px-5 flex flex-col bg-[#20201B] justify-between space-y-0.5 font-sans tracking-[-0.3px]
              "
              >
                <h5 className="text-[17px] font-semibold text-[#EDEDED] truncate">
                  {project.title}
                </h5>
                <div className="relative mb-4 h-[22px] overflow-hidden">
                  <p className="absolute inset-0 font-mono tracking-[-0.2px] text-[15.5px] font-semibold text-[#bcb8b1] transition-all duration-300 group-hover:-translate-y-2.5 group-hover:opacity-0">
                    {project.description}
                  </p>
                  <p className="absolute inset-0 flex items-center gap-2 font-mono tracking-[-0.2px] text-[15.5px] font-semibold text-[#bcb8b1] opacity-0 translate-y-2.5 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Mostrar proyecto
                    <span className="inline-block h-px w-6 bg-[#bcb8b1]" />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </article>
      </section>
    </>
  );
};
