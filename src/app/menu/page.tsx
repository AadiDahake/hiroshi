import PageHeader from "@/components/PageHeader";
import MenuRow from "@/components/MenuRow";
import menuData from "@/data/menu";

export default function Menu() {
  return (
    <div className="flex flex-col">
      <PageHeader
        heading="Menu"
        description="View our carefully hand-crafted menu where each dish pairs with another in an enjoyable explosion of flavor."
      />

      <div className="flex flex-col items-center gap-8 mb-20">
        {menuData.map((_, index) => (
          <MenuRow key={index} rowNumber={index} />
        ))}
      </div>
    </div>
  );
}
