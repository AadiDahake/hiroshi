"use client";

import dynamic from "next/dynamic";

const RamenBowlAnimation = dynamic(() => import('./RamenBowlAnimation').then((mod) => mod.RamenBowlAnimation), { ssr: false })

export function RamenBowlAnimationContainer() {
  return (
    <div className="relative flex h-screen w-full">
      <RamenBowlAnimation />
    </div>
  );
}
