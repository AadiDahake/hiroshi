'use client';

import { useState, useEffect } from 'react';

export default function KitchenPage() {
    const [selectedHotspot, setSelectedHotspot] = useState<number | null>(null);
    const [currentChef, setCurrentChef] = useState(0);
    const [currentProcess, setCurrentProcess] = useState(0);

    const hotspots = [
        {
            id: 1,
            x: 20,
            y: 30,
            title: 'Prep Station',
            description: 'Where all our fresh vegetables are cleaned and prepared daily',
            details:
                'Our prep station uses filtered water and organic cleaning solutions. All vegetable scraps are collected for composting.',
        },
        {
            id: 2,
            x: 60,
            y: 25,
            title: 'Cooking Line',
            description: 'Energy-efficient induction cooktops and steam ovens',
            details:
                'Our cooking equipment is 40% more energy efficient than traditional gas stoves, reducing our carbon footprint.',
        },
        {
            id: 3,
            x: 80,
            y: 60,
            title: 'Herb Garden',
            description: 'Fresh herbs grown right in our kitchen',
            details:
                'Our indoor hydroponic system provides fresh herbs year-round using 90% less water than traditional farming.',
        },
        {
            id: 4,
            x: 40,
            y: 70,
            title: 'Fermentation Station',
            description: 'Where we create our signature fermented sauces and pickles',
            details:
                'Traditional fermentation techniques enhance flavors while preserving nutrients and reducing food waste.',
        },
    ];

    const chefs = [
        {
            name: 'Sarah Chen',
            role: 'Head Chef & Co-Founder',
            specialty: 'Asian-Fusion Plant-Based Cuisine',
            experience: '15 years',
            image: '👩‍🍳',
            quote: 'Cooking is an act of love - for our guests, our community, and our planet.',
            philosophy:
                'I believe that plant-based cuisine should celebrate the natural flavors of ingredients, not mask them. Every dish tells a story of the soil it came from.',
            signature: 'Rainbow Buddha Bowl with Miso-Tahini Dressing',
        },
        {
            name: 'Marcus Rodriguez',
            role: 'Sustainability Chef',
            specialty: 'Zero-Waste Cooking',
            experience: '12 years',
            image: '👨‍🍳',
            quote: 'There is no waste in nature, and there should be none in our kitchen.',
            philosophy:
                'Every part of every ingredient has potential. Vegetable peels become chips, stems become broths, and scraps become compost for next season.',
            signature: 'Whole Vegetable Utilization Tasting Menu',
        },
        {
            name: 'Elena Vasquez',
            role: 'Pastry Chef',
            specialty: 'Plant-Based Desserts',
            experience: '10 years',
            image: '👩‍🍳',
            quote: "Dessert should be a celebration that doesn't compromise our values.",
            philosophy:
                'Plant-based desserts can be just as indulgent and satisfying as traditional ones. I use natural sweeteners and innovative techniques to create magic.',
            signature: 'Chocolate Avocado Mousse with Coconut Whip',
        },
    ];

    const cookingProcesses = [
        {
            title: 'Fresh Ingredient Selection',
            description: 'We select the finest seasonal ingredients from our partner farms',
            icon: '🥬',
            details:
                'Every morning, our team carefully inspects and selects ingredients based on freshness, quality, and seasonal availability.',
        },
        {
            title: 'Gentle Preparation',
            description: 'Minimal processing to preserve nutrients and natural flavors',
            icon: '🔪',
            details:
                'We use techniques that maintain the integrity of ingredients - gentle washing, precise cutting, and careful handling.',
        },
        {
            title: 'Mindful Cooking',
            description: 'Cooking methods that enhance rather than diminish nutritional value',
            icon: '🔥',
            details:
                'Steam, sauté, and roast at optimal temperatures to preserve vitamins and create complex flavors without added oils.',
        },
        {
            title: 'Artful Plating',
            description: 'Beautiful presentation that honors the natural beauty of plants',
            icon: '🎨',
            details:
                'Each plate is composed with attention to color, texture, and visual appeal, making vegetables the star of the show.',
        },
        {
            title: 'Composting Cycle',
            description: 'All scraps return to the earth to nourish future harvests',
            icon: '♻️',
            details:
                'Our comprehensive composting program ensures that nothing goes to waste - even coffee grounds become soil amendments.',
        },
    ];

    useEffect(() => {
        const chefInterval = setInterval(() => {
            setCurrentChef((prev) => (prev + 1) % chefs.length);
        }, 6000);

        const processInterval = setInterval(() => {
            setCurrentProcess((prev) => (prev + 1) % cookingProcesses.length);
        }, 4000);

        return () => {
            clearInterval(chefInterval);
            clearInterval(processInterval);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-16">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-light mb-6">
                        Our Kitchen & Philosophy
                    </h1>
                    <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
                        Where culinary artistry meets environmental responsibility
                    </p>
                </div>
            </div>

            {/* Virtual Kitchen Tour */}
            <div className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
                        360° Virtual Kitchen Tour
                    </h2>

                    <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="aspect-video relative">
                            {/* Kitchen background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-8xl mb-4">🏪</div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                        Interactive Kitchen View
                                    </h3>
                                    <p className="text-gray-600">
                                        Click on the hotspots to explore different areas
                                    </p>
                                </div>
                            </div>

                            {/* Hotspots */}
                            {hotspots.map((hotspot) => (
                                <button
                                    key={hotspot.id}
                                    className="absolute w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg hover:scale-125 transition-all duration-300 animate-pulse"
                                    style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                                    onClick={() => setSelectedHotspot(hotspot.id)}
                                >
                                    <span className="sr-only">{hotspot.title}</span>
                                </button>
                            ))}
                        </div>

                        {/* Hotspot details */}
                        {selectedHotspot && (
                            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 p-6 backdrop-blur-sm">
                                {(() => {
                                    const hotspot = hotspots.find((h) => h.id === selectedHotspot);
                                    return hotspot ? (
                                        <div>
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-gray-800">
                                                    {hotspot.title}
                                                </h3>
                                                <button
                                                    onClick={() => setSelectedHotspot(null)}
                                                    className="text-gray-500 hover:text-gray-700"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                            <p className="text-gray-600 mb-2">
                                                {hotspot.description}
                                            </p>
                                            <p className="text-sm text-gray-700">
                                                {hotspot.details}
                                            </p>
                                        </div>
                                    ) : null;
                                })()}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Meet the Chefs */}
            <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
                        Meet Our Chefs
                    </h2>

                    <div className="relative">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/3 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center p-8">
                                    <div className="text-center">
                                        <div className="text-8xl mb-4">
                                            {chefs[currentChef].image}
                                        </div>
                                        <div className="text-2xl font-bold text-gray-800">
                                            {chefs[currentChef].name}
                                        </div>
                                        <div className="text-green-600 font-medium">
                                            {chefs[currentChef].role}
                                        </div>
                                    </div>
                                </div>

                                <div className="md:w-2/3 p-8">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                            {chefs[currentChef].name}
                                        </h3>
                                        <p className="text-green-600 font-medium mb-4">
                                            {chefs[currentChef].specialty}
                                        </p>
                                        <p className="text-gray-600 mb-4">
                                            Experience: {chefs[currentChef].experience}
                                        </p>
                                    </div>

                                    <blockquote className="text-lg italic text-gray-700 mb-6 border-l-4 border-green-600 pl-4">
                                        "{chefs[currentChef].quote}"
                                    </blockquote>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-800 mb-2">
                                            Philosophy
                                        </h4>
                                        <p className="text-gray-600">
                                            {chefs[currentChef].philosophy}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-2">
                                            Signature Dish
                                        </h4>
                                        <p className="text-green-600 font-medium">
                                            {chefs[currentChef].signature}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chef navigation */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {chefs.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentChef(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentChef
                                            ? 'bg-green-600 scale-125'
                                            : 'bg-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Cooking Process */}
            <div className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
                        Our Cooking Process
                    </h2>

                    <div className="relative">
                        {/* Process steps */}
                        <div className="flex items-center justify-between mb-12 overflow-x-auto">
                            {cookingProcesses.map((process, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center relative min-w-32"
                                >
                                    <div
                                        className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl transition-all duration-500 ${
                                            index === currentProcess
                                                ? 'bg-green-600 text-white scale-125 shadow-lg'
                                                : 'bg-gray-100 text-gray-600 shadow-md'
                                        }`}
                                    >
                                        {process.icon}
                                    </div>
                                    <div className="text-center mt-4 max-w-24">
                                        <h3 className="font-semibold text-gray-800 text-xs">
                                            {process.title}
                                        </h3>
                                    </div>

                                    {index < cookingProcesses.length - 1 && (
                                        <div className="absolute top-10 left-20 w-24 h-1 bg-gray-200">
                                            <div
                                                className="h-full bg-green-600 transition-all duration-500"
                                                style={{
                                                    width: index < currentProcess ? '100%' : '0%',
                                                }}
                                            ></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Process details */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                            <div className="text-center">
                                <div className="text-6xl mb-4">
                                    {cookingProcesses[currentProcess].icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    {cookingProcesses[currentProcess].title}
                                </h3>
                                <p className="text-lg text-gray-600 mb-4">
                                    {cookingProcesses[currentProcess].description}
                                </p>
                                <p className="text-gray-700 max-w-2xl mx-auto">
                                    {cookingProcesses[currentProcess].details}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Philosophy Statement */}
            <div className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-8">Our Culinary Philosophy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="text-4xl mb-4">🌱</div>
                            <h3 className="text-xl font-semibold mb-3">Fresh & Local</h3>
                            <p className="text-green-100">
                                We source ingredients at peak freshness from local farms, ensuring
                                maximum nutrition and flavor.
                            </p>
                        </div>
                        <div>
                            <div className="text-4xl mb-4">🎨</div>
                            <h3 className="text-xl font-semibold mb-3">Artful Preparation</h3>
                            <p className="text-green-100">
                                Every dish is crafted with attention to technique, presentation, and
                                the natural beauty of plants.
                            </p>
                        </div>
                        <div>
                            <div className="text-4xl mb-4">♻️</div>
                            <h3 className="text-xl font-semibold mb-3">Zero Waste</h3>
                            <p className="text-green-100">
                                We honor every ingredient by using it completely, creating a
                                closed-loop system with our farms.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
