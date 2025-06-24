"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ExportedImage from "next-image-export-optimizer";
import Navbar from "@/components/Navbar";
import RestaurantKitchen from "@/public/images/about/hero.jpg";
import ReactCompareImage from "react-compare-image";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { useInView } from "framer-motion";

// Japanese Seigaiha (Wave) Pattern Component
const SeigaihaPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <pattern id="seigaiha" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M0,10 Q5,5 10,10 Q15,15 20,10" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        <path d="M0,15 Q5,10 10,15 Q15,20 20,15" stroke="currentColor" strokeWidth="0.5" fill="none"/>
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#seigaiha)"/>
  </svg>
);



// Japanese Calligraphy Text Component
const KanjiText = ({ children, className = "" }: { children: string; className?: string }) => (
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
      year: "2020",
      title: "夢の始まり",
      subtitle: "The Vision Begins",
      description: "Hiroshi's dream of sustainable ramen takes root in the heart of Tokyo.",
    },
    {
      year: "2022",
      title: "最初の店舗",
      subtitle: "First Location",
      description: "Our flagship restaurant opens, introducing plant-based ramen to the world.",
    },
    {
      year: "2023",
      title: "世界的な評価",
      subtitle: "Global Recognition",
      description: "Featured in international culinary magazines for innovation.",
    },
    {
      year: "2024",
      title: "持続可能性賞",
      subtitle: "Sustainability Award",
      description: "Recognized for zero-waste practices and ethical sourcing.",
    },
    {
      year: "2025",
      title: "未来への道",
      subtitle: "Future Forward",
      description: "Expanding our mission to revolutionize the food industry.",
    }
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
          <span className="font-sawarabi-mincho text-4xl text-shiso-400 mb-2 tracking-widest" style={{ writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '0.2em' }}>
            年表
          </span>
          <span className="block w-1 h-10 bg-shiso-400 rounded-full mb-2" />
          <h2 className="text-6xl font-serif font-semibold text-shiso-900 mb-6">Our Journey</h2>
        </div>
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-shiso-400 to-marshland-400 transform -translate-x-1/2 z-0" />
          <div className="block md:hidden absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-shiso-400 to-marshland-400 transform -translate-x-1/2 z-0" />
          <div className="flex flex-col md:gap-0 gap-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-center md:mb-24 z-10 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, scale: 0.7, rotate: index % 2 === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, type: 'spring', bounce: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.04, rotate: index % 2 === 0 ? -2 : 2, boxShadow: "0 8px 32px 0 rgba(80, 177, 131, 0.25)" }}
              >
                {/* Timeline node with pulse */}
                <motion.div
                  className="absolute left-1/2 top-1/2 md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                  animate={{
                    scale: [1, 1.25, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(80, 177, 131, 0.25)",
                      "0 0 0 12px rgba(80, 177, 131, 0.10)",
                      "0 0 0 0 rgba(80, 177, 131, 0.25)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', delay: index * 0.2 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-shiso-400 to-marshland-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center" />
                </motion.div>
                {/* Shikishi card */}
                <div className="w-full md:w-1/2 px-4 md:px-8 flex flex-col items-center md:items-stretch">
                  <motion.div
                    className="relative bg-[var(--color-bianca-50)] border-2 border-shiso-200 rounded-2xl shadow-2xl px-8 py-10 flex flex-col items-center md:items-start"
                    initial={{ scale: 0.8, opacity: 0, y: 60 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.18, type: 'spring', bounce: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {/* Washi texture */}
                    <div className="absolute inset-0 bg-[url('/images/about/washi.png')] bg-repeat opacity-30 rounded-2xl pointer-events-none" />
                    {/* Animated year with bounce */}
                    <motion.div
                      className="flex items-center mb-4"
                      initial={{ y: -40, scale: 0.7, opacity: 0 }}
                      whileInView={{ y: 0, scale: 1.1, opacity: 1 }}
                      transition={{ type: 'spring', bounce: 0.7, duration: 0.7, delay: 0.2 + index * 0.1 }}
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
                    <p className="text-marshland-700 max-w-md">{item.description}</p>
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
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-[var(--color-bianca-50)] pb-8">
      
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale, opacity }}
      >
        <ExportedImage
          src={RestaurantKitchen}
          alt="Hiroshi Ramen Kitchen"
          className="w-full h-full object-cover"
          priority
        />
        {/* Washi paper texture overlay */}
        <div className="absolute inset-0 bg-[url('/images/about/washi.png')] bg-repeat opacity-60 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bianca-100)] via-[var(--color-bianca-50)] to-[var(--color-bianca-100)] opacity-60" />
      </motion.div>
      
      {/* Vertical Kanji/English Title */}
      <div className="relative z-20 flex flex-col items-center mt-12 md:mt-24">
        <div className="flex flex-col items-center">
          
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-shiso-900 brush-stroke relative">
            About Us
            <span className="absolute left-0 bottom-0 w-full h-4 bg-[url('/images/about/brushstroke.png')] bg-no-repeat bg-contain opacity-60" />
          </h1>
        </div>
      </div>
      {/* Japanese Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center text-marshland-600">
          <div className="text-sm font-sawarabi-mincho mb-2">スクロール</div>
          <div className="w-6 h-10 border-2 border-marshland-600 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-marshland-600 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// Japanese Mission Section
const MissionSection = () => {
  const cards = [
    {
      title: "持続可能性",
      subtitle: "Sustainability",
      description: "Zero waste, ethical sourcing, and environmental responsibility.",
      
    },
    {
      title: "革新",
      subtitle: "Innovation",
      description: "Pushing culinary boundaries with plant-based excellence.",
      
    },
    {
      title: "伝統",
      subtitle: "Tradition",
      description: "Honoring Japanese culinary heritage with modern techniques.",
      
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
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10" style={{ right: '50%', width: '50%' }}>
        <span className="font-sawarabi-mincho text-[18vw] text-marshland-900 opacity-20 select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '0.2em' }}>使命</span>
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
            <span className="font-sawarabi-mincho text-4xl text-shiso-400 mb-2 tracking-widest" style={{ writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '0.2em' }}>
              使命
            </span>
            <span className="block w-1 h-10 bg-shiso-400 rounded-full mb-2" />
            <h2 className="text-6xl font-serif font-semibold text-shiso-900 mb-6">Our Mission</h2>
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
                <div className="relative w-full bg-[var(--color-bianca-50)] border-2 border-shiso-300 rounded-2xl shadow-xl px-6 py-10 flex flex-col items-center h-[420px] justify-between">
                  {/* Washi texture */}
                  <div className="absolute inset-0 bg-[url('/images/about/washi.png')] bg-repeat opacity-30 rounded-2xl pointer-events-none" />
                  
                  {/* Vertical Japanese heading */}
                  <span className="font-sawarabi-mincho text-3xl text-shiso-700 tracking-widest mb-2 z-10" style={{ writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '0.2em' }}>{card.title}</span>
                  {/* English subtitle */}
                  <h3 className="text-lg font-serif font-semibold text-shiso-900 mb-4 z-10">{card.subtitle}</h3>
                  <p className="text-marshland-700 mb-4 z-10 text-center">{card.description}</p>
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
    { number: "99%", label: "植物性食材", sublabel: "Plant-Based Ingredients" },
    { number: "0", label: "食品廃棄物", sublabel: "Food Waste" },
    { number: "50+", label: "地元サプライヤー", sublabel: "Local Suppliers" },
    { number: "10k+", label: "満足したお客様", sublabel: "Happy Customers" }
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
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10" style={{ left: '50%', width: '50%' }}>
        <span className="font-sawarabi-mincho text-[18vw] text-shiso-400 opacity-20 select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '0.1em' }}>使命</span>
      </div>
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <span className="font-sawarabi-mincho text-4xl text-shiso-200 mb-2 tracking-widest" style={{ writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '0.2em' }}>
            統計
          </span>
          <span className="block w-1 h-10 bg-shiso-400 rounded-full mb-2" />
          <h2 className="text-6xl font-serif font-semibold text-bianca-50 mb-6">Our Impact</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop', delay: index * 0.2 }}
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
                <div className="font-sawarabi-mincho text-shiso-200 text-lg mb-1">{stat.label}</div>
                {/* English sublabel */}
                <div className="text-shiso-100 text-xs">{stat.sublabel}</div>
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
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10" style={{ right: '50%', width: '50%' }}>
        <span className="font-sawarabi-mincho text-[18vw] text-marshland-900 opacity-20 select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '0.2em' }}>使命</span>
      </div>
      <div className="absolute inset-0 bg-[url('/images/about/washi.png')] bg-repeat opacity-40 mix-blend-multiply pointer-events-none" />
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <span className="font-sawarabi-mincho text-4xl text-shiso-400 mb-2 tracking-widest" style={{ writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '0.2em' }}>
            影響
          </span>
          <span className="block w-1 h-10 bg-shiso-400 rounded-full mb-2" />
          <h2 className="text-6xl font-serif font-semibold text-shiso-900 mb-6">Our Impact: Before & After</h2>
          <p className="text-xl text-shiso-800 max-w-3xl mx-auto text-center">
            Visualizing our commitment to a greener future. Slide the shoji screens to see the changes we&apos;ve made.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Packaging Slider with Shoji effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="text-2xl font-serif font-semibold text-shiso-900 text-center mb-4">Packaging: Plastic vs. Compostable</h3>
            <div className="relative rounded-2xl overflow-hidden border-4 border-marshland-700 shadow-2xl bg-[url('/images/about/washi.png')] bg-repeat">
              
              <ReactCompareImage
                leftImage="/images/about/hero.jpg" // TODO: Replace with your "before" packaging image
                rightImage="/images/about/hero.jpg" // TODO: Replace with your "after" packaging image
                leftImageLabel="Before: Plastic"
                rightImageLabel="After: Compostable"
                sliderLineColor="#B6C7A8"
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
            className="relative"
          >
            <h3 className="text-2xl font-serif font-semibold text-shiso-900 text-center mb-4">Kitchen: Old vs. Renovated</h3>
            <div className="relative rounded-2xl overflow-hidden border-4 border-marshland-700 shadow-2xl bg-[url('/images/about/washi.png')] bg-repeat">
              
              <ReactCompareImage
                leftImage="/images/about/hero.jpg" // TODO: Replace with your "before" kitchen image
                rightImage="/images/about/hero.jpg" // TODO: Replace with your "after" kitchen image
                leftImageLabel="Before: Standard"
                rightImageLabel="After: Zero-Waste"
                sliderLineColor="#B6C7A8"
                sliderPositionPercentage={0.5}
              />
            </div>
            {/* Big vertical Japanese background letter */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10" style={{ left: '50%', width: '50%' }}>
        <span className="font-sawarabi-mincho text-[18vw] text-marshland-900 opacity-20 select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '0.2em' }}>使命</span>
      </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Grand animated curtain transition between Our Impact and Timeline
const GrandTransition = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  return (
    <div ref={ref} className="relative w-full h-64 md:h-96 overflow-hidden z-30 flex items-center justify-center ">
      {/* Left curtain */}
      <motion.div
        className="absolute left-0 top-0 h-full w-1/2 bg-shiso-900 flex items-center justify-center"
        initial={{ x: 0 }}
        animate={inView ? { x: "-100%" } : { x: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ zIndex: 2 }}
      >
        <span className="font-sawarabi-mincho text-[8vw] text-white opacity-60 drop-shadow-[0_0_40px_rgba(80,177,131,0.5)] pointer-events-none select-none">
          物
        </span>
      </motion.div>
      {/* Right curtain */}
      <motion.div
        className="absolute right-0 top-0 h-full w-1/2 bg-shiso-900 flex items-center justify-center"
        initial={{ x: 0 }}
        animate={inView ? { x: "100%" } : { x: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ zIndex: 2 }}
      >
        <span className="font-sawarabi-mincho text-[8vw] text-white opacity-60 drop-shadow-[0_0_40px_rgba(80,177,131,0.5)] pointer-events-none select-none">
          語
        </span>
      </motion.div>
      {/* Optional: subtle background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <SeigaihaPattern />
      </div>
    </div>
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
          <span className="font-sawarabi-mincho text-[18vw] text-marshland-900 opacity-20 select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '0.2em' }}>年表</span>
        </div>
        
        {/* Grand animated curtain transition overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-30 pointer-events-none">
          <GrandTransition />
        </div>
        
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.2 }} viewport={{ once: true }} className="container mx-auto px-8 relative z-20">
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10" style={{ left: '50%', width: '50%' }}>
        <span className="font-sawarabi-mincho text-[18vw] text-marshland-900 opacity-20 select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '0.2em' }}>使命</span>
      </div>
          <Timeline />
        </motion.div>
      </section>
  )
}

export default function About() {
  return (
    <>
      <Navbar currentPage="About" />
      
      <main className="relative">
        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <HeroSection />
        </motion.section>
        
        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }}>
          <MissionSection />
        </motion.section>
        
        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}>
          <StatsSection />
        </motion.section>
        
        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: true }}>
          <SustainabilityImpactSliders />
        </motion.section>
        
        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: true }}>
          <TimelineSection />
        </motion.section>
        
      </main>
      <Footer />
    </>
  );
}