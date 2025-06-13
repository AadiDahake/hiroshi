"use client";

import { useState, useEffect } from "react";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: { "dine-in": number; "carry-out": number };
  image: string;
  category: string;
  tags: string[];
  ingredients: string[];
  origin: string[];
  carbonFootprint: number;
  nutrition: { calories: number; protein: number; carbs: number; fat: number };
  allergens: string[];
  rating: number;
  reviews: number;
}

export default function MenuPage() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [diningMode, setDiningMode] = useState<"dine-in" | "carry-out">(
    "dine-in"
  );
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const filterOptions = [
    { id: "vegan", label: "Vegan", icon: "🌱" },
    { id: "vegetarian", label: "Vegetarian", icon: "🥬" },
    { id: "gluten-free", label: "Gluten-Free", icon: "🌾" },
    { id: "raw", label: "Raw", icon: "🥒" },
    { id: "keto", label: "Keto", icon: "🥑" },
    { id: "nut-free", label: "Nut-Free", icon: "🚫🥜" },
  ];

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Rainbow Buddha Bowl",
      description: "Quinoa, roasted vegetables, avocado, and tahini dressing",
      price: { "dine-in": 16, "carry-out": 14 },
      image: "🥗",
      category: "Bowls",
      tags: ["vegan", "gluten-free"],
      ingredients: [
        "Quinoa",
        "Roasted Sweet Potato",
        "Kale",
        "Avocado",
        "Tahini",
      ],
      origin: ["Green Valley Organic", "Sunrise Farm"],
      carbonFootprint: 2.1,
      nutrition: { calories: 420, protein: 12, carbs: 45, fat: 18 },
      allergens: ["sesame"],
      rating: 4.8,
      reviews: 156,
    },
    {
      id: 2,
      name: "Wild Mushroom Risotto",
      description: "Creamy arborio rice with foraged mushrooms and truffle oil",
      price: { "dine-in": 22, "carry-out": 20 },
      image: "🍄",
      category: "Mains",
      tags: ["vegetarian", "gluten-free"],
      ingredients: [
        "Arborio Rice",
        "Wild Mushrooms",
        "Truffle Oil",
        "Nutritional Yeast",
      ],
      origin: ["Heritage Grain Co.", "Sunrise Mushroom Farm"],
      carbonFootprint: 3.2,
      nutrition: { calories: 380, protein: 8, carbs: 52, fat: 14 },
      allergens: [],
      rating: 4.9,
      reviews: 203,
    },
    {
      id: 3,
      name: "Raw Zucchini Noodles",
      description: "Spiralized zucchini with cashew cream and fresh herbs",
      price: { "dine-in": 18, "carry-out": 16 },
      image: "🥒",
      category: "Raw",
      tags: ["vegan", "raw", "keto", "gluten-free"],
      ingredients: [
        "Zucchini",
        "Cashew Cream",
        "Fresh Basil",
        "Cherry Tomatoes",
      ],
      origin: ["Green Valley Organic"],
      carbonFootprint: 1.5,
      nutrition: { calories: 280, protein: 8, carbs: 12, fat: 22 },
      allergens: ["tree nuts"],
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 4,
      name: "Jackfruit Tacos",
      description: "Pulled jackfruit with spicy slaw and avocado crema",
      price: { "dine-in": 15, "carry-out": 13 },
      image: "🌮",
      category: "Mexican",
      tags: ["vegan", "nut-free"],
      ingredients: [
        "Young Jackfruit",
        "Corn Tortillas",
        "Purple Cabbage",
        "Avocado",
      ],
      origin: ["Local Tortilleria", "Green Valley Organic"],
      carbonFootprint: 2.8,
      nutrition: { calories: 340, protein: 6, carbs: 38, fat: 16 },
      allergens: [],
      rating: 4.7,
      reviews: 134,
    },
    {
      id: 5,
      name: "Keto Cauliflower Steak",
      description: "Roasted cauliflower with herb butter and microgreens",
      price: { "dine-in": 19, "carry-out": 17 },
      image: "🥦",
      category: "Keto",
      tags: ["keto", "vegetarian", "gluten-free", "nut-free"],
      ingredients: ["Cauliflower", "Herb Butter", "Microgreens", "Lemon"],
      origin: ["Green Valley Organic", "Rooftop Garden"],
      carbonFootprint: 1.8,
      nutrition: { calories: 220, protein: 6, carbs: 8, fat: 18 },
      allergens: ["dairy"],
      rating: 4.5,
      reviews: 67,
    },
    {
      id: 6,
      name: "Chocolate Avocado Mousse",
      description: "Rich and creamy dessert made with ripe avocados and cacao",
      price: { "dine-in": 12, "carry-out": 10 },
      image: "🍫",
      category: "Desserts",
      tags: ["vegan", "raw", "keto", "nut-free"],
      ingredients: ["Avocado", "Raw Cacao", "Maple Syrup", "Vanilla"],
      origin: ["Local Cacao Co.", "Green Valley Organic"],
      carbonFootprint: 1.2,
      nutrition: { calories: 180, protein: 3, carbs: 15, fat: 12 },
      allergens: [],
      rating: 4.8,
      reviews: 198,
    },
  ];

  const seasonalSpecials = [
    {
      date: "2024-02-01",
      name: "Winter Root Vegetable Stew",
      description: "Hearty stew with parsnips, carrots, and herbs",
      available: true,
    },
    {
      date: "2024-03-15",
      name: "Spring Pea Risotto",
      description: "Fresh pea risotto with mint and lemon",
      available: false,
    },
    {
      date: "2024-04-01",
      name: "Asparagus & Morel Pasta",
      description: "Seasonal pasta with foraged morels",
      available: false,
    },
  ];

  const filteredItems = menuItems.filter((item) => {
    if (selectedFilters.length === 0) return true;
    return selectedFilters.every((filter) => item.tags.includes(filter));
  });

  const toggleFilter = (filterId: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((f) => f !== filterId)
        : [...prev, filterId]
    );
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-4">Our Menu</h1>
          <p className="text-xl md:text-2xl font-light">
            Fresh, seasonal, and sustainably sourced
          </p>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="bg-white shadow-lg sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-6 py-6">
          {/* Dining Mode Toggle */}
          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 rounded-full p-1 flex">
              <button
                onClick={() => setDiningMode("dine-in")}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  diningMode === "dine-in"
                    ? "bg-green-600 text-white shadow-md"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                🍽️ Dine-In
              </button>
              <button
                onClick={() => setDiningMode("carry-out")}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  diningMode === "carry-out"
                    ? "bg-green-600 text-white shadow-md"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                🥡 Carry-Out
              </button>
            </div>
          </div>

          {/* Filter Options */}
          <div className="flex flex-wrap justify-center gap-3">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                  selectedFilters.includes(filter.id)
                    ? "bg-green-600 text-white border-green-600 scale-105"
                    : "bg-white text-gray-700 border-gray-300 hover:border-green-400"
                }`}
              >
                <span className="mr-2">{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedDish(item)}
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-6xl">
                    {item.image}
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-semibold text-green-600">
                    ${item.price[diningMode]}
                  </div>
                  <div className="absolute bottom-4 left-4 flex space-x-1">
                    {item.tags.slice(0, 2).map((tag) => {
                      const filterOption = filterOptions.find(
                        (f) => f.id === tag
                      );
                      return (
                        <span key={tag} className="text-lg">
                          {filterOption?.icon}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">⭐</span>
                      <span className="text-sm text-gray-600">
                        {item.rating} ({item.reviews})
                      </span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      {item.carbonFootprint}kg CO₂
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seasonal Specials */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Seasonal Specials Calendar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seasonalSpecials.map((special, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 transition-all duration-300 ${
                  special.available
                    ? "bg-green-100 border-2 border-green-300"
                    : "bg-gray-100 border-2 border-gray-300"
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-3">
                    {special.available ? "🌟" : "📅"}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    {new Date(special.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {special.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{special.description}</p>
                  {special.available && (
                    <div className="mt-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Available Now
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all z-10"
              >
                ✕
              </button>

              <div className="h-64 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-8xl">
                {selectedDish.image}
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {selectedDish.name}
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                {selectedDish.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Ingredients
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {selectedDish.ingredients.map(
                      (ingredient: string, index: number) => (
                        <li key={index}>• {ingredient}</li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Sourced From
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {selectedDish.origin.map(
                      (source: string, index: number) => (
                        <li key={index}>🚜 {source}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {selectedDish.nutrition.calories}
                  </div>
                  <div className="text-sm text-gray-600">Calories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {selectedDish.nutrition.protein}g
                  </div>
                  <div className="text-sm text-gray-600">Protein</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {selectedDish.nutrition.carbs}g
                  </div>
                  <div className="text-sm text-gray-600">Carbs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {selectedDish.nutrition.fat}g
                  </div>
                  <div className="text-sm text-gray-600">Fat</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-green-600">
                  ${selectedDish.price[diningMode]}
                </div>
                <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reservations Section */}
      <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Make a Reservation
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Book Your Table
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Party Size
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((size) => (
                      <option key={size} value={size}>
                        {size} {size === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    "5:00 PM",
                    "5:30 PM",
                    "6:00 PM",
                    "6:30 PM",
                    "7:00 PM",
                    "7:30 PM",
                    "8:00 PM",
                    "8:30 PM",
                    "9:00 PM",
                  ].map((time) => (
                    <button
                      key={time}
                      className="px-3 py-2 text-sm rounded-lg border border-gray-300 hover:border-green-400 hover:bg-green-50 transition-colors"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows={3}
                  placeholder="Any dietary restrictions, allergies, or special occasions?"
                ></textarea>
              </div>

              <button className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Confirm Reservation
              </button>
            </div>

            {/* Ordering Options */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  🥡 Carry-Out Orders
                </h3>
                <p className="text-gray-600 mb-4">
                  Order online for quick pickup
                </p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Order for Pickup
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  🚚 Delivery
                </h3>
                <p className="text-gray-600 mb-4">
                  Fresh meals delivered to your door
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div>• Downtown: $2.99 delivery fee</div>
                  <div>• University District: $3.99 delivery fee</div>
                  <div>• Riverside: $4.99 delivery fee</div>
                </div>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Order for Delivery
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  🎁 Gift Cards
                </h3>
                <p className="text-gray-600 mb-4">
                  Perfect for plant-based food lovers
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <button className="border border-gray-300 py-2 rounded-lg hover:border-green-400 transition-colors">
                    $25
                  </button>
                  <button className="border border-gray-300 py-2 rounded-lg hover:border-green-400 transition-colors">
                    $50
                  </button>
                  <button className="border border-gray-300 py-2 rounded-lg hover:border-green-400 transition-colors">
                    $75
                  </button>
                  <button className="border border-gray-300 py-2 rounded-lg hover:border-green-400 transition-colors">
                    $100
                  </button>
                </div>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Purchase Gift Card
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
