import { UpperWave, LowerWave } from "@/components/Wave";

export function Mission() {
  return (
    <div className="w-full">
      <UpperWave className="w-full" fill="var(--color-shiso-500)" />
      <div className="bg-shiso-500 px-[10%] py-10">
        <h2 className="font-serif text-3xl font-semibold">About the Restaurant</h2>
      </div>
      <LowerWave className="w-full" fill="var(--color-shiso-500)" />
    </div>
  );
}
