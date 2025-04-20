// components/Waves.tsx
import React from "react";

interface Layer {
  src: string;
  duration: number;
  delay: number;
  opacity: number;
}

export default function Waves() {
  const layers: Layer[] = [
    { src: "/waves/wave1.svg", duration: 30, delay: -25, opacity: 1 },
    { src: "/waves/wave2.svg", duration: 25, delay: -10, opacity: 0.8 },
    { src: "/waves/wave3.svg", duration: 20, delay: -1, opacity: 0.6 },
    { src: "/waves/wave4.svg", duration: 25, delay: -12, opacity: 0.4 },
  ];

  return (
    <div className="relative w-full h-[342px] overflow-hidden">
      {layers.map(({ src, duration, delay, opacity }, i) => (
        <div
          key={i}
          className="absolute bottom-0 w-[200%] flex animate-waves"
          style={{
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            opacity,
            height: "200%",
          }}
        >
          <img src={src} className="w-full ml-1/2 h-auto mt-auto" />
          <img src={src} className="w-full mr-1/2 h-auto mt-auto" />
        </div>
      ))}
    </div>
  );
}
