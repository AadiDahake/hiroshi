"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { FusumaLoader } from "@/components/FusumaLoader";

export default function GlobalLoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <FusumaLoader />}</AnimatePresence>
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
} 