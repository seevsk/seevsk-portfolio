import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { projectDetails } from "@/data/projectDetails";
import { PageTransition } from "@/components/page-transition/PageTransition";
import { NextProjectWidget } from "./ui/NextProjectWidget";
import { ProjectGallery } from "./ui/ProjectGallery";
import { ScrollToTopButton } from "./ui/ScrollToTopButton";

export function generateStaticParams() {
  return projectDetails.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectDetails.find((p) => p.slug === slug);

  return { title: project ? `${project.title} | Sebastian Salas` : "Proyecto" };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectDetails.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <PageTransition>
      <section className="w-full overflow-hidden bg-[#101010] pb-20 text-[#EDEDED] md:pb-28">
        <div className="w-[95%] max-w-[1600px] mx-auto pt-10 md:w-[85%] md:pt-20">
          <div className="mt-12 md:mt-12 md:max-w-3xl">
            <p className="font-mono text-[15px] tracking-[0.7px] font-normal text-[#bcb8b1] md:text-base md:font-medium md:tracking-[-0.2px]">
              {project.category}
              <span className="text-[#00a6fb] ml-2">•</span>
            </p>
            <h1 className="mt-3 font-sans text-4xl font-semibold leading-[1.05] tracking-[-0.5px] sm:text-5xl md:text-6xl md:mt-2 lg:text-7xl">
              {project.title}
            </h1>
          </div>

          <nav className="mt-8 flex flex-wrap items-center gap-1.5 font-mono tracking-[0.2px] text-sm text-[#bcb8b1] md:mt-10 md:text-base">
            <Link href="/" className="hover:text-[#EDEDED]">
              Inicio
            </Link>
            <ChevronRight size={14} />
            <Link href="/#projects" className="hover:text-[#EDEDED]">
              Portafolio
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#EDEDED]">{project.breadcrumbTitle}</span>
          </nav>

          <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:max-w-4xl md:grid-cols-[65fr_35fr] md:gap-8">
            <p className="font-mono text-base leading-7 text-[#bcb8b1] md:max-w-md md:text-[16.5px] lg:max-w-lg">
              {project.description}
            </p>
            <div className="flex flex-row gap-8 md:flex-col md:gap-8">
              <div className="flex flex-row gap-8 md:gap-14">
                <div className="border-t border-white/15 pt-4">
                  <h3 className="font-sans text-[#EDEDED]">
                    {project.fieldLabel}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-[#bcb8b1] md:text-[15px]">
                    {project.fieldValue}
                  </p>
                </div>
                <div className="border-t border-white/15 pt-4">
                  <h3 className="font-sans text-[#EDEDED]">Tecnologías</h3>
                  <p className="mt-1 font-mono text-sm text-[#bcb8b1] md:text-[15px]">
                    {project.technologies.join(", ")}
                  </p>
                </div>
              </div>
              <Link
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 font-sans font-semibold text-[#EDEDED] transition-colors hover:text-[#00a6fb] md:inline-flex"
              >
                Abrir Proyecto
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <Link
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-sans font-semibold text-[#EDEDED] transition-colors hover:text-[#00a6fb] md:hidden"
          >
            Abrir Proyecto
            <ArrowRight size={18} />
          </Link>

          <ProjectGallery images={project.images} />

          <NextProjectWidget currentSlug={project.slug} variant="inline" />

          <footer className="mt-7 space-y-1 border-t border-white/10 pt-6 font-mono text-[15px] tracking-[0.5px] text-[#bcb8b1] md:mt-20 md:flex md:max-w-4xl md:items-center md:justify-between md:space-y-0 md:text-[15px]">
            <p>© 2026. Hecho por Sebastian Salas.</p>
            <p>Todos los derechos reservados.</p>
          </footer>
        </div>
      </section>

      <NextProjectWidget currentSlug={project.slug} variant="fixed" />
      <ScrollToTopButton />
    </PageTransition>
  );
}
