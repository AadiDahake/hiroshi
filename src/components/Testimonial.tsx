import Image from "next/image";
import type TestimonialItem from "@/types/testimonial";

export default function Testimonial({
  name,
  testimonial,
  image,
  alt,
}: TestimonialItem) {
  return (
    <>
      <h2 className="text-4xl text-accent italic mb-4 max-w-fit">{name}</h2>

      <div className="flex flex-col md:flex-row h-100">
        <div className="relative w-1/2">
          <Image
            src={`/images/${image}.jpg`}
            alt={alt}
            fill
            className="object-cover object-[0%_25%]"
          />
        </div>

        <p className="text-xl font-roboto ml-4 w-1/2">
          <span className="text-accent">"</span>
          {testimonial}
          <span className="text-accent">"</span>
        </p>
      </div>
    </>
  );
}
