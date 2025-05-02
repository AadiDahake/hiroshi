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
import JobListing from "@/components/JobListing";
import jobData from "@/data/job";
import Label from "@/components/Label";
import { mdiEmoticonHappy } from "@mdi/js";

export default function Careers() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex flex-col items-center h-120">
        <div className="w-full h-full relative group overflow-hidden">
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

      <p className="mt-20 text-3xl" data-aos="fade-up">
        We are constantly looking to acquire the best talent and expand our
        kitchen.
      </p>

      <p className="my-20 text-3xl" data-aos="fade-up">
        View our openings below:
      </p>

      <div className="flex flex-col gap-6">
        {jobData.map((item, index) => (
          <JobListing
            key={index}
            title={item.title}
            description={item.description}
            numApplicants={item.numApplicants}
          />
        ))}
      </div>

      <div className="relative w-full h-180 my-20 flex flex-col items-center justify-center" data-aos="fade-up">
        <h2 className="z-99 absolute text-center w-full text-6xl px-16 text-shadow-lg">
          At Elevato, you can nuture your technique with guidance from top-class
          chefs.
        </h2>

        <Image
          src="/images/31.jpg"
          alt="A photo of a pizza and glass of wine."
          fill
          className="object-cover -z-1"
        />
      </div>

      <p className="text-3xl" data-aos="fade-up">
        Our employees <span className="italic text-accent">love</span> working
        at Elevato.
      </p>

      <Carousel className="w-[60%] mt-20" data-aos="fade-up">
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
