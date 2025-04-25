import menuData from "@/data/menu";
import Image from "next/image";

export default function MenuRow({ rowNumber }: { rowNumber: number }) {
  return (
    <div
      className="flex w-full justify-evenly flex-wrap gap-4"
      data-aos="fade-up"
    >
      {menuData[rowNumber].map((item, index) => (
        <div className="flex flex-col items-center w-90" key={index}>
          <div className="w-full aspect-square relative">
            <Image
              src={`/images/${item.image}.jpg`}
              alt={`A picture of ${item.name}.`}
              fill
              className="object-cover rounded-sm"
            />
          </div>
          <p className="text-lg uppercase w-full text-center mt-2">{`${item.name} - ${item.price}`}</p>
        </div>
      ))}
    </div>
  );
}
