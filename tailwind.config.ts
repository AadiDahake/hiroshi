import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

export default {
  content: {
    files: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
    ],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
    },
  },
  plugins: [require("tw-animate-css"), fluid],
} as Config;
