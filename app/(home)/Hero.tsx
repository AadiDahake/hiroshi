"use client";

import dynamic from "next/dynamic";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const RamenBowlAnimation = dynamic(
  () => import("./RamenBowlAnimation").then((mod) => mod.RamenBowlAnimation),
  { ssr: false }
);

export function Hero() {
  return (
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
        <div className="flex">
          <Button variant="outline" asChild>
            <Link href="/menu">View the Menu</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/reservations">Book Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
