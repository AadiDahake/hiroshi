"use client";

import dynamic from "next/dynamic";
import { BookOpenIcon, SaladIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const RamenBowlAnimation = dynamic(
  () => import("./RamenBowlAnimation").then((mod) => mod.RamenBowlAnimation),
  { ssr: false }
);

export function Hero() {
  return (
    <div className="w-full h-screen p-20 text-center">
      <div className="md:flex md:items-center size-full">
        <div className="absolute top-0 left-0 w-full md:static overflow-hidden flex-1 h-full">
          <RamenBowlAnimation />
        </div>
        <div className="shrink [&_*]:z-10 [&>*]:z-10 text-center md:text-right">
          <h1 className="text-8xl font-serif uppercase">
            Hiroshi
            <br />
            Ramen
          </h1>
          <h3 className="text-2xl font-semibold font-serif">
            <span className="text-green-800">Vegetarian.</span>
            &nbsp;
            <span className="text-amber-800">Authentic.</span>
          </h3>
          <h3 className="text-xl font-serif">
            Slow-cooked broth. <br />
            House-made noodles. <br />
            Pure comfort.
          </h3>
          <div className="flex justify-center md:justify-end gap-5 mt-5">
            <Button size="lg" variant="default" asChild>
              <Link href="/menu">
                View the Menu
                <BookOpenIcon />
              </Link>
            </Button>
            <Button size="lg" variant="default" asChild>
              <Link href="/reservations">
                Make a Reservation
                <SaladIcon />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
