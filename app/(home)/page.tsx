"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { Hero } from "./Hero";
import { Mission } from "./Mission";
import { Awards } from "./Awards";
import { Sustainability } from "./Sustainability";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      // We only want to transform vertical scroll events.
      // If the user is scrolling horizontally (e.g., with a trackpad),
      // Math.abs(e.deltaX) will be greater than Math.abs(e.deltaY).
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        // Let the browser handle native horizontal scrolling.
        return;
      }
      
      const isAtEnd = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1; // 1px buffer for precision

      // If we are at the end of the horizontal scroll and the user is scrolling down,
      // allow the default vertical scroll to reveal the footer.
      if (isAtEnd && e.deltaY > 0) {
        return;
      }

      // If the user scrolls up from the footer, the main window will scroll first.
      // We only re-engage horizontal scroll once the main window is at the top.
      if (document.documentElement.scrollTop > 0 && e.deltaY < 0) {
        return;
      }
      
      // For all other cases, prevent the default vertical scroll
      // and apply the scroll value to the horizontal container.
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    };

    // We add the listener to the window to properly handle the transition
    // between horizontal and vertical scrolling.
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <main 
          ref={scrollContainerRef}
          className="flex w-full flex-1 overflow-x-auto overflow-y-hidden"
        >
          <div className="flex w-full">
            <div className="w-screen flex-shrink-0">
              <Hero />
            </div>
            <div className="w-screen flex-shrink-0">
              <Mission />
            </div>
            <div className="w-screen flex-shrink-0">
              <Awards />
            </div>
            <div className="w-screen flex-shrink-0">
              <Sustainability />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
