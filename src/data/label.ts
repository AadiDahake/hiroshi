import type LabelItem from "@/types/label";
import { mdiTractorVariant, mdiTruck, mdiLeaf } from "@mdi/js";

const labelData: Array<LabelItem> = [
  {
    icon: mdiTruck,
    subheading: "Farm to Table",
    body: "Our supplying farms directly transport ingredients to our restaurant. No warehouses. No middleman.",
  },
  {
    icon: mdiTractorVariant,
    subheading: "Local Farmers",
    body: "Elevato prides itself in directly collaborating with and supporting small, local Pennsylvania farms.",
  },
  {
    icon: mdiLeaf,
    subheading: "Eco-Friendly",
    body: "We strive to use as much of each ingredient as we can. The rest is sent to our supplier farms for compost.",
  },
];

export default labelData;
