import menuData from "@/data/menu";
import Image from "next/image";

export default function MenuRow({ rowNumber }: { rowNumber: number }) {
  return (
    <div className="flex w-full justify-between flex-wrap gap-4">
      {menuData[rowNumber]["items"].map((item, index) => (
        <div className="flex flex-col items-center w-90" key={index}>
          <div className="w-full aspect-square relative group overflow-hidden">
            <Image
              src={`/images/${item.image}.jpg`}
              alt={`A picture of ${item.name}.`}
              fill
              className="object-cover transition-all duration-300 group-hover:blur-sm"
            />
            <div className="absolute flex inset-6 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xl text-center">{item.description}</p>
            </div>
          </div>
          <p className="text-lg uppercase w-full text-center mt-2">{`${item.name} - ${item.price}`}</p>
        </div>
      ))}
    </div>
  );
}
