import Image from "next/image";

import type PlacardItem from "@/types/placard";

export default function Placard({
  title,
  description,
  image,
  alt,
}: PlacardItem) {
  return (
    <div className="flex flex-col">
      <h2 className="uppercase text-5xl text-accent italic mb-4">{title}</h2>

      <div className="flex">
        <div className="relative w-90 h-90">
          <Image
            src={`/images/${image}.jpg`}
            alt={alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="font-roboto w-60 ml-4">{description}</p>
      </div>
    </div>
  );
}
