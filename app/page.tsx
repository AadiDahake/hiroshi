'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [currentSpecial, setCurrentSpecial] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const seasonalSpecials = [
        {
            title: 'Autumn Harvest Bowl',
            description: 'Roasted butternut squash, quinoa, and maple-glazed Brussels sprouts',
            price: '$18',
        },
        {
            title: 'Pumpkin Spice Latte',
            description: 'House-made oat milk with organic pumpkin and warming spices',
            price: '$6',
        },
        {
            title: 'Wild Mushroom Risotto',
            description: 'Creamy arborio rice with foraged mushrooms and truffle oil',
            price: '$22',
        },
    ];

    const instagramPosts = [
        { id: 1, image: '🥗', caption: 'Fresh garden salad' },
        { id: 2, image: '🍄', caption: 'Mushroom medley' },
        { id: 3, image: '🥑', caption: 'Avocado toast perfection' },
        { id: 4, image: '🌱', caption: 'Farm to table freshness' },
        { id: 5, image: '🥕', caption: 'Rainbow veggie bowl' },
        { id: 6, image: '🍅', caption: 'Heirloom tomato special' },
    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentSpecial((prev) => (prev + 1) % seasonalSpecials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-green-50 relative overflow-hidden" data-oid="i-9m5pb">
            {/* Background Video Simulation */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 opacity-90"
                data-oid="1fnxlhe"
            >
                <div className="absolute inset-0 bg-black opacity-20" data-oid="i:jrtfx"></div>
                {/* Animated background elements to simulate video */}
                <div
                    className="absolute top-10 left-10 w-32 h-32 bg-green-300 rounded-full opacity-30 animate-pulse"
                    data-oid="vcjaytz"
                ></div>
                <div
                    className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-300 rounded-full opacity-40 animate-bounce"
                    data-oid="n9an0i3"
                ></div>
                <div
                    className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-300 rounded-full opacity-25 animate-ping"
                    data-oid="sl06nfa"
                ></div>
            </div>

            {/* Navigation */}
            <nav
                className="relative z-20 flex justify-between items-center p-6 text-white"
                data-oid="z-_uekc"
            >
                <div className="text-2xl font-bold tracking-wide" data-oid="knf091o">
                    GreenLeaf Bistro
                </div>
                <div className="hidden md:flex space-x-8" data-oid="sujqz9b">
                    <a
                        href="#"
                        className="hover:text-green-200 transition-colors"
                        data-oid="cl79zz8"
                    >
                        Menu
                    </a>
                    <a
                        href="#"
                        className="hover:text-green-200 transition-colors"
                        data-oid=".wv5plh"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="hover:text-green-200 transition-colors"
                        data-oid="0dvdogx"
                    >
                        Contact
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <div
                className={`relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                data-oid="sent9s1"
            >
                <h1
                    className="text-5xl md:text-7xl font-light mb-6 leading-tight"
                    data-oid="39uzh77"
                >
                    Farm Fresh
                    <span className="block text-green-200" data-oid="s05t002">
                        Plant-Based Cuisine
                    </span>
                </h1>

                <p
                    className="text-xl md:text-2xl mb-12 max-w-2xl font-light opacity-90"
                    data-oid="t3pv5.y"
                >
                    Experience the vibrant flavors of locally-sourced, sustainable dining
                </p>

                {/* Animated CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 mb-16" data-oid="8qwnf3:">
                    <button
                        className="px-8 py-4 bg-white text-green-700 rounded-full font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
                        data-oid="a41.91m"
                    >
                        View Menu
                    </button>
                    <button
                        className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-green-700 transform hover:scale-105 transition-all duration-300"
                        data-oid="axnqtpm"
                    >
                        Book a Table
                    </button>
                    <button
                        className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                        data-oid="udd7y2s"
                    >
                        Explore Our Story
                    </button>
                </div>

                {/* Seasonal Special Card */}
                <div
                    className="bg-white bg-opacity-95 rounded-2xl p-6 max-w-md mx-auto mb-12 shadow-2xl transform transition-all duration-500"
                    data-oid="b190885"
                >
                    <div
                        className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-2"
                        data-oid="_.k3k0-"
                    >
                        Seasonal Special
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2" data-oid=":27aklo">
                        {seasonalSpecials[currentSpecial].title}
                    </h3>
                    <p className="text-gray-600 mb-3" data-oid="-1bj8d-">
                        {seasonalSpecials[currentSpecial].description}
                    </p>
                    <div className="text-3xl font-bold text-green-600" data-oid="y8nsg1:">
                        {seasonalSpecials[currentSpecial].price}
                    </div>
                    <div className="flex justify-center mt-4 space-x-2" data-oid="czut5wm">
                        {seasonalSpecials.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === currentSpecial ? 'bg-green-600' : 'bg-gray-300'
                                }`}
                                data-oid="xgqhf2_"
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Quick Facts Bar */}
                <div
                    className="bg-white bg-opacity-90 rounded-2xl p-6 max-w-4xl mx-auto shadow-xl"
                    data-oid="j7epdiz"
                >
                    <div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
                        data-oid="lc.z63a"
                    >
                        <div className="flex flex-col items-center" data-oid="h:29wrp">
                            <div className="text-4xl mb-2" data-oid="6wgc942">
                                🌱
                            </div>
                            <div className="text-2xl font-bold text-green-600" data-oid="j.v4e:p">
                                100%
                            </div>
                            <div className="text-gray-700 font-medium" data-oid="md6ihkp">
                                Plant-Based
                            </div>
                        </div>
                        <div className="flex flex-col items-center" data-oid="h13w8b0">
                            <div className="text-4xl mb-2" data-oid="3lzbm6g">
                                🚜
                            </div>
                            <div className="text-2xl font-bold text-green-600" data-oid="efu-6n_">
                                98%
                            </div>
                            <div className="text-gray-700 font-medium" data-oid="13p_h65">
                                Local Ingredients
                            </div>
                        </div>
                        <div className="flex flex-col items-center" data-oid="p-j75hh">
                            <div className="text-4xl mb-2" data-oid="wfkpb4_">
                                ♻️
                            </div>
                            <div className="text-2xl font-bold text-green-600" data-oid="jt466ov">
                                Zero
                            </div>
                            <div className="text-gray-700 font-medium" data-oid="z14h4ag">
                                Waste Kitchen
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Instagram Feed Section */}
            <div className="relative z-10 bg-white py-16" data-oid="p5lc3xo">
                <div className="max-w-6xl mx-auto px-6" data-oid="5qmv_be">
                    <h2
                        className="text-3xl font-bold text-center text-gray-800 mb-2"
                        data-oid="9o2l-ar"
                    >
                        Follow Our Journey
                    </h2>
                    <p className="text-center text-gray-600 mb-12" data-oid="1q36_o0">
                        @greenleafbistro
                    </p>

                    <div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                        data-oid=".xh.gq4"
                    >
                        {instagramPosts.map((post, index) => (
                            <div
                                key={post.id}
                                className={`aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center text-6xl hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md ${
                                    isVisible ? 'animate-fade-in' : ''
                                }`}
                                style={{ animationDelay: `${index * 100}ms` }}
                                data-oid="4nvxf97"
                            >
                                {post.image}
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8" data-oid="bsgatu-">
                        <button
                            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                            data-oid="e8mtn2m"
                        >
                            Follow on Instagram
                        </button>
                    </div>
                </div>
            </div>

            <style jsx data-oid="1b7err5">{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                }
            `}</style>
        </div>
    );
}
