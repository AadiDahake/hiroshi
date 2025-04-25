import type MenuItem from "@/types/menu";
import MenuRow from "@/types/menuRow";

const menuData: Array<MenuRow> = [
  {
    items: [
      {
        name: "Tomato Bruschetta",
        price: "$18.00",
        image: 7,
      },
      {
        name: "Zucchini Fritters",
        price: "$20.00",
        image: 8,
      },
      {
        name: "(V) Vegan Arancini",
        price: "$22.00",
        image: 9,
      },
      {
        name: "Stuffed Mushrooms",
        price: "$21.00",
        image: 11,
      },
    ],
    section: "Appetizers",
  },
  {
    items: [
      {
        name: "Gnocchi with Truffle",
        price: "$24.00",
        image: 12,
      },
      {
        name: "Pasta alla Norma",
        price: "$26.00",
        image: 13,
      },
      {
        name: "(V) Vegan Carbonara",
        price: "$22.00",
        image: 14,
      },
      {
        name: "Risotto with Peas",
        price: "$25.00",
        image: 15,
      },
    ],
    section: "Primi Piatta",
  },
  {
    items: [
      {
        name: "(V) Eggplant Parmigiana",
        price: "$29.00",
        image: 10,
      },
      {
        name: "Pappa al Pomodoro",
        price: "$25.00",
        image: 16,
      },
      {
        name: "Mushrooms and Polenta",
        price: "$23.00",
        image: 17,
      },
      {
        name: "Panzanella Salad",
        price: "$22.00",
        image: 18,
      },
    ],
    section: "Secondi Piatta",
  },
  {
    items: [
      {
        name: "(V) Tiramisu",
        price: "$18.00",
        image: 19,
      },
      {
        name: "(V) Almond Biscotti",
        price: "$16.00",
        image: 20,
      },
      {
        name: "Panna Cotta",
        price: "$22.00",
        image: 21,
      },
      {
        name: "Zeppole",
        price: "$18.00",
        image: 22,
      },
    ],
    section: "Desserts",
  },
];

export default menuData;
