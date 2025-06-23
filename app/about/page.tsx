"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ExportedImage from "next-image-export-optimizer";
import Navbar from "@/components/Navbar";
import RestaurantKitchen from "@/public/images/about/hero.jpg";
import ReactCompareImage from "react-compare-image";

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

// Japanese Cherry Blossom Petals
const SakuraPetal = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="absolute text-pink-200/30 text-2xl"
    animate={{
      y: [0, -100, -200],
      x: [0, 20, -20],
      rotate: [0, 180, 360],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    🌸
  </motion.div>
);

// Floating Sakura Petals
const FloatingSakura = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    {[...Array(15)].map((_, i) => (
      <SakuraPetal key={i} delay={i * 0.5} />
    ))}
  </div>
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

// Animated Text Reveal Component
const AnimatedText = ({ children, className = "" }: { children: string; className?: string }) => {
  const words = children.split(" ");
  
  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

// Japanese Timeline Component
const Timeline = () => {
  const timelineData = [
    {
      year: "2020",
      title: "夢の始まり",
      subtitle: "The Vision Begins",
      description: "Hiroshi's dream of sustainable ramen takes root in the heart of Tokyo.",
      icon: "🍜"
    },
    {
      year: "2022",
      title: "最初の店舗",
      subtitle: "First Location",
      description: "Our flagship restaurant opens, introducing plant-based ramen to the world.",
      icon: "🌱"
    },
    {
      year: "2023",
      title: "世界的な評価",
      subtitle: "Global Recognition",
      description: "Featured in international culinary magazines for innovation.",
      icon: "🌟"
    },
    {
      year: "2024",
      title: "持続可能性賞",
      subtitle: "Sustainability Award",
      description: "Recognized for zero-waste practices and ethical sourcing.",
      icon: "🏆"
    },
    {
      year: "2025",
      title: "未来への道",
      subtitle: "Future Forward",
      description: "Expanding our mission to revolutionize the food industry.",
      icon: "🚀"
    }
  ];

  return (
    <div className="relative py-20">
      {/* Japanese Wave Timeline Line */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-shiso-400 to-marshland-400 transform -translate-x-1/2">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"
          animate={{
            y: [0, 100, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          className={`relative flex items-center mb-16 ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-1/2 px-8">
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Japanese Pattern Background */}
              <div className="absolute inset-0 opacity-5">
                <SeigaihaPattern />
              </div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-3">{item.icon}</div>
                <KanjiText className="text-2xl font-bold text-white mb-1">
                  {item.title}
                </KanjiText>
                <h3 className="text-lg font-serif font-semibold text-white/80 mb-2">
                  {item.subtitle}
                </h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            </motion.div>
          </div>
          
          {/* Timeline Node with Japanese Design */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <motion.div
              className="w-8 h-8 bg-gradient-to-r from-shiso-400 to-marshland-400 rounded-full border-4 border-white shadow-lg relative"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-white/20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              />
            </motion.div>
          </div>
          
          <div className="w-1/2 px-8">
            <motion.div
              className="text-6xl font-sawarabi-mincho font-bold text-white/20 text-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {item.year}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Japanese Hero Section
const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  return (
    <motion.div 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      <motion.div 
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <ExportedImage
          src={RestaurantKitchen}
          alt="Hiroshi Ramen Kitchen"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </motion.div>
      
      <motion.div 
        className="relative z-10 text-center text-white"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <KanjiText className="text-4xl text-white/60 mb-2">
            私たちの物語
          </KanjiText>
        </motion.div>
        
        <motion.h1 
          className="text-8xl font-serif font-semibold mb-6 bg-gradient-to-r from-shiso-300 to-marshland-300 bg-clip-text text-transparent"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          About Us
        </motion.h1>
        
        <AnimatedText className="text-2xl font-serif max-w-2xl mx-auto">
          Where tradition meets innovation, and every bowl tells a story of sustainability and passion.
        </AnimatedText>
      </motion.div>

      {/* Japanese Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center text-white/60">
          <div className="text-sm font-sawarabi-mincho mb-2">スクロール</div>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Japanese Mission Section
const MissionSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const cards = [
    {
      title: "持続可能性",
      subtitle: "Sustainability",
      description: "Zero waste, ethical sourcing, and environmental responsibility.",
      icon: "🌍",
      color: "from-green-400 to-emerald-600"
    },
    {
      title: "革新",
      subtitle: "Innovation",
      description: "Pushing culinary boundaries with plant-based excellence.",
      icon: "💡",
      color: "from-blue-400 to-cyan-600"
    },
    {
      title: "伝統",
      subtitle: "Tradition",
      description: "Honoring Japanese culinary heritage with modern techniques.",
      icon: "🏮",
      color: "from-red-400 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-marshland-900 via-marshland-800 to-shiso-900 relative overflow-hidden">
      {/* Japanese Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <SeigaihaPattern />
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <KanjiText className="text-4xl text-white/60 mb-4">
            私たちの使命
          </KanjiText>
          <h2 className="text-6xl font-serif font-semibold text-white mb-6">Our Story</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-left">
            <p className="text-xl text-white/80 leading-relaxed">
              Born in Tokyo, Hiroshi Tanaka grew up watching his grandmother craft exquisite ramen from simple, fresh ingredients. Her philosophy was simple: &ldquo;Every bowl should tell a story of care, tradition, and respect for the earth.&rdquo; This wisdom guided him throughout his culinary journey across Japan and Europe.
            </p>
            <p className="text-xl text-white/80 leading-relaxed">
              After witnessing the environmental impact of traditional food production, Hiroshi made a bold decision: to create ramen that honored his grandmother&apos;s traditions while embracing a sustainable future. In 2020, he began experimenting with plant-based broths, discovering that kombu seaweed, shiitake mushrooms, and carefully selected vegetables could create the same rich umami flavors as traditional meat-based broths.
            </p>
            <p className="text-xl text-white/80 leading-relaxed">
              What started as a small pop-up in Tokyo&apos;s Shibuya district quickly became a sensation. Today, Hiroshi Ramen stands as a testament to what&apos;s possible when tradition meets innovation. Every ingredient tells a story - from the organic vegetables grown by local farmers to the zero-waste kitchen practices that ensure nothing goes to waste.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 h-full relative overflow-hidden"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Japanese Pattern Overlay */}
                <div className="absolute inset-0 opacity-5">
                  <SeigaihaPattern />
                </div>
                
                <div className="relative z-10">
                  <motion.div
                    className={`text-6xl mb-6 bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}
                    animate={{ scale: hoveredCard === index ? 1.2 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {card.icon}
                  </motion.div>
                  
                  <KanjiText className="text-2xl font-bold text-white mb-2">
                    {card.title}
                  </KanjiText>
                  <h3 className="text-lg font-serif font-semibold text-white/80 mb-4">
                    {card.subtitle}
                  </h3>
                  <p className="text-white/70 mb-4">{card.description}</p>
                  
                  {/* Additional details for each card */}
                  {index === 0 && (
                    <div className="text-white/60 text-sm space-y-2">
                      <p>• Zero-waste kitchen practices</p>
                      <p>• 100% organic ingredients</p>
                      <p>• Carbon-neutral operations</p>
                      <p>• Local farmer partnerships</p>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="text-white/60 text-sm space-y-2">
                      <p>• 48-hour slow-cooking process</p>
                      <p>• Plant-based umami extraction</p>
                      <p>• House-made sustainable noodles</p>
                      <p>• Revolutionary broth techniques</p>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="text-white/60 text-sm space-y-2">
                      <p>• Centuries-old ramen techniques</p>
                      <p>• Japanese culinary heritage</p>
                      <p>• Authentic flavor profiles</p>
                      <p>• Respect for traditional methods</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Japanese Statistics Section
const StatsSection = () => {
  const stats = [
    { number: "99%", label: "植物性食材", sublabel: "Plant-Based Ingredients", icon: "🌱" },
    { number: "0", label: "食品廃棄物", sublabel: "Food Waste", icon: "♻️" },
    { number: "50+", label: "地元サプライヤー", sublabel: "Local Suppliers", icon: "🏪" },
    { number: "10k+", label: "満足したお客様", sublabel: "Happy Customers", icon: "😊" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-shiso-800 to-marshland-800 relative overflow-hidden">
      {/* Japanese Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <SeigaihaPattern />
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-4xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                className="text-5xl font-serif font-bold text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <KanjiText className="text-white/80 text-sm mb-1">
                {stat.label}
              </KanjiText>
              <div className="text-white/60 text-xs">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sustainability Impact Sliders
const SustainabilityImpactSliders = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-marshland-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <SeigaihaPattern />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <KanjiText className="text-4xl text-white/60 mb-4">
            私たちの影響
          </KanjiText>
          <h2 className="text-6xl font-serif font-semibold text-white mb-6">Our Impact: Before & After</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Visualizing our commitment to a greener future. Swipe to see the changes we&apos;ve made.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Packaging Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-semibold text-white text-center mb-4">Packaging: Plastic vs. Compostable</h3>
            <div className="rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
              <ReactCompareImage
                leftImage="/images/about/hero.jpg" // TODO: Replace with your "before" packaging image
                rightImage="/images/about/hero.jpg" // TODO: Replace with your "after" packaging image
                leftImageLabel="Before: Plastic"
                rightImageLabel="After: Compostable"
              />
            </div>
          </motion.div>

          {/* Kitchen Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-semibold text-white text-center mb-4">Kitchen: Old vs. Renovated</h3>
            <div className="rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
               <ReactCompareImage
                leftImage="/images/about/hero.jpg" // TODO: Replace with your "before" kitchen image
                rightImage="/images/about/hero.jpg" // TODO: Replace with your "after" kitchen image
                leftImageLabel="Before: Standard"
                rightImageLabel="After: Zero-Waste"
              />
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
    <section className="py-20 bg-gradient-to-br from-black via-marshland-900 to-black relative overflow-hidden">
        {/* Japanese Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <SeigaihaPattern />
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <Timeline />
        </div>
      </section>
  )
}

export default function About() {
  return (
    <>
      <Navbar />
      <FloatingSakura />
      <main className="relative">
        <HeroSection />
        <MissionSection />
        <StatsSection />
        <SustainabilityImpactSliders />
        <TimelineSection />
      </main>
    </>
  );
}