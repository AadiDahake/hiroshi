"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Hero } from "./Hero";
import { Mission } from "./Mission";
import { Awards } from "./Awards";
import { Sustainability } from "./Sustainability";
import Footer from "@/components/Footer";

export default function Home() {
  const horizontalRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"],
  });

  // There are 3 horizontal sections, so we need to scroll through a total width
  // that is 2 screen widths less than the total. (300% total width - 100% viewport = 200%)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        {/* The 'h-[600vh]' determines how much vertical scroll is needed 
            to traverse the three horizontal sections. 200vh per section. */}
        <div ref={horizontalRef} className="relative h-[600vh]">
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <motion.div style={{ x }} className="flex">
              <div className="flex h-screen w-screen flex-shrink-0 items-center justify-center">
                <Mission />
              </div>
              <div className="flex h-screen w-screen flex-shrink-0 items-center justify-center">
                <Awards />
              </div>
              <div className="flex h-screen w-screen flex-shrink-0 items-center justify-center">
                <Sustainability />
              </div>
            </motion.div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
