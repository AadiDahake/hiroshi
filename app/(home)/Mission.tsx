"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  // Circular text animation - responsive for mobile
  const circularTextScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [0.1, 0.3, 0.7, 1]
  );
  
  const circularTextX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["-50%", "-25%", "0%", "0%"]
  );
  
  const circularTextY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["-100%", "-50%", "0%", "0%"]
  );
  
  const circularTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 1],
    [0, 0.5, 1, 1]
  );

  // Content fade-in animation
  const contentOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6, 1],
    [0, 0.3, 0.8, 1]
  );
  
  const contentY = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6, 1],
    [50, 20, 5, 0]
  );

  // Spring animations for smoother movement
  const springCircularScale = useSpring(circularTextScale, { stiffness: 100, damping: 30 });
  const springCircularX = useSpring(circularTextX, { stiffness: 100, damping: 30 });
  const springCircularY = useSpring(circularTextY, { stiffness: 100, damping: 30 });
  const springCircularOpacity = useSpring(circularTextOpacity, { stiffness: 100, damping: 30 });
  const springContentOpacity = useSpring(contentOpacity, { stiffness: 100, damping: 30 });
  const springContentY = useSpring(contentY, { stiffness: 100, damping: 30 });

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-[#e2dec5] via-shiso-200 to-amber-100 overflow-hidden flex items-center justify-center py-8 md:py-16 px-4 md:px-6"
    >
      {/* Decorative large number - hidden on mobile */}
      <motion.span 
        className="absolute left-0 bottom-0 text-[8rem] md:text-[16rem] font-extrabold text-shiso-800 opacity-40 select-none z-100 block font-sans"
        style={{
          opacity: 0.2,
          y: springContentY
        }}
      >
        01
      </motion.span>

      <div className="relative z-20 max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8 md:gap-20 lg:gap-40">
        {/* Left: Text */}
        <motion.div 
          className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-1 mt-14 sm:mt-12 lg:mt-0"
          style={{
            opacity: springContentOpacity,
            y: springContentY
          }}
        >
          <h2 className="font-sawarabi-mincho text-lg md:text-xl lg:text-4xl text-shiso-900 mb-2 md:mb-4 tracking-widest leading-tight">
            レストランについて
          </h2>
          <h3 className="text-3xl md:text-5xl lg:text-7xl font-serif font-semibold text-shiso-700 mb-4 md:mb-8 leading-tight">
            About the Restaurant
          </h3>
          <p className="text-base md:text-xl lg:text-2xl text-shiso-800 max-w-2xl mb-6 md:mb-12 leading-relaxed">
            Experience the art of vegetarian ramen at Hiroshi Ramen, where tradition meets innovation. Our slow-cooked broths and house-made noodles create pure comfort in every bowl.
          </p>
          <Link href="/about" className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-10 py-3 md:py-5 rounded-full bg-shiso-600 hover:bg-shiso-700 text-white font-bold text-lg md:text-2xl shadow-lg transition-all duration-200">
            Learn more
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="md:w-8 md:h-8"><path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </motion.div>
        
        {/* Right: Rotating Circular Text and Image */}
        <div className="flex-1 flex justify-center items-center relative min-h-[200px] md:min-h-[340px] order-1 lg:order-3 w-full">
          {/* Rotating circular text - responsive sizing */}
          <motion.div 
            className="absolute inset-0 flex justify-center items-center pointer-events-none z-20"
            style={{
              scale: springCircularScale,
              x: springCircularX,
              y: springCircularY,
              opacity: springCircularOpacity,
              transformOrigin: "center center"
            }}
          >
            <svg
              width="454px"
              height="454px"
              viewBox="0 0 380 380"
              className="animate-spin-slow md:w-[666px] md:h-[666px] lg:w-[999px] lg:h-[999px]"
              style={{ position: "absolute" }}
            >
              <defs>
                <path
                  id="circlePath"
                  d="M190,190 m-140,0 a140,140 0 1,1 280,0 a140,140 0 1,1 -280,0"
                />
              </defs>
              <text
                fill="#A3B18A"
                fontSize="28"
                fontFamily="'Sawarabi Mincho', serif"
                letterSpacing="1"
                className="md:text-lg lg:text-xl"
              >
                <textPath xlinkHref="#circlePath" startOffset="0%" textLength="880">
                  <tspan className="block sm:hidden">Hiroshi Ramen • Vegetarian Art • Tradition & Innovation •</tspan>
                  <tspan className="hidden sm:block">Hiroshi Ramen • Vegetarian Ramen Art • Tradition & Innovation • Sustainable Dining • Authentic Flavors • Pure Comfort •</tspan>
                </textPath>
              </text>
            </svg>
          </motion.div>
          
          {/* Image in the center - responsive sizing */}
          <motion.div 
            className="relative z-30 rounded-2xl w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] flex items-center justify-center"
            style={{
              opacity: springContentOpacity,
              y: springContentY,
              scale: useTransform(
                scrollYProgress,
                [0.3, 0.6, 1],
                [0.8, 0.95, 1]
              )
            }}
          >
            <img
              src="/images/menu/1.png"
              alt="Sustainable Ramen Bowl"
              className="rounded-xl w-full h-full object-cover bg-white"
              width={520}
              height={520}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
