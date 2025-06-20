import { UpperWave, LowerWave } from "@/components/Wave";

export function Sustainability() {
  return (
    <div className="w-full">
      <UpperWave className="w-full" flip={true} fill="var(--color-aka-500)" />
      <div className="bg-aka-500 px-[10%] py-10">
        <h2 className="font-serif text-3xl font-semibold text-center">Sustainability</h2>
      </div>
      <LowerWave className="w-full" flip={true} fill="var(--color-aka-500)" />
    </div>
  );
}
