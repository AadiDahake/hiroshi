"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ChevronDown, CheckCircle } from "lucide-react";

export type Table = {
  id: number;
  x: number;
  y: number;
  seats: number;
  booked: boolean;
  type: "tatami" | "counter" | "garden" | "traditional";
};

// Sakura petal component
const SakuraPetal = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="absolute w-3 h-3 pointer-events-none"
    style={{
      background: "linear-gradient(45deg, #ffb7c5, #ff9a9e)",
      borderRadius: "50% 0 50% 50%",
      transform: "rotate(45deg)",
    }}
    initial={{
      opacity: 0,
      y: -100,
      x: Math.random() * window.innerWidth,
      rotate: 0,
    }}
    animate={{
      opacity: [0, 1, 0],
      y: window.innerHeight + 100,
      x: Math.random() * window.innerWidth,
      rotate: 360,
    }}
    transition={{
      duration: 8 + Math.random() * 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Traditional Japanese border component
const JapaneseBorder = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`relative ${className}`}>
    <div
      className="absolute inset-0 border-4 border-shiso-600 rounded-lg"
      style={{ borderStyle: "double" }}
    />
    <div className="absolute -top-2 -left-2 w-4 h-4 bg-shiso-600 rounded-full" />
    <div className="absolute -top-2 -right-2 w-4 h-4 bg-shiso-600 rounded-full" />
    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-shiso-600 rounded-full" />
    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-shiso-600 rounded-full" />
    <div className="relative p-6 bg-white/95 backdrop-blur-sm rounded-lg">
      {children}
    </div>
  </div>
);

export default function Reservations() {
  const [step, setStep] = useState(0);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [table, setTable] = useState<number | null>(null);
  const [details, setDetails] = useState({ name: "", email: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [sakuraCount] = useState(20);

  const locations: {
    name: string;
    description: string;
    icon: string;
    image: string;
  }[] = [
    {
      name: "Garden Terrace",
      description: "Peaceful outdoor dining with bamboo views",
      icon: "🎋",
      image: "🎍",
    },
    {
      name: "Traditional Tatami",
      description: "Authentic Japanese floor seating",
      icon: "🏮",
      image: "🪟",
    },
    {
      name: "Chef's Counter",
      description: "Watch our ramen masters at work",
      icon: "👨‍🍳",
      image: "🍜",
    },
  ];

  const tables: Table[] = [
    { id: 1, x: 20, y: 40, seats: 2, booked: false, type: "counter" },
    { id: 2, x: 120, y: 60, seats: 4, booked: true, type: "traditional" },
    { id: 3, x: 220, y: 40, seats: 2, booked: false, type: "tatami" },
    { id: 4, x: 320, y: 80, seats: 6, booked: false, type: "garden" },
    { id: 5, x: 80, y: 120, seats: 4, booked: false, type: "traditional" },
    { id: 6, x: 180, y: 140, seats: 2, booked: false, type: "counter" },
  ];

  const nextStep = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStep((s) => Math.min(s + 1, 5));
    setIsLoading(false);
  };

  const prevStep = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 400));
    setStep((s) => Math.max(s - 1, 0));
    setIsLoading(false);
  };

  // Japanese-style animations
  const slideInVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -100,
      rotateY: -15,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      rotateY: 15,
      scale: 0.9,
      transition: {
        duration: 0.6,
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants: Variants = {
    animate: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0 0 rgba(80, 177, 131, 0.4)",
        "0 0 0 20px rgba(80, 177, 131, 0)",
        "0 0 0 0 rgba(80, 177, 131, 0)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const progressVariants = {
    initial: { width: "0%" },
    animate: { width: `${(step / 5) * 100}%` },
  };

  const getTableIcon = (type: string) => {
    switch (type) {
      case "tatami":
        return "🏮";
      case "counter":
        return "👨‍🍳";
      case "garden":
        return "🎋";
      case "traditional":
        return "🍜";
      default:
        return "🍜";
    }
  };

  const getTableColor = (tableItem: Table) => {
    if (tableItem.booked) return "var(--color-aka-200)";
    if (table === tableItem.id) return "var(--color-shiso-500)";

    switch (tableItem.type) {
      case "tatami":
        return "var(--color-bianca-300)";
      case "counter":
        return "var(--color-shiso-200)";
      case "garden":
        return "var(--color-shiso-100)";
      case "traditional":
        return "var(--color-bianca-400)";
      default:
        return "var(--color-bianca-300)";
    }
  };

  return (
    <>
      <Navbar className="!static" currentPage="Reservations" />

      {/* Japanese-style background */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient background with traditional colors */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 20% 80%, var(--color-shiso-100) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, var(--color-bianca-200) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, var(--color-shiso-50) 0%, transparent 50%),
                        linear-gradient(135deg, var(--color-bianca-50) 0%, var(--color-bianca-100) 100%)`,
          }}
        />

        {/* Sakura petals */}
        {[...Array(sakuraCount)].map((_, i) => (
          <SakuraPetal key={i} delay={i * 0.5} />
        ))}

        {/* Traditional Japanese patterns */}
        <div className="absolute top-10 right-10 w-32 h-32 opacity-10">
          <svg viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="var(--color-shiso-600)"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="var(--color-shiso-600)"
              strokeWidth="1"
            />
            <circle
              cx="50"
              cy="50"
              r="25"
              fill="none"
              stroke="var(--color-shiso-600)"
              strokeWidth="1"
            />
            <circle
              cx="50"
              cy="50"
              r="15"
              fill="none"
              stroke="var(--color-shiso-600)"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="absolute bottom-10 left-10 w-24 h-24 opacity-10">
          <svg viewBox="0 0 100 100">
            <path
              d="M50 10 L90 90 L10 90 Z"
              fill="none"
              stroke="var(--color-shiso-600)"
              strokeWidth="2"
            />
            <path
              d="M50 30 L70 70 L30 70 Z"
              fill="none"
              stroke="var(--color-shiso-600)"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      {/* Progress Bar with Japanese style */}
      <motion.div
        className="fixed top-0 left-0 h-2 z-50"
        style={{
          background:
            "linear-gradient(90deg, var(--color-shiso-600), var(--color-shiso-500), var(--color-shiso-400))",
          boxShadow: "0 2px 10px rgba(80, 177, 131, 0.3)",
        }}
        variants={progressVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <main className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden relative z-10">
        {/* Step Indicator with Japanese design */}
        <motion.div
          className="fixed top-20 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="relative"
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: i * 0.1 }}
            >
              <div
                className="w-4 h-4 rounded-full border-2 relative"
                style={{
                  backgroundColor:
                    i <= step ? "var(--color-shiso-600)" : "transparent",
                  borderColor:
                    i <= step
                      ? "var(--color-shiso-600)"
                      : "var(--color-shiso-400)",
                  boxShadow:
                    i === step ? "0 0 20px rgba(80, 177, 131, 0.5)" : "none",
                }}
              >
                {i === step && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    variants={pulseVariants}
                    animate="animate"
                  />
                )}
              </div>
              {i < 5 && (
                <div
                  className="absolute top-2 left-4 w-4 h-0.5"
                  style={{
                    backgroundColor:
                      i < step
                        ? "var(--color-shiso-600)"
                        : "var(--color-shiso-400)",
                    opacity: i < step ? 1 : 0.3,
                  }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.section
              key="step-0"
              variants={slideInVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-4xl px-6 text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center mb-8"
              >
                <h1
                  className="text-5xl font-bold"
                  style={{
                    color: "var(--color-shiso-900)",
                    textShadow: "2px 2px 4px rgba(80, 177, 131, 0.3)",
                    fontFamily: "serif",
                  }}
                >
                  Choose Your Dining Experience
                </h1>
              </motion.div>

              <motion.p
                className="text-xl mb-12 opacity-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.4 }}
                style={{ color: "var(--color-marshland-700)" }}
              >
                Select your preferred atmosphere for an authentic ramen
                experience
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {locations.map((loc, index) => (
                  <motion.div
                    key={loc.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.2 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="cursor-pointer"
                  >
                    <JapaneseBorder>
                      <div
                        className="text-center p-6"
                        onClick={() => setLocation(loc.name)}
                        style={{
                          backgroundColor:
                            location === loc.name
                              ? "rgba(80, 177, 131, 0.1)"
                              : "transparent",
                          borderRadius: "8px",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <motion.div
                          className="text-8xl mb-4"
                          animate={
                            location === loc.name
                              ? { rotate: [0, 5, -5, 0] }
                              : {}
                          }
                          transition={{ duration: 0.5 }}
                        >
                          {loc.image}
                        </motion.div>
                        <h3
                          className="text-2xl font-bold mb-2"
                          style={{ color: "var(--color-shiso-900)" }}
                        >
                          {loc.name}
                        </h3>
                        <p
                          className="text-sm opacity-70"
                          style={{ color: "var(--color-marshland-700)" }}
                        >
                          {loc.description}
                        </p>
                        {location === loc.name && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="mt-4"
                          >
                            <CheckCircle
                              className="w-8 h-8 mx-auto"
                              style={{ color: "var(--color-shiso-600)" }}
                            />
                          </motion.div>
                        )}
                      </div>
                    </JapaneseBorder>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {step === 1 && (
            <motion.section
              key="step-1"
              variants={slideInVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-lg px-6 text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center mb-8"
              >
                <h2
                  className="text-5xl font-bold"
                  style={{
                    color: "var(--color-shiso-900)",
                    textShadow: "2px 2px 4px rgba(80, 177, 131, 0.3)",
                    fontFamily: "serif",
                  }}
                >
                  Select Your Date
                </h2>
              </motion.div>

              <motion.p
                className="text-xl mb-12 opacity-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.4 }}
                style={{ color: "var(--color-marshland-700)" }}
              >
                When would you like to experience our vegetarian ramen?
              </motion.p>

              <JapaneseBorder>
                <motion.input
                  type="date"
                  className="w-full px-8 py-6 text-2xl rounded-xl border-4 transition-all duration-300 focus:outline-none focus:ring-4 text-center"
                  style={{
                    borderColor: date
                      ? "var(--color-shiso-600)"
                      : "var(--color-shiso-400)",
                    color: "var(--color-shiso-900)",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    boxShadow: date
                      ? "0 0 0 4px rgba(80, 177, 131, 0.2)"
                      : "none",
                    fontFamily: "serif",
                  }}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  whileFocus={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                />

                {date && (
                  <motion.div
                    className="mt-6 p-4 rounded-lg"
                    style={{ backgroundColor: "rgba(80, 177, 131, 0.1)" }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-center">
                      <CheckCircle
                        className="w-6 h-6 mr-3"
                        style={{ color: "var(--color-shiso-600)" }}
                      />
                      <span
                        style={{
                          color: "var(--color-shiso-800)",
                          fontFamily: "serif",
                        }}
                      >
                        Perfect!{" "}
                        {new Date(date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </motion.div>
                )}
              </JapaneseBorder>
            </motion.section>
          )}

          {step === 2 && (
            <motion.section
              key="step-2"
              variants={slideInVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-6xl px-6 text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center mb-8"
              >
                <h2
                  className="text-5xl font-bold"
                  style={{
                    color: "var(--color-shiso-900)",
                    textShadow: "2px 2px 4px rgba(80, 177, 131, 0.3)",
                    fontFamily: "serif",
                  }}
                >
                  Choose Your Table
                </h2>
              </motion.div>

              <motion.p
                className="text-xl mb-12 opacity-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.4 }}
                style={{ color: "var(--color-marshland-700)" }}
              >
                Select your preferred seating arrangement for the perfect ramen
                experience
              </motion.p>

              <JapaneseBorder className="p-8">
                <div className="relative">
                  <svg viewBox="0 0 500 300" className="w-full h-80">
                    {/* Japanese-style floor pattern */}
                    <defs>
                      <pattern
                        id="tatamiPattern"
                        x="0"
                        y="0"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          width="40"
                          height="40"
                          fill="var(--color-bianca-200)"
                          stroke="var(--color-shiso-600)"
                          strokeWidth="1"
                        />
                        <line
                          x1="20"
                          y1="0"
                          x2="20"
                          y2="40"
                          stroke="var(--color-shiso-600)"
                          strokeWidth="1"
                        />
                        <line
                          x1="0"
                          y1="20"
                          x2="40"
                          y2="20"
                          stroke="var(--color-shiso-600)"
                          strokeWidth="1"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="500"
                      height="300"
                      fill="url(#tatamiPattern)"
                      opacity="0.3"
                    />

                    {/* Tables with enhanced Japanese styling */}
                    {tables.map((t, index) => (
                      <motion.g
                        key={t.id}
                        onClick={() => !t.booked && setTable(t.id)}
                        className={`cursor-pointer ${
                          t.booked ? "cursor-not-allowed" : ""
                        }`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.5 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={
                          !t.booked
                            ? {
                                scale: 1.1,
                                filter:
                                  "drop-shadow(0 10px 20px rgba(80, 177, 131, 0.3))",
                              }
                            : {}
                        }
                        whileTap={!t.booked ? { scale: 0.95 } : {}}
                      >
                        {/* Table base with Japanese design */}
                        <rect
                          x={t.x}
                          y={t.y}
                          width="80"
                          height="50"
                          rx="12"
                          fill={getTableColor(t)}
                          stroke={
                            table === t.id
                              ? "var(--color-shiso-600)"
                              : "var(--color-shiso-400)"
                          }
                          strokeWidth="3"
                          style={{
                            filter:
                              table === t.id
                                ? "drop-shadow(0 0 20px rgba(80, 177, 131, 0.5))"
                                : "none",
                          }}
                        />

                        {/* Traditional Japanese border pattern */}
                        <rect
                          x={t.x + 5}
                          y={t.y + 5}
                          width="70"
                          height="40"
                          rx="8"
                          fill="none"
                          stroke="var(--color-shiso-600)"
                          strokeWidth="1"
                          opacity="0.5"
                        />

                        {/* Table type icon */}
                        <text
                          x={t.x + 20}
                          y={t.y + 20}
                          fontSize="16"
                          style={{ userSelect: "none" }}
                        >
                          {getTableIcon(t.type)}
                        </text>

                        {/* Table number with Japanese styling */}
                        <text
                          x={t.x + 60}
                          y={t.y + 25}
                          textAnchor="middle"
                          fill={
                            table === t.id ? "white" : "var(--color-shiso-900)"
                          }
                          fontSize="14"
                          fontWeight="bold"
                          style={{ userSelect: "none", fontFamily: "serif" }}
                        >
                          #{t.id}
                        </text>

                        {/* Seats info */}
                        <text
                          x={t.x + 40}
                          y={t.y + 40}
                          textAnchor="middle"
                          fill={
                            table === t.id
                              ? "white"
                              : "var(--color-marshland-700)"
                          }
                          fontSize="10"
                          style={{ userSelect: "none" }}
                        >
                          {t.seats} seats
                        </text>

                        {/* Booked indicator */}
                        {t.booked && (
                          <motion.text
                            x={t.x + 40}
                            y={t.y - 15}
                            textAnchor="middle"
                            fill="var(--color-aka-600)"
                            fontSize="10"
                            fontWeight="bold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                            style={{ fontFamily: "serif" }}
                          >
                            RESERVED
                          </motion.text>
                        )}

                        {/* Selection indicator with Japanese design */}
                        {table === t.id && (
                          <motion.g
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                            }}
                          >
                            <circle
                              cx={t.x + 70}
                              cy={t.y + 15}
                              r="12"
                              fill="var(--color-shiso-600)"
                            />
                            <text
                              x={t.x + 70}
                              y={t.y + 20}
                              textAnchor="middle"
                              fill="white"
                              fontSize="12"
                              style={{ userSelect: "none" }}
                            >
                              ✓
                            </text>
                          </motion.g>
                        )}
                      </motion.g>
                    ))}

                    {/* Enhanced legend with Japanese styling */}
                    <g transform="translate(20, 260)">
                      <rect
                        x="0"
                        y="0"
                        width="460"
                        height="30"
                        fill="rgba(255, 255, 255, 0.9)"
                        rx="5"
                      />
                      <text
                        x="10"
                        y="15"
                        fontSize="12"
                        fill="var(--color-shiso-900)"
                        fontWeight="bold"
                      >
                        Legend:
                      </text>
                      <text
                        x="80"
                        y="15"
                        fontSize="10"
                        fill="var(--color-marshland-700)"
                      >
                        🏮 Tatami 👨‍🍳 Counter 🎋 Garden 🍜 Traditional
                      </text>
                    </g>
                  </svg>
                </div>

                {table && (
                  <motion.div
                    className="mt-8 p-6 rounded-lg"
                    style={{ backgroundColor: "rgba(80, 177, 131, 0.1)" }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-center">
                      <CheckCircle
                        className="w-6 h-6 mr-3"
                        style={{ color: "var(--color-shiso-600)" }}
                      />
                      <span
                        style={{
                          color: "var(--color-shiso-800)",
                          fontFamily: "serif",
                        }}
                      >
                        Table #{table} selected - Perfect for{" "}
                        {tables.find((t) => t.id === table)?.seats} guests
                      </span>
                    </div>
                  </motion.div>
                )}
              </JapaneseBorder>
            </motion.section>
          )}

          {step === 3 && (
            <motion.section
              key="step-3"
              variants={slideInVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-lg px-6 text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center mb-8"
              >
                <h2
                  className="text-5xl font-bold"
                  style={{
                    color: "var(--color-shiso-900)",
                    textShadow: "2px 2px 4px rgba(80, 177, 131, 0.3)",
                    fontFamily: "serif",
                  }}
                >
                  Choose Your Time
                </h2>
              </motion.div>

              <motion.p
                className="text-xl mb-12 opacity-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.4 }}
                style={{ color: "var(--color-marshland-700)" }}
              >
                What time works best for your ramen experience?
              </motion.p>

              <JapaneseBorder>
                <motion.input
                  type="time"
                  className="w-full px-8 py-6 text-2xl rounded-xl border-4 transition-all duration-300 focus:outline-none focus:ring-4 text-center"
                  style={{
                    borderColor: time
                      ? "var(--color-shiso-600)"
                      : "var(--color-shiso-400)",
                    color: "var(--color-shiso-900)",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    boxShadow: time
                      ? "0 0 0 4px rgba(80, 177, 131, 0.2)"
                      : "none",
                    fontFamily: "serif",
                  }}
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  whileFocus={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                />

                {time && (
                  <motion.div
                    className="mt-6 p-4 rounded-lg"
                    style={{ backgroundColor: "rgba(80, 177, 131, 0.1)" }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-center">
                      <CheckCircle
                        className="w-6 h-6 mr-3"
                        style={{ color: "var(--color-shiso-600)" }}
                      />
                      <span
                        style={{
                          color: "var(--color-shiso-800)",
                          fontFamily: "serif",
                        }}
                      >
                        Excellent choice!{" "}
                        {new Date(`2000-01-01T${time}`).toLocaleTimeString(
                          "en-US",
                          {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                          }
                        )}
                      </span>
                    </div>
                  </motion.div>
                )}
              </JapaneseBorder>
            </motion.section>
          )}

          {step === 4 && (
            <motion.section
              key="step-4"
              variants={slideInVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-lg px-6 text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center mb-8"
              >
                <h2
                  className="text-5xl font-bold"
                  style={{
                    color: "var(--color-shiso-900)",
                    textShadow: "2px 2px 4px rgba(80, 177, 131, 0.3)",
                    fontFamily: "serif",
                  }}
                >
                  Your Details
                </h2>
              </motion.div>

              <motion.p
                className="text-xl mb-12 opacity-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.4 }}
                style={{ color: "var(--color-marshland-700)" }}
              >
                Just a few details to complete your ramen reservation
              </motion.p>

              <JapaneseBorder>
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.input
                      placeholder="Your Name"
                      className="w-full px-8 py-6 text-xl rounded-xl border-4 transition-all duration-300 focus:outline-none focus:ring-4 text-center"
                      style={{
                        borderColor: details.name
                          ? "var(--color-shiso-600)"
                          : "var(--color-shiso-400)",
                        color: "var(--color-shiso-900)",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        boxShadow: details.name
                          ? "0 0 0 4px rgba(80, 177, 131, 0.2)"
                          : "none",
                        fontFamily: "serif",
                      }}
                      value={details.name}
                      onChange={(e) =>
                        setDetails({ ...details, name: e.target.value })
                      }
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.input
                      placeholder="Email for confirmation"
                      type="email"
                      className="w-full px-8 py-6 text-xl rounded-xl border-4 transition-all duration-300 focus:outline-none focus:ring-4 text-center"
                      style={{
                        borderColor: details.email
                          ? "var(--color-shiso-600)"
                          : "var(--color-shiso-400)",
                        color: "var(--color-shiso-900)",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        boxShadow: details.email
                          ? "0 0 0 4px rgba(80, 177, 131, 0.2)"
                          : "none",
                        fontFamily: "serif",
                      }}
                      value={details.email}
                      onChange={(e) =>
                        setDetails({ ...details, email: e.target.value })
                      }
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  {details.name && details.email && (
                    <motion.div
                      className="mt-6 p-6 rounded-lg"
                      style={{ backgroundColor: "rgba(80, 177, 131, 0.1)" }}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center justify-center">
                        <CheckCircle
                          className="w-6 h-6 mr-3"
                          style={{ color: "var(--color-shiso-600)" }}
                        />
                        <span
                          style={{
                            color: "var(--color-shiso-800)",
                            fontFamily: "serif",
                          }}
                        >
                          Ready to confirm your ramen reservation!
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </JapaneseBorder>
            </motion.section>
          )}

          {step === 5 && (
            <motion.section
              key="step-5"
              variants={slideInVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-md px-6 text-center"
            >
              <JapaneseBorder>
                <motion.div
                  className="text-8xl mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  🍜
                </motion.div>

                <motion.h2
                  className="text-3xl font-bold mb-6"
                  style={{
                    color: "var(--color-shiso-900)",
                    fontFamily: "serif",
                    textShadow: "2px 2px 4px rgba(80, 177, 131, 0.3)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Reservation Confirmed!
                </motion.h2>

                <motion.p
                  className="mb-4 text-lg"
                  style={{
                    color: "var(--color-shiso-900)",
                    fontFamily: "serif",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Thank you, {details.name}! We&rsquo;ve reserved your table at{" "}
                  {location} on {date} at {time}.
                </motion.p>

                <motion.p
                  className="text-sm opacity-70"
                  style={{
                    color: "var(--color-marshland-700)",
                    fontFamily: "serif",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.7, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  We look forward to serving you our authentic vegetarian ramen
                  experience.
                </motion.p>
              </JapaneseBorder>
            </motion.section>
          )}
        </AnimatePresence>

        {step < 5 && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-50">
            {/* Back Button */}
            {step > 0 && (
              <motion.button
                onClick={prevStep}
                disabled={isLoading}
                className="rounded-full p-6 shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-bianca-400), var(--color-bianca-500))",
                  color: "var(--color-marshland-900)",
                  boxShadow: "0 15px 35px rgba(203, 161, 116, 0.4)",
                  border: "3px solid var(--color-bianca-600)",
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 25px 50px rgba(203, 161, 116, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-8 h-8 border-3 border-marshland-900 border-t-transparent rounded-full"
                  />
                ) : (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                )}
              </motion.button>
            )}

            {/* Next Button */}
            <motion.button
              onClick={nextStep}
              disabled={
                isLoading ||
                (step === 0 && !location) ||
                (step === 1 && !date) ||
                (step === 2 && !table) ||
                (step === 3 && !time) ||
                (step === 4 && (!details.name || !details.email))
              }
              className="rounded-full p-6 shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-shiso-600), var(--color-shiso-500))",
                color: "white",
                boxShadow: "0 15px 35px rgba(80, 177, 131, 0.4)",
                border: "3px solid var(--color-shiso-700)",
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 25px 50px rgba(80, 177, 131, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 border-3 border-white border-t-transparent rounded-full"
                />
              ) : (
                <ChevronDown className="w-8 h-8" />
              )}
            </motion.button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
