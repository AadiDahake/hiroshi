import timelineData from "@/data/timeline";
import TimelineNode from "@/components/TimelineNode";
import PageHeader from "@/components/PageHeader";

export default function About() {
  return (
    <div className="flex flex-col">
      <PageHeader
        heading="About"
        description="Elevato is a restaurant with a history as rich as its dishes, a true culmination of culinary ingenuity. Read more about our story below."
      />

      <div className="z-2 flex flex-col items-center gap-6">
        {timelineData.map((item, index) => (
          <TimelineNode
            key={index}
            heading={item.heading}
            description={item.description}
            image={item.image}
            alt={item.alt}
            imageLeft={item.imageLeft}
          />
        ))}
      </div>
    </div>
  );
}
