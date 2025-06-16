import type { Metadata } from "next";
import { DM_Sans, Noto_Serif } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import Navbar from "@/components/Navbar";

const londinia = localFont({
  src: [
    {
      path: "../public/fonts/LondiniaMedium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-londinia",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});


export const metadata: Metadata = {
  title: "Hiroshi Ramen",
  description:
    "Experience vibrant flavors of locally-sourced, sustainable dining at GreenLeaf Bistro",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${londinia.variable} ${notoSerif.variable} ${dmSans.variable} ${dmSans.className}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
