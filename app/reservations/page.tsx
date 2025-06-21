"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  ChevronDown,
  MapPin,
  Calendar,
  Clock,
  Users,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export type Table = {
  id: number;
  x: number;
  y: number;
  seats: number;
  booked: boolean;
};

export default function Reservations() {
  const [step, setStep] = useState(0);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [table, setTable] = useState<number | null>(null);
  const [details, setDetails] = useState({ name: "", email: "" });
  const [isLoading, setIsLoading] = useState(false);

  const locations: string[] = ["Downtown", "Westside", "Midtown"];
  const tables: Table[] = [
    { id: 1, x: 20, y: 40, seats: 2, booked: false },
    { id: 2, x: 120, y: 60, seats: 4, booked: true },
    { id: 3, x: 220, y: 40, seats: 2, booked: false },
    { id: 4, x: 320, y: 80, seats: 6, booked: false },
  ];

  const nextStep = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStep((s) => Math.min(s + 1, 5));
    setIsLoading(false);
  };

  const particleVariants: Variants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const progressVariants = {
    initial: { width: "0%" },
    animate: { width: `${(step / 5) * 100}%` },
  };

  return (
    <>
      <Navbar className="!static" currentPage="Reservations" />

      <div className="-z-10 fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 20% 80%, var(--color-shiso-100) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, var(--color-bianca-200) 0%, transparent 50%),
                      radial-gradient(circle at 40% 40%, var(--color-shiso-50) 0%, transparent 50%),
                      linear-gradient(135deg, var(--color-bianca-50) 0%, var(--color-bianca-100) 100%)`,
          }}
        />

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background:
                i % 3 === 0
                  ? "var(--color-shiso-300)"
                  : i % 3 === 1
                  ? "var(--color-bianca-400)"
                  : "var(--color-aka-300)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particleVariants}
            animate="animate"
            transition={{ delay: i * 0.2 }}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 z-50"
        style={{ backgroundColor: "var(--color-shiso-500)" }}
        variants={progressVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <main
        className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden relative z-10"
        style={{
          color: "var(--color-marshland-900)",
        }}
      >
        {/* Step Indicator */}
        <motion.div
          className="fixed top-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full border-2"
              style={{
                backgroundColor:
                  i <= step ? "var(--color-shiso-500)" : "transparent",
                borderColor:
                  i <= step
                    ? "var(--color-shiso-500)"
                    : "var(--color-bianca-400)",
              }}
              animate={{
                scale: i === step ? 1.2 : 1,
                boxShadow:
                  i === step ? "0 0 20px var(--color-shiso-300)" : "none",
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.section
              key="step-0"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -60, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-lg px-6 text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center mb-4"
              >
                <MapPin
                  className="w-8 h-8 mr-3"
                  style={{ color: "var(--color-shiso-600)" }}
                />
                <h1
                  className="text-4xl font-bold"
                  style={{ color: "var(--color-shiso-900)" }}
                >
                  Choose a Location
                </h1>
              </motion.div>

              <motion.p
                className="text-lg mb-8 opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.4 }}
              >
                Select your preferred dining location
              </motion.p>

              <motion.div
                className="backdrop-blur-lg rounded-2xl p-6 shadow-2xl border"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  borderColor: "var(--color-bianca-300)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="grid grid-cols-1 gap-4">
                  {locations.map((loc, index) => (
                    <motion.button
                      key={loc}
                      onClick={() => setLocation(loc)}
                      className="relative p-6 rounded-xl border-2 transition-all duration-300 group overflow-hidden"
                      style={{
                        backgroundColor:
                          location === loc ? "var(--color-shiso-50)" : "white",
                        borderColor:
                          location === loc
                            ? "var(--color-shiso-500)"
                            : "var(--color-bianca-300)",
                        boxShadow:
                          location === loc
                            ? "0 10px 25px -5px var(--color-shiso-200)"
                            : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 20px 40px -10px var(--color-shiso-200)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div
                            className="w-4 h-4 rounded-full mr-4"
                            style={{
                              backgroundColor: "var(--color-shiso-500)",
                            }}
                          />
                          <span className="text-xl font-semibold">{loc}</span>
                        </div>
                        {location === loc && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                            }}
                          >
                            <CheckCircle
                              className="w-6 h-6"
                              style={{ color: "var(--color-shiso-600)" }}
                            />
                          </motion.div>
                        )}
                      </div>

                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10"
                        style={{ backgroundColor: "var(--color-shiso-500)" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.section>
          )}

          {step === 1 && (
            <motion.section
              key="step-1"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -60, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-lg px-6 text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center mb-4"
              >
                <Calendar
                  className="w-8 h-8 mr-3"
                  style={{ color: "var(--color-shiso-600)" }}
                />
                <h2
                  className="text-4xl font-bold"
                  style={{ color: "var(--color-shiso-900)" }}
                >
                  Select a Date
                </h2>
              </motion.div>

              <motion.p
                className="text-lg mb-8 opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.4 }}
              >
                When would you like to dine with us?
              </motion.p>

              <motion.div
                className="backdrop-blur-lg rounded-2xl p-8 shadow-2xl border"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  borderColor: "var(--color-bianca-300)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <motion.input
                  type="date"
                  className="w-full px-6 py-4 text-xl rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4"
                  style={{
                    borderColor: date
                      ? "var(--color-shiso-500)"
                      : "var(--color-bianca-400)",
                    color: "var(--color-marshland-900)",
                    backgroundColor: "white",
                    boxShadow: date
                      ? "0 0 0 4px var(--color-shiso-100)"
                      : "none",
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
                    className="mt-4 p-4 rounded-lg"
                    style={{ backgroundColor: "var(--color-shiso-50)" }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-center">
                      <CheckCircle
                        className="w-5 h-5 mr-2"
                        style={{ color: "var(--color-shiso-600)" }}
                      />
                      <span style={{ color: "var(--color-shiso-800)" }}>
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
              </motion.div>
            </motion.section>
          )}

          {step === 2 && (
            <motion.section
              key="step-2"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -60, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-4xl px-6 text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center mb-4"
              >
                <Users
                  className="w-8 h-8 mr-3"
                  style={{ color: "var(--color-shiso-600)" }}
                />
                <h2
                  className="text-4xl font-bold"
                  style={{ color: "var(--color-shiso-900)" }}
                >
                  Choose a Table
                </h2>
              </motion.div>

              <motion.p
                className="text-lg mb-8 opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.4 }}
              >
                Select your preferred seating arrangement
              </motion.p>

              <motion.div
                className="backdrop-blur-lg rounded-2xl p-8 shadow-2xl border"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  borderColor: "var(--color-bianca-300)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="relative">
                  <svg viewBox="0 0 400 200" className="w-full h-64">
                    {/* Restaurant layout background */}
                    <defs>
                      <pattern
                        id="floorPattern"
                        patternUnits="userSpaceOnUse"
                        width="20"
                        height="20"
                      >
                        <rect
                          width="20"
                          height="20"
                          fill="var(--color-bianca-100)"
                        />
                        <rect
                          width="10"
                          height="10"
                          fill="var(--color-bianca-200)"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="400"
                      height="200"
                      fill="url(#floorPattern)"
                      opacity="0.3"
                    />

                    {/* Tables */}
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
                        whileHover={!t.booked ? { scale: 1.1 } : {}}
                        whileTap={!t.booked ? { scale: 0.95 } : {}}
                      >
                        <motion.rect
                          x={t.x}
                          y={t.y}
                          width="60"
                          height="40"
                          rx="8"
                          fill={
                            t.booked
                              ? "var(--color-aka-200)"
                              : table === t.id
                              ? "var(--color-shiso-500)"
                              : "var(--color-bianca-300)"
                          }
                          stroke={
                            table === t.id
                              ? "var(--color-shiso-600)"
                              : "var(--color-bianca-400)"
                          }
                          strokeWidth="2"
                          animate={{
                            boxShadow:
                              table === t.id
                                ? "0 0 20px var(--color-shiso-300)"
                                : "none",
                          }}
                        />

                        {/* Table number */}
                        <text
                          x={t.x + 30}
                          y={t.y + 20}
                          textAnchor="middle"
                          fill={
                            table === t.id
                              ? "white"
                              : "var(--color-marshland-900)"
                          }
                          fontSize="14"
                          fontWeight="bold"
                          style={{ userSelect: "none" }}
                        >
                          #{t.id}
                        </text>

                        {/* Seats info */}
                        <text
                          x={t.x + 30}
                          y={t.y + 32}
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
                            x={t.x + 30}
                            y={t.y - 10}
                            textAnchor="middle"
                            fill="var(--color-aka-600)"
                            fontSize="10"
                            fontWeight="bold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                          >
                            BOOKED
                          </motion.text>
                        )}

                        {/* Selection indicator */}
                        {table === t.id && (
                          <motion.circle
                            cx={t.x + 50}
                            cy={t.y + 10}
                            r="8"
                            fill="var(--color-shiso-600)"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                            }}
                          >
                            <animate
                              attributeName="r"
                              values="8;10;8"
                              dur="2s"
                              repeatCount="indefinite"
                            />
                          </motion.circle>
                        )}
                      </motion.g>
                    ))}
                  </svg>
                </div>

                {table && (
                  <motion.div
                    className="mt-6 p-4 rounded-lg"
                    style={{ backgroundColor: "var(--color-shiso-50)" }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-center">
                      <CheckCircle
                        className="w-5 h-5 mr-2"
                        style={{ color: "var(--color-shiso-600)" }}
                      />
                      <span style={{ color: "var(--color-shiso-800)" }}>
                        Table #{table} selected - Perfect for{" "}
                        {tables.find((t) => t.id === table)?.seats} guests
                      </span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.section>
          )}

          {step === 3 && (
            <motion.section
              key="step-3"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -60, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-lg px-6 text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center mb-4"
              >
                <Clock
                  className="w-8 h-8 mr-3"
                  style={{ color: "var(--color-shiso-600)" }}
                />
                <h2
                  className="text-4xl font-bold"
                  style={{ color: "var(--color-shiso-900)" }}
                >
                  Choose a Time
                </h2>
              </motion.div>

              <motion.p
                className="text-lg mb-8 opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.4 }}
              >
                What time works best for you?
              </motion.p>

              <motion.div
                className="backdrop-blur-lg rounded-2xl p-8 shadow-2xl border"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  borderColor: "var(--color-bianca-300)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <motion.input
                  type="time"
                  className="w-full px-6 py-4 text-xl rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4"
                  style={{
                    borderColor: time
                      ? "var(--color-shiso-500)"
                      : "var(--color-bianca-400)",
                    color: "var(--color-marshland-900)",
                    backgroundColor: "white",
                    boxShadow: time
                      ? "0 0 0 4px var(--color-shiso-100)"
                      : "none",
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
                    className="mt-4 p-4 rounded-lg"
                    style={{ backgroundColor: "var(--color-shiso-50)" }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-center">
                      <CheckCircle
                        className="w-5 h-5 mr-2"
                        style={{ color: "var(--color-shiso-600)" }}
                      />
                      <span style={{ color: "var(--color-shiso-800)" }}>
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
              </motion.div>
            </motion.section>
          )}

          {step === 4 && (
            <motion.section
              key="step-4"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -60, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-lg px-6 text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center mb-4"
              >
                <Sparkles
                  className="w-8 h-8 mr-3"
                  style={{ color: "var(--color-shiso-600)" }}
                />
                <h2
                  className="text-4xl font-bold"
                  style={{ color: "var(--color-shiso-900)" }}
                >
                  Your Details
                </h2>
              </motion.div>

              <motion.p
                className="text-lg mb-8 opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.4 }}
              >
                Just a few details to complete your reservation
              </motion.p>

              <motion.div
                className="backdrop-blur-lg rounded-2xl p-8 shadow-2xl border space-y-6"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  borderColor: "var(--color-bianca-300)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.input
                    placeholder="Your Name"
                    className="w-full px-6 py-4 text-lg rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4"
                    style={{
                      borderColor: details.name
                        ? "var(--color-shiso-500)"
                        : "var(--color-bianca-400)",
                      color: "var(--color-marshland-900)",
                      backgroundColor: "white",
                      boxShadow: details.name
                        ? "0 0 0 4px var(--color-shiso-100)"
                        : "none",
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
                    className="w-full px-6 py-4 text-lg rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4"
                    style={{
                      borderColor: details.email
                        ? "var(--color-shiso-500)"
                        : "var(--color-bianca-400)",
                      color: "var(--color-marshland-900)",
                      backgroundColor: "white",
                      boxShadow: details.email
                        ? "0 0 0 4px var(--color-shiso-100)"
                        : "none",
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
                    className="mt-6 p-4 rounded-lg"
                    style={{ backgroundColor: "var(--color-shiso-50)" }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-center">
                      <CheckCircle
                        className="w-5 h-5 mr-2"
                        style={{ color: "var(--color-shiso-600)" }}
                      />
                      <span style={{ color: "var(--color-shiso-800)" }}>
                        Ready to confirm your reservation!
                      </span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.section>
          )}

          {step === 5 && (
            <motion.section
              key="step-5"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md px-6 text-center"
            >
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--color-shiso-600)" }}
              >
                Reservation Confirmed!
              </h2>
              <p style={{ color: "var(--color-marshland-900)" }}>
                Thank you, {details.name}! We&rsquo;ve reserved your table at{" "}
                {location} on {date} at {time}.
              </p>
            </motion.section>
          )}
        </AnimatePresence>

        {step < 5 && (
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
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 rounded-full p-4 shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: "var(--color-shiso-500)",
              color: "var(--color-bianca-50)",
              boxShadow: "0 10px 30px -5px var(--color-shiso-300)",
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 20px 40px -10px var(--color-shiso-400)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -5, 0],
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
                className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
              />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </motion.button>
        )}
      </main>
      <Footer />
    </>
  );
}
