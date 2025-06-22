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

  return (
    <>
      <Navbar className="!fixed" currentPage="Menu" />
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
  if (!day) return <div />;

  const isToday = day.toDateString() === today.toDateString();
  const isPast = day < today && !isToday;

  return (
    <div
      className={`relative p-2 rounded-full transition-colors ${
        isToday ? "bg-shiso-500 text-white" : ""
      } ${isPast ? "text-gray-300" : "text-marshland-800"}`}
    >
      {day.getDate()}
      {special && (
        <div
          className="absolute -top-1 -right-1 w-3 h-3 bg-aka-500 rounded-full border-2 border-white"
          title={special.name}
        />
      )}
    </div>
  );
};
