import Wave from "./Wave";
import wavesData from "@/data/waves";

export default function WavesContainer() {
  return (
    <div className="absolute top-20 left-0 w-full h-full z-[-1]">
      {wavesData.map((item, index) => (
        <div key={index} className="absolute top-0 left-0 w-full h-full">
          <Wave
            amplitude={item.amplitude}
            frequency={item.frequency}
            initialPhase={item.initialPhase}
          />
        </div>
      ))}
    </div>
  );
}
