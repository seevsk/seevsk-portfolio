import Link from "next/link";
import { FilterNav } from "./FilterNav";
import Image from "next/image";
import { projects } from "@/data/projects";

export const Projects = () => {
  return (
    <>
      <section className="max-w-[1200px] mx-auto px-4">
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
            <div
              key={index}
              className={`
    bg-transparent rounded-lg
    flex flex-col h-full
    overflow-hidden
    ${index === 0 ? "md:col-span-1 lg:col-span-4" : ""} 
    ${index === 1 ? "md:col-span-1 lg:col-span-4" : ""} 
    ${index === 2 ? "md:col-span-2 lg:col-span-4" : ""} 
    ${index === 3 ? "md:col-span-1 lg:col-span-7" : ""} 
    ${index === 4 ? "md:col-span-1 lg:col-span-5" : ""} 
  `}
            >
              <Link href="#">
                <div className="w-full aspect-[12/9]">
                  <Image
                    className="rounded-t-lg w-full h-full"
                    src={project.image}
                    alt={project.alt}
                    width={400}
                    height={250}
                  />
                </div>
              </Link>
              <div
                className="pt-4 rounded-b-lg px-5 flex flex-col bg-[#20201B] justify-between space-y-0.5 font-sans tracking-[-0.3px]
              "
              >
                <h5 className="text-[17px] font-semibold text-[#EDEDED] truncate">
                  {project.title}
                </h5>
                <p className="mb-4 font-mono tracking-[-0.2px] text-[15.5px] font-semibold text-[#bcb8b1]">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </article>
      </section>
    </>
  );
};
