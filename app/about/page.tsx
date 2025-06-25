"use client";

import { motion } from "framer-motion";
import ExportedImage from "next-image-export-optimizer";
import Navbar from "@/components/Navbar";
import ReactCompareImage from "react-compare-image";
import Footer from "@/components/Footer";
import { useState } from "react";
import JapanMap from "@/components/JapanMap";
import ScrollToTop from "@/components/ScrollToTop";

import SustainabilityCardImage from "@/public/images/about/cards/sustainability.jpg";
import InnovationCardImage from "@/public/images/about/cards/innovation.webp";
import TraditionCardImage from "@/public/images/about/cards/tradition.jpg";

// Japanese Seigaiha (Wave) Pattern Component
const SeigaihaPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-5"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <defs>
      <pattern
        id="seigaiha"
        x="0"
        y="0"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M0,10 Q5,5 10,10 Q15,15 20,10"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
        />
        <path
          d="M0,15 Q5,10 10,15 Q15,20 20,15"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
        />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#seigaiha)" />
  </svg>
);

// Japanese Calligraphy Text Component
const KanjiText = ({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) => (
  <motion.div
    className={`font-sawarabi-mincho ${className}`}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.2 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

// Japanese Timeline Component
const Timeline = () => {
  const timelineData = [
    {
      year: "2018",
      title: "伝統の継承",
      subtitle: "Traditional Roots",
      description:
        "Hiroshi begins his culinary journey mastering traditional ramen techniques, learning the art of pork-based broths and classic preparation methods passed down through generations.",
      image: "/images/about/sustainability.jpg",
      imageAlt: "Traditional ramen preparation",
      sustainabilityLevel: "Traditional",
      impact: "High environmental footprint",
    },
    {
      year: "2020",
      title: "意識の目覚め",
      subtitle: "Environmental Awakening",
      description:
        "After witnessing the environmental impact of traditional ramen production, Hiroshi begins researching sustainable alternatives and plant-based broth techniques.",
      image: "/images/menu/5.png",
      imageAlt: "Environmental research and development",
      sustainabilityLevel: "Transitioning",
      impact: "Reducing meat consumption",
    },
    {
      year: "2022",
      title: "革新の始まり",
      subtitle: "Innovation Begins",
      description:
        "Our flagship restaurant opens with a revolutionary approach: plant-based broths that rival traditional tonkotsu, zero-waste kitchen practices, and ethical ingredient sourcing.",
      image: "/images/menu/6.png",
      imageAlt: "First sustainable ramen restaurant",
      sustainabilityLevel: "Sustainable",
      impact: "60% reduction in carbon footprint",
    },
    {
      year: "2023",
      title: "循環システム",
      subtitle: "Circular Systems",
      description:
        "Implementation of complete circular economy practices: food waste composting, renewable energy, water recycling, and partnerships with local organic farms.",
      image: "/images/menu/7.png",
      imageAlt: "Circular economy implementation",
      sustainabilityLevel: "Circular",
      impact: "85% waste diversion rate",
    },
    {
      year: "2024",
      title: "業界の変革",
      subtitle: "Industry Transformation",
      description:
        "Recognition as a sustainability leader in the food industry. Launching educational programs to help other restaurants adopt sustainable practices.",
      image: "/images/menu/8.png",
      imageAlt: "Industry leadership and education",
      sustainabilityLevel: "Leading",
      impact: "Inspiring industry-wide change",
    },
    {
      year: "2025",
      title: "未来のビジョン",
      subtitle: "Future Vision",
      description:
        "Expanding our mission globally: carbon-neutral operations, regenerative agriculture partnerships, and developing sustainable food systems for the next generation.",
      image: "/images/menu/1.png",
      imageAlt: "Future sustainable food systems",
      sustainabilityLevel: "Regenerative",
      impact: "Carbon-neutral operations",
    },
  ];

  return (
    <section className="py-20 bg-[var(--color-bianca-50)] relative overflow-hidden">
      {/* Japanese Pattern Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <SeigaihaPattern />
      </div>
      {/* Washi paper texture */}
      <div className="absolute inset-0 bg-[url('/images/about/washi.png')] bg-repeat opacity-40 mix-blend-multiply pointer-events-none" />
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <span
            className="font-sawarabi-mincho text-4xl text-shiso-400 mb-2 tracking-widest"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
              letterSpacing: "0.2em",
            }}
          >
            進化の道
          </span>
          <span className="block w-1 h-10 bg-shiso-400 rounded-full mb-2" />
          <h2 className="text-6xl font-serif font-semibold text-shiso-900 mb-6 text-center">
            Our Evolution
          </h2>
          <p className="text-xl text-marshland-700 text-center max-w-3xl">
            From traditional ramen mastery to sustainable innovation - our journey toward environmental responsibility
          </p>
        </div>
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-shiso-400 to-marshland-400 transform -translate-x-1/2 z-0" />
          <div className="block md:hidden absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-shiso-400 to-marshland-400 transform -translate-x-1/2 z-0" />
          <div className="flex flex-col md:gap-0 gap-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-center md:mb-24 z-10 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  rotate: index % 2 === 0 ? -10 : 10,
                }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  bounce: 0.4,
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  scale: 1.04,
                  rotate: index % 2 === 0 ? -2 : 2,
                }}
              >
                {/* Timeline node with pulse */}
                <motion.div
                  className="absolute left-1/2 top-1/2 md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                  animate={{
                    scale: [1, 1.25, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: index * 0.2,
                  }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-shiso-400 to-marshland-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center" />
                </motion.div>
                {/* Shikishi card */}
                <div className="w-full md:w-1/2 px-4 md:px-8 flex flex-col items-center md:items-stretch">
                  <motion.div
                    className="relative bg-[var(--color-bianca-50)] border-2 border-shiso-200 rounded-2xl shadow-2xl px-8 py-10 flex flex-col items-center md:items-start"
                    initial={{ scale: 0.8, opacity: 0, y: 60 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.18,
                      type: "spring",
                      bounce: 0.5,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {/* Washi texture */}
                    <div className="absolute inset-0 bg-[url('/images/about/washi.png')] bg-repeat opacity-30 rounded-2xl pointer-events-none" />

                    {/* Timeline Image */}
                    <motion.div
                      className="relative w-full h-40 mb-6 rounded-lg overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExportedImage
                        src={item.image}
                        alt={item.imageAlt}
                        className="w-full h-full object-cover"
                        fill
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </motion.div>

                    {/* Animated year with bounce */}
                    <motion.div
                      className="flex items-center mb-4"
                      initial={{ y: -40, scale: 0.7, opacity: 0 }}
                      whileInView={{ y: 0, scale: 1.1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        bounce: 0.7,
                        duration: 0.7,
                        delay: 0.2 + index * 0.1,
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <span className="relative font-sawarabi-mincho font-extrabold text-5xl md:text-6xl text-shiso-900 drop-shadow-lg pr-4">
                        <span className="relative z-20">{item.year}</span>
                      </span>
                    </motion.div>
                    <KanjiText className="text-2xl font-bold text-shiso-900 mb-1">
                      {item.title}
                    </KanjiText>
                    <h3 className="text-lg font-serif font-semibold text-shiso-700 mb-2">
                      {item.subtitle}
                    </h3>
                    <p className="text-marshland-700 max-w-md mb-4">
                      {item.description}
                    </p>
                    
                    {/* Sustainability Level Indicator */}
                    <div className="w-full mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-shiso-800">Sustainability Level:</span>
                        <span className={`text-sm font-bold px-2 py-1 rounded-full ${
                          item.sustainabilityLevel === "Traditional" ? "bg-red-100 text-red-700" :
                          item.sustainabilityLevel === "Transitioning" ? "bg-yellow-100 text-yellow-700" :
                          item.sustainabilityLevel === "Sustainable" ? "bg-green-100 text-green-700" :
                          item.sustainabilityLevel === "Circular" ? "bg-blue-100 text-blue-700" :
                          item.sustainabilityLevel === "Leading" ? "bg-purple-100 text-purple-700" :
                          "bg-emerald-100 text-emerald-700"
                        }`}>
                          {item.sustainabilityLevel}
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${
                            item.sustainabilityLevel === "Traditional" ? "bg-red-400 w-1/6" :
                            item.sustainabilityLevel === "Transitioning" ? "bg-yellow-400 w-2/6" :
                            item.sustainabilityLevel === "Sustainable" ? "bg-green-400 w-3/6" :
                            item.sustainabilityLevel === "Circular" ? "bg-blue-400 w-4/6" :
                            item.sustainabilityLevel === "Leading" ? "bg-purple-400 w-5/6" :
                            "bg-emerald-400 w-full"
                          }`}
                        />
                      </div>
                    </div>
                    
                    {/* Impact Statement */}
                    <div className="w-full bg-shiso-50 rounded-lg p-3 border border-shiso-200">
                      <span className="text-sm font-semibold text-shiso-800">Impact: </span>
                      <span className="text-sm text-marshland-700">{item.impact}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Hero Section
const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Dark Header Section with Footer Theme */}
      <div className="bg-gradient-to-b from-shiso-900 via-shiso-800 to-shiso-900 relative overflow-hidden">
        {/* Animated Background Elements for Header */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Lanterns */}
          <motion.div
            className="absolute top-20 left-10 w-8 h-12 bg-amber-400/20 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-6 h-10 bg-amber-300/30 rounded-full"
            animate={{
              y: [0, -15, 0],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-7 h-11 bg-amber-500/25 rounded-full"
            animate={{
              y: [0, -25, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <main className="container mx-auto px-4 py-12 relative z-10">
          <header className="text-center w-full clamp-[pt,18,24,sm,3xl] clamp-[pb,18,24,sm,3xl] relative">
            {/* Vertical Kanji background */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
              <span
                className="font-sawarabi-mincho text-[20vw] text-bianca-50 opacity-5 select-none"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "upright",
                  letterSpacing: "0.2em",
                }}
              >
                私たちについて
              </span>
            </div>

            <motion.h1
              className="text-6xl font-serif mb-2 text-bianca-50 relative z-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Us
            </motion.h1>
            <motion.p
              className="text-xl text-shiso-200 relative z-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Tradition meets innovation in every bowl
            </motion.p>
          </header>
        </main>
      </div>
    </section>
  );
};

// Japanese Mission Section
const MissionSection = () => {
  const cards = [
    {
      title: "持続",
      subtitle: "Sustainability",
      description:
        "Zero waste, ethical sourcing, and environmental responsibility.",
      image: SustainabilityCardImage,
      imageAlt: "Sustainable farming practices",
    },
    {
      title: "革新",
      subtitle: "Innovation",
      description: "Pushing culinary boundaries with plant-based excellence.",
      image: InnovationCardImage,
      imageAlt: "Innovative ramen preparation",
    },
    {
      title: "伝統",
      subtitle: "Tradition",
      description:
        "Honoring Japanese culinary heritage with modern techniques.",
      image: TraditionCardImage,
      imageAlt: "Traditional ramen craftsmanship",
    },
  ];

  return (
    <section className="py-20 bg-[var(--color-bianca-100)] relative overflow-hidden">
      {/* Japanese Pattern Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <SeigaihaPattern />
      </div>
      {/* Washi paper texture */}
      <div className="absolute inset-0 bg-[url('/images/about/washi.png')] bg-repeat opacity-40 mix-blend-multiply pointer-events-none" />
      {/* Big vertical Japanese background letter */}
      <div
        className="absolute inset-0 flex justify-center items-center pointer-events-none z-10"
        style={{ right: "50%", width: "50%" }}
      >
        <span
          className="font-sawarabi-mincho text-[18vw] text-marshland-900 opacity-20 select-none"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "upright",
            letterSpacing: "0.2em",
          }}
        >
          使命
        </span>
      </div>
      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center">
            <span
              className="font-sawarabi-mincho text-4xl text-shiso-400 mb-2 tracking-widest"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "upright",
                letterSpacing: "0.2em",
              }}
            >
              使命
            </span>
            <span className="block w-1 h-10 bg-shiso-400 rounded-full mb-2" />
            <h2 className="text-6xl font-serif font-semibold text-shiso-900 mb-6">
              Our Mission
            </h2>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative group flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Kakejiku scroll style */}
              <div className="flex flex-col items-center w-full">
                {/* Top scroll bar */}
                <div className="w-16 h-3 bg-marshland-700 rounded-t-xl mb-1 shadow" />
                {/* Main scroll body */}
                <div className="relative w-full bg-[var(--color-bianca-50)] border-2 border-shiso-300 rounded-2xl shadow-xl px-6 py-10 flex flex-col items-center h-[520px] justify-between">
                  {/* Washi texture */}
                  <div className="absolute inset-0 bg-[url('/images/about/washi.png')] bg-repeat opacity-30 rounded-2xl pointer-events-none" />

                  {/* Mission Image */}
                  <motion.div
                    className="relative w-full h-32 mb-4 rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExportedImage
                      src={card.image}
                      alt={card.imageAlt}
                      className="w-full h-full object-cover"
                      fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>

                  {/* Vertical Japanese heading */}
                  <span
                    className="font-sawarabi-mincho text-3xl text-shiso-700 tracking-widest mb-2 z-10"
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "upright",
                      letterSpacing: "0.2em",
                    }}
                  >
                    {card.title}
                  </span>
                  {/* English subtitle */}
                  <h3 className="text-lg font-serif font-semibold text-shiso-900 mb-4 z-10">
                    {card.subtitle}
                  </h3>
                  <p className="text-marshland-700 mb-4 z-10 text-center">
                    {card.description}
                  </p>
                  {/* Details */}
                  {index === 0 && (
                    <div className="text-marshland-600 text-sm space-y-2 z-10">
                      <p>• Zero-waste kitchen practices</p>
                      <p>• 100% organic ingredients</p>
                      <p>• Carbon-neutral operations</p>
                      <p>• Local farmer partnerships</p>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="text-marshland-600 text-sm space-y-2 z-10">
                      <p>• 48-hour slow-cooking process</p>
                      <p>• Plant-based umami extraction</p>
                      <p>• House-made sustainable noodles</p>
                      <p>• Revolutionary broth techniques</p>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="text-marshland-600 text-sm space-y-2 z-10">
                      <p>• Centuries-old ramen techniques</p>
                      <p>• Japanese culinary heritage</p>
                      <p>• Authentic flavor profiles</p>
                      <p>• Respect for traditional methods</p>
                    </div>
                  )}
                </div>
                {/* Bottom scroll bar */}
                <div className="w-16 h-3 bg-marshland-700 rounded-b-xl mt-1 shadow" />
              </div>
            </motion.div>
          ))}
        </div>
        {/* Big vertical Japanese background letter */}
      </div>
    </section>
  );
};

// Japanese Statistics Section
const StatsSection = () => {
  const stats = [
    { number: "100%", label: "植物性食材", sublabel: "Plant-Based Dishes" },
    { number: "0", label: "食品廃棄物", sublabel: "Food Waste" },
    { number: "50+", label: "地元サプライヤー", sublabel: "Local Suppliers" },
    { number: "10k+", label: "満足したお客様", sublabel: "Happy Customers" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-shiso-900 via-shiso-800 to-shiso-900 relative overflow-hidden">
      {/* Japanese Pattern Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <SeigaihaPattern />
      </div>
      {/* Washi paper texture */}
      <div className="absolute inset-0 bg-[url('/images/about/washi.png')] bg-repeat opacity-30 mix-blend-multiply pointer-events-none" />
      {/* Big vertical Japanese background letter */}
      <div
        className="absolute inset-0 flex justify-center items-center pointer-events-none z-10"
        style={{ left: "50%", width: "50%" }}
      >
        <span
          className="font-sawarabi-mincho text-[18vw] text-shiso-400 opacity-20 select-none"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "upright",
            letterSpacing: "0.1em",
          }}
        >
          使命
        </span>
      </div>
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <span
            className="font-sawarabi-mincho text-4xl text-shiso-200 mb-2 tracking-widest"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
              letterSpacing: "0.2em",
            }}
          >
            統計
          </span>
          <span className="block w-1 h-10 bg-shiso-400 rounded-full mb-2" />
          <h2 className="text-6xl font-serif font-semibold text-bianca-50 mb-6 text-center">
            Our Impact
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [0, 5, -5, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
                delay: index * 0.2,
              }}
              viewport={{ once: false }}
            >
              {/* Ema plaque string */}
              <div className="h-8 flex items-end justify-center">
                <div className="w-1 h-8 bg-shiso-200 rounded-full" />
                <div className="w-2 h-2 bg-shiso-200 rounded-full -ml-1" />
              </div>
              {/* Ema plaque */}
              <div className="relative w-48 h-40 bg-[url('/images/about/ema-wood.png')] bg-cover bg-center rounded-b-3xl border-2 border-shiso-700 shadow-xl flex flex-col items-center justify-center px-4 py-6">
                {/* Number */}
                <div className="text-5xl font-sawarabi-mincho font-bold text-bianca-50 mb-1 drop-shadow-lg">
                  {stat.number}
                </div>
                {/* Japanese label */}
                <div className="font-sawarabi-mincho text-shiso-200 text-lg mb-1">
                  {stat.label}
                </div>
                {/* English sublabel */}
                <div className="text-shiso-100 text-sm">{stat.sublabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Re-add SustainabilityImpactSliders component
const SustainabilityImpactSliders = () => {
  return (
    <section className="py-20 bg-[var(--color-bianca-100)] relative overflow-hidden">
      {/* Japanese Pattern Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <SeigaihaPattern />
      </div>
      {/* Washi paper texture */}
      {/* Big vertical Japanese background letter */}
      <div
        className="absolute inset-0 flex justify-center items-center pointer-events-none z-10"
        style={{ right: "50%", width: "50%" }}
      >
        <span
          className="font-sawarabi-mincho text-[18vw] text-marshland-900 opacity-20 select-none"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "upright",
            letterSpacing: "0.2em",
          }}
        >
          使命
        </span>
      </div>
      <div className="absolute inset-0 bg-[url('/images/about/washi.png')] bg-repeat opacity-40 mix-blend-multiply pointer-events-none" />
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <span
            className="font-sawarabi-mincho text-4xl text-shiso-400 mb-2 tracking-widest"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
              letterSpacing: "0.2em",
            }}
          >
            影響
          </span>
          <span className="block w-1 h-10 bg-shiso-400 rounded-full mb-2" />
          <h2 className="text-6xl font-serif font-semibold text-shiso-900 mb-6 text-center">
            Our Impact: Before & After
          </h2>
          <p className="text-xl text-shiso-800 max-w-3xl mx-auto text-center">
            Explore Japan&rsquo;s diverse regions and discover the origins of our authentic ingredients. 
            Click on any marker to learn about local specialties and sourcing practices.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:px-12 md:gap-24">
          {/* Packaging Slider with Shoji effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-semibold text-shiso-900 text-center mb-4">
              Packaging: Plastic vs. Compostable
            </h3>
            <div className="rounded-2xl overflow-hidden border-3 border-shiso-700 shadow-2xl bg-[url('/images/about/washi.png')] bg-repeat">
              <ReactCompareImage
                leftImage="/images/about/image-comparision/1/before.png" // Before: Plastic packaging
                rightImage="/images/about/image-comparision/1/after.png" // After: Compostable packaging
                leftImageLabel="Before: Plastic"
                rightImageLabel="After: Compostable"
                sliderLineColor="var(--color-shiso-700)"
                sliderPositionPercentage={0.5}
              />
            </div>
          </motion.div>
          {/* Kitchen Slider with Shoji effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-semibold text-shiso-900 text-center mb-4">
              Kitchen: Old vs. Renovated
            </h3>
            <div className="rounded-2xl overflow-hidden border-3 border-shiso-700 shadow-2xl bg-[url('/images/about/washi.png')] bg-repeat">
              <ReactCompareImage
                leftImage="/images/menu/11.png" // Before: Standard kitchen
                rightImage="/images/menu/12.png" // After: Zero-waste kitchen
                leftImageLabel="Before: Standard"
                rightImageLabel="After: Zero-Waste"
                sliderLineColor="var(--color-shiso-700)"
                sliderPositionPercentage={0.5}
              />
            </div>
            {/* Big vertical Japanese background letter */}
            <div
              className="absolute inset-0 flex justify-center items-center pointer-events-none z-10"
              style={{ left: "50%", width: "50%" }}
            >
              <span
                className="font-sawarabi-mincho text-[18vw] text-marshland-900 opacity-20 select-none"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "upright",
                  letterSpacing: "0.2em",
                }}
              >
                使命
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



// Renamed for clarity
const TimelineSection = () => {
  return (
    <section className="py-20 bg-[var(--color-bianca-50)] relative overflow-hidden">
      {/* Japanese Pattern Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <SeigaihaPattern />
      </div>
      {/* Big vertical Japanese background letter */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10">
        <span
          className="font-sawarabi-mincho text-[18vw] text-marshland-900 opacity-20 select-none"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "upright",
            letterSpacing: "0.2em",
          }}
        >
          年表
        </span>
      </div>

      

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.2 }}
        viewport={{ once: true }}
        className="container mx-auto px-8 relative z-20"
      >
        <div
          className="absolute inset-0 flex justify-center items-center pointer-events-none z-10"
          style={{ left: "50%", width: "50%" }}
        >
          <span
            className="font-sawarabi-mincho text-[18vw] text-marshland-900 opacity-20 select-none"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
              letterSpacing: "0.2em",
            }}
          >
            使命
          </span>
        </div>
        <Timeline />
      </motion.div>
    </section>
  );
};

// Map Visualization Component - Replacing ImageGallery
const MapVisualization = () => {
  const [selectedPrefecture, setSelectedPrefecture] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Ingredient sourcing data
  const sourcingData = {
    "hokkaido": {
      name: "Hokkaido",
      ingredients: ["Seaweed", "Mushrooms", "Root Vegetables"],
      description: "Known for its pristine waters and rich soil, Hokkaido provides us with the finest seaweed varieties and wild mushrooms.",
      specialties: ["Kombu (Kelp)", "Maitake Mushrooms", "Burdock Root"]
    },
    "aomori": {
      name: "Aomori",
      ingredients: ["Apples", "Garlic", "Rice"],
      description: "Famous for its crisp apples and fertile soil, Aomori contributes premium fruits and grains to our dishes.",
      specialties: ["Aomori Apples", "Black Garlic", "Koshihikari Rice"]
    },
    "iwate": {
      name: "Iwate",
      ingredients: ["Rice", "Beef", "Seafood"],
      description: "With its mountainous terrain and coastal waters, Iwate provides exceptional rice and fresh seafood.",
      specialties: ["Iwate Wagyu Beef", "Fresh Sea Urchin", "Premium Rice Varieties"]
    },
    "miyagi": {
      name: "Miyagi",
      ingredients: ["Rice", "Oysters", "Seaweed"],
      description: "Blessed with rich coastal waters and fertile plains, Miyagi is a key source of our seafood and grains.",
      specialties: ["Matsushima Oysters", "Sendai Rice", "Wakame Seaweed"]
    },
    "akita": {
      name: "Akita",
      ingredients: ["Rice", "Sake", "Mountain Vegetables"],
      description: "Known for its premium rice varieties and traditional sake brewing, Akita enhances our authentic flavors.",
      specialties: ["Akita Komachi Rice", "Premium Sake", "Sansai Wild Vegetables"]
    },
    "yamagata": {
      name: "Yamagata",
      ingredients: ["Cherries", "Rice", "Fruits"],
      description: "Famous for its sweet cherries and diverse fruit production, Yamagata adds natural sweetness to our menu.",
      specialties: ["Yamagata Cherries", "La France Pears", "Premium Rice"]
    },
    "fukushima": {
      name: "Fukushima",
      ingredients: ["Peaches", "Rice", "Vegetables"],
      description: "Renowned for its juicy peaches and clean agricultural practices, Fukushima provides exceptional produce.",
      specialties: ["Fukushima Peaches", "Koshihikari Rice", "Organic Vegetables"]
    },
    "ibaraki": {
      name: "Ibaraki",
      ingredients: ["Sweet Potatoes", "Rice", "Vegetables"],
      description: "With its fertile soil and mild climate, Ibaraki produces some of Japan's finest sweet potatoes and vegetables.",
      specialties: ["Ibaraki Sweet Potatoes", "Fresh Vegetables", "Premium Rice"]
    },
    "tochigi": {
      name: "Tochigi",
      ingredients: ["Strawberries", "Rice", "Vegetables"],
      description: "Known for its sweet strawberries and agricultural innovation, Tochigi contributes fresh, flavorful ingredients.",
      specialties: ["Tochigi Strawberries", "Fresh Vegetables", "Premium Rice"]
    },
    "gunma": {
      name: "Gunma",
      ingredients: ["Konnyaku", "Rice", "Vegetables"],
      description: "Famous for its konnyaku production and clean mountain water, Gunma provides unique traditional ingredients.",
      specialties: ["Gunma Konnyaku", "Mountain Vegetables", "Premium Rice"]
    },
    "saitama": {
      name: "Saitama",
      ingredients: ["Rice", "Vegetables", "Fruits"],
      description: "With its proximity to Tokyo and fertile plains, Saitama provides fresh, high-quality produce.",
      specialties: ["Saitama Rice", "Fresh Vegetables", "Local Fruits"]
    },
    "chiba": {
      name: "Chiba",
      ingredients: ["Peanuts", "Rice", "Vegetables"],
      description: "Known for its peanut production and diverse agriculture, Chiba contributes unique flavors to our dishes.",
      specialties: ["Chiba Peanuts", "Fresh Vegetables", "Premium Rice"]
    },
    "tokyo": {
      name: "Tokyo",
      ingredients: ["Wasabi", "Fresh Fish", "Vegetables"],
      description: "While primarily urban, Tokyo's surrounding areas provide fresh wasabi and access to premium seafood.",
      specialties: ["Tokyo Wasabi", "Fresh Seafood", "Local Vegetables"]
    },
    "kanagawa": {
      name: "Kanagawa",
      ingredients: ["Tea", "Rice", "Vegetables"],
      description: "Famous for its tea production and agricultural heritage, Kanagawa provides traditional Japanese ingredients.",
      specialties: ["Kanagawa Tea", "Premium Rice", "Fresh Vegetables"]
    },
    "niigata": {
      name: "Niigata",
      ingredients: ["Rice", "Sake", "Seafood"],
      description: "Renowned for its premium rice and sake production, Niigata is essential for authentic Japanese cuisine.",
      specialties: ["Koshihikari Rice", "Premium Sake", "Fresh Seafood"]
    },
    "toyama": {
      name: "Toyama",
      ingredients: ["Rice", "Seafood", "Vegetables"],
      description: "With its rich coastal waters and fertile plains, Toyama provides exceptional rice and fresh seafood.",
      specialties: ["Toyama Rice", "Fresh Seafood", "Mountain Vegetables"]
    },
    "ishikawa": {
      name: "Ishikawa",
      ingredients: ["Rice", "Seafood", "Vegetables"],
      description: "Blessed with the Sea of Japan and fertile soil, Ishikawa provides premium ingredients for traditional dishes.",
      specialties: ["Ishikawa Rice", "Fresh Seafood", "Local Vegetables"]
    },
    "fukui": {
      name: "Fukui",
      ingredients: ["Rice", "Seafood", "Vegetables"],
      description: "With its coastal location and agricultural heritage, Fukui contributes fresh seafood and quality rice.",
      specialties: ["Fukui Rice", "Fresh Seafood", "Local Produce"]
    },
    "yamanashi": {
      name: "Yamanashi",
      ingredients: ["Grapes", "Peaches", "Vegetables"],
      description: "Famous for its grape and peach production, Yamanashi adds natural sweetness and freshness to our menu.",
      specialties: ["Yamanashi Grapes", "Peaches", "Fresh Vegetables"]
    },
    "nagano": {
      name: "Nagano",
      ingredients: ["Apples", "Vegetables", "Rice"],
      description: "Known for its crisp apples and mountain vegetables, Nagano provides fresh, high-altitude produce.",
      specialties: ["Nagano Apples", "Mountain Vegetables", "Premium Rice"]
    },
    "gifu": {
      name: "Gifu",
      ingredients: ["Rice", "Vegetables", "Seafood"],
      description: "With its diverse geography, Gifu provides quality rice and fresh mountain and river ingredients.",
      specialties: ["Gifu Rice", "Mountain Vegetables", "Fresh Seafood"]
    },
    "shizuoka": {
      name: "Shizuoka",
      ingredients: ["Tea", "Rice", "Seafood"],
      description: "Famous for its tea production and coastal location, Shizuoka provides premium tea and fresh seafood.",
      specialties: ["Shizuoka Tea", "Premium Rice", "Fresh Seafood"]
    },
    "aichi": {
      name: "Aichi",
      ingredients: ["Miso", "Rice", "Vegetables"],
      description: "Known for its traditional miso production and agricultural heritage, Aichi provides authentic Japanese flavors.",
      specialties: ["Aichi Miso", "Premium Rice", "Fresh Vegetables"]
    },
    "mie": {
      name: "Mie",
      ingredients: ["Rice", "Seafood", "Vegetables"],
      description: "With its rich coastal waters and fertile plains, Mie provides fresh seafood and quality rice.",
      specialties: ["Mie Rice", "Fresh Seafood", "Local Vegetables"]
    },
    "shiga": {
      name: "Shiga",
      ingredients: ["Rice", "Vegetables", "Seafood"],
      description: "Home to Lake Biwa, Shiga provides fresh lake fish and quality agricultural products.",
      specialties: ["Shiga Rice", "Lake Biwa Fish", "Fresh Vegetables"]
    },
    "kyoto": {
      name: "Kyoto",
      ingredients: ["Tea", "Rice", "Vegetables"],
      description: "With its rich cultural heritage, Kyoto provides traditional tea and premium agricultural products.",
      specialties: ["Kyoto Tea", "Premium Rice", "Traditional Vegetables"]
    },
    "osaka": {
      name: "Osaka",
      ingredients: ["Rice", "Vegetables", "Seafood"],
      description: "Known for its culinary culture, Osaka provides quality rice and fresh ingredients for traditional dishes.",
      specialties: ["Osaka Rice", "Fresh Seafood", "Local Vegetables"]
    },
    "hyogo": {
      name: "Hyogo",
      ingredients: ["Rice", "Seafood", "Vegetables"],
      description: "With its diverse geography, Hyogo provides quality rice and fresh coastal and mountain ingredients.",
      specialties: ["Hyogo Rice", "Fresh Seafood", "Local Vegetables"]
    },
    "nara": {
      name: "Nara",
      ingredients: ["Rice", "Vegetables", "Fruits"],
      description: "With its rich history and fertile soil, Nara provides traditional ingredients and quality produce.",
      specialties: ["Nara Rice", "Traditional Vegetables", "Local Fruits"]
    },
    "wakayama": {
      name: "Wakayama",
      ingredients: ["Oranges", "Rice", "Seafood"],
      description: "Famous for its sweet oranges and coastal location, Wakayama provides fresh citrus and seafood.",
      specialties: ["Wakayama Oranges", "Premium Rice", "Fresh Seafood"]
    },
    "tottori": {
      name: "Tottori",
      ingredients: ["Rice", "Seafood", "Vegetables"],
      description: "With its coastal location and agricultural heritage, Tottori provides fresh seafood and quality rice.",
      specialties: ["Tottori Rice", "Fresh Seafood", "Local Vegetables"]
    },
    "shimane": {
      name: "Shimane",
      ingredients: ["Rice", "Seafood", "Vegetables"],
      description: "Blessed with the Sea of Japan and fertile soil, Shimane provides premium ingredients for traditional dishes.",
      specialties: ["Shimane Rice", "Fresh Seafood", "Local Vegetables"]
    },
    "okayama": {
      name: "Okayama",
      ingredients: ["Peaches", "Rice", "Vegetables"],
      description: "Known for its sweet peaches and agricultural innovation, Okayama provides fresh, flavorful ingredients.",
      specialties: ["Okayama Peaches", "Premium Rice", "Fresh Vegetables"]
    },
    "hiroshima": {
      name: "Hiroshima",
      ingredients: ["Oysters", "Rice", "Vegetables"],
      description: "Famous for its plump oysters and coastal location, Hiroshima provides exceptional seafood and quality rice.",
      specialties: ["Hiroshima Oysters", "Premium Rice", "Fresh Vegetables"]
    },
    "yamaguchi": {
      name: "Yamaguchi",
      ingredients: ["Rice", "Seafood", "Vegetables"],
      description: "With its coastal location and agricultural heritage, Yamaguchi provides fresh seafood and quality rice.",
      specialties: ["Yamaguchi Rice", "Fresh Seafood", "Local Vegetables"]
    },
    "tokushima": {
      name: "Tokushima",
      ingredients: ["Rice", "Vegetables", "Seafood"],
      description: "With its diverse geography, Tokushima provides quality rice and fresh mountain and coastal ingredients.",
      specialties: ["Tokushima Rice", "Local Vegetables", "Fresh Seafood"]
    },
    "kagawa": {
      name: "Kagawa",
      ingredients: ["Rice", "Vegetables", "Seafood"],
      description: "Known for its udon culture and agricultural heritage, Kagawa provides quality rice and fresh ingredients.",
      specialties: ["Kagawa Rice", "Fresh Vegetables", "Local Seafood"]
    },
    "ehime": {
      name: "Ehime",
      ingredients: ["Oranges", "Rice", "Seafood"],
      description: "Famous for its sweet oranges and coastal location, Ehime provides fresh citrus and seafood.",
      specialties: ["Ehime Oranges", "Premium Rice", "Fresh Seafood"]
    },
    "kochi": {
      name: "Kochi",
      ingredients: ["Rice", "Seafood", "Vegetables"],
      description: "With its Pacific coast location and fertile soil, Kochi provides fresh seafood and quality rice.",
      specialties: ["Kochi Rice", "Fresh Seafood", "Local Vegetables"]
    },
    "fukuoka": {
      name: "Fukuoka",
      ingredients: ["Strawberries", "Rice", "Seafood"],
      description: "Known for its sweet strawberries and coastal location, Fukuoka provides fresh fruits and seafood.",
      specialties: ["Fukuoka Strawberries", "Premium Rice", "Fresh Seafood"]
    },
    "saga": {
      name: "Saga",
      ingredients: ["Rice", "Seafood", "Vegetables"],
      description: "With its coastal location and agricultural heritage, Saga provides fresh seafood and quality rice.",
      specialties: ["Saga Rice", "Fresh Seafood", "Local Vegetables"]
    },
    "nagasaki": {
      name: "Nagasaki",
      ingredients: ["Oranges", "Rice", "Seafood"],
      description: "Famous for its sweet oranges and coastal location, Nagasaki provides fresh citrus and seafood.",
      specialties: ["Nagasaki Oranges", "Premium Rice", "Fresh Seafood"]
    },
    "kumamoto": {
      name: "Kumamoto",
      ingredients: ["Rice", "Vegetables", "Seafood"],
      description: "With its fertile soil and coastal location, Kumamoto provides quality rice and fresh ingredients.",
      specialties: ["Kumamoto Rice", "Fresh Vegetables", "Local Seafood"]
    },
    "oita": {
      name: "Oita",
      ingredients: ["Shiitake Mushrooms", "Rice", "Vegetables"],
      description: "Famous for its shiitake mushroom production and agricultural heritage, Oita provides traditional ingredients.",
      specialties: ["Oita Shiitake Mushrooms", "Premium Rice", "Fresh Vegetables"]
    },
    "miyazaki": {
      name: "Miyazaki",
      ingredients: ["Mangoes", "Rice", "Vegetables"],
      description: "Known for its tropical fruits and warm climate, Miyazaki provides unique flavors and quality rice.",
      specialties: ["Miyazaki Mangoes", "Premium Rice", "Fresh Vegetables"]
    },
    "kagoshima": {
      name: "Kagoshima",
      ingredients: ["Sweet Potatoes", "Rice", "Vegetables"],
      description: "Famous for its sweet potatoes and warm climate, Kagoshima provides unique flavors and quality rice.",
      specialties: ["Kagoshima Sweet Potatoes", "Premium Rice", "Fresh Vegetables"]
    },
    "okinawa": {
      name: "Okinawa",
      ingredients: ["Pineapples", "Rice", "Vegetables"],
      description: "With its tropical climate and unique culture, Okinawa provides exotic fruits and traditional ingredients.",
      specialties: ["Okinawa Pineapples", "Premium Rice", "Tropical Vegetables"]
    }
  };

  const handleMarkerClick = (region: string) => {
    setSelectedPrefecture(region);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setZoomLevel(prev => Math.max(0.5, Math.min(3, prev * delta)));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPanOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(3, prev * 1.2));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(0.5, prev * 0.8));
  };

  const handleReset = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-shiso-900 via-shiso-800 to-shiso-900 relative overflow-hidden">
      {/* Japanese Pattern Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <SeigaihaPattern />
      </div>
      
      {/* Big vertical Japanese background letter */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10">
        <span
          className="font-sawarabi-mincho text-[18vw] text-shiso-200 opacity-20 select-none"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "upright",
            letterSpacing: "0.2em",
          }}
        >
          地図
        </span>
      </div>
      
      {/* Washi paper texture */}
      <div className="absolute inset-0 bg-[url('/images/about/washi.png')] bg-repeat opacity-40 mix-blend-multiply pointer-events-none" />
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <span
            className="font-sawarabi-mincho text-4xl text-shiso-200 mb-2 tracking-widest"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
              letterSpacing: "0.2em",
            }}
          >
            産地
          </span>
          <span className="block w-1 h-10 bg-shiso-400 rounded-full mb-2" />
          <h2 className="text-6xl font-serif font-semibold text-bianca-50 mb-6 text-center">
            Our Ingredient Sourcing
          </h2>
          <p className="text-xl text-shiso-200 max-w-3xl mx-auto text-center">
            Explore Japan&rsquo;s diverse regions and discover the origins of our authentic ingredients. 
            Click on any marker to learn about local specialties and sourcing practices.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full h-[600px] bg-gradient-to-br from-white to-green-50 rounded-2xl overflow-hidden border-4 border-marshland-700 shadow-2xl"
        >
          {/* Zoom Controls */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
            <button
              onClick={handleZoomIn}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white transition-colors"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <button
              onClick={handleZoomOut}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white transition-colors"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <button
              onClick={handleReset}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white transition-colors"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>

          {/* Zoom Level Display */}
          <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-gray-200">
            <span className="text-sm font-medium text-gray-700">
              {Math.round(zoomLevel * 100)}%
            </span>
          </div>

          {/* Map Container */}
          <div
            className="relative w-full h-full cursor-grab active:cursor-grabbing"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
                transformOrigin: 'center',
                transition: isDragging ? 'none' : 'transform 0.3s ease-out',
                filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
              }}
            >
              <JapanMap 
                onMarkerClick={handleMarkerClick}
                className="max-w-none"
              />
            </div>
          </div>

          {/* Info Panel */}
          {selectedPrefecture && sourcingData[selectedPrefecture as keyof typeof sourcingData] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-4 left-4 right-4 z-30 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-200"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {sourcingData[selectedPrefecture as keyof typeof sourcingData].name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {sourcingData[selectedPrefecture as keyof typeof sourcingData].description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-3">
                      <h4 className="font-semibold text-green-800 mb-1">Local Specialties</h4>
                      <ul className="text-sm text-green-700">
                        {sourcingData[selectedPrefecture as keyof typeof sourcingData].specialties.map((specialty, index) => (
                          <li key={index}>• {specialty}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <h4 className="font-semibold text-blue-800 mb-1">Key Ingredients</h4>
                      <ul className="text-sm text-blue-700">
                        {sourcingData[selectedPrefecture as keyof typeof sourcingData].ingredients.map((ingredient, index) => (
                          <li key={index}>• {ingredient}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPrefecture(null)}
                  className="ml-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}

          
        </motion.div>
      </div>
    </section>
  );
};

export default function About() {
  return (
    <>
      <ScrollToTop />
      <Navbar currentPage="About" />

      <main className="relative">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <HeroSection />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <MissionSection />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <StatsSection />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <SustainabilityImpactSliders />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <MapVisualization />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <TimelineSection />
        </motion.section>

        
      </main>
      <Footer />
    </>
  );
}
