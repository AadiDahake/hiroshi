import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "GreenLeaf Bistro - Farm Fresh Plant-Based Cuisine",
  description:
    "Experience vibrant flavors of locally-sourced, sustainable dining at GreenLeaf Bistro",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
