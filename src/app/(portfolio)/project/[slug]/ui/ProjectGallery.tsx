import Image from "next/image";
import type { ProjectDetail } from "@/data/projectDetails";

export const ProjectGallery = ({
  images,
}: {
  images: ProjectDetail["images"];
}) => {
  return (
    <div className="mt-14 space-y-4 md:mt-20 md:space-y-5">
      {images.map((image) => (
        <div
          key={image.src}
          className="w-full"
          style={{ aspectRatio: `${image.width} / ${image.height}` }}
        >
          <Image
            className="h-full w-full object-cover"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </div>
      ))}
    </div>
  );
};
