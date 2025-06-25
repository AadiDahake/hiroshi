"use client";

import { WrappedCountUp } from "@/components/WrappedCountUp";

export function Sustainability() {
  return (
    <div className="w-full h-screen flex flex-col relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-[center_top_30%] opacity-50"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1687716005137-a3fcc0398fa3?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />
      <div className="px-[10%] py-10 prose sm:max-w-[80%] md:max-w-[70%] lg:max-w-[75%] mx-auto flex-1 flex flex-col items-center justify-center">
        <h2 className="clamp-[text,xl,5xl] font-semibold font-serif mb-4 text-aka-900">
          Sustainability
        </h2>

        <p className="mb-0 text-lg text-black lg:max-w-[80%]">
          Hiroshi Ramen is committed to sustainability and reducing our
          environmental impact. We use eco-friendly packaging and strive to
          minimize food waste. Our goal is to create delicious ramen while being
          kind to the planet.
        </p>

        <div className="mt-10 flex w-full justify-between text-black">
          <div className="flex flex-col">
            <h3 className="mb-0 text-lg font-bold text-shiso-900 uppercase">
              Meals Saved from Waste:
            </h3>
            <WrappedCountUp
              start={0}
              end={3912}
              suffix=" meals"
              enableScrollSpy={true}
            >
              {({ countUpRef }) => (
                <span
                  className="clamp-[text,2xl,4xl] font-bold"
                  ref={countUpRef}
                />
              )}
            </WrappedCountUp>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-0 text-lg font-bold text-shiso-900 uppercase">
              Plastic Eliminated:
            </h3>
            <WrappedCountUp
              start={0}
              end={22000}
              suffix="+ utensils"
              enableScrollSpy={true}
            >
              {({ countUpRef }) => (
                <span
                  className="clamp-[text,2xl,4xl] font-bold"
                  ref={countUpRef}
                />
              )}
            </WrappedCountUp>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-0 text-lg font-bold text-shiso-900 uppercase">
              Carbon Footprint Offset:
            </h3>
            <WrappedCountUp
              start={0}
              end={4.1}
              decimals={1}
              suffix=" tons"
              enableScrollSpy={true}
            >
              {({ countUpRef }) => (
                <span
                  className="clamp-[text,2xl,4xl] font-bold"
                  ref={countUpRef}
                />
              )}
            </WrappedCountUp>
          </div>
        </div>
      </div>
    </div>
  );
}
