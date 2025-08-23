import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export const Carousels = () => {
  return (
    <>
      <Carousel className="relative z-10">
        <CarouselContent>
          <CarouselItem className="basis-1/3">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              alt="Imagen 3"
              className="aspect-square object-cover"
              width={1280}
              height={720}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              alt="Imagen 3"
              className="aspect-square object-cover"
              width={1280}
              height={720}
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              alt="Imagen 3"
              className="aspect-square object-cover"
              width={1280}
              height={720}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  );
};
