"use client";

import { Hero } from "./Hero";
import { RamenBowlAnimationContainer } from "./RamenBowlAnimationContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Hero />
      <RamenBowlAnimationContainer />
      {/* <p>df</p> */}
    </main>
  );
}
