import type TimelineItem from "@/types/timeline";

const timelineData: Array<TimelineItem> = [
    {
        heading: 'Humble Beginnings',
        description: `Aldo Bernadi immigrated to the United States of America, from his tiny village of Foiano di Val Fortore, during the Industrial Revolution. Aldo toiled in an aeronautical factory, where he produced engines. Later, he married Giorgio Amato. Seeking escape from a monotonous and laborious life, Aldo and Giorgio opened Elevato, the first authentic Italian restaurant in the town. As an increasing number of Italians immigrated to the US, the Bernadis expanded the restaurant in scale and size, bringing comfort in a foreign land.`,
        image: 4,
        alt: 'A photo of the Bernadi family: a young girl, a mother holding a baby, and her son, Aldo Bernadi.',
        imageLeft: true
    },
    {
        heading: 'History',
        description: `Chef Bernadi cooked the traditional recipes he had learned from his late grandmother, Gia Bernadi. Each recipe had been passed down from generation to generation. As new trends emerged within the food industry, we adapted our recipes to reflect these changes. However, we still maintain the original flavors and textures that propelled our restaurant into the center of Italian culture here in Bethlehem. The Bernadi family has continued Aldo's legacy for 111 years through Elevato.`,
        image: 5,
        alt: 'A grayscale photo of an elderly Italian woman, Gia Bernadi.',
        imageLeft: false
    },
    {
        heading: 'Farm to Table',
        description: `Here at Elevato, we pride ourselves on working with local farmers to source the finest and freshest ingredients for our vegetarian-only dishes. Our network of suppliers consists of small farms to big farms. We are proud to support them through our partnerships. Our routine inspections ensure the farms do not use pesticides while raising organic crops. We do use products with preservatives. Our restaurant also does not serve GMOs, which we believe violate the Bernadi family's authenticity.`,
        image: 1,
        alt: 'A pile of fresh ingredients including tomatoes, greens, and spagethti, on a wooden table.',
        imageLeft: true
    },
    {
        heading: 'Hours',
        description: `We are open during the following times: Monday: 11:00 AM - 10:00 PM Tuesday: 11:00 AM - 10:00 PM Wednesday: 11:00 AM - 10:00 PM Thursday: 11:00 AM - 10:00 PM Friday: 12:00 AM - 10:00 PM Saturday: 12:00 AM - 10:00 PM Sunday: Closed Elevato has outdoor and indoor seating options. Dine with us at 3833 Freemansburg Ave, Bethlehem, Pennsylvania for an Italian fine-dining experience.`,
        image: 6,
        alt: 'A posh and brightly lit indoor restaurant.',
        imageLeft: false
    }
];

export default timelineData;
