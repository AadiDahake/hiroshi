"use client";

import dynamic from "next/dynamic";

const RamenBowlAnimation = dynamic(
  () => import("./RamenBowlAnimation").then((mod) => mod.RamenBowlAnimation),
  { ssr: false }
);

export function Hero() {
  return (
    // <div className="relative flex h-screen w-full">
    //   <div className="absolute h-full w-full">
    //     <RamenBowlAnimation />
    //   </div>
    //   <div className="flex justify-end px-[10%] pt-20 w-full">
    //     <h1 className="z-10 uppercase text-8xl font-serif">
    //       Hiroshi
    //       <br />
    //       Ramen
    //     </h1>
    //   </div>
    // </div>
    <div className="relative md:flex items-center w-full h-screen">
      <div className="absolute md:static flex-1 h-full p-20">
        <RamenBowlAnimation />
      </div>
      <div className="shrink [&>*]:z-10 p-20 text-right">
        <h1 className="text-8xl font-serif uppercase">
          Hiroshi
          <br />
          Ramen
        </h1>
        <h3 className="text-xl font-serif">Slow-cooked broth. <br/>House-made noodles. <br/>Pure comfort.</h3>
      </div>
    </div>
  );
}
