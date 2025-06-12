'use client';

import { useState, useEffect } from 'react';

export default function StoryPage() {
    const [activeTimeline, setActiveTimeline] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const timelineEvents = [
        {
            year: '2018',
            title: 'The Vision Begins',
            description:
                'Sarah and Marcus, both passionate about sustainable living, dream of creating a restaurant that proves plant-based cuisine can be both delicious and environmentally responsible.',
            icon: '💡',
        },
        {
            year: '2019',
            title: 'First Farm Partnership',
            description:
                'We establish our first partnership with Green Valley Organic Farm, securing a steady supply of fresh, local produce.',
            icon: '🤝',
        },
        {
            year: '2020',
            title: 'GreenLeaf Bistro Opens',
            description:
                'Despite global challenges, we open our doors with a mission to serve 100% plant-based, locally-sourced meals.',
            icon: '🏪',
        },
        {
            year: '2021',
            title: 'Rooftop Garden Built',
            description:
                'We build our first rooftop garden, growing herbs and microgreens right above our kitchen.',
            icon: '🌱',
        },
        {
            year: '2022',
            title: 'Zero Waste Achievement',
            description:
                'We achieve our goal of becoming a zero-waste kitchen through composting and innovative food preparation.',
            icon: '♻️',
        },
        {
            year: '2023',
            title: 'Community Expansion',
            description:
                'We launch our community education program, teaching sustainable cooking and urban gardening.',
            icon: '👥',
        },
        {
            year: '2024',
            title: 'Award Recognition',
            description:
                'GreenLeaf Bistro receives the "Sustainable Restaurant of the Year" award from the Green Dining Alliance.',
            icon: '🏆',
        },
    ];

    const farmPartners = [
        {
            name: 'Green Valley Organic',
            location: 'Local Valley, 15 miles',
            specialty: 'Leafy Greens & Herbs',
        },
        {
            name: 'Sunrise Mushroom Farm',
            location: 'Mountain Ridge, 22 miles',
            specialty: 'Gourmet Mushrooms',
        },
        {
            name: 'Heritage Grain Co.',
            location: 'Prairie Fields, 18 miles',
            specialty: 'Ancient Grains',
        },
        {
            name: 'Coastal Kelp Farms',
            location: 'Pacific Coast, 45 miles',
            specialty: 'Sea Vegetables',
        },
    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setActiveTimeline((prev) => (prev + 1) % timelineEvents.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-16"
            data-oid="gkqio8y"
        >
            {/* Hero Section */}
            <div
                className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20"
                data-oid="5l-dm_e"
            >
                <div className="absolute inset-0 bg-black opacity-20" data-oid="bxwi07z"></div>
                <div
                    className="relative z-10 max-w-6xl mx-auto px-6 text-center"
                    data-oid="n4vo:s6"
                >
                    <h1 className="text-5xl md:text-6xl font-light mb-6" data-oid="p96iwgt">
                        Our Story
                    </h1>
                    <p
                        className="text-xl md:text-2xl max-w-3xl mx-auto font-light"
                        data-oid="-ts.42w"
                    >
                        From a simple dream to a thriving community hub for sustainable dining
                    </p>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="py-20" data-oid="blehgi6">
                <div className="max-w-6xl mx-auto px-6" data-oid="1n3gqdb">
                    <h2
                        className="text-4xl font-bold text-center text-gray-800 mb-16"
                        data-oid="wac-q0h"
                    >
                        Our Journey
                    </h2>

                    <div className="relative" data-oid="_uz8f9h">
                        {/* Timeline line */}
                        <div
                            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"
                            data-oid="hylygwg"
                        ></div>

                        {timelineEvents.map((event, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center mb-12 transition-all duration-1000 ${
                                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                } ${
                                    isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-10'
                                }`}
                                style={{ animationDelay: `${index * 200}ms` }}
                                data-oid="0ak:9e_"
                            >
                                <div
                                    className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                                    data-oid="a6ritw9"
                                >
                                    <div
                                        className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                                            activeTimeline === index
                                                ? 'ring-4 ring-green-200 scale-105'
                                                : ''
                                        }`}
                                        data-oid="er0-:nm"
                                    >
                                        <div className="text-3xl mb-2" data-oid="583fbi6">
                                            {event.icon}
                                        </div>
                                        <div
                                            className="text-2xl font-bold text-green-600 mb-2"
                                            data-oid="1xl_fjc"
                                        >
                                            {event.year}
                                        </div>
                                        <h3
                                            className="text-xl font-semibold text-gray-800 mb-3"
                                            data-oid="ogux:uk"
                                        >
                                            {event.title}
                                        </h3>
                                        <p className="text-gray-600" data-oid="cc9q.4b">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Timeline dot */}
                                <div
                                    className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white transition-all duration-300 ${
                                        activeTimeline === index
                                            ? 'bg-green-500 scale-125'
                                            : 'bg-green-300'
                                    }`}
                                    data-oid="lztfgwh"
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Video Documentary Section */}
            <div className="bg-white py-20" data-oid="jha4_0i">
                <div className="max-w-6xl mx-auto px-6" data-oid="lunhl.r">
                    <div className="text-center mb-12" data-oid="0fafy6h">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4" data-oid="4vk0zu4">
                            Behind the Scenes
                        </h2>
                        <p className="text-xl text-gray-600" data-oid="s2vc.xv">
                            Watch our documentary about farm partnerships and sustainable practices
                        </p>
                    </div>

                    <div
                        className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
                        data-oid="w-u4bg5"
                    >
                        <div
                            className="aspect-video bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center"
                            data-oid="pnw36eg"
                        >
                            <div className="text-center text-white" data-oid="t5963zv">
                                <div className="text-6xl mb-4" data-oid="z_3h-od">
                                    🎬
                                </div>
                                <h3 className="text-2xl font-bold mb-2" data-oid="bjvmird">
                                    Farm to Table: Our Story
                                </h3>
                                <p className="text-lg opacity-90 mb-6" data-oid="aktoucs">
                                    A 2-minute journey through our sustainable practices
                                </p>
                                <button
                                    className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors"
                                    data-oid="7w4ylaq"
                                >
                                    ▶ Play Documentary
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Interactive World Map */}
            <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50" data-oid="jx.rpz_">
                <div className="max-w-6xl mx-auto px-6" data-oid=".-v.5xx">
                    <div className="text-center mb-12" data-oid="ztqsq8l">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4" data-oid="a50c12b">
                            Where Our Ingredients Come From
                        </h2>
                        <p className="text-xl text-gray-600" data-oid="thc:e-h">
                            Discover our network of local farms and sustainable partners
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-xl" data-oid="aob-lfm">
                        <div
                            className="relative bg-green-100 rounded-xl p-8 min-h-96 flex items-center justify-center"
                            data-oid="4biqe9l"
                        >
                            <div className="text-center" data-oid="ur_x_2:">
                                <div className="text-6xl mb-4" data-oid="4lyt4zo">
                                    🗺️
                                </div>
                                <h3
                                    className="text-2xl font-bold text-gray-800 mb-4"
                                    data-oid="9oyrh9b"
                                >
                                    Interactive Source Map
                                </h3>
                                <p className="text-gray-600 mb-6" data-oid="2kv41w4">
                                    Click on the markers to learn about our farm partners
                                </p>

                                {/* Farm partner cards */}
                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
                                    data-oid="ff28m0r"
                                >
                                    {farmPartners.map((farm, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                                            data-oid="._j6lf3"
                                        >
                                            <div
                                                className="flex items-center mb-2"
                                                data-oid="3mzmsd-"
                                            >
                                                <div className="text-2xl mr-3" data-oid="0u:uqob">
                                                    🚜
                                                </div>
                                                <h4
                                                    className="font-semibold text-gray-800"
                                                    data-oid="p.uqo4c"
                                                >
                                                    {farm.name}
                                                </h4>
                                            </div>
                                            <p
                                                className="text-sm text-gray-600 mb-1"
                                                data-oid="9x3vyx-"
                                            >
                                                📍 {farm.location}
                                            </p>
                                            <p
                                                className="text-sm text-green-600 font-medium"
                                                data-oid="nug831a"
                                            >
                                                {farm.specialty}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Founders Section */}
            <div className="bg-white py-20" data-oid="rsc8lg5">
                <div className="max-w-6xl mx-auto px-6" data-oid="yyq5ohc">
                    <h2
                        className="text-4xl font-bold text-center text-gray-800 mb-16"
                        data-oid="3u6u4nh"
                    >
                        Meet Our Founders
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12" data-oid="uv4fn1b">
                        <div className="text-center" data-oid="ku422je">
                            <div
                                className="w-48 h-48 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl"
                                data-oid="qi09258"
                            >
                                👩‍🍳
                            </div>
                            <h3
                                className="text-2xl font-bold text-gray-800 mb-2"
                                data-oid="4qy81_6"
                            >
                                Sarah Chen
                            </h3>
                            <p className="text-green-600 font-semibold mb-4" data-oid="4a96kvw">
                                Co-Founder & Head Chef
                            </p>
                            <p className="text-gray-600 leading-relaxed" data-oid="8en8wp8">
                                "My journey to plant-based cooking began during my travels through
                                Southeast Asia, where I discovered the incredible flavors and health
                                benefits of traditional vegetarian cuisine. I believe that
                                sustainable food can be both delicious and nourishing for our bodies
                                and planet."
                            </p>
                        </div>

                        <div className="text-center" data-oid="k.u8zgh">
                            <div
                                className="w-48 h-48 bg-gradient-to-br from-blue-200 to-teal-300 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl"
                                data-oid="hqs_m-2"
                            >
                                👨‍💼
                            </div>
                            <h3
                                className="text-2xl font-bold text-gray-800 mb-2"
                                data-oid="hcfq1zq"
                            >
                                Marcus Rodriguez
                            </h3>
                            <p className="text-green-600 font-semibold mb-4" data-oid="rrxmyaz">
                                Co-Founder & Sustainability Director
                            </p>
                            <p className="text-gray-600 leading-relaxed" data-oid="iu:9aw:">
                                "Growing up on my grandmother's farm taught me the importance of
                                working with nature, not against it. At GreenLeaf, we're proving
                                that restaurants can be profitable while being environmentally
                                responsible. Every decision we make considers its impact on our
                                community and planet."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
