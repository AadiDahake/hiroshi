'use client';

import { useState, useEffect } from 'react';

export default function SustainabilityPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [counters, setCounters] = useState({
        co2Offset: 0,
        mealsSaved: 0,
        compostGenerated: 0,
    });

    const journeySteps = [
        {
            title: 'Local Farms',
            description: 'We source 98% of our ingredients from farms within 50 miles',
            icon: '🚜',
            details:
                'Our partnerships with local farms reduce transportation emissions and support the local economy.',
        },
        {
            title: 'Our Kitchen',
            description: 'Zero-waste preparation with composting and creative use of scraps',
            icon: '👨‍🍳',
            details:
                'Every part of our ingredients is used - vegetable scraps become broths, peels become chips.',
        },
        {
            title: 'Your Plate',
            description: 'Delicious, nutritious meals that nourish you and the planet',
            icon: '🍽️',
            details:
                'Plant-based meals have 75% lower carbon footprint than traditional meat dishes.',
        },
        {
            title: 'Compost Cycle',
            description: 'Food scraps return to our partner farms as nutrient-rich compost',
            icon: '♻️',
            details: "Completing the circle - our waste becomes soil for next season's harvest.",
        },
    ];

    const partners = [
        {
            name: 'Green Valley Organic Farm',
            owner: 'Maria Santos',
            specialty: 'Leafy Greens & Herbs',
            distance: '15 miles',
            partnership: '5 years',
            image: '👩‍🌾',
            story: 'Maria has been growing organic vegetables for over 20 years. Her farm supplies 40% of our fresh greens.',
        },
        {
            name: 'Sunrise Mushroom Farm',
            owner: 'David Kim',
            specialty: 'Gourmet Mushrooms',
            distance: '22 miles',
            partnership: '3 years',
            image: '👨‍🌾',
            story: 'David specializes in rare mushroom varieties and sustainable growing practices using recycled materials.',
        },
        {
            name: 'Heritage Grain Collective',
            owner: 'Sarah & Tom Wilson',
            specialty: 'Ancient Grains',
            distance: '18 miles',
            partnership: '4 years',
            image: '👫',
            story: 'The Wilsons preserve heirloom grain varieties and use regenerative farming techniques.',
        },
        {
            name: 'Coastal Kelp Farms',
            owner: 'Elena Rodriguez',
            specialty: 'Sea Vegetables',
            distance: '45 miles',
            partnership: '2 years',
            image: '👩‍🔬',
            story: 'Elena pioneers sustainable ocean farming, growing kelp that actually improves marine ecosystems.',
        },
    ];

    const blogPosts = [
        {
            title: 'The Power of Plant Protein',
            excerpt:
                'Discover how plant-based proteins can provide all essential amino acids while reducing environmental impact.',
            date: '2024-01-15',
            category: 'Nutrition',
            readTime: '5 min',
            image: '🌱',
        },
        {
            title: 'Farm Visit: Behind the Scenes at Green Valley',
            excerpt:
                'Join us on a tour of our partner farm and learn about regenerative agriculture practices.',
            date: '2024-01-10',
            category: 'Farm Visits',
            readTime: '8 min',
            image: '🚜',
        },
        {
            title: '10 Zero-Waste Kitchen Tips',
            excerpt:
                'Simple strategies to reduce food waste in your home kitchen, inspired by our restaurant practices.',
            date: '2024-01-05',
            category: 'Zero Waste',
            readTime: '6 min',
            image: '♻️',
        },
    ];

    useEffect(() => {
        // Animate counters
        const targetValues = {
            co2Offset: 12847,
            mealsSaved: 3456,
            compostGenerated: 8923,
        };

        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;

        let currentStep = 0;
        const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounters({
                co2Offset: Math.floor(targetValues.co2Offset * progress),
                mealsSaved: Math.floor(targetValues.mealsSaved * progress),
                compostGenerated: Math.floor(targetValues.compostGenerated * progress),
            });

            if (currentStep >= steps) {
                clearInterval(interval);
                setCounters(targetValues);
            }
        }, stepDuration);

        // Journey step animation
        const journeyInterval = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % journeySteps.length);
        }, 4000);

        return () => {
            clearInterval(interval);
            clearInterval(journeyInterval);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-16">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-light mb-6">Sustainability</h1>
                    <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
                        Every meal makes a difference. Discover how we're creating a more
                        sustainable food system.
                    </p>
                </div>
            </div>

            {/* Live Counters */}
            <div className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                        Our Impact This Year
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center bg-green-50 rounded-2xl p-8">
                            <div className="text-6xl mb-4">🌍</div>
                            <div className="text-4xl font-bold text-green-600 mb-2">
                                {counters.co2Offset.toLocaleString()}
                            </div>
                            <div className="text-lg text-gray-700 font-medium">
                                Pounds of CO₂ Offset
                            </div>
                            <div className="text-sm text-gray-600 mt-2">
                                Equivalent to planting 156 trees
                            </div>
                        </div>

                        <div className="text-center bg-blue-50 rounded-2xl p-8">
                            <div className="text-6xl mb-4">🍽️</div>
                            <div className="text-4xl font-bold text-blue-600 mb-2">
                                {counters.mealsSaved.toLocaleString()}
                            </div>
                            <div className="text-lg text-gray-700 font-medium">
                                Meals Saved from Waste
                            </div>
                            <div className="text-sm text-gray-600 mt-2">
                                Through our food rescue program
                            </div>
                        </div>

                        <div className="text-center bg-amber-50 rounded-2xl p-8">
                            <div className="text-6xl mb-4">🌱</div>
                            <div className="text-4xl font-bold text-amber-600 mb-2">
                                {counters.compostGenerated.toLocaleString()}
                            </div>
                            <div className="text-lg text-gray-700 font-medium">
                                Pounds of Compost Generated
                            </div>
                            <div className="text-sm text-gray-600 mt-2">
                                Returned to our partner farms
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Farm-to-Table Journey */}
            <div className="py-20 bg-gradient-to-br from-green-100 to-emerald-100">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
                        Farm-to-Table Journey
                    </h2>

                    <div className="relative">
                        {/* Journey visualization */}
                        <div className="flex items-center justify-between mb-12">
                            {journeySteps.map((step, index) => (
                                <div key={index} className="flex flex-col items-center relative">
                                    <div
                                        className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl transition-all duration-500 ${
                                            index === currentStep
                                                ? 'bg-green-600 text-white scale-125 shadow-lg'
                                                : 'bg-white text-gray-600 shadow-md'
                                        }`}
                                    >
                                        {step.icon}
                                    </div>
                                    <div className="text-center mt-4 max-w-32">
                                        <h3 className="font-semibold text-gray-800 text-sm">
                                            {step.title}
                                        </h3>
                                    </div>

                                    {index < journeySteps.length - 1 && (
                                        <div className="absolute top-10 left-20 w-32 h-1 bg-green-200">
                                            <div
                                                className="h-full bg-green-600 transition-all duration-500"
                                                style={{
                                                    width: index < currentStep ? '100%' : '0%',
                                                }}
                                            ></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Step details */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                {journeySteps[currentStep].title}
                            </h3>
                            <p className="text-lg text-gray-600 mb-4">
                                {journeySteps[currentStep].description}
                            </p>
                            <p className="text-gray-700">{journeySteps[currentStep].details}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Partner Farms */}
            <div className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
                        Our Farm Partners
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="text-5xl">{partner.image}</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                                            {partner.name}
                                        </h3>
                                        <p className="text-green-600 font-medium mb-2">
                                            {partner.owner}
                                        </p>
                                        <div className="space-y-1 text-sm text-gray-600 mb-3">
                                            <p>🌾 {partner.specialty}</p>
                                            <p>📍 {partner.distance} away</p>
                                            <p>🤝 {partner.partnership} partnership</p>
                                        </div>
                                        <p className="text-gray-700 text-sm">{partner.story}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sustainability Blog */}
            <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
                        Sustainability Blog
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <article
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                                <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-6xl">
                                    {post.image}
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                                            {post.category}
                                        </span>
                                        <span className="text-gray-500 text-xs">
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-500 text-sm">
                                            {new Date(post.date).toLocaleDateString()}
                                        </span>
                                        <button className="text-green-600 font-medium hover:text-green-700">
                                            Read More →
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            {/* Community & Education Section */}
            <div className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
                        Community & Education
                    </h2>

                    {/* Upcoming Events */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">Upcoming Events</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                                <div className="text-3xl mb-3">👩‍🍳</div>
                                <h4 className="font-bold text-gray-800 mb-2">
                                    Plant-Based Cooking Workshop
                                </h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    Feb 15, 6:00 PM - 8:00 PM
                                </p>
                                <p className="text-gray-700 text-sm mb-4">
                                    Learn to create delicious plant-based meals with our head chef.
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-green-600 font-bold">$45</span>
                                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                                        Register
                                    </button>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6">
                                <div className="text-3xl mb-3">♻️</div>
                                <h4 className="font-bold text-gray-800 mb-2">
                                    Urban Composting 101
                                </h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    Feb 20, 2:00 PM - 4:00 PM
                                </p>
                                <p className="text-gray-700 text-sm mb-4">
                                    Start your own composting system and reduce food waste.
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-blue-600 font-bold">$25</span>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                                        Register
                                    </button>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                                <div className="text-3xl mb-3">🥗</div>
                                <h4 className="font-bold text-gray-800 mb-2">
                                    Vegan Nutrition Talk
                                </h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    Feb 25, 7:00 PM - 8:30 PM
                                </p>
                                <p className="text-gray-700 text-sm mb-4">
                                    Learn about optimal plant-based nutrition.
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-purple-600 font-bold">$15</span>
                                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Volunteer Opportunities */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">Volunteer With Us</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <div className="flex items-center mb-4">
                                    <div className="text-3xl mr-4">🌱</div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">
                                            Urban Garden Volunteer
                                        </h4>
                                        <p className="text-green-600 text-sm">4 hours/week</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Help maintain our rooftop garden and community growing spaces.
                                </p>
                                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                                    Apply to Volunteer
                                </button>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <div className="flex items-center mb-4">
                                    <div className="text-3xl mr-4">🤝</div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">
                                            Food Donation Helper
                                        </h4>
                                        <p className="text-blue-600 text-sm">2 hours/week</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Assist with collecting and distributing surplus food to local
                                    shelters.
                                </p>
                                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                    Apply to Volunteer
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Ambassador Program */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                            Ambassador Program
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-4">
                                    Program Benefits
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-center">
                                        <span className="text-green-600 mr-2">✓</span>
                                        Free monthly meals
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-600 mr-2">✓</span>
                                        Exclusive workshop access
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-600 mr-2">✓</span>
                                        Sustainability certification
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-600 mr-2">✓</span>
                                        Networking opportunities
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-4">Requirements</h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-center">
                                        <span className="text-blue-600 mr-2">•</span>
                                        Passion for sustainability
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-blue-600 mr-2">•</span>
                                        Active social media presence
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-blue-600 mr-2">•</span>
                                        6-month commitment
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-blue-600 mr-2">•</span>
                                        Monthly meetup attendance
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center mt-8">
                            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all">
                                Apply for Ambassador Program
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
