import type { Metadata } from "next";
import { DM_Sans, Sawarabi_Mincho } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

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

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const sawarabiMincho = Sawarabi_Mincho({
  subsets: ["latin"],
  variable: "--font-sawarabi-mincho",
  weight: "400",
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
      <body className={`${dmSans.variable} ${dmSans.className} ${sawarabiMincho.variable} ${londinia.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
