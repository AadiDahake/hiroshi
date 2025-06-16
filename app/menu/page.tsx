"use client";

import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: { dineIn: number; takeOut: number };
  image: string;
  category: string;
  tags: string[];
  ingredients: string[];
  allergens: string[];
  rating: number;
  reviews: number;
};

export default function HiroshiRamenMenu() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [diningMode, setDiningMode] = useState<"dineIn" | "takeOut">("dineIn");
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const filterOptions = [
    { id: "spicy", label: "Spicy", icon: "🌶️" },
    { id: "vegetarian", label: "Vegetarian", icon: "🥬" },
    { id: "gluten-free", label: "Gluten-Free", icon: "🌾" },
  ];

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Tonkotsu Ramen",
      description: "Rich pork broth, chashu, wood ear mushrooms, scallions",
      price: { dineIn: 14, takeOut: 12 },
      image: "🍜",
      category: "Ramen",
      tags: ["gluten-free"],
      ingredients: ["Pork Bone Broth", "Chashu", "Noodles", "Scallions", "Egg"],
      allergens: ["egg", "soy"],
      rating: 4.9,
      reviews: 342,
    },
    {
      id: 2,
      name: "Spicy Miso Ramen",
      description: "Miso broth with chili oil, pork belly, bean sprouts",
      price: { dineIn: 15, takeOut: 13 },
      image: "🌶️",
      category: "Ramen",
      tags: ["spicy"],
      ingredients: ["Miso", "Chili Oil", "Pork Belly", "Bean Sprouts", "Noodles"],
      allergens: ["soy", "wheat"],
      rating: 4.7,
      reviews: 210,
    },
    {
      id: 3,
      name: "Shoyu Ramen",
      description: "Clear soy-and-bone broth, chicken chashu, bamboo shoots",
      price: { dineIn: 13, takeOut: 11 },
      image: "🍜",
      category: "Ramen",
      tags: [],
      ingredients: ["Chicken Broth", "Soy Sauce", "Noodles", "Bamboo Shoots", "Egg"],
      allergens: ["egg", "soy"],
      rating: 4.8,
      reviews: 278,
    },
    {
      id: 4,
      name: "Vegetarian Ramen",
      description: "Umami veggie broth, tofu, mushrooms, spinach",
      price: { dineIn: 12, takeOut: 10 },
      image: "🥬",
      category: "Ramen",
      tags: ["vegetarian", "gluten-free"],
      ingredients: ["Vegetable Broth", "Tofu", "Mushrooms", "Spinach", "Noodles"],
      allergens: ["soy"],
      rating: 4.5,
      reviews: 180,
    },
    {
      id: 5,
      name: "Gyoza (6 pcs)",
      description: "Pan-fried pork dumplings with soy dipping sauce",
      price: { dineIn: 8, takeOut: 7 },
      image: "🥟",
      category: "Sides",
      tags: [],
      ingredients: ["Pork", "Cabbage", "Garlic", "Gyoza Wrapper"],
      allergens: ["wheat", "soy"],
      rating: 4.6,
      reviews: 145,
    },
    {
      id: 6,
      name: "Karaage",
      description: "Crispy Japanese fried chicken with lemon",
      price: { dineIn: 7, takeOut: 6 },
      image: "🍗",
      category: "Sides",
      tags: [],
      ingredients: ["Chicken", "Soy", "Garlic", "Ginger"],
      allergens: ["soy"],
      rating: 4.7,
      reviews: 165,
    },
    {
      id: 7,
      name: "Mochi Ice Cream",
      description: "Assorted flavors of frozen mochi",
      price: { dineIn: 5, takeOut: 5 },
      image: "🍡",
      category: "Desserts",
      tags: [],
      ingredients: ["Rice", "Ice Cream"],
      allergens: ["dairy"],
      rating: 4.8,
      reviews: 98,
    },
    {
      id: 8,
      name: "Ramune Soda",
      description: "Japanese soda in classic glass bottle",
      price: { dineIn: 3, takeOut: 3 },
      image: "🥤",
      category: "Drinks",
      tags: [],
      ingredients: ["Carbonated Water", "Sugar", "Flavor"],
      allergens: [],
      rating: 4.4,
      reviews: 75,
    },
  ];

  const seasonalSpecials = [
    { date: "2025-07-01", name: "Summer Cold Ramen", description: "Chilled noodles, citrus broth, tempura flakes", available: true },
    { date: "2025-10-01", name: "Pumpkin Spice Ramen", description: "Pumpkin broth, sage oil, roasted squash", available: false },
  ];

  const filteredItems = menuItems.filter(item => {
    if (selectedFilters.length === 0) return true;
    return selectedFilters.every(f => item.tags.includes(f));
  });

  const toggleFilter = (id: string) => {
    setSelectedFilters(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  useEffect(() => { setIsLoaded(true); }, []);

  return (
    <>
      <Navbar className="!fixed" />
      <div className="min-h-screen bg-[var(--color-bianca-100)] pt-16">
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-light mb-4">Hiroshi Ramen</h1>
            <p className="text-xl font-light">Handcrafted bowls, authentic flavors</p>
          </div>
        </div>
        <div className="bg-white shadow sticky top-16 z-40">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
            <div className="space-x-2 mb-4 md:mb-0">
              <button onClick={() => setDiningMode("dineIn")} className={`px-4 py-2 rounded-full font-medium transition ${diningMode === "dineIn" ? "bg-yellow-600 text-white" : "text-gray-600 hover:text-yellow-600"}`}>🍜 Dine-In</button>
              <button onClick={() => setDiningMode("takeOut")} className={`px-4 py-2 rounded-full font-medium transition ${diningMode === "takeOut" ? "bg-yellow-600 text-white" : "text-gray-600 hover:text-yellow-600"}`}>🥡 Take-Out</button>
            </div>
            <div className="flex space-x-3">
              {filterOptions.map(f => (
                <button key={f.id} onClick={() => toggleFilter(f.id)} className={`px-3 py-1 rounded-full border transition ${selectedFilters.includes(f.id) ? "bg-yellow-600 text-white border-yellow-600" : "bg-white text-gray-700 border-gray-300 hover:border-yellow-400"}`}> <span className="mr-1">{f.icon}</span>{f.label}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="py-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, i) => (
                <div key={item.id} onClick={() => setSelectedDish(item)} className={`bg-white rounded-xl shadow hover:shadow-xl transition transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="relative h-40 bg-yellow-50 flex items-center justify-center text-6xl">{item.image}</div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                    <p className="text-gray-600 mb-3 text-sm">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">${item.price[diningMode]}</span>
                      <div className="flex items-center text-sm text-gray-600"><span className="mr-1">⭐</span>{item.rating} ({item.reviews})</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Seasonal Specials */}
        <div className="bg-white py-12">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Seasonal Specials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {seasonalSpecials.map((s, idx) => (
                <div key={idx} className={`p-6 rounded-lg transition ${s.available ? "bg-yellow-50 border-2 border-yellow-300" : "bg-gray-100 border-gray-300"}`}> 
                  <div className="text-center mb-2">{new Date(s.date).toLocaleDateString("en-US",{ month: 'long', day: 'numeric' })}</div>
                  <h3 className="font-semibold text-lg mb-1">{s.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{s.description}</p>
                  {s.available && <span className="inline-block bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">Available Now</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Dish Modal */}
        {selectedDish && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-xl w-full overflow-auto">
              <button onClick={() => setSelectedDish(null)} className="absolute top-4 right-4 text-gray-700">✕</button>
              <div className="h-48 bg-yellow-50 flex items-center justify-center text-8xl">{selectedDish.image}</div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{selectedDish.name}</h2>
                <p className="text-gray-600 mb-4">{selectedDish.description}</p>
                <h3 className="font-semibold mb-1">Ingredients</h3>
                <ul className="list-disc list-inside text-sm mb-4">{selectedDish.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}</ul>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold">${selectedDish.price[diningMode]}</span>
                  <button className="bg-yellow-600 text-white px-6 py-2 rounded-full font-medium hover:bg-yellow-700 transition">Add to Order</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
