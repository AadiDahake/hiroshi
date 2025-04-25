"use client";

import { useRef } from "react";
import Icon from "@mdi/react";
import { mdiArrowDown } from "@mdi/js";
import { mdiStar } from "@mdi/js";
import WavesContainer from "@/components/WavesContainer";
import Placard from "@/components/Placard";
import placardData from "@/data/placard";
import Image from "next/image";
import Link from "next/link";
import labelData from "@/data/label";
import Label from "@/components/Label";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center">
      <div className="relative h-screen flex flex-col w-full justify-center items-center">
        <WavesContainer />

        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 className="uppercase italic text-accent text-9xl mb-10">
            Elevato
          </h1>

          <h2 className="uppercase text-secondary text-2xl">Est. 1914</h2>
          <p className="text-xl">
            An elevated vegetarian Italian fine-dining experience.
          </p>
        </div>

        <div className="flex flex-col items-center mb-6">
          <p className="uppercase text-xl">Discover</p>
          <button onClick={scrollToTarget} className="cursor-pointer">
            <Icon
              path={mdiArrowDown}
              size={1.25}
              className="text-secondary hover:translate-y-2 duration-400 transition-transform"
            ></Icon>
          </button>
        </div>
      </div>

      <div ref={targetRef} className="w-full flex flex-col items-center">
        <hr className="border-secondary w-full mb-20"></hr>

        <div className="flex items-center justify-evenly w-full mb-20">
          {labelData.map((item, index) => (
            <Label
              key={index}
              icon={item.icon}
              subheading={item.subheading}
              body={item.body}
            />
          ))}
        </div>

        <div className="relative w-full h-180" data-aos="fade-up">
          <h2 className="z-99 absolute top-16 text-center w-full text-background text-6xl">
            Visit our hand-crafted{" "}
            <Link
              href="/menu"
              className="underline underline-offset-6 decoration-from-font"
            >
              menu
            </Link>{" "}
            before you visit.
          </h2>

          <Image
            src="/images/23.jpg"
            alt="A photo, with bright colors, of a bowl of pasta."
            fill
            className="object-cover z-[-1]"
          />
        </div>

        <div className="flex w-[90%] gap-8 mt-20">
          {placardData.map((item, index) => (
            <Placard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              alt={item.alt}
            />
          ))}
        </div>

        <hr className="border-secondary w-full my-20"></hr>

        <div className="flex w-[90%] flex-col items-center mb-20" data-aos="fade-up">
          <p className="text-4xl mb-8">
            Renowned restaurant with 3 Michelin Stars.
          </p>
          <div className="flex w-full justify-evenly items-center">
            <div className="flex flex-col justify-center items-center">
              <Icon path={mdiStar} size={4} className="text-accent"></Icon>
              <p className="text-3xl">1962</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Icon path={mdiStar} size={4} className="text-accent"></Icon>
              <p className="text-3xl">2003</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Icon path={mdiStar} size={4} className="text-accent"></Icon>
              <p className="text-3xl">2017</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
