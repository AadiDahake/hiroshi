"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ExportedImage from "next-image-export-optimizer";
import Navbar from "@/components/Navbar";
import RestaurantKitchen from "@/public/images/about/hero.jpg";

// Floating Particles Component
const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-shiso-300/30 to-marshland-300/30 backdrop-blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -100, -200, -300],
            x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25, Math.random() * 50 - 25],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1.2, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

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

// Interactive Timeline Component
const Timeline = () => {
  const timelineData = [
    {
      year: "2020",
      title: "The Vision Begins",
      description: "Hiroshi's dream of sustainable ramen takes root in the heart of Tokyo.",
      icon: "🍜"
    },
    {
      year: "2022",
      title: "First Location",
      description: "Our flagship restaurant opens, introducing plant-based ramen to the world.",
      icon: "🌱"
    },
    {
      year: "2023",
      title: "Global Recognition",
      description: "Featured in international culinary magazines for innovation.",
      icon: "🌟"
    },
    {
      year: "2024",
      title: "Sustainability Award",
      description: "Recognized for zero-waste practices and ethical sourcing.",
      icon: "🏆"
    },
    {
      year: "2025",
      title: "Future Forward",
      description: "Expanding our mission to revolutionize the food industry.",
      icon: "🚀"
    }
  ];

  return (
    <div className="relative py-20">
      <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-shiso-400 to-marshland-400 transform -translate-x-1/2" />
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
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-2xl font-serif font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-white/80">{item.description}</p>
            </motion.div>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <motion.div
              className="w-8 h-8 bg-gradient-to-r from-shiso-400 to-marshland-400 rounded-full border-4 border-white shadow-lg"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="w-1/2 px-8">
            <motion.div
              className="text-6xl font-serif font-semibold text-white/20 text-center"
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

// 3D Parallax Hero Section
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </motion.div>
      
      <motion.div 
        className="relative z-10 text-center text-white"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1 
          className="text-8xl font-serif font-semibold mb-6 bg-gradient-to-r from-shiso-300 to-marshland-300 bg-clip-text text-transparent"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Our Story
        </motion.h1>
        <AnimatedText className="text-2xl font-serif max-w-2xl mx-auto">
          Where tradition meets innovation, and every bowl tells a story of sustainability and passion.
        </AnimatedText>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Interactive Mission Section
const MissionSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const cards = [
    {
      title: "Sustainability",
      description: "Zero waste, ethical sourcing, and environmental responsibility.",
      icon: "🌍",
      color: "from-green-400 to-emerald-600"
    },
    {
      title: "Innovation",
      description: "Pushing culinary boundaries with plant-based excellence.",
      icon: "💡",
      color: "from-blue-400 to-cyan-600"
    },
    {
      title: "Tradition",
      description: "Honoring Japanese culinary heritage with modern techniques.",
      icon: "🏮",
      color: "from-red-400 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-marshland-900 via-marshland-800 to-shiso-900">
      <div className="container mx-auto px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl font-serif font-semibold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            To revolutionize the food industry by proving that sustainability and exceptional taste can coexist.
          </p>
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
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 h-full"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`text-6xl mb-6 bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}
                  animate={{ scale: hoveredCard === index ? 1.2 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {card.icon}
                </motion.div>
                <h3 className="text-2xl font-serif font-semibold text-white mb-4">{card.title}</h3>
                <p className="text-white/80">{card.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Animated Statistics Section
const StatsSection = () => {
  const stats = [
    { number: "99%", label: "Plant-Based Ingredients", icon: "🌱" },
    { number: "0", label: "Food Waste", icon: "♻️" },
    { number: "50+", label: "Local Suppliers", icon: "🏪" },
    { number: "10k+", label: "Happy Customers", icon: "😊" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-shiso-800 to-marshland-800">
      <div className="container mx-auto px-8">
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
                className="text-5xl font-serif font-semibold text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function About() {
  return (
    <>
      <Navbar currentPage="About" />
      <FloatingParticles />
      <main className="relative">
        <HeroSection />
        <MissionSection />
        <StatsSection />
        <section className="py-20 bg-gradient-to-br from-black via-marshland-900 to-black">
          <div className="container mx-auto px-8">
            <Timeline />
          </div>
        </section>
      </main>
    </>
  );
}
