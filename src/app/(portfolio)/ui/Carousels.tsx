import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import { CarouselAutoplay } from "@/components/ui/carousel-autoplay";
import { iconsCarousel } from "@/data/iconsCarousel";

export const Carousels = () => {
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
