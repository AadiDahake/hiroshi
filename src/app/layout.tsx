import type { Metadata } from "next";
import { Cormorant_Garamond, Roboto } from "next/font/google";

import Layout from "@/components/Layout";

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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
