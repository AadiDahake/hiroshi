import type { Metadata } from "next";
import { Cormorant_Garamond, Roboto, Baskervville_SC } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const baskervville = Baskervville_SC({
  variable: "--font-baskervville",
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elevato",
  description: "An elevated vegetarian Italian fine-dining experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.variable} ${roboto.variable}`}>
      <div className="font-[family-name:var(--font-cormorant-garamond)]">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
        </div>
        <Footer />
      </div>
      </body>
    </html>
  );
}
