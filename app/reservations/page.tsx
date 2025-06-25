"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronRight, CheckCircle, XCircle } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

import ChooseDateTime from "./sections/ChooseDateTime";
import ChooseDiningExperience from "./sections/ChooseDiningExperience";
import SakuraPetals from "./components/SakuraPetals";
import JapaneseBorder from "./components/JapaneseBorder";
import StepIndicator from "./components/StepIndicator";
import { slideInVariants } from "./animationVariants";
import type { Location, Table } from "./types";

// --- Helper for demo: fake booked dates ---
const fullyBookedDates = [
  new Date(new Date().setDate(new Date().getDate() + 2)).toDateString(),
  new Date(new Date().setDate(new Date().getDate() + 5)).toDateString(),
];

// --- Waitlist Modal ---
function WaitlistModal({
  open,
  onClose,
  date,
  time,
}: {
  open: boolean;
  onClose: () => void;
  date?: string;
  time?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full relative">
        <button className="absolute top-4 right-4 text-xl" onClick={onClose}>
          &times;
        </button>
        {submitted ? (
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2 text-shiso-700">
              You're on the Waitlist!
            </h3>
            <p className="mb-4">
              We'll notify you if a spot opens up for {date} at {time}.
            </p>
            <button
              className="bg-shiso-600 text-white px-6 py-2 rounded-lg mt-2"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold mb-2 text-shiso-700">
              Join the Waitlist
            </h3>
            <p className="mb-4">
              This time is fully booked. Enter your info and we'll notify
              you if a spot opens up.
            </p>
            <input
              className="w-full mb-3 p-3 border rounded"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="w-full mb-3 p-3 border rounded"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-shiso-600 text-white px-6 py-2 rounded-lg w-full"
              onClick={() => setSubmitted(true)}
              disabled={!name || !email}
            >
              Join Waitlist
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// --- Dietary Info Box ---
function DietaryInfoBox() {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-6">
      <button
        onClick={() => setOpen((o) => !o)}
        className="text-shiso-700 underline font-semibold mb-2"
      >
        {open ? "Hide" : "Show"} Dietary Accommodations
      </button>
      {open && (
        <div className="bg-shiso-50 border-l-4 border-shiso-400 p-4 rounded-xl mt-2 text-left text-shiso-900">
          <h4 className="font-bold mb-1">Dietary Accommodations</h4>
          <ul className="list-disc ml-5 text-sm">
            <li>All ramen is vegetarian; vegan options available</li>
            <li>Gluten-free noodles available on request</li>
            <li>We accommodate nut-free, soy-free, and other allergies</li>
            <li>
              Let us know about any dietary needs in the special requests below
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

// --- Cancellation Policy Box ---
function CancellationPolicyBox() {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-6">
      <button
        onClick={() => setOpen((o) => !o)}
        className="text-shiso-700 underline font-semibold mb-2"
      >
        {open ? "Hide" : "Show"} Cancellation Policy
      </button>
      {open && (
        <div className="bg-aka-50 border-l-4 border-aka-400 p-4 rounded-xl mt-2 text-left text-aka-900">
          <h4 className="font-bold mb-1">Cancellation Policy</h4>
          <ul className="list-disc ml-5 text-sm">
            <li>
              Cancel up to 24 hours before your reservation for a full refund
            </li>
            <li>Late cancellations or no-shows may incur a fee</li>
            <li>Contact us for emergencies or changes</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Reservations() {
  const [step, setStep] = useState<number>(0);
  const [location, setLocation] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>("");
  const [table, setTable] = useState<number | null>(null);
  const [details, setDetails] = useState({ name: "", email: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sakuraCount] = useState(20);
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  const locations: Location[] = [
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

  const progressVariants: Variants = {
    initial: { width: "0%" },
    animate: { width: `${((step + 1) / 5) * 100}%` },
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

  const isNameValid = details.name.trim().length > 1;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email);

  return (
    <>
      <ScrollToTop />
      <Navbar className="!sticky" currentPage="Reservations" invertTextColor={true} />

      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 20% 80%, var(--color-shiso-100) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, var(--color-bianca-200) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, var(--color-shiso-50) 0%, transparent 50%),
                        linear-gradient(135deg, var(--color-bianca-50) 0%, var(--color-bianca-100) 100%)`,
          }}
        />

        {[...Array(sakuraCount)].map((_, i) => (
          <SakuraPetals key={i} delay={i * 0.5} />
        ))}
      </div>

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

      <main className="flex min-h-screen w-full flex-col items-center overflow-hidden z-10 pb-10">
        {/* Step Indicator */}
        <StepIndicator totalSteps={5} currentStep={step} />

        <AnimatePresence mode="wait">
          {step === 0 && (
            <ChooseDiningExperience
              location={location}
              locations={locations}
              setLocation={setLocation}
            />
          )}

          {step === 1 && (
            <ChooseDateTime
              selectedDate={date}
              setSelectedDate={(d) => {
                setDate(d);
                // If fully booked, open waitlist modal
                if (d && fullyBookedDates.includes(d.toDateString()))
                  setWaitlistOpen(true);
              }}
              selectedTime={time}
              setSelectedTime={setTime}
            />
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
                  className="text-5xl font-bold font-serif text-shiso-900"
                  style={{
                    textShadow: "2px 2px 4px rgba(80, 177, 131, 0.3)",
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
                          className="select-none font-serif"
                          fontWeight="bold"
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
                            className="font-serif"
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
                      <span className="font-serif text-shiso-800">
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
                  className="text-5xl font-bold font-serif text-shiso-900"
                  style={{
                    textShadow: "2px 2px 4px rgba(80, 177, 131, 0.3)",
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
                  {/* Dietary Info */}
                  <DietaryInfoBox />
                  {/* Cancellation Policy */}
                  <CancellationPolicyBox />
                  {/* Special Requests */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <textarea
                      placeholder="Special requests (e.g. birthday, accessibility, dietary needs, seating preferences)"
                      className="w-full px-6 py-4 text-lg rounded-xl border-2 border-shiso-300 focus:outline-none focus:ring-2 focus:ring-shiso-400 transition-all duration-300 font-serif"
                      rows={3}
                      style={{ resize: "vertical" }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="relative"
                  >
                    <motion.input
                      placeholder="Your Name"
                      className={`w-full px-8 py-6 text-xl rounded-xl border-4 transition-all duration-300 focus:outline-none focus:ring-4 text-center font-serif ${isNameValid ? 'border-green-500' : details.name ? 'border-red-500' : 'border-shiso-400'}`}
                      style={{
                        color: "var(--color-shiso-900)",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        boxShadow: isNameValid
                          ? "0 0 0 4px rgba(34,197,94,0.15)"
                          : details.name
                          ? "0 0 0 4px rgba(239,68,68,0.15)"
                          : "none",
                      }}
                      value={details.name}
                      onChange={(e) => setDetails({ ...details, name: e.target.value })}
                      whileFocus={{ scale: 1.02 }}
                      animate={details.name && !isNameValid ? { x: [0, -8, 8, -6, 6, -4, 4, 0] } : {}}
                    />
                    {details.name && (
                      isNameValid ? (
                        <CheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 w-6 h-6" />
                      ) : (
                        <XCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 w-6 h-6" />
                      )
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="relative"
                  >
                    <motion.input
                      placeholder="Email for confirmation"
                      type="email"
                      className={`w-full px-8 py-6 text-xl rounded-xl border-4 transition-all duration-300 focus:outline-none focus:ring-4 text-center font-serif ${isEmailValid ? 'border-green-500' : details.email ? 'border-red-500' : 'border-shiso-400'}`}
                      style={{
                        color: "var(--color-shiso-900)",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        boxShadow: isEmailValid
                          ? "0 0 0 4px rgba(34,197,94,0.15)"
                          : details.email
                          ? "0 0 0 4px rgba(239,68,68,0.15)"
                          : "none",
                      }}
                      value={details.email}
                      onChange={(e) => setDetails({ ...details, email: e.target.value })}
                      whileFocus={{ scale: 1.02 }}
                      animate={details.email && !isEmailValid ? { x: [0, -8, 8, -6, 6, -4, 4, 0] } : {}}
                    />
                    {details.email && (
                      isEmailValid ? (
                        <CheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 w-6 h-6" />
                      ) : (
                        <XCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 w-6 h-6" />
                      )
                    )}
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
                        <span className="font-serif text-shiso-800">
                          Ready to confirm your ramen reservation!
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>
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
                  className="text-3xl font-bold mb-6 font-serif text-shiso-900"
                  style={{
                    textShadow: "2px 2px 4px rgba(80, 177, 131, 0.3)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Reservation Confirmed!
                </motion.h2>

                <motion.p
                  className="mb-4 text-lg font-serif text-shiso-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Thank you, {details.name}! We&rsquo;ve reserved your table at{" "}
                  {location} on {date?.getDate()} at {time}.
                </motion.p>

                <motion.p
                  className="text-sm opacity-70 font-serif text-marshland-700"
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

        {step < 4 && (
          <div className="fixed bottom-[2%] mt-8 mb-8 flex items-center justify-center space-x-4 z-50">
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
                <ChevronRight className="w-8 h-8" />
              )}
            </motion.button>
          </div>
        )}
      </main>
      <Footer />

      {/* Waitlist Modal */}
      <WaitlistModal
        open={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
        date={date?.toLocaleDateString()}
        time={time}
      />

      {/* Live Availability Calendar (always visible in date step) */}
      {step === 1 && (
        <div className="w-full max-w-2xl mx-auto mt-8 mb-4">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-shiso-800">
              Live Availability
            </h3>
            <div className="grid grid-cols-7 gap-2 text-center text-sm font-semibold text-marshland-600 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {(() => {
                const today = new Date();
                const days = [];
                const firstDay = new Date(
                  today.getFullYear(),
                  today.getMonth(),
                  1
                );
                const lastDay = new Date(
                  today.getFullYear(),
                  today.getMonth() + 1,
                  0
                );
                for (let i = 0; i < firstDay.getDay(); i++) days.push(null);
                for (let i = 1; i <= lastDay.getDate(); i++) {
                  const d = new Date(today.getFullYear(), today.getMonth(), i);
                  days.push(d);
                }
                return days.map((d, i) => {
                  if (!d) return <div key={i} className="h-10" />;
                  const isBooked = fullyBookedDates.includes(d.toDateString());
                  return (
                    <div
                      key={i}
                      className={`h-10 flex items-center justify-center rounded-lg font-bold cursor-pointer transition-all ${
                        isBooked
                          ? "bg-aka-200 text-aka-700 line-through"
                          : "bg-shiso-100 text-shiso-800 hover:bg-shiso-200"
                      }`}
                    >
                      {d.getDate()}
                    </div>
                  );
                });
              })()}
            </div>
            <div className="flex gap-4 mt-4 text-xs">
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 bg-shiso-200 inline-block rounded mr-1" />
                Available
              </div>
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 bg-aka-200 inline-block rounded mr-1" />
                Fully Booked
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
