import Navbar from "@/components/Navbar";
import { Hero } from "./Hero";
import { Mission } from "./Mission";
import { Awards } from "./Awards";
import { Sustainability } from "./Sustainability";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex w-full flex-col">
        <Hero />
        <Mission />
        <Awards />
        <Sustainability />
      </main>
      <Footer />
    </>
  );
}
