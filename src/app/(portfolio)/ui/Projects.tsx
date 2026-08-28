"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FilterNav, type ProjectFilter } from "./FilterNav";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { translations, t } from "@/data/translations";

const spanByIndex: Record<number, string> = {
  0: "md:col-span-1 lg:col-span-4",
  1: "md:col-span-1 lg:col-span-4",
  2: "md:col-span-2 lg:col-span-4",
  3: "md:col-span-1 lg:col-span-7",
  4: "md:col-span-1 lg:col-span-5",
};

export const Projects = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const visibleProjects = projects
    .map((project, index) => ({ ...project, originalIndex: index }))
    .filter((project) => filter === "all" || project.category === filter);

  return (
    <>
      <section id="projects" className="w-full bg-[#191919]">
      <div
        className="max-w-[1200px] mx-auto px-4 pt-14 pb-14
       md:min-h-screen"
      >
        <FilterNav active={filter} onChange={setFilter} />

        <article
          className="grid gap-7 mt-8
    grid-cols-1
    sm:grid-cols-1
    md:grid-cols-2
    lg:grid-cols-12
    "
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.slug ?? project.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={spanByIndex[project.originalIndex] ?? ""}
              >
                <Link
                  href={project.slug ? `/project/${project.slug}` : "#"}
                  className="group flex h-full flex-col overflow-hidden rounded-lg bg-transparent"
                >
                  <div className="relative w-full aspect-[12/9] overflow-hidden">
                    <Image
                      className={
                        project.hoverImage
                          ? "rounded-t-lg object-cover object-top transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                          : "rounded-t-lg object-cover object-top transition-transform duration-300 group-hover:scale-[1.2]"
                      }
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 60vw"
                    />
                    {project.hoverImage && (
                      <Image
                        className="rounded-t-lg object-cover object-top opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                        src={project.hoverImage}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 60vw"
                      />
                    )}
                  </div>
                  <div
                    className="pt-4 rounded-b-lg px-5 flex flex-col bg-[#20201B] justify-between space-y-0.5 font-sans tracking-[-0.3px]
              "
                  >
                    <h5 className="text-[17px] font-semibold text-[#EDEDED] truncate">
                      {language === "en" ? project.titleEn : project.title}
                    </h5>
                    <div className="relative mb-4 h-[22px] overflow-hidden">
                      <p className="absolute inset-0 font-mono tracking-[-0.2px] text-[15.5px] font-semibold text-[#bcb8b1] transition-all duration-300 group-hover:-translate-y-2.5 group-hover:opacity-0">
                        {language === "en"
                          ? project.descriptionEn
                          : project.description}
                      </p>
                      <p className="absolute inset-0 flex items-center gap-2 font-mono tracking-[-0.2px] text-[15.5px] font-semibold text-[#bcb8b1] opacity-0 translate-y-2.5 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {t(translations.projectCard.showProject, language)}
                        <span className="inline-block h-px w-6 bg-[#bcb8b1]" />
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </article>
      </div>
      </section>
    </>
  );
};
