"use client";

import { useRef } from "react";
import Icon from "@mdi/react";
import { mdiArrowDown } from "@mdi/js";
import WavesContainer from "@/components/WavesContainer";
import Placard from "@/components/Placard";
import placardData from "@/data/placard";

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
          <h1 className="uppercase italic text-accent text-9xl mb-4">
            Elevato
          </h1>

          <h2 className="uppercase text-secondary text-2xl">Est. 1914</h2>
          <p className="text-xl">
            An elevated vegetarian Italian fine-dining experience.
          </p>
        </div>

        <div className="flex flex-col items-center mb-6">
          <p className="uppercase">Discover</p>
          <button onClick={scrollToTarget} className="cursor-pointer">
            <Icon
              path={mdiArrowDown}
              size={1}
              className="text-secondary hover:translate-y-2 duration-400 transition-transform"
            ></Icon>
          </button>
        </div>
      </div>

      <div ref={targetRef} className="flex flex-col items-center">
        <hr className="border-secondary w-screen"></hr>

        <div className="flex gap-6">
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
      </div>
    </div>
  );
}
