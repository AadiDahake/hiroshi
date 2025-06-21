"use client";

import dynamic from "next/dynamic";
import { BookOpenIcon, SaladIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const RamenBowlAnimation = dynamic(
  () => import("./RamenBowlAnimation").then((mod) => mod.RamenBowlAnimation),
  { ssr: false }
);

export function Hero() {
  return (
    <div className="w-full h-screen p-10 py-30 md:p-20 bg-cover bg-[30%_50%] bg-no-repeat bg-[url('/images/home/hero-background.png')]">
      <div className="relative flex flex-col md:flex-row items-center size-full max-w-[100rem] mx-auto z-10">
        <div className="relative w-full overflow-hidden flex-1 h-full">
          <RamenBowlAnimation />
        </div>
        <div className="shrink text-center md:text-right">
          <h1 className="clamp-[text,4xl,7.5rem] leading-none font-serif uppercase">
            Hiroshi
            <br />
            Ramen
          </h1>
          <h3 className="clamp-[text,lg,1.765rem] font-semibold font-serif">
            <span className="text-green-800">Vegetarian.</span>
            &nbsp;
            <span className="text-amber-800">Authentic.</span>
          </h3>
          <h3 className="clamp-[text,base,1.4rem] font-serif">
            Slow-cooked broth. <br />
            House-made noodles. <br />
            Pure comfort.
          </h3>
          <div className="flex justify-center md:justify-end gap-5 mt-5">
            <Button size="lg" variant="default" asChild>
              <Link href="/menu">
                View the Menu
                <BookOpenIcon />
              </Link>
            </Button>
            <Button size="lg" variant="default" asChild>
              <Link href="/reservations">
                Make a Reservation
                <SaladIcon />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


// export function Hero() {
//   return (
//     <div className="w-full h-screen p-20 text-center">
//       <div className="absolute top-0 left-0 w-full h-screen -z-10">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="size-full grow object-cover opacity-90"
//           preserveAspectRatio="xMaxYMax slice"
//           viewBox="0 0 6672 2192"
//           width="6672"
//           height="2192"
//         >
//           <path
//             id="fifthHill"
//             fill="#a4ac95"
//             d="M4265.342 1519.204c.65-89.894 260.623-179.073 393.103-216.89 291.42-83.19 551.479-37.65 711.559-138.28 204.562-128.593 619.49-472.347 981.172-409.614 204.245 35.426 321.048 146.986 321.048 146.986l-.26 1078.586-2409.965 1.7z"
//             className="landscape__layer"
//             style={{ "--offset": 1.8 } as React.CSSProperties}
//           />
//           <path
//             id="fourthHill"
//             fill="#294e2a"
//             d="M6113.6 1195s154.8-150.24 246.05-195.2c96.949-47.775 312.747-77.41 312.747-77.41l-.096 541.214-526.168 10.003z"
//             className="landscape__layer"
//             style={{ "--offset": 1.3 } as React.CSSProperties}
//           />
//           <path
//             id="thirdHill"
//             fill="#899b7a"
//             d="M2399.979 2082.776c368.67-178 1567.521-756.216 2070.221-621.326 444.8 119.33 957.73-329.83 1397.8-295.46 375.6 29.335 392.33 54.001 606 262l2.73 650.234z"
//             className="landscape__layer"
//             style={{ "--offset": 0.8 } as React.CSSProperties}
//           />
//           <path
//             id="secondHill"
//             fill="#002710"
//             d="M4109.046 1902.099s948.657-527.043 1511.58-520.154c272.87 3.34 580.096 237.255 580.096 237.255l-196.613 564.429h-1810.1z"
//             className="landscape__layer"
//             style={{ "--offset": 0.35 } as React.CSSProperties}
//           />
//           <path
//             id="firstHill"
//             fill="#001409"
//             d="M0 2192.018s3418.819-395.81 3970.519-365.2c913.57 50.694 1661.22-98.464 1849.52-250.238 223.87-180.5 659.653-189.98 852.013-113.92l.3 729.367z"
//           />
//         </svg>
//       </div>
//       <div className="flex flex-col items-center size-full">
//         <div className="shrink [&_*]:z-10 [&>*]:z-10 text-center">
//           <h1 className="text-5xl font-serif uppercase">
//             Hiroshi
//             <br />
//             Ramen
//           </h1>
//           <h3 className="text-2xl font-semibold font-serif">
//             <span className="text-green-800">Vegetarian.</span>
//             &nbsp;
//             <span className="text-amber-800">Authentic.</span>
//           </h3>
//           <div className="flex justify-center gap-5 mt-5">
//             <Button size="lg" variant="default" asChild>
//               <Link href="/menu">
//                 View the Menu
//                 <BookOpenIcon />
//               </Link>
//             </Button>
//             <Button size="lg" variant="default" asChild>
//               <Link href="/reservations">
//                 Make a Reservation
//                 <SaladIcon />
//               </Link>
//             </Button>
//           </div>
//         </div>
//         <div className="w-full overflow-hidden flex-1 h-full">
//           <RamenBowlAnimation />
//         </div>
//       </div>
//     </div>
//   );
// }
