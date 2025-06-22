"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Hero } from "./Hero";
import { Mission } from "./Mission";
import { Awards } from "./Awards";
import { Sustainability } from "./Sustainability";

export default function Home() {
  const horizontalRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"],
  });

  // -66.6667% because there are three sections, and we want to translate 2/3 of them
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6667%"]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <div ref={horizontalRef} className="relative h-[300vh]">
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
      </main>
      <Footer />
    </>
  );
}
