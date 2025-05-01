import Image from "next/image";
import Testimonial from "@/components/Testimonial";
import testimonialData from "@/data/testimonial";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Careers() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center h-120">
        <div className="w-screen h-full relative group overflow-hidden">
          <Image
            src="/images/24.jpg"
            alt="An Elevato chef plating a dish."
            fill
            className="object-cover object-[0%_85%] grayscale"
          />
          <div className="absolute flex inset-0 items-center">
            <h1 className="text-7xl ml-25 w-175 text-accent">
              Ready to elevate your culinary career?
            </h1>
          </div>
        </div>
      </div>

      <p className="mt-20 text-3xl">
        Don&apos;t just take it from us, hear what our employees are saying.
      </p>

      <Carousel className="w-[60%] mt-20">
        <CarouselContent className="-ml-4">
          {testimonialData.map((item, index) => (
            <CarouselItem key={index} className="pl-4">
              <Testimonial
                name={item.name}
                testimonial={item.testimonial}
                image={item.image}
                alt={item.alt}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
