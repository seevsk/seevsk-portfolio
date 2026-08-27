"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { ProjectDetail } from "@/data/projectDetails";
import { PageTransition } from "@/components/page-transition/PageTransition";
import { ScrollToTopButton } from "@/components/scroll-to-top-button/ScrollToTopButton";
import { useLanguage } from "@/context/LanguageContext";
import { translations, t } from "@/data/translations";
import { Footer } from "../../../ui/Footer";
import { NextProjectWidget } from "./NextProjectWidget";
import { ProjectGallery } from "./ProjectGallery";

export const ProjectDetailContent = ({
  project,
}: {
  project: ProjectDetail;
}) => {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <PageTransition>
      <section className="w-full overflow-hidden bg-[#101010] pb-20 text-[#EDEDED] md:pb-28">
        <div className="px-4 pt-10 md:mx-auto md:w-[85%] md:max-w-[1600px] md:px-0 md:pt-20">
          <div className="mt-12 md:mt-12 md:max-w-4xl">
            <p className="font-mono text-[15px] tracking-[0.7px] font-normal text-[#bcb8b1] md:text-base md:font-medium md:tracking-[-0.2px]">
              {isEn ? project.categoryEn : project.category}
              <span className="text-[#ff206e] ml-2">•</span>
            </p>
            <h1 className="mt-3 font-sans text-3xl font-semibold leading-[1.05] tracking-[-0.5px] sm:text-5xl md:text-6xl md:mt-2 lg:text-7xl">
              {isEn ? project.titleEn : project.title}
            </h1>
          </div>

          <nav className="mt-8 flex flex-wrap items-center gap-1.5 font-mono tracking-[0.2px] text-sm text-[#bcb8b1] md:mt-10 md:text-base">
            <Link href="/" className="hover:text-[#EDEDED]">
              {t(translations.projectDetail.home, language)}
            </Link>
            <ChevronRight size={14} />
            <Link href="/#projects" className="hover:text-[#EDEDED]">
              {t(translations.projectDetail.portfolio, language)}
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#EDEDED]">
              {isEn ? project.breadcrumbTitleEn : project.breadcrumbTitle}
            </span>
          </nav>

          <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:max-w-4xl md:grid-cols-[65fr_35fr] md:gap-8">
            <p className="font-mono text-base leading-7 text-[#bcb8b1] md:max-w-md md:text-[16.5px] lg:max-w-lg">
              {isEn ? project.descriptionEn : project.description}
            </p>
            <div className="flex flex-row gap-8 md:flex-col md:gap-8">
              <div className="flex flex-row gap-8 md:gap-14">
                <div className="border-t border-white/15 pt-4">
                  <h3 className="font-sans text-[#EDEDED]">
                    {t(translations.projectDetail.project, language)}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-[#bcb8b1] md:text-[15px]">
                    {(() => {
                      const fieldValue =
                        (isEn ? project.fieldValueEn : project.fieldValue) ??
                        project.fieldValue;

                      return Array.isArray(fieldValue)
                        ? fieldValue.map((part, index) => (
                            <span key={part.text}>
                              {index > 0 && " | "}
                              {part.url ? (
                                <Link
                                  href={part.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline underline-offset-2 transition-colors hover:text-[#EDEDED]"
                                >
                                  {part.text}
                                </Link>
                              ) : (
                                part.text
                              )}
                            </span>
                          ))
                        : fieldValue;
                    })()}
                  </p>
                </div>
                <div className="border-t border-white/15 pt-4">
                  <h3 className="font-sans text-[#EDEDED]">
                    {t(translations.projectDetail.technologies, language)}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-[#bcb8b1] md:text-[15px]">
                    {project.technologies.join(", ")}
                  </p>
                </div>
              </div>
              <Link
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 font-sans font-semibold text-[#EDEDED] transition-colors hover:text-[#ff206e]/90 md:inline-flex"
              >
                {t(translations.projectDetail.openProject, language)}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <Link
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-sans font-semibold text-[#EDEDED] transition-colors hover:text-[#ff206e]/90 md:hidden"
          >
            {t(translations.projectDetail.openProject, language)}
            <ArrowRight size={18} />
          </Link>

          <ProjectGallery images={project.images} />

          <NextProjectWidget currentSlug={project.slug} variant="inline" />
        </div>
      </section>

      <Footer />

      <NextProjectWidget currentSlug={project.slug} variant="fixed" />
      <ScrollToTopButton />
    </PageTransition>
  );
};
