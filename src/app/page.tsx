import Icon from "@mdi/react";
import { mdiArrowDown } from "@mdi/js";

import placardData from "@/data/placard";
import Waves from "@/components/Waves";

import Placard from "@/components/Placard";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10">
      {/* <div className="flex flex-col justify-center items-center"> */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="relative w-full">
          <Waves />
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase italic text-accent text-9xl mb-10">
            Elevato
          </h1>
        </div>

        <h2 className="uppercase text-secondary text-2xl">Est. 1914</h2>
        <p className="text-xl">
          An elevated vegetarian Italian fine-dining experience.
        </p>
      </div>

      {/* <div className="flex flex-col items-center mb-6">
          <p className="uppercase">Discover</p>
          <Icon path={mdiArrowDown} size={1} className="text-secondary"></Icon>
        </div>
      </div> */}

      <div className="grid md:grid-cols-2 gap-10 w-9/10">
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
  );
}
