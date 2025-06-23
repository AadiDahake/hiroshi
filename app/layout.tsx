import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { dmSans, londinia, sawarabiMincho } from "./styles/fonts";

import "./globals.css";
import FloatingSakura from "@/components/FloatingSakura";



export const metadata: Metadata = {
  title: "Hiroshi Ramen",
  description:
    "Experience vibrant flavors of ramen at Hiroshi Ramen. Our mission is to create delicious food while being kind to the planet.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmSans.className} ${sawarabiMincho.variable} ${londinia.variable}`}
      >
        <FloatingSakura />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}