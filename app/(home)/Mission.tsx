import { UpperWave, LowerWave } from "@/components/Wave";

export function Mission() {
  return (
    <div className="w-full h-screen flex flex-col">
      
      <div className="bg-shiso-500 px-[10%] py-10 flex-1 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-white mb-6">About the Restaurant</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Experience the art of vegetarian ramen at Hiroshi Ramen, where tradition meets innovation. 
            Our slow-cooked broths and house-made noodles create pure comfort in every bowl.
          </p>
        </div>
      </div>
      
    </div>
  );
}
