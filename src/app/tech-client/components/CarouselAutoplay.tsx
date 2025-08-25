"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@/components/ui/carousel";
import type { EmblaOptionsType } from "embla-carousel";

interface AutoplayCarouselProps {
  children: React.ReactNode;
  opts: EmblaOptionsType;
}

export const CarouselAutoplay = ({ children, opts }: AutoplayCarouselProps) => {
  const pluginAutoPlay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      opts={opts}
      plugins={[pluginAutoPlay.current]}
      className="relative z-10 flex items-center w-full space-x-4"
    >
      {children}
    </Carousel>
  );
};
