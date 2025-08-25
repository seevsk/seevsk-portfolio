import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { svgs } from "../assets";
import React from "react";
import { CarouselAutoplay } from "../tech-client/components/CarouselAutoplay";

export const Carousels = () => {
  const iconsCarousel = [
    { src: svgs.java, alt: "java-svg" },
    { src: svgs.js, alt: "js-svg" },
    { src: svgs.figma, alt: "figma-svg" },
    { src: svgs.kotlin, alt: "kotlin-svg" },
    { src: svgs.mysql, alt: "mysql-svg" },
    { src: svgs.php, alt: "php-svg" },
    { src: svgs.sqlserver, alt: "sqlserver-svg" },
    { src: svgs.tailwind, alt: "tailwind-svg" },
    { src: svgs.ts, alt: "ts-svg" },
  ];

  return (
    <>
      <CarouselAutoplay
        opts={{ loop: true, align: "start", containScroll: "trimSnaps" }}
      >
        <CarouselPrevious className="relative left-2" />
        <div className="flex-1 overflow-hidden">
          <CarouselContent className="px-0 w-full ml-0">
            {iconsCarousel.map(({ src, alt }) => (
              <CarouselItem
                className="basis-1/3 flex items-center justify-center
                md:basis-1/4
                lg:basis-1/5"
                key={alt}
              >
                <Image
                  src={src}
                  alt={alt}
                  className="object-cover"
                  width={1280}
                  height={720}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <CarouselNext className="relative right-2" />
      </CarouselAutoplay>
    </>
  );
};
