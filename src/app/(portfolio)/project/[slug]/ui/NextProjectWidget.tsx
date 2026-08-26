import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projectDetails } from "@/data/projectDetails";

export const NextProjectWidget = ({
  currentSlug,
  variant,
}: {
  currentSlug: string;
  variant: "fixed" | "inline";
}) => {
  const total = projectDetails.length;
  const currentIndex = projectDetails.findIndex((p) => p.slug === currentSlug);
  const prevProject = projectDetails[(currentIndex - 1 + total) % total];
  const nextProject = projectDetails[(currentIndex + 1) % total];
  const titleMatch = nextProject.title.match(/^(.+?)\s*(\(.+\))$/);
  const titleMain = titleMatch ? titleMatch[1] : nextProject.title;
  const titleSuffix = titleMatch ? titleMatch[2] : null;

  return (
    <div
      className={
        variant === "fixed"
          ? "hidden md:fixed md:bottom-8 md:right-8 md:z-30 md:block"
          : "-mx-4 mt-14 md:hidden"
      }
    >
      <div
        className={
          variant === "fixed"
            ? "w-72 rounded-2xl bg-[#f8f9fa] px-6 py-8 text-[#101010] shadow-lg"
            : "w-full bg-[#f8f9fa] px-6 py-8 text-[#101010]"
        }
      >
        <div className="flex items-center justify-between">
          <p
            className={
              variant === "fixed"
                ? "font-mono text-[15px] font-semibold tracking-[0.2px]"
                : "font-mono text-base font-semibold tracking-[-0.5px]"
            }
          >
            Siguiente Proyecto
          </p>
          <div className="flex items-center gap-2">
            <Link
              href={`/project/${prevProject.slug}`}
              aria-label="Proyecto anterior"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#101010]/5 transition-colors hover:bg-[#101010]/10"
            >
              <ArrowLeft size={16} />
            </Link>
            <Link
              href={`/project/${nextProject.slug}`}
              aria-label="Siguiente proyecto"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#101010]/5 transition-colors hover:bg-[#101010]/10"
            >
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <Link
          href={`/project/${nextProject.slug}`}
          className={
            variant === "fixed"
              ? "mt-2 block font-sans text-[16px] font-semibold leading-snug"
              : "mt-3 block font-sans text-xl font-semibold leading-snug"
          }
        >
          {titleMain}
          {titleSuffix && (
            <span className={variant === "inline" ? "block" : ""}>
              {variant === "inline" ? titleSuffix : ` ${titleSuffix}`}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};
