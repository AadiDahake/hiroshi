"use client";

import { WrappedCountUp } from "@/components/WrappedCountUp";

export function Sustainability() {
  return (
    <div className="w-full h-screen flex flex-col relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-[center_top_30%] opacity-50"
        
      />
      <div className="px-[10%] py-10 prose sm:max-w-[80%] md:max-w-[70%] lg:max-w-[65%] mx-auto flex-1 flex flex-col items-center justify-center">
        <h2 className="clamp-[text,xl,5xl] font-semibold font-serif mb-4 text-aka-900">
          Sustainability
        </h2>

        <p className="mb-0 text-lg text-black">
          Hiroshi Ramen is committed to sustainability and reducing our
          environmental impact. We use eco-friendly packaging and strive to
          minimize food waste. Our goal is to create delicious ramen while being
          kind to the planet.
        </p>

        <div className="text-black mt-10 w-100">
          <div className="flex flex-col items-center text-center mt-3">
            <div>
              <h3 className="mb-0 text-xl font-bold text-shiso-900 uppercase">
                Meals Saved from Waste:
              </h3>
              <WrappedCountUp
                start={0}
                end={3912}
                suffix=" meals"
                enableScrollSpy={true}
              >
                {({ countUpRef }) => (
                  <span className="clamp-[text,2xl,5xl] font-bold" ref={countUpRef} />
                )}
              </WrappedCountUp>
            </div>
            <div>
              <h3 className="mb-0 text-xl font-bold text-shiso-900 uppercase">
                Plastic Eliminated:
              </h3>
              <WrappedCountUp
                start={0}
                end={22000}
                suffix="+ utensils"
                enableScrollSpy={true}
              >
                {({ countUpRef }) => (
                  <span className="clamp-[text,2xl,5xl] font-bold" ref={countUpRef} />
                )}
              </WrappedCountUp>
            </div>
            <div>
              <h3 className="mb-0 text-xl font-bold text-shiso-900 uppercase">
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
                  <span className="clamp-[text,2xl,5xl] font-bold" ref={countUpRef} />
                )}
              </WrappedCountUp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
