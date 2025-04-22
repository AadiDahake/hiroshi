"use client";
import { useRef, useEffect } from "react";
import type Wave from "@/types/waves";

export default function Wave({
  amplitude,
  frequency,
  initialPhase,
  speed,
}: Wave) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const requestRef = useRef<number | undefined>(undefined);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    const animate = (time: number) => {
      if (!startTime.current) startTime.current = time;
      const elapsed = time - startTime.current;
      const phase = initialPhase + elapsed / speed;

      const points = Array.from({ length: 100 }, (_, i) => {
        const x = i * 3;
        const y = 50 + amplitude * Math.sin(frequency * x + phase);
        return [x, y];
      });

      const d = `M ${points.map((p) => p.join(",")).join(" L ")}`;
      if (pathRef.current) pathRef.current.setAttribute("d", d);

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  });

  return (
    <svg
      viewBox="0 0 300 100"
      className="text-secondary"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.25}
    >
      <path ref={pathRef} d="" />
    </svg>
  );
}
