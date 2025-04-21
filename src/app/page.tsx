import Icon from "@mdi/react";
import { mdiArrowDown } from "@mdi/js";
<<<<<<< HEAD

import placardData from "@/data/placard";
import Waves from "@/components/Waves";

import Placard from "@/components/Placard";
=======
import WavesContainer from "@/components/WavesContainer";
>>>>>>> 98ccb4f (finished waves animation)

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center">
      <div className="relative flex-1 flex flex-col w-full justify-center items-center">
        <WavesContainer />

        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 className="uppercase italic text-accent text-9xl mb-10">
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
          <button>
            <Icon
              path={mdiArrowDown}
              size={1}
              className="text-secondary hover:translate-y-2 duration-400 transition-transform"
            ></Icon>
          </button>
        </div>
<<<<<<< HEAD
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
=======
>>>>>>> 98ccb4f (finished waves animation)
      </div>
    </div>
  );
}
