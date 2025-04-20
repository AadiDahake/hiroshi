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
        <div className="relative w-2/3">
          <Image
            src={`/images/${image}.jpg`}
            alt={alt}
            fill
            className="object-cover rounded-lg aspect-square"
          />
        </div>
        <p className="font-roboto w-1/3 ml-4">{description}</p>
      </div>
    </div>
  );
}
