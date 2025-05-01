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

      <div className="flex flex-col">
        {menuData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col mb-20 mx-10"
            data-aos="fade-up"
          >
            <h2 className="text-accent text-4xl uppercase italic mb-6">
              {item.section}
            </h2>

            <MenuRow rowNumber={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
