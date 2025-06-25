"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Award,
  Star,
  Trophy,
  Shield,
  Zap,
  Droplets,
  Globe,
  Heart,
  Recycle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React from "react";

export function Awards() {
  const awards = [
    {
      icon: Trophy,
      title: "Best Vegetarian Restaurant 2024",
      subtitle: "Local Food Critics Association",
      category: "Culinary Excellence",
      color: "from-amber-500 to-orange-600",
      gradient: "bg-gradient-to-br from-amber-500 to-orange-600",
      year: "2024",
    },
    {
      icon: Star,
      title: "5-Star Rating",
      subtitle: "Sustainable Dining Guide, Google Reviews, and Yelp",
      category: "Customer Satisfaction",
      color: "from-yellow-500 to-amber-600",
      gradient: "bg-gradient-to-br from-yellow-500 to-amber-600",
      year: "2024",
    },
    {
      icon: Leaf,
      title: "Green Restaurant Award",
      subtitle: "Environmental Excellence",
      category: "Sustainability",
      color: "from-green-500 to-emerald-600",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
      year: "2024",
    },
    {
      icon: Recycle,
      title: "Zero Waste Certification",
      subtitle: "Circular Economy Leadership",
      category: "Environmental Impact",
      color: "from-blue-500 to-cyan-600",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
      year: "2023",
    },
    {
      icon: Globe,
      title: "Carbon Neutral Certified",
      subtitle: "Climate Action Leadership",
      category: "Climate Responsibility",
      color: "from-emerald-500 to-teal-600",
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
      year: "2023",
    },
    {
      icon: Heart,
      title: "Organic Certification",
      subtitle: "100% Organic Ingredients",
      category: "Quality Standards",
      color: "from-teal-500 to-green-600",
      gradient: "bg-gradient-to-br from-teal-500 to-green-600",
      year: "2023",
    },
    {
      icon: Shield,
      title: "Food Safety Excellence",
      subtitle: "Highest Safety Standards",
      category: "Safety & Quality",
      color: "from-indigo-500 to-purple-600",
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
      year: "2023",
    },
    {
      icon: Zap,
      title: "Energy Efficiency Award",
      subtitle: "Renewable Energy Leadership",
      category: "Energy Conservation",
      color: "from-purple-500 to-pink-600",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      year: "2022",
    },
    {
      icon: Droplets,
      title: "Water Conservation Champion",
      subtitle: "Sustainable Water Practices",
      category: "Resource Management",
      color: "from-cyan-500 to-blue-600",
      gradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
      year: "2022",
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

  return (
    <section
      id="awards"
      className="relative w-full min-h-screen bg-gradient-to-br from-bianca-100 via-shiso-50 to-amber-50 overflow-hidden flex flex-col justify-between items-center px-2 md:px-4 pt-24 md:pt-32 lg:pt-40 pb-4 sm:pb-20 scroll-mt-24 md:scroll-mt-32 lg:scroll-mt-40"
    >
      {/* Decorative large number - always behind, never overlaps */}
      <motion.span
        className="pointer-events-none z-0 block font-sans absolute left-1/2 -translate-x-1/2 bottom-10 lg:left-auto lg:right-0 lg:translate-x-0 lg:bottom-0 text-[8rem] md:text-[16rem] font-extrabold text-shiso-800 opacity-10"
        style={{ opacity: 0.1 }}
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

      <div className="relative z-10 max-w-7xl w-full flex flex-col h-full min-h-0 flex-1">
        {/* Header Section */}
        <div className="text-center pt-8 md:pt-12 pb-4 md:pb-6 flex-shrink-0">
          <h3 className="text-2xl md:text-4xl lg:text-6xl font-serif font-semibold text-shiso-700 mb-3 md:mb-6 leading-tight">
            Awards & Recognition
          </h3>
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
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 md:p-8 shadow-xl border border-shiso-200/50 hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col items-center justify-center min-h-[260px] h-[320px] sm:h-[340px] md:h-[420px] w-full">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${awards[index].color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}
                />
                {/* Year badge */}
                <div className="absolute top-2 right-2">
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-full ${awards[index].gradient} text-white shadow-lg`}
                  >
                    {awards[index].year}
                  </span>
                </div>
                {/* Award icon */}
                <div className="mb-3 relative z-10">
                  <div
                    className={`w-10 h-10 md:w-16 md:h-16 rounded-xl ${awards[index].gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {React.createElement(awards[index].icon, {
                      className: "w-5 h-5 md:w-10 md:h-10 text-white",
                    })}
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
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${awards[index].color} text-white shadow-md`}
                    >
                      {awards[index].category}
                    </span>
                  </div>
                </div>
                {/* Decorative corner element */}
                <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <svg
                    className="w-5 h-5 text-shiso-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9L8.91 8.26L12 2Z" />
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
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === index ? "bg-shiso-700 scale-110" : "bg-shiso-300"
                }`}
                aria-label={`Go to award ${i + 1}`}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
              />
            ))}
          </div>
        </div>

        {/* Grid for lg+ screens */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 max-w-7xl mx-auto flex-1 items-center">
          {awards.map((award, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 md:p-4 shadow-xl border border-shiso-200/50 hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}
                />
                {/* Year badge */}
                <div className="absolute top-2 right-2">
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-full ${award.gradient} text-white shadow-lg`}
                  >
                    {award.year}
                  </span>
                </div>
                {/* Award icon */}
                <div className="mb-3 relative z-10">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${award.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {React.createElement(award.icon, {
                      className: "w-5 h-5 md:w-6 md:h-6 text-white",
                    })}
                  </div>
                </div>
                {/* Award content */}
                <div className="relative z-10">
                  <h3 className="font-serif text-sm md:text-base font-semibold text-shiso-800 mb-1 leading-tight group-hover:text-shiso-900 transition-colors duration-300">
                    {award.title}
                  </h3>
                  <p className="text-marshland-600 text-xs md:text-sm leading-relaxed mb-2">
                    {award.subtitle}
                  </p>
                  {/* Category badge */}
                  <div className="inline-block">
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${award.color} text-white shadow-md`}
                    >
                      {award.category}
                    </span>
                  </div>
                </div>
                {/* Decorative corner element */}
                <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <svg
                    className="w-5 h-5 text-shiso-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9L8.91 8.26L12 2Z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-4 md:mt-8 text-center flex-shrink-0 pb-4 sm:pb-20">
          <div className="inline-flex items-center space-x-3 md:space-x-4 bg-white/90 backdrop-blur-sm rounded-full px-6 md:px-8 py-3 md:py-4 shadow-xl border border-shiso-200/50">
            <Leaf className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
            <span className="text-shiso-800 font-semibold text-sm md:text-lg">
              Leading the way in sustainable dining
            </span>
            <Award className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
