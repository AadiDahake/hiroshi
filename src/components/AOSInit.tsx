"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 800,
      once: true,
    });
  }, []);

  return null;
}
