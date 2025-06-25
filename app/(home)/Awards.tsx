"use client";

import { motion } from "framer-motion";
import { Leaf, Award } from "lucide-react";

export function Awards() {
  const awards = [
    {
      icon: "🏆",
      title: "Best Vegetarian Restaurant 2024",
      subtitle: "Local Food Critics Association",
      category: "Culinary Excellence",
      color: "from-amber-500 to-amber-600",
      delay: 0.1,
    },
    {
      icon: "⭐",
      title: "5-Star Rating",
      subtitle: "Sustainable Dining Guide, Google Reviews, and Yelp",
      category: "Customer Satisfaction",
      color: "from-yellow-500 to-yellow-600",
      delay: 0.2,
    },
    {
      icon: "🌱",
      title: "Green Restaurant Award",
      subtitle: "Environmental Excellence",
      category: "Sustainability",
      color: "from-green-500 to-green-600",
      delay: 0.3,
    },
    {
      icon: "♻️",
      title: "Zero Waste Certification",
      subtitle: "Circular Economy Leadership",
      category: "Environmental Impact",
      color: "from-blue-500 to-blue-600",
      delay: 0.4,
    },
    {
      icon: "🌍",
      title: "Carbon Neutral Certified",
      subtitle: "Climate Action Leadership",
      category: "Climate Responsibility",
      color: "from-emerald-500 to-emerald-600",
      delay: 0.5,
    },
    {
      icon: "💚",
      title: "Organic Certification",
      subtitle: "100% Organic Ingredients",
      category: "Quality Standards",
      color: "from-teal-500 to-teal-600",
      delay: 0.6,
    },
    {
      icon: "🛡️",
      title: "Food Safety Excellence",
      subtitle: "Highest Safety Standards",
      category: "Safety & Quality",
      color: "from-indigo-500 to-indigo-600",
      delay: 0.7,
    },
    {
      icon: "⚡",
      title: "Energy Efficiency Award",
      subtitle: "Renewable Energy Leadership",
      category: "Energy Conservation",
      color: "from-purple-500 to-purple-600",
      delay: 0.8,
    },
    {
      icon: "💧",
      title: "Water Conservation Champion",
      subtitle: "Sustainable Water Practices",
      category: "Resource Management",
      color: "from-cyan-500 to-cyan-600",
      delay: 0.9,
    },
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-bianca-100 to-shiso-100 flex items-center justify-center relative overflow-hidden">
      {/* Japanese decorative background */}
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
                stroke="#B6C7A8"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M0,15 Q5,10 10,15 Q15,20 20,15"
                stroke="#B6C7A8"
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

      <div className="text-center px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-shiso-900 mb-4">
            Awards & Recognition
          </h2>
          <p className="text-lg text-marshland-700 max-w-2xl mx-auto">
            Celebrating our commitment to culinary excellence and environmental responsibility
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: award.delay,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-shiso-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Award icon */}
                <div className="text-4xl mb-4 relative z-10">{award.icon}</div>
                
                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${award.color} text-white shadow-sm`}>
                    {award.category}
                  </span>
                </div>
                
                {/* Award content */}
                <div className="relative z-10">
                  <h3 className="font-serif text-lg font-semibold text-shiso-800 mb-2 leading-tight">
                    {award.title}
                  </h3>
                  <p className="text-marshland-600 text-sm leading-relaxed">
                    {award.subtitle}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-2 right-2 opacity-20">
                  <svg className="w-8 h-8 text-shiso-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12"
        >
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-shiso-200">
            <Leaf className="w-6 h-6 text-green-600" />
            <span className="text-shiso-800 font-semibold">Leading the Way in Sustainable Dining</span>
            <Award className="w-6 h-6 text-amber-600" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
