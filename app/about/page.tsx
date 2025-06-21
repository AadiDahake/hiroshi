import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import RestaurantKitchen from "@/public/images/about/hero.jpg";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex w-full flex-col">
        <div className="relative">
          <div className="absolute -z-10 size-full">
            <ExportedImage
              src={RestaurantKitchen}
              alt="Plant in a jar full of money."
              className="size-full object-cover opacity-70"
              priority
            />
          </div>
          <div className="w-full clamp-[pt,28,32,sm,3xl] clamp-[pb,20,32,sm,3xl]">
            <div className="prose mx-auto max-w-lg text-center">
              <h1 className="mb-5 font-bold text-marshland-200 clamp-[text,4xl,5xl,sm,md]">
                About
              </h1>
              <p className="mt-1 font-semibold text-marshland-200 clamp-[text,lg,xl,sm,md]">
                Learn about the origins of Hiroshi Ramen and our mission
              </p>
            </div>
          </div>
        </div>

        <div className="pb-5">
          <div className="flex flex-col justify-center px-[8%]" id="the-future">
            <div className="mx-auto text-center">
              <Link
                href="/why-go-green#the-future"
                className="font-bold uppercase text-racing-green-700"
              >
                The Future
              </Link>
              <h3 className="pb-3 pt-2 text-3xl font-bold text-black">
                Temperatures Will Rise
              </h3>
            </div>
            <p className="prose mx-auto max-w-[60%] text-center text-black">
              Without significant measures to decrease emissions, the global
              temperature is projected to increase by 2.5°C to 4.5°C (4.5°F to
              8°F) by 2100, according to recent estimations from NASA, a leading
              authority on technological advancement. This statement underscores
              the crossroad at which humanity stands: persist in our existing
              practices and irrevocably damage the planet or make necessary
              changes to safeguard the well-being of future generations. The
              urgency of this choice cannot be overstated; it is a call to
              action that demands immediate and sustained efforts to transition
              towards sustainable energy solutions and reduce our carbon
              footprint. Failure to act will not only exacerbate extreme weather
              conditions but also threaten food security, water resources, and
              global health, leading to unprecedented ecological and economic
              challenges.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
