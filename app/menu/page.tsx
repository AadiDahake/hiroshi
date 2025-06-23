"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Leaf,
  Star,
  X,
  CalendarDays,
  Utensils,
  ShoppingBag,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useState, useMemo, ReactNode } from "react";
import Footer from "@/components/Footer";
import {
  ShioRamenIllustration,
  SpicyMisoIllustration,
  TruffleShoyuIllustration,
  KetoRamenIllustration,
  VeganGyozaIllustration,
} from "@/components/DishIllustrations";

type Ingredient = {
  name: string;
  origin: string;
};

type Allergen = "gluten" | "soy" | "nuts" | "sesame";

type CustomerComment = {
  user: string;
  avatar: string;
  comment: string;
  rating: number;
};

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: { dineIn: number; takeOut: number };
  image: ReactNode;
  category: "Ramen" | "Sides" | "Drinks" | "Desserts";
  tags: ("vegan" | "vegetarian" | "gluten-free" | "keto" | "spicy" | "nut-free")[];
  ingredients: Ingredient[];
  allergens: Allergen[];
  rating: number;
  reviews: number;
  carbonFootprint: number; // 1 (low) to 5 (high)
  nutritionalFacts: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  pairings: string[];
  customerComments: CustomerComment[];
};

type SeasonalSpecial = {
  date: string;
  name: string;
  description: string;
  available: boolean;
};

export default function HiroshiRamenMenu() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [diningMode, setDiningMode] = useState<"dineIn" | "takeOut">("dineIn");
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [showBuildRamen, setShowBuildRamen] = useState(false);
  const [customRamen, setCustomRamen] = useState({
    base: "",
    noodles: "",
    toppings: [] as string[],
    addOns: [] as string[],
  });

  const filterOptions = [
    { id: "vegan", label: "Vegan", icon: "🌱" },
    { id: "vegetarian", label: "Vegetarian", icon: "🥬" },
    { id: "gluten-free", label: "Gluten-Free", icon: "🌾" },
    { id: "spicy", label: "Spicy", icon: "🌶️" },
    { id: "keto", label: "Keto", icon: "🥑" },
    { id: "nut-free", label: "Nut-Free", icon: "🥜" },
  ];

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Shio Ramen",
      description:
        "Light, salt-based broth, showcasing the pure essence of our slow-simmered vegetable stock.",
      price: { dineIn: 13, takeOut: 11 },
      image: <ShioRamenIllustration />,
      category: "Ramen",
      tags: ["vegetarian"],
      ingredients: [
        { name: "Vegetable Broth", origin: "Miyagi Prefecture Farms" },
        { name: "Noodles", origin: "Hokkaido Wheat, House-Made" },
        { name: "Bamboo Shoots", origin: "Kyoto Forest Reserve" },
        { name: "Nori", origin: "Ariake Sea Harvest" },
      ],
      allergens: ["gluten", "soy"],
      rating: 4.7,
      reviews: 298,
      carbonFootprint: 2,
      nutritionalFacts: {
        calories: 450,
        protein: 18,
        carbs: 60,
        fat: 15,
      },
      pairings: ["Edamame", "Green Tea"],
      customerComments: [
        {
          user: "RamenLover",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
          comment: "So light and refreshing! A classic for a reason.",
          rating: 5,
        },
      ],
    },
    {
      id: 2,
      name: "Vegan Spicy Miso",
      description:
        "A robust and fiery miso broth balanced with sesame and chili, creating a deeply satisfying warmth.",
      price: { dineIn: 15, takeOut: 13 },
      image: <SpicyMisoIllustration />,
      category: "Ramen",
      tags: ["vegan", "spicy"],
      ingredients: [
        { name: "Spicy Miso Tare", origin: "Aged 3 Months In-House" },
        { name: "Crispy Tofu", origin: "Organic Soy from Kyushu" },
        { name: "Corn", origin: "Hokkaido Sweet Corn" },
        { name: "Bean Sprouts", origin: "Local Hydroponic Farm" },
      ],
      allergens: ["soy", "sesame"],
      rating: 4.8,
      reviews: 350,
      carbonFootprint: 3,
      nutritionalFacts: {
        calories: 550,
        protein: 25,
        carbs: 65,
        fat: 20,
      },
      pairings: ["Vegan Gyoza", "Ginger Ale"],
      customerComments: [
        {
          user: "SpicyFan",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
          comment: "The perfect amount of spice!",
          rating: 5,
        },
      ],
    },
    {
      id: 3,
      name: "Truffle Shoyu Ramen",
      description:
        "An elegant soy-based broth elevated with luxurious black truffle, a modern interpretation of a classic.",
      price: { dineIn: 16, takeOut: 14 },
      image: <TruffleShoyuIllustration />,
      category: "Ramen",
      tags: ["vegetarian"],
      ingredients: [
        { name: "Shoyu Tare", origin: "Brewed in Chiba Prefecture" },
        { name: "Marinated Mushrooms", origin: "Foraged from Nagano Forests" },
        { name: "Soft-Boiled Egg", origin: "Pasture-Raised, Local Farm" },
        { name: "Truffle Oil", origin: "Imported from Alba, Italy" },
      ],
      allergens: ["gluten", "soy"],
      rating: 4.9,
      reviews: 410,
      carbonFootprint: 3,
      nutritionalFacts: {
        calories: 600,
        protein: 22,
        carbs: 70,
        fat: 25,
      },
      pairings: ["Agedashi Tofu", "Sake"],
      customerComments: [
        {
          user: "Foodie",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
          comment: "The truffle is a game-changer!",
          rating: 5,
        },
      ],
    },
    {
      id: 4,
      name: "Keto-Friendly Ramen",
      description:
        "Guilt-free indulgence featuring low-carb Shirataki noodles in a savory broth with fresh toppings.",
      price: { dineIn: 15, takeOut: 13 },
      image: <KetoRamenIllustration />,
      category: "Ramen",
      tags: ["vegetarian", "keto"],
      ingredients: [
        { name: "Shirataki Noodles", origin: "Traditional Japanese Konjac" },
        { name: "Avocado", origin: "Sustainably Sourced" },
        { name: "Grilled Halloumi", origin: "Local Artisan Cheesemaker" },
        { name: "Spinach", origin: "Fresh from our Garden" },
      ],
      allergens: [],
      rating: 4.6,
      reviews: 180,
      carbonFootprint: 4,
      nutritionalFacts: {
        calories: 400,
        protein: 20,
        carbs: 10,
        fat: 30,
      },
      pairings: ["Seaweed Salad", "Iced Tea"],
      customerComments: [
        {
          user: "KetoKing",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704g",
          comment: "Finally, a ramen I can eat on my diet!",
          rating: 5,
        },
      ],
    },
    {
      id: 5,
      name: "Vegan Gyoza",
      description:
        "Crispy on the outside, juicy on the inside. Pan-fried vegetable dumplings served with our house-made dipping sauce.",
      price: { dineIn: 8, takeOut: 7 },
      image: <VeganGyozaIllustration />,
      category: "Sides",
      tags: ["vegan"],
      ingredients: [
        { name: "Cabbage", origin: "Local Organic Farm" },
        { name: "Shiitake Mushrooms", origin: "Cultivated In-House" },
        { name: "Gyoza Wrappers", origin: "House-Made Daily" },
      ],
      allergens: ["gluten", "soy"],
      rating: 4.7,
      reviews: 210,
      carbonFootprint: 1,
      nutritionalFacts: {
        calories: 250,
        protein: 10,
        carbs: 30,
        fat: 10,
      },
      pairings: ["Any Ramen", "Ramune Soda"],
      customerComments: [],
    },
    // New Vegan Items
    {
      id: 6,
      name: "Mushroom Tonkotsu Ramen",
      description:
        "Rich, creamy broth made from slow-simmered mushrooms and vegetables, mimicking the depth of traditional tonkotsu.",
      price: { dineIn: 14, takeOut: 12 },
      image: <ShioRamenIllustration />,
      category: "Ramen",
      tags: ["vegan", "nut-free"],
      ingredients: [
        { name: "Mushroom Broth", origin: "Mixed Wild Mushrooms" },
        { name: "Rice Noodles", origin: "Gluten-Free Alternative" },
        { name: "Enoki Mushrooms", origin: "Local Cultivation" },
        { name: "Bok Choy", origin: "Organic Farm" },
      ],
      allergens: ["soy"],
      rating: 4.5,
      reviews: 156,
      carbonFootprint: 2,
      nutritionalFacts: {
        calories: 480,
        protein: 16,
        carbs: 55,
        fat: 18,
      },
      pairings: ["Vegan Tempura", "Jasmine Tea"],
      customerComments: [
        {
          user: "VeganChef",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704h",
          comment: "Incredible depth of flavor!",
          rating: 5,
        },
      ],
    },
    {
      id: 7,
      name: "Vegan Tempura Vegetables",
      description:
        "Light and crispy tempura-battered seasonal vegetables served with a tangy dipping sauce.",
      price: { dineIn: 9, takeOut: 8 },
      image: <VeganGyozaIllustration />,
      category: "Sides",
      tags: ["vegan", "nut-free"],
      ingredients: [
        { name: "Seasonal Vegetables", origin: "Local Farm Selection" },
        { name: "Rice Flour", origin: "Gluten-Free Breading" },
        { name: "Sparkling Water", origin: "For Light Batter" },
      ],
      allergens: [],
      rating: 4.3,
      reviews: 89,
      carbonFootprint: 1,
      nutritionalFacts: {
        calories: 180,
        protein: 4,
        carbs: 25,
        fat: 8,
      },
      pairings: ["Any Ramen", "Green Tea"],
      customerComments: [],
    },
    // New Gluten-Free Items
    {
      id: 8,
      name: "Gluten-Free Curry Ramen",
      description:
        "Aromatic Japanese curry broth with rice noodles, featuring tender vegetables and a hint of coconut milk.",
      price: { dineIn: 14, takeOut: 12 },
      image: <SpicyMisoIllustration />,
      category: "Ramen",
      tags: ["vegetarian", "gluten-free", "spicy"],
      ingredients: [
        { name: "Curry Broth", origin: "House-Made Spice Blend" },
        { name: "Rice Noodles", origin: "Gluten-Free" },
        { name: "Sweet Potato", origin: "Local Farm" },
        { name: "Coconut Milk", origin: "Organic" },
      ],
      allergens: ["soy"],
      rating: 4.4,
      reviews: 134,
      carbonFootprint: 3,
      nutritionalFacts: {
        calories: 520,
        protein: 14,
        carbs: 58,
        fat: 22,
      },
      pairings: ["Gluten-Free Gyoza", "Coconut Water"],
      customerComments: [
        {
          user: "GlutenFreeFoodie",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704i",
          comment: "Finally, a curry ramen I can eat!",
          rating: 4,
        },
      ],
    },
    {
      id: 9,
      name: "Gluten-Free Edamame",
      description:
        "Fresh soybeans steamed to perfection and sprinkled with sea salt, a perfect protein-rich snack.",
      price: { dineIn: 6, takeOut: 5 },
      image: <VeganGyozaIllustration />,
      category: "Sides",
      tags: ["vegan", "gluten-free", "nut-free"],
      ingredients: [
        { name: "Edamame", origin: "Local Organic Farm" },
        { name: "Sea Salt", origin: "Maldon Sea Salt" },
      ],
      allergens: ["soy"],
      rating: 4.2,
      reviews: 67,
      carbonFootprint: 1,
      nutritionalFacts: {
        calories: 120,
        protein: 12,
        carbs: 8,
        fat: 5,
      },
      pairings: ["Any Ramen", "Green Tea"],
      customerComments: [],
    },
    // New Spicy Items
    {
      id: 10,
      name: "Volcano Ramen",
      description:
        "Our spiciest ramen featuring ghost peppers and habaneros in a fiery broth that will test your limits.",
      price: { dineIn: 16, takeOut: 14 },
      image: <SpicyMisoIllustration />,
      category: "Ramen",
      tags: ["vegetarian", "spicy"],
      ingredients: [
        { name: "Ghost Pepper Broth", origin: "House-Made" },
        { name: "Habanero Oil", origin: "Infused In-House" },
        { name: "Crispy Tofu", origin: "Organic" },
        { name: "Scallions", origin: "Local Farm" },
      ],
      allergens: ["gluten", "soy"],
      rating: 4.1,
      reviews: 78,
      carbonFootprint: 2,
      nutritionalFacts: {
        calories: 480,
        protein: 18,
        carbs: 52,
        fat: 20,
      },
      pairings: ["Milk Tea", "Ice Cream"],
      customerComments: [
        {
          user: "SpiceMaster",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704j",
          comment: "This is the real deal! 🔥",
          rating: 5,
        },
      ],
    },
    {
      id: 11,
      name: "Spicy Kimchi Ramen",
      description:
        "Korean-inspired ramen with house-fermented kimchi and gochujang, creating a tangy and spicy experience.",
      price: { dineIn: 15, takeOut: 13 },
      image: <TruffleShoyuIllustration />,
      category: "Ramen",
      tags: ["vegan", "spicy", "gluten-free"],
      ingredients: [
        { name: "Kimchi Broth", origin: "House-Fermented" },
        { name: "Rice Noodles", origin: "Gluten-Free" },
        { name: "Napa Cabbage", origin: "Local Farm" },
        { name: "Gochujang", origin: "Traditional Korean" },
      ],
      allergens: ["soy"],
      rating: 4.6,
      reviews: 145,
      carbonFootprint: 2,
      nutritionalFacts: {
        calories: 460,
        protein: 16,
        carbs: 54,
        fat: 18,
      },
      pairings: ["Kimchi Pancake", "Makgeolli"],
      customerComments: [
        {
          user: "KoreanFoodLover",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704k",
          comment: "Perfect fusion of Korean and Japanese flavors!",
          rating: 5,
        },
      ],
    },
    // New Keto Items
    {
      id: 12,
      name: "Keto Avocado Ramen",
      description:
        "Creamy avocado-based broth with zucchini noodles and high-fat toppings for the perfect keto meal.",
      price: { dineIn: 17, takeOut: 15 },
      image: <KetoRamenIllustration />,
      category: "Ramen",
      tags: ["vegetarian", "keto", "gluten-free"],
      ingredients: [
        { name: "Avocado Broth", origin: "Fresh Avocados" },
        { name: "Zucchini Noodles", origin: "Spiralized Fresh" },
        { name: "Macadamia Nuts", origin: "Hawaiian Grown" },
        { name: "Coconut Oil", origin: "Organic" },
      ],
      allergens: ["nuts"],
      rating: 4.3,
      reviews: 92,
      carbonFootprint: 4,
      nutritionalFacts: {
        calories: 380,
        protein: 12,
        carbs: 8,
        fat: 35,
      },
      pairings: ["Keto Fat Bombs", "Bulletproof Coffee"],
      customerComments: [
        {
          user: "KetoQueen",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704l",
          comment: "Finally, a keto ramen that's actually good!",
          rating: 4,
        },
      ],
    },
    {
      id: 13,
      name: "Keto Fat Bombs",
      description:
        "Rich, creamy fat bombs made with coconut oil, cocoa, and erythritol for the perfect keto dessert.",
      price: { dineIn: 7, takeOut: 6 },
      image: <VeganGyozaIllustration />,
      category: "Desserts",
      tags: ["vegan", "keto", "gluten-free"],
      ingredients: [
        { name: "Coconut Oil", origin: "Organic" },
        { name: "Cocoa Powder", origin: "Fair Trade" },
        { name: "Erythritol", origin: "Natural Sweetener" },
        { name: "Vanilla Extract", origin: "Pure Madagascar" },
      ],
      allergens: [],
      rating: 4.0,
      reviews: 45,
      carbonFootprint: 3,
      nutritionalFacts: {
        calories: 280,
        protein: 2,
        carbs: 3,
        fat: 28,
      },
      pairings: ["Keto Ramen", "Bulletproof Coffee"],
      customerComments: [],
    },
    // New Nut-Free Items
    {
      id: 14,
      name: "Nut-Free Pad Thai Ramen",
      description:
        "Thai-inspired ramen with tamarind, lime, and peanuts replaced with sunflower seeds for nut-free diners.",
      price: { dineIn: 15, takeOut: 13 },
      image: <ShioRamenIllustration />,
      category: "Ramen",
      tags: ["vegetarian", "nut-free"],
      ingredients: [
        { name: "Tamarind Broth", origin: "Traditional Thai" },
        { name: "Rice Noodles", origin: "Gluten-Free" },
        { name: "Sunflower Seeds", origin: "Nut-Free Alternative" },
        { name: "Bean Sprouts", origin: "Local Farm" },
      ],
      allergens: ["soy"],
      rating: 4.4,
      reviews: 112,
      carbonFootprint: 2,
      nutritionalFacts: {
        calories: 490,
        protein: 16,
        carbs: 56,
        fat: 19,
      },
      pairings: ["Spring Rolls", "Thai Iced Tea"],
      customerComments: [
        {
          user: "NutFreeFoodie",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704m",
          comment: "So glad I can enjoy this safely!",
          rating: 5,
        },
      ],
    },
    {
      id: 15,
      name: "Nut-Free Chocolate Mochi",
      description:
        "Soft, chewy mochi filled with rich chocolate ganache, made without any nuts for safe enjoyment.",
      price: { dineIn: 8, takeOut: 7 },
      image: <VeganGyozaIllustration />,
      category: "Desserts",
      tags: ["vegetarian", "nut-free"],
      ingredients: [
        { name: "Mochi Rice", origin: "Traditional Japanese" },
        { name: "Dark Chocolate", origin: "Fair Trade" },
        { name: "Coconut Milk", origin: "Organic" },
        { name: "Vanilla Bean", origin: "Madagascar" },
      ],
      allergens: ["gluten"],
      rating: 4.5,
      reviews: 78,
      carbonFootprint: 3,
      nutritionalFacts: {
        calories: 220,
        protein: 3,
        carbs: 35,
        fat: 8,
      },
      pairings: ["Any Ramen", "Green Tea"],
      customerComments: [],
    },
    // New Drinks
    {
      id: 16,
      name: "Matcha Latte",
      description:
        "Smooth, creamy matcha latte made with ceremonial-grade green tea and oat milk.",
      price: { dineIn: 6, takeOut: 5 },
      image: <VeganGyozaIllustration />,
      category: "Drinks",
      tags: ["vegan", "gluten-free", "nut-free"],
      ingredients: [
        { name: "Ceremonial Matcha", origin: "Uji, Japan" },
        { name: "Oat Milk", origin: "Organic" },
        { name: "Agave Syrup", origin: "Natural Sweetener" },
      ],
      allergens: [],
      rating: 4.7,
      reviews: 234,
      carbonFootprint: 2,
      nutritionalFacts: {
        calories: 140,
        protein: 4,
        carbs: 18,
        fat: 6,
      },
      pairings: ["Any Dessert", "Breakfast Items"],
      customerComments: [
        {
          user: "MatchaLover",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704n",
          comment: "The best matcha latte I've ever had!",
          rating: 5,
        },
      ],
    },
    {
      id: 17,
      name: "Yuzu Lemonade",
      description:
        "Refreshing Japanese yuzu citrus lemonade with a hint of honey and mint.",
      price: { dineIn: 5, takeOut: 4 },
      image: <VeganGyozaIllustration />,
      category: "Drinks",
      tags: ["vegan", "gluten-free", "nut-free"],
      ingredients: [
        { name: "Yuzu Juice", origin: "Japanese Citrus" },
        { name: "Local Honey", origin: "Bee Farm" },
        { name: "Fresh Mint", origin: "Our Garden" },
        { name: "Sparkling Water", origin: "Filtered" },
      ],
      allergens: [],
      rating: 4.3,
      reviews: 156,
      carbonFootprint: 1,
      nutritionalFacts: {
        calories: 90,
        protein: 0,
        carbs: 22,
        fat: 0,
      },
      pairings: ["Spicy Ramen", "Summer Dishes"],
      customerComments: [
        {
          user: "CitrusFan",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704o",
          comment: "So refreshing and unique!",
          rating: 4,
        },
      ],
    },
    // New Desserts
    {
      id: 18,
      name: "Mochi Ice Cream Trio",
      description:
        "Three flavors of mochi ice cream: matcha, strawberry, and vanilla, served with fresh berries.",
      price: { dineIn: 9, takeOut: 8 },
      image: <VeganGyozaIllustration />,
      category: "Desserts",
      tags: ["vegetarian", "gluten-free"],
      ingredients: [
        { name: "Mochi Wrappers", origin: "House-Made" },
        { name: "Matcha Ice Cream", origin: "Artisan Made" },
        { name: "Strawberry Ice Cream", origin: "Local Berries" },
        { name: "Vanilla Ice Cream", origin: "Madagascar Vanilla" },
      ],
      allergens: ["soy"],
      rating: 4.6,
      reviews: 189,
      carbonFootprint: 3,
      nutritionalFacts: {
        calories: 280,
        protein: 4,
        carbs: 42,
        fat: 10,
      },
      pairings: ["Any Ramen", "Green Tea"],
      customerComments: [
        {
          user: "DessertQueen",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704p",
          comment: "The perfect ending to any meal!",
          rating: 5,
        },
      ],
    },
    {
      id: 19,
      name: "Vegan Tiramisu",
      description:
        "Classic tiramisu reimagined with cashew cream, coffee-soaked ladyfingers, and cocoa powder.",
      price: { dineIn: 10, takeOut: 9 },
      image: <VeganGyozaIllustration />,
      category: "Desserts",
      tags: ["vegan", "gluten-free"],
      ingredients: [
        { name: "Cashew Cream", origin: "Organic Cashews" },
        { name: "Coffee", origin: "Local Roaster" },
        { name: "Cocoa Powder", origin: "Fair Trade" },
        { name: "Maple Syrup", origin: "Natural Sweetener" },
      ],
      allergens: ["nuts"],
      rating: 4.4,
      reviews: 134,
      carbonFootprint: 4,
      nutritionalFacts: {
        calories: 320,
        protein: 6,
        carbs: 28,
        fat: 22,
      },
      pairings: ["Espresso", "Any Dessert"],
      customerComments: [
        {
          user: "VeganBaker",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704q",
          comment: "Can't believe this is vegan!",
          rating: 5,
        },
      ],
    },
    // Additional Sides
    {
      id: 20,
      name: "Seaweed Salad",
      description:
        "Fresh wakame seaweed salad with sesame oil, rice vinegar, and a hint of chili for a refreshing side.",
      price: { dineIn: 7, takeOut: 6 },
      image: <VeganGyozaIllustration />,
      category: "Sides",
      tags: ["vegan", "gluten-free", "nut-free"],
      ingredients: [
        { name: "Wakame Seaweed", origin: "Japanese Waters" },
        { name: "Sesame Oil", origin: "Toasted Sesame" },
        { name: "Rice Vinegar", origin: "Traditional" },
        { name: "Chili Flakes", origin: "Dried Red Peppers" },
      ],
      allergens: ["sesame"],
      rating: 4.2,
      reviews: 89,
      carbonFootprint: 1,
      nutritionalFacts: {
        calories: 80,
        protein: 2,
        carbs: 6,
        fat: 5,
      },
      pairings: ["Any Ramen", "Green Tea"],
      customerComments: [],
    },
    {
      id: 21,
      name: "Agedashi Tofu",
      description:
        "Silky tofu lightly fried and served in a savory dashi broth with grated daikon and green onions.",
      price: { dineIn: 8, takeOut: 7 },
      image: <VeganGyozaIllustration />,
      category: "Sides",
      tags: ["vegetarian", "gluten-free"],
      ingredients: [
        { name: "Silken Tofu", origin: "Local Tofu Maker" },
        { name: "Dashi Broth", origin: "House-Made" },
        { name: "Daikon Radish", origin: "Local Farm" },
        { name: "Green Onions", origin: "Our Garden" },
      ],
      allergens: ["soy"],
      rating: 4.5,
      reviews: 167,
      carbonFootprint: 2,
      nutritionalFacts: {
        calories: 160,
        protein: 12,
        carbs: 8,
        fat: 10,
      },
      pairings: ["Any Ramen", "Sake"],
      customerComments: [
        {
          user: "TofuLover",
          avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704r",
          comment: "Perfect texture and flavor!",
          rating: 5,
        },
      ],
    },
  ];
  const seasonalSpecials: SeasonalSpecial[] = [
    {
      date: "2025-07-01",
      name: "Summer Cold Ramen",
      description: "Chilled noodles, citrus broth, tempura flakes",
      available: true,
    },
    {
      date: "2025-10-01",
      name: "Pumpkin Spice Ramen",
      description: "Pumpkin broth, sage oil, roasted squash",
      available: false,
    },
  ];

  const filteredItems = menuItems.filter((item) => {
    if (selectedFilters.length === 0) return true;
    return selectedFilters.every((f) =>
      item.tags.includes(f as MenuItem["tags"][number])
    );
  });

  const toggleFilter = (id: string) => {
    setSelectedFilters((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const buildYourOwnOptions = {
    bases: [
      { name: "Shio (Salt)", price: 0, description: "Light, clear vegetable broth" },
      { name: "Shoyu (Soy)", price: 0, description: "Rich soy-based broth" },
      { name: "Miso", price: 1, description: "Savory fermented soybean broth" },
      { name: "Spicy Miso", price: 2, description: "Fiery miso with chili oil" },
      { name: "Curry", price: 2, description: "Aromatic Japanese curry broth" },
      { name: "Mushroom Tonkotsu", price: 3, description: "Creamy mushroom-based broth" },
    ],
    noodles: [
      { name: "Traditional Wheat", price: 0, description: "Classic ramen noodles" },
      { name: "Rice Noodles", price: 0, description: "Gluten-free alternative" },
      { name: "Shirataki", price: 1, description: "Low-carb konjac noodles" },
      { name: "Zucchini Noodles", price: 2, description: "Fresh spiralized zucchini" },
      { name: "Udon", price: 1, description: "Thick, chewy wheat noodles" },
    ],
    toppings: [
      { name: "Bamboo Shoots", price: 1, description: "Crisp, fresh bamboo" },
      { name: "Enoki Mushrooms", price: 1, description: "Delicate forest mushrooms" },
      { name: "Shiitake Mushrooms", price: 2, description: "Meaty, umami-rich" },
      { name: "Crispy Tofu", price: 2, description: "Golden-fried tofu cubes" },
      { name: "Soft-Boiled Egg", price: 2, description: "Perfectly cooked egg" },
      { name: "Nori (Seaweed)", price: 1, description: "Toasted seaweed sheets" },
      { name: "Corn", price: 1, description: "Sweet Hokkaido corn" },
      { name: "Bean Sprouts", price: 1, description: "Fresh, crunchy sprouts" },
      { name: "Bok Choy", price: 1, description: "Tender Chinese cabbage" },
      { name: "Scallions", price: 0, description: "Fresh green onions" },
      { name: "Bamboo Shoots", price: 1, description: "Crisp, fresh bamboo" },
    ],
    addOns: [
      { name: "Extra Noodles", price: 3, description: "Double portion of noodles" },
      { name: "Extra Broth", price: 2, description: "Additional broth on the side" },
      { name: "Truffle Oil", price: 4, description: "Luxurious black truffle oil" },
      { name: "Chili Oil", price: 1, description: "Spicy chili-infused oil" },
      { name: "Sesame Oil", price: 1, description: "Toasted sesame oil" },
      { name: "Miso Paste", price: 1, description: "Extra miso for richness" },
      { name: "Fresh Ginger", price: 1, description: "Grated fresh ginger" },
      { name: "Garlic Chips", price: 1, description: "Crispy fried garlic" },
    ],
  };

  const calculateCustomPrice = () => {
    const basePrice = 12; // Starting price
    const baseCost = buildYourOwnOptions.bases.find(b => b.name === customRamen.base)?.price || 0;
    const noodleCost = buildYourOwnOptions.noodles.find(n => n.name === customRamen.noodles)?.price || 0;
    const toppingsCost = customRamen.toppings.reduce((sum, topping) => {
      const toppingData = buildYourOwnOptions.toppings.find(t => t.name === topping);
      return sum + (toppingData?.price || 0);
    }, 0);
    const addOnsCost = customRamen.addOns.reduce((sum, addOn) => {
      const addOnData = buildYourOwnOptions.addOns.find(a => a.name === addOn);
      return sum + (addOnData?.price || 0);
    }, 0);
    
    return basePrice + baseCost + noodleCost + toppingsCost + addOnsCost;
  };

  const resetCustomRamen = () => {
    setCustomRamen({
      base: "",
      noodles: "",
      toppings: [],
      addOns: [],
    });
  };

  const addToCustomRamen = (category: 'toppings' | 'addOns', item: string) => {
    setCustomRamen(prev => ({
      ...prev,
      [category]: [...prev[category], item]
    }));
  };

  const removeFromCustomRamen = (category: 'toppings' | 'addOns', item: string) => {
    setCustomRamen(prev => ({
      ...prev,
      [category]: prev[category].filter(i => i !== item)
    }));
  };

  const handleBuildRamenSubmit = () => {
    // Here you would typically add the custom ramen to cart or order
    alert(`Custom Ramen Added! Total: $${calculateCustomPrice()}`);
    setShowBuildRamen(false);
    resetCustomRamen();
  };

  return (
    <>
      <Navbar className="!fixed" />
      <div className="min-h-screen bg-[var(--color-bianca-50)] pt-20">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[var(--color-shiso-500)] to-[var(--color-shiso-700)] text-white py-20 text-center"
        >
          <h1 className="text-6xl font-serif mb-2">Our Menu</h1>
          <p className="text-xl text-shiso-100">
            A celebration of plant-based Japanese cuisine
          </p>
        </motion.header>
        <div className="bg-[var(--color-bianca-100)] shadow-md sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 bg-[var(--color-shiso-100)] p-1 rounded-full mb-4 md:mb-0">
              <button
                onClick={() => setDiningMode("dineIn")}
                className={`px-4 py-2 rounded-full font-medium transition-all text-sm flex items-center space-x-2 ${
                  diningMode === "dineIn"
                    ? "bg-white text-[var(--color-shiso-800)] shadow"
                    : "text-[var(--color-shiso-700)] hover:bg-white/50"
                }`}
              >
                <Utensils size={16} />
                <span>Dine-In</span>
              </button>
              <button
                onClick={() => setDiningMode("takeOut")}
                className={`px-4 py-2 rounded-full font-medium transition-all text-sm flex items-center space-x-2 ${
                  diningMode === "takeOut"
                    ? "bg-white text-[var(--color-shiso-800)] shadow"
                    : "text-[var(--color-shiso-700)] hover:bg-white/50"
                }`}
              >
                <ShoppingBag size={16} />
                <span>Carry-Out</span>
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {filterOptions.map((f) => (
                <button
                  key={f.id}
                  onClick={() => toggleFilter(f.id)}
                  className={`px-3 py-1.5 rounded-full border-2 transition-all text-sm font-semibold flex items-center space-x-2 ${
                    selectedFilters.includes(f.id)
                      ? "bg-[var(--color-shiso-500)] text-white border-[var(--color-shiso-600)]"
                      : "bg-white text-[var(--color-shiso-800)] border-transparent hover:border-[var(--color-shiso-300)]"
                  }`}
                >
                  <span>{f.icon}</span>
                  <span>{f.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <main className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            {/* Build Your Own Ramen Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 bg-gradient-to-r from-[var(--color-shiso-50)] to-[var(--color-shiso-100)] rounded-2xl p-8 border-2 border-[var(--color-shiso-200)]"
            >
              <div className="text-center mb-6">
                <h2 className="text-3xl font-serif text-[var(--color-shiso-800)] mb-2">
                  🍜 Build Your Own Ramen
                </h2>
                <p className="text-[var(--color-shiso-700)]">
                  Create your perfect bowl with our customizable ramen builder
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => setShowBuildRamen(true)}
                  className="bg-[var(--color-shiso-600)] hover:bg-[var(--color-shiso-700)] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                  <span>🎨</span>
                  <span>Start Building</span>
                </button>
              </div>
            </motion.div>

            <AnimatePresence>
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                {filteredItems.map((item, i) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    diningMode={diningMode}
                    onClick={() => setSelectedDish(item)}
                    index={i}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
        <SeasonalSpecialsSection specials={seasonalSpecials} />
        <AnimatePresence>
          {selectedDish && (
            <DishDetailModal
              dish={selectedDish}
              diningMode={diningMode}
              onClose={() => setSelectedDish(null)}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showBuildRamen && (
            <BuildRamenModal
              customRamen={customRamen}
              setCustomRamen={setCustomRamen}
              buildYourOwnOptions={buildYourOwnOptions}
              calculateCustomPrice={calculateCustomPrice}
              addToCustomRamen={addToCustomRamen}
              removeFromCustomRamen={removeFromCustomRamen}
              handleBuildRamenSubmit={handleBuildRamenSubmit}
              onClose={() => setShowBuildRamen(false)}
              resetCustomRamen={resetCustomRamen}
            />
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}

const MenuItemCard = ({
  item,
  diningMode,
  onClick,
  index,
}: {
  item: MenuItem;
  diningMode: "dineIn" | "takeOut";
  onClick: () => void;
  index: number;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onClick={onClick}
      className="group relative cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-48">
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-bianca-100)] text-8xl group-hover:scale-110 transition-transform duration-500 p-4">
          {item.image}
        </div>
        <div className="absolute top-2 right-2 flex space-x-1">
          {item.category === "Ramen" && (
            <span className="text-xs bg-[var(--color-shiso-500)] text-white px-2 py-1 rounded-full font-semibold">
              🍜 Ramen
            </span>
          )}
          {item.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-black/50 text-white px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-shiso-900 mb-1">{item.name}</h3>
        <p className="text-sm text-marshland-700 h-16">{item.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-semibold text-shiso-700">
            ${item.price[diningMode]}
          </span>
          <div className="flex items-center text-sm text-marshland-600">
            <Star size={16} className="mr-1 text-amber-500" />
            {item.rating} ({item.reviews})
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white font-bold text-lg">View Details</span>
      </div>
    </motion.div>
  );
};

const DishDetailModal = ({
  dish,
  diningMode,
  onClose,
}: {
  dish: MenuItem;
  diningMode: "dineIn" | "takeOut";
  onClose: () => void;
}) => {
  const [activeTab, setActiveTab] = useState("info");
  const tabs = ["info", "nutrition", "reviews"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, scale: 0.9, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 50, scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-[var(--color-bianca-50)] rounded-2xl max-w-4xl w-full h-[90vh] overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full md:w-1/3 bg-[var(--color-bianca-100)] p-8 flex flex-col justify-between">
          <div>
            <div className="h-48 flex items-center justify-center mb-4">
              {dish.image}
            </div>
            <h2 className="text-4xl font-serif text-shiso-900 mb-2">
              {dish.name}
            </h2>
            <p className="text-marshland-700 mb-4">{dish.description}</p>
            <div className="flex items-center text-lg text-marshland-800">
              <Star size={20} className="mr-2 text-amber-500" />
              <span>
                {dish.rating} ({dish.reviews} reviews)
              </span>
            </div>
          </div>
          <div className="text-center">
            <span className="text-5xl font-bold text-shiso-700">
              ${dish.price[diningMode]}
            </span>
            <button className="w-full mt-4 bg-[var(--color-shiso-500)] text-white font-bold py-3 rounded-xl hover:bg-[var(--color-shiso-600)] transition-all">
              Add to Order
            </button>
          </div>
        </div>
        <div className="w-full md:w-2/3 p-8 overflow-y-auto">
          <div className="flex justify-between items-start">
            <div className="flex border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium transition-colors capitalize ${
                    activeTab === tab
                      ? "border-b-2 border-shiso-500 text-shiso-700"
                      : "text-gray-500 hover:text-shiso-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-200"
            >
              <X size={24} />
            </button>
          </div>
          <div className="pt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === "info" && <InfoTab dish={dish} />}
                {activeTab === "nutrition" && <NutritionTab dish={dish} />}
                {activeTab === "reviews" && <ReviewsTab dish={dish} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const InfoTab = ({ dish }: { dish: MenuItem }) => (
  <div>
    <h3 className="text-xl font-bold text-shiso-800 mb-4">Ingredients</h3>
    <div className="grid grid-cols-2 gap-4 mb-8">
      {dish.ingredients.map((ing) => (
        <div key={ing.name} className="bg-white p-3 rounded-lg shadow-sm">
          <p className="font-semibold text-shiso-900">{ing.name}</p>
          <p className="text-xs text-marshland-600">{ing.origin}</p>
        </div>
      ))}
    </div>
    <h3 className="text-xl font-bold text-shiso-800 mb-4">Suggested Pairings</h3>
    <div className="flex space-x-4">
      {dish.pairings.map((pairing) => (
        <div
          key={pairing}
          className="bg-[var(--color-shiso-100)] text-shiso-800 px-4 py-2 rounded-lg font-semibold"
        >
          {pairing}
        </div>
      ))}
    </div>
  </div>
);

const NutritionTab = ({ dish }: { dish: MenuItem }) => (
  <div>
    <h3 className="text-xl font-bold text-shiso-800 mb-4">
      Carbon Footprint
    </h3>
    <CarbonFootprintMeter level={dish.carbonFootprint} />
    <h3 className="text-xl font-bold text-shiso-800 mt-8 mb-4">
      Nutritional Facts
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      <NutritionalFact
        label="Calories"
        value={dish.nutritionalFacts.calories}
      />
      <NutritionalFact
        label="Protein"
        value={`${dish.nutritionalFacts.protein}g`}
      />
      <NutritionalFact
        label="Carbs"
        value={`${dish.nutritionalFacts.carbs}g`}
      />
      <NutritionalFact label="Fat" value={`${dish.nutritionalFacts.fat}g`} />
    </div>
  </div>
);

const ReviewsTab = ({ dish }: { dish: MenuItem }) => (
  <div>
    <h3 className="text-xl font-bold text-shiso-800 mb-4">Customer Comments</h3>
    <div className="space-y-6">
      {dish.customerComments.length > 0 ? (
        dish.customerComments.map((review) => (
          <CustomerReview key={review.user} review={review} />
        ))
      ) : (
        <p className="text-marshland-600">No comments yet!</p>
      )}
    </div>
  </div>
);
const CarbonFootprintMeter = ({ level }: { level: number }) => (
  <div className="flex items-center space-x-2">
    {[...Array(5)].map((_, i) => (
      <Leaf
        key={i}
        size={32}
        className={`transition-colors ${
          i < level ? "text-shiso-500" : "text-gray-300"
        }`}
      />
    ))}
    <span className="font-semibold text-shiso-700">
      {["Very Low", "Low", "Medium", "High", "Very High"][level - 1]}
    </span>
  </div>
);

const NutritionalFact = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <p className="text-2xl font-bold text-shiso-700">{value}</p>
    <p className="text-sm text-marshland-600">{label}</p>
  </div>
);

const CustomerReview = ({ review }: { review: CustomerComment }) => (
  <div className="flex space-x-4">
    <img
      src={review.avatar}
      alt={review.user}
      className="w-12 h-12 rounded-full"
    />
    <div>
      <div className="flex items-center space-x-2">
        <p className="font-bold text-shiso-900">{review.user}</p>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i < review.rating ? "text-amber-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-marshland-700">{review.comment}</p>
    </div>
  </div>
);

const SeasonalSpecialsSection = ({
  specials,
}: {
  specials: SeasonalSpecial[];
}) => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const calendarDays = useMemo(() => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const days: (Date | null)[] = [];
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(currentYear, currentMonth, i));
    }
    return days;
  }, [currentMonth, currentYear]);

  const getSpecialForDay = (day: Date) => {
    return specials.find((s) => {
      const specialDate = new Date(s.date);
      return specialDate.toDateString() === day.toDateString();
    });
  };

  return (
    <section className="bg-[var(--color-bianca-100)] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-serif text-center text-shiso-900 mb-12"
        >
          Seasonal Specials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-shiso-800">
                {today.toLocaleString("default", { month: "long" })}{" "}
                {currentYear}
              </h3>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-sm font-semibold text-marshland-600">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2 mt-2">
              {calendarDays.map((day, i) => (
                <CalendarDay
                  key={i}
                  day={day}
                  special={day ? getSpecialForDay(day) : undefined}
                  today={today}
                />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {specials
              .filter((s) => new Date(s.date) >= today)
              .map((special) => (
                <SeasonalSpecialCard
                  key={special.name}
                  special={special}
                  today={today}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SeasonalSpecialCard = ({
  special,
  today,
}: {
  special: SeasonalSpecial;
  today: Date;
}) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-2xl shadow-lg"
  >
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-2xl font-bold text-shiso-800">{special.name}</h3>
      {new Date(special.date).toDateString() === today.toDateString() && (
        <span className="bg-shiso-500 text-white px-3 py-1 text-xs font-bold rounded-full">
          TODAY
        </span>
      )}
    </div>
    <p className="text-marshland-700 mb-4">{special.description}</p>
    <div className="text-sm font-semibold text-shiso-700 flex items-center">
      <CalendarDays size={16} className="mr-2" />
      Available from{" "}
      {new Date(special.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
      })}
    </div>
  </motion.div>
);

const CalendarDay = ({
  day,
  special,
  today,
}: {
  day: Date | null;
  special: SeasonalSpecial | undefined;
  today: Date;
}) => {
  if (!day) {
    return <div className="w-8 h-8"></div>;
  }

  const isToday = day.toDateString() === today.toDateString();
  const hasSpecial = special && special.available;

  return (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium cursor-pointer transition-all ${
        isToday
          ? "bg-[var(--color-shiso-500)] text-white"
          : hasSpecial
          ? "bg-[var(--color-shiso-200)] text-[var(--color-shiso-800)]"
          : "text-gray-400 hover:text-gray-600"
      }`}
    >
      {day.getDate()}
    </div>
  );
};

const BuildRamenModal = ({
  customRamen,
  setCustomRamen,
  buildYourOwnOptions,
  calculateCustomPrice,
  addToCustomRamen,
  removeFromCustomRamen,
  handleBuildRamenSubmit,
  onClose,
  resetCustomRamen,
}: {
  customRamen: {
    base: string;
    noodles: string;
    toppings: string[];
    addOns: string[];
  };
  setCustomRamen: (ramen: any) => void;
  buildYourOwnOptions: any;
  calculateCustomPrice: () => number;
  addToCustomRamen: (category: 'toppings' | 'addOns', item: string) => void;
  removeFromCustomRamen: (category: 'toppings' | 'addOns', item: string) => void;
  handleBuildRamenSubmit: () => void;
  onClose: () => void;
  resetCustomRamen: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, scale: 0.9, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 50, scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-[var(--color-bianca-50)] rounded-2xl max-w-6xl w-full h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[var(--color-shiso-600)] text-white p-6 flex justify-between items-center">
          <h2 className="text-3xl font-serif">🍜 Build Your Own Ramen</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-[var(--color-shiso-200)] transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Customization Options */}
            <div className="space-y-6">
              {/* Base Selection */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-[var(--color-shiso-800)] mb-4">
                  Choose Your Base
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {buildYourOwnOptions.bases.map((base: any) => (
                    <button
                      key={base.name}
                      onClick={() => setCustomRamen({ ...customRamen, base: base.name })}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        customRamen.base === base.name
                          ? "border-[var(--color-shiso-500)] bg-[var(--color-shiso-50)]"
                          : "border-gray-200 hover:border-[var(--color-shiso-300)]"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-[var(--color-shiso-800)]">
                            {base.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">{base.description}</p>
                        </div>
                        <span className="text-[var(--color-shiso-600)] font-bold">
                          +${base.price}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Noodle Selection */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-[var(--color-shiso-800)] mb-4">
                  Choose Your Noodles
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {buildYourOwnOptions.noodles.map((noodle: any) => (
                    <button
                      key={noodle.name}
                      onClick={() => setCustomRamen({ ...customRamen, noodles: noodle.name })}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        customRamen.noodles === noodle.name
                          ? "border-[var(--color-shiso-500)] bg-[var(--color-shiso-50)]"
                          : "border-gray-200 hover:border-[var(--color-shiso-300)]"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-[var(--color-shiso-800)]">
                            {noodle.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">{noodle.description}</p>
                        </div>
                        <span className="text-[var(--color-shiso-600)] font-bold">
                          +${noodle.price}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Toppings Selection */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-[var(--color-shiso-800)] mb-4">
                  Add Toppings
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {buildYourOwnOptions.toppings.map((topping: any) => (
                    <button
                      key={topping.name}
                      onClick={() => addToCustomRamen('toppings', topping.name)}
                      className="p-4 rounded-lg border-2 border-gray-200 hover:border-[var(--color-shiso-300)] text-left transition-all"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-[var(--color-shiso-800)]">
                            {topping.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">{topping.description}</p>
                        </div>
                        <span className="text-[var(--color-shiso-600)] font-bold">
                          +${topping.price}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons Selection */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-[var(--color-shiso-800)] mb-4">
                  Add Extras
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {buildYourOwnOptions.addOns.map((addOn: any) => (
                    <button
                      key={addOn.name}
                      onClick={() => addToCustomRamen('addOns', addOn.name)}
                      className="p-4 rounded-lg border-2 border-gray-200 hover:border-[var(--color-shiso-300)] text-left transition-all"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-[var(--color-shiso-800)]">
                            {addOn.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">{addOn.description}</p>
                        </div>
                        <span className="text-[var(--color-shiso-600)] font-bold">
                          +${addOn.price}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Your Ramen Summary */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg sticky top-6">
                <h3 className="text-2xl font-bold text-[var(--color-shiso-800)] mb-4">
                  Your Custom Ramen
                </h3>
                
                {/* Base */}
                {customRamen.base && (
                  <div className="mb-4 p-3 bg-[var(--color-shiso-50)] rounded-lg">
                    <h4 className="font-semibold text-[var(--color-shiso-800)]">Base</h4>
                    <p className="text-sm text-gray-600">{customRamen.base}</p>
                  </div>
                )}

                {/* Noodles */}
                {customRamen.noodles && (
                  <div className="mb-4 p-3 bg-[var(--color-shiso-50)] rounded-lg">
                    <h4 className="font-semibold text-[var(--color-shiso-800)]">Noodles</h4>
                    <p className="text-sm text-gray-600">{customRamen.noodles}</p>
                  </div>
                )}

                {/* Toppings */}
                {customRamen.toppings.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-[var(--color-shiso-800)] mb-2">Toppings</h4>
                    <div className="space-y-2">
                      {customRamen.toppings.map((topping) => (
                        <div key={topping} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <span className="text-sm">{topping}</span>
                          <button
                            onClick={() => removeFromCustomRamen('toppings', topping)}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Add-ons */}
                {customRamen.addOns.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-[var(--color-shiso-800)] mb-2">Add-ons</h4>
                    <div className="space-y-2">
                      {customRamen.addOns.map((addOn) => (
                        <div key={addOn} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <span className="text-sm">{addOn}</span>
                          <button
                            onClick={() => removeFromCustomRamen('addOns', addOn)}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Total Price */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold text-[var(--color-shiso-800)]">Total</span>
                    <span className="text-3xl font-bold text-[var(--color-shiso-600)]">
                      ${calculateCustomPrice()}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={handleBuildRamenSubmit}
                      disabled={!customRamen.base || !customRamen.noodles}
                      className="w-full bg-[var(--color-shiso-600)] hover:bg-[var(--color-shiso-700)] disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      Add to Order
                    </button>
                    <button
                      onClick={resetCustomRamen}
                      className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg font-medium transition-colors"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
