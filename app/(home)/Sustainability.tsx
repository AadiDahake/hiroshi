"use client";

import CountUp from "react-countup";
import { UpperWave, LowerWave } from "@/components/Wave";

export function Sustainability() {
  return (
    <div className="w-full h-screen flex flex-col">
      
      <div className="bg-aka-500_ px-[10%] py-10 prose sm:max-w-[80%] md:max-w-[70%] lg:max-w-[65%] mx-auto flex-1 flex flex-col items-center justify-center text-center">
        <h2 className="clamp-[text,xl,5xl] font-semibold mb-4">
          Sustainability
        </h2>

        <p className="mb-0">
          Hiroshi Ramen is committed to sustainability and reducing our
          environmental impact. We use eco-friendly packaging and strive to
          minimize food waste. Our goal is to create delicious ramen while being
          kind to the planet.
        </p>

        <div className="font-semibold text-black">
          <h3 className="mt-3 mb-0 text-black">Meals Saved from Waste: </h3>
          <CountUp start={0} end={3912} suffix=" meals" enableScrollSpy={true}>
            {({ countUpRef }) => (
              <span className="text-3xl font-bold" ref={countUpRef} />
            )}
          </CountUp>
          <h3 className="mt-3 mb-0 text-black">Plastic Eliminated: </h3>
          <CountUp
            start={0}
            end={22000}
            suffix="+ utensils"
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <span className="text-3xl font-bold" ref={countUpRef} />
            )}
          </CountUp>
          <h3 className="mt-3 mb-0 text-black">Carbon Footprint Offset: </h3>
          <CountUp
            start={0}
            end={4.1}
            decimals={1}
            suffix=" tons"
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <span className="text-3xl font-bold" ref={countUpRef} />
            )}
          </CountUp>
        </div>
      </div>
      
    </div>
  );
}
