import MenuRow from "@/types/menuRow";

const menuData: Array<MenuRow> = [
  {
    section: "Appetizers",
    items: [
      {
        name: "Tomato Bruschetta",
        price: "$18.00",
        image: 7,
        description:
          "Grilled artisan bread adorned with heirloom tomatoes, basil chiffonade, and a whisper of garlic.",
      },
      {
        name: "Zucchini Fritters",
        price: "$20.00",
        image: 8,
        description:
          "Delicate zucchini fritters, crisped to perfection and served with lemon-scented aioli.",
      },
      {
        name: "(V) Vegan Arancini",
        price: "$22.00",
        image: 9,
        description:
          "Golden risotto spheres with garden vegetables and a heart of vegan cheese.",
      },
      {
        name: "Stuffed Mushrooms",
        price: "$21.00",
        image: 11,
        description:
          "Oven-roasted mushrooms filled with herbed ricotta and a touch of truffle essence.",
      },
    ],
  },
  {
    section: "Primi Piatta",
    items: [
      {
        name: "Gnocchi with Truffle",
        price: "$24.00",
        image: 12,
        description:
          "Pillowy gnocchi nestled in a decadent black truffle cream, finished with Parmigiano-Reggiano.",
      },
      {
        name: "Pasta alla Norma",
        price: "$26.00",
        image: 13,
        description:
          "A Sicilian classic of al dente pasta, roasted eggplant, and tomato passata, crowned with ricotta salata.",
      },
      {
        name: "(V) Vegan Carbonara",
        price: "$22.00",
        image: 14,
        description:
          "A modern plant-based interpretation with smoked tofu, cashew cream, and cracked pepper.",
      },
      {
        name: "Risotto with Peas",
        price: "$25.00",
        image: 15,
        description:
          "Creamy Carnaroli risotto gently folded with spring peas and aged Parmigiano.",
      },
    ],
  },
  {
    section: "Secondi Piatta",
    items: [
      {
        name: "(V) Eggplant Parmigiana",
        price: "$29.00",
        image: 10,
        description:
          "Layered eggplant baked with San Marzano tomatoes and vegan mozzarella, a symphony of textures.",
      },
      {
        name: "Pappa al Pomodoro",
        price: "$25.00",
        image: 16,
        description:
          "A rustic Tuscan blend of ripe tomatoes, torn bread, and extra virgin olive oil.",
      },
      {
        name: "Mushrooms and Polenta",
        price: "$23.00",
        image: 17,
        description:
          "Wild mushrooms sautéed with herbs atop soft, slow-cooked polenta.",
      },
      {
        name: "Panzanella Salad",
        price: "$22.00",
        image: 18,
        description:
          "A refined countryside salad of torn sourdough, vine tomatoes, and garden vegetables.",
      },
    ],
  },
  {
    section: "Desserts",
    items: [
      {
        name: "(V) Tiramisu",
        price: "$18.00",
        image: 19,
        description:
          "An elegant vegan rendition of the iconic layered espresso dessert, dusted with cocoa.",
      },
      {
        name: "(V) Almond Biscotti",
        price: "$16.00",
        image: 20,
        description:
          "Twice-baked almond delicacies, perfect for savoring with espresso or Vin Santo.",
      },
      {
        name: "Panna Cotta",
        price: "$22.00",
        image: 21,
        description:
          "Silken vanilla cream with a veil of berry coulis and citrus zest.",
      },
      {
        name: "Zeppole",
        price: "$18.00",
        image: 22,
        description:
          "Lustrous Italian doughnuts, lightly dusted and served warm.",
      },
    ],
  },
];

export default menuData;
