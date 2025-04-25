import Image from "next/image";
import type PlacardItem from "@/types/placard";

export default function Placard({
  title,
  description,
  image,
  alt,
}: PlacardItem) {
  return (
    <div className="flex flex-col" data-aos="fade-up">
      <h2 className="uppercase text-5xl text-accent italic mb-4">{title}</h2>

      <div className="flex flex-col md:flex-row h-90">
        <div className="relative w-3/5">
          <Image
            src={`/images/${image}.jpg`}
            alt={alt}
            fill
            className="object-cover"
          />
        </div>
        <p className="font-roboto w-2/5 ml-4">{description}</p>
      </div>
    </div>
  );
}
