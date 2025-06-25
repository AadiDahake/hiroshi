"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Award, Star, Trophy, Shield, Zap, Globe, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export function Awards() {
  const awards = [
    {
      icon: Trophy,
      title: "James Beard Award Nomination",
      subtitle: "Outstanding Chef",
      category: "James Beard Foundation",
      year: "",
    },
    {
      icon: Star,
      title: "Michelin Bib Gourmand",
      subtitle: "Exceptional food at moderate prices",
      category: "Michelin Guide",
      year: "",
    },
    {
      icon: Leaf,
      title: "Green Restaurant Association 4-Star Certification",
      subtitle: "Certified for environmental leadership",
      category: "Green Restaurant Association",
      year: "",
    },
    {
      icon: Globe,
      title: "LEED Gold Certification",
      subtitle: "Sustainable building design",
      category: "U.S. Green Building Council",
      year: "",
    },
    {
      icon: Heart,
      title: "Authentic Cuisine Award",
      subtitle: "Japanese Cultural Center",
      category: "Authenticity",
      year: "",
    },
    {
      icon: Zap,
      title: "Plant-Based Innovation Award",
      subtitle: "Recognized for plant-based excellence",
      category: "Plant-Based Association",
      year: "",
    },
    {
      icon: Shield,
      title: "Certified by Health Department",
      subtitle: "Perfect Score",
      category: "Health & Safety",
      year: "",
    },
  ];

  // Carousel state for mobile
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  function paginate(newDirection: number) {
    setDirection(newDirection);
    setIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return awards.length - 1;
      if (next >= awards.length) return 0;
      return next;
    });
  }

  // Swipe gesture support
  const swipeConfidenceThreshold = 10000;
  function swipePower(offset: number, velocity: number) {
    return Math.abs(offset) * velocity;
  }

  // Split awards for custom grid
  const bigAwards = awards.slice(0, 4);
  const smallAwards = awards.slice(4);

  return (
    <section 
      id="awards"
      className="relative w-full h-screen bg-gradient-to-br from-bianca-100 via-shiso-50 to-amber-50 overflow-hidden flex flex-col justify-between items-center px-2 md:px-4 pt-24 md:pt-32 lg:pt-[96px] pb-4 sm:pb-20 scroll-mt-24 md:scroll-mt-32 lg:scroll-mt-[96px]"
    >
      {/* Decorative large number - always behind, never overlaps */}
      <motion.span 
        className="pointer-events-none z-0 block font-sans absolute left-1/2 -translate-x-1/2 bottom-10 lg:left-auto lg:right-0 lg:translate-x-0 lg:bottom-0 text-[8rem] md:text-[16rem] font-extrabold text-shiso-800 opacity-10"
        style={{ opacity: 0.10 }}
      >
        02
      </motion.span>

      {/* Japanese decorative background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern
              id="seigaiha-awards"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0,10 Q5,5 10,10 Q15,15 20,10"
                stroke="#A3B18A"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M0,15 Q5,10 10,15 Q15,20 20,15"
                stroke="#A3B18A"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#seigaiha-awards)" />
        </svg>
      </div>

      {/* Vertical kanji text decoration */}
      <div className="absolute left-4 top-0 bottom-0 flex items-center pointer-events-none opacity-10">
        <div className="writing-mode-vertical text-6xl font-serif text-shiso-600 transform -rotate-90 whitespace-nowrap">
          受賞歴
        </div>
      </div>

      <div className="relative z-10 max-w-7xl w-full flex flex-col h-full min-h-0 flex-1 p-4">
        {/* Header Section */}
        <div className="text-center pt-8 md:pt-0 pb-4 md:pb-6 flex-shrink-0">
          <h2 className="font-sawarabi-mincho text-lg md:text-xl lg:text-3xl text-shiso-900 mb-2 md:mb-3 tracking-widest leading-tight">
            栄誉と認証
          </h2>
          <h3 className="text-2xl md:text-4xl lg:text-6xl font-serif font-semibold text-shiso-700 mb-3 md:mb-6 leading-tight">
            Awards & Recognition
          </h3>
          <p className="text-sm md:text-lg lg:text-xl text-shiso-800 max-w-3xl mx-auto leading-relaxed">
            Celebrating our commitment to culinary excellence and environmental responsibility
          </p>
        </div>

        {/* Carousel for mobile and md screens */}
        <div className="lg:hidden flex flex-col items-center justify-center w-full">
          <div className="relative w-[320px] sm:w-[340px] md:w-[480px] mx-auto flex items-center justify-center h-[320px] sm:h-[340px] md:h-[420px]">
            {/* <AnimatePresence initial={false} custom={direction}> */}
              <motion.div
                key={index}
                className="group relative"
                custom={direction}
                layout
                initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                aria-live="polite"
              >
                <div className="bg-white rounded-2xl p-3 md:p-8 shadow-xl border border-shiso-200/50 hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col items-center justify-center min-h-[260px] h-[320px] sm:h-[340px] md:h-[420px] w-full">
                  {/* Award icon */}
                  <div className="mb-3 relative z-10">
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-shiso-700 via-shiso-900 to-amber-400 flex items-center justify-center shadow group-hover:scale-110 transition-transform duration-300">
                      {React.createElement(awards[index].icon, { className: "w-5 h-5 md:w-10 md:h-10 text-white" })}
                    </div>
                  </div>
                  {/* Award content */}
                  <div className="relative z-10 text-center">
                    <h3 className="font-serif text-base md:text-2xl font-semibold text-shiso-800 mb-1 leading-tight group-hover:text-shiso-900 transition-colors duration-300">
                      {awards[index].title}
                    </h3>
                    <p className="text-marshland-600 text-xs md:text-base leading-relaxed mb-2">
                      {awards[index].subtitle}
                    </p>
                    {/* Category badge */}
                    <div className="inline-block">
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-br from-shiso-700 via-shiso-900 to-amber-400 text-white shadow-sm">
                        {awards[index].category}
                      </span>
                    </div>
                  </div>
                  {/* Decorative corner element */}
                  <div className="absolute bottom-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-shiso-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            {/* </AnimatePresence> */}
            {/* Navigation arrows */}
            <button
              aria-label="Previous award"
              className="absolute left-2 -bottom-10 bg-white/80 hover:bg-white rounded-full shadow p-1 z-10"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="w-5 h-5 text-shiso-700" />
            </button>
            <button
              aria-label="Next award"
              className="absolute right-2 -bottom-10 bg-white/80 hover:bg-white rounded-full shadow p-1 z-10"
              onClick={() => paginate(1)}
            >
              <ChevronRight className="w-5 h-5 text-shiso-700" />
            </button>
          </div>
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-1">
            {awards.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${i === index ? 'bg-shiso-700 scale-110' : 'bg-shiso-300'}`}
                aria-label={`Go to award ${i + 1}`}
                onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              />
            ))}
          </div>
        </div>

        {/* Custom grid for lg+ screens: 2x2 big, 1x3 small */}
        <div className="hidden lg:flex flex-col h-full max-w-7xl mx-auto w-full">
          {/* First row of 2 big awards */}
          <div className="flex gap-6 items-stretch mb-2 justify-center h-[35%]">
            {bigAwards.slice(0, 2).map((award, index) => (
              <div key={index} className="flex-1 max-w-xl group relative">
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-shiso-200/50 hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col justify-center items-center h-full">
                  <div className="mb-6 relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-shiso-700 via-shiso-900 to-amber-400 flex items-center justify-center shadow group-hover:scale-110 transition-transform duration-300">
                      {React.createElement(award.icon, { className: "w-10 h-10 text-white" })}
                    </div>
                  </div>
                  <div className="relative z-10 text-center">
                    <h3 className="font-serif text-2xl font-semibold text-shiso-800 mb-2 leading-tight group-hover:text-shiso-900 transition-colors duration-300">
                      {award.title}
                    </h3>
                    <p className="text-marshland-600 text-lg leading-relaxed mb-3">
                      {award.subtitle}
                    </p>
                    <div className="inline-block">
                      <span className="text-sm font-bold px-3 py-2 rounded-full bg-gradient-to-br from-shiso-700 via-shiso-900 to-amber-400 text-white shadow-sm">
                        {award.category}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <svg className="w-8 h-8 text-shiso-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Second row of 2 big awards */}
          <div className="flex gap-6 items-stretch mb-2 justify-center h-[35%]">
            {bigAwards.slice(2, 4).map((award, index) => (
              <div key={index} className="flex-1 max-w-xl group relative">
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-shiso-200/50 hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col justify-center items-center h-full">
                  <div className="mb-6 relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-shiso-700 via-shiso-900 to-amber-400 flex items-center justify-center shadow group-hover:scale-110 transition-transform duration-300">
                      {React.createElement(award.icon, { className: "w-10 h-10 text-white" })}
                    </div>
                  </div>
                  <div className="relative z-10 text-center">
                    <h3 className="font-serif text-2xl font-semibold text-shiso-800 mb-2 leading-tight group-hover:text-shiso-900 transition-colors duration-300">
                      {award.title}
                    </h3>
                    <p className="text-marshland-600 text-lg leading-relaxed mb-3">
                      {award.subtitle}
                    </p>
                    <div className="inline-block">
                      <span className="text-sm font-bold px-3 py-2 rounded-full bg-gradient-to-br from-shiso-700 via-shiso-900 to-amber-400 text-white shadow-sm">
                        {award.category}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <svg className="w-8 h-8 text-shiso-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Third row of 3 small awards */}
          <div className="flex gap-6 items-stretch justify-center h-[20%]">
            {smallAwards.map((award, index) => (
              <div key={index} className="flex-1 max-w-xs group relative">
                <div className="bg-white rounded-xl p-4 shadow-xl border border-shiso-200/50 hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col justify-center items-center h-full">
                  <div className="mb-2 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-shiso-700 via-shiso-900 to-amber-400 flex items-center justify-center shadow group-hover:scale-110 transition-transform duration-300">
                      {React.createElement(award.icon, { className: "w-5 h-5 text-white" })}
                    </div>
                  </div>
                  <div className="relative z-10 text-center">
                    <h3 className="font-serif text-base font-semibold text-shiso-800 mb-1 leading-tight group-hover:text-shiso-900 transition-colors duration-300">
                      {award.title}
                    </h3>
                    <p className="text-marshland-600 text-xs leading-relaxed mb-1">
                      {award.subtitle}
                    </p>
                    <div className="inline-block">
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-br from-shiso-700 via-shiso-900 to-amber-400 text-white shadow-sm">
                        {award.category}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-shiso-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-4 md:mt-8 text-center flex-shrink-0 pb-4 sm:pb-20">
          <div className="inline-flex items-center space-x-3 md:space-x-4 bg-white/90 backdrop-blur-sm rounded-full px-6 md:px-8 py-3 md:py-4 shadow-xl border border-shiso-200/50">
            <Leaf className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
            <span className="text-shiso-800 font-semibold text-sm md:text-lg">Leading the Way in Sustainable Dining</span>
            <Award className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
