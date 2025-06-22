"use client";

import { motion } from "framer-motion";

export const FusumaLoader = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[100] flex">
      <motion.div
        className="w-full bg-[var(--color-shiso-800)]"
        initial={{ height: "100vh" }}
        animate={{ height: 0, transition: { duration: 1, ease: "circOut" } }}
      />
      <motion.div
        className="w-full bg-[var(--color-shiso-800)]"
        initial={{ height: "0vh" }}
        animate={{
          height: "100vh",
          transition: { duration: 1, ease: "circIn" },
        }}
      />
    </div>
  );
}; 