// components/Waves.tsx
import React from "react";

export default function Waves() {
  const waves = [
    { opacity: 0.2, duration: 8, delay: 0, bottom: 0 },
    { opacity: 0.15, duration: 10, delay: -2, bottom: 10 },
    { opacity: 0.1, duration: 12, delay: -4, bottom: 20 },
  ];

  return (
    <div className="relative w-full h-64 overflow-hidden bg-gray-900">
      {waves.map((w, i) => (
        <svg
          key={i}
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="absolute left-0 w-[200%] h-full stroke-gray-500 fill-transparent"
          style={{
            bottom: `${w.bottom}px`,
            opacity: w.opacity,
            animation: `wave ${w.duration}s linear ${w.delay}s infinite`,
          }}
        >
          <path
            d="
              M0,50 
              C150,150 350,0 600,50 
              C850,100 1050,0 1200,50
              L1200,100 L0,100 Z
            "
            strokeWidth="1"
          />
        </svg>
      ))}
      {/* Put your content on top of the waves here */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h2 className="text-4xl italic text-yellow-300">ABOUT</h2>
      </div>
    </div>
  );
}
