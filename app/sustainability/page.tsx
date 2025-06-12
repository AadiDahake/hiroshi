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
        <div
            className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-16"
            data-oid="w:r2k5t"
        >
            {/* Hero Section */}
            <div
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20"
                data-oid="sf7j-hr"
            >
                <div className="max-w-6xl mx-auto px-6 text-center" data-oid="qdgr.en">
                    <h1 className="text-5xl md:text-6xl font-light mb-6" data-oid="6mgxass">
                        Sustainability
                    </h1>
                    <p
                        className="text-xl md:text-2xl font-light max-w-3xl mx-auto"
                        data-oid="aaofhg-"
                    >
                        Every meal makes a difference. Discover how we're creating a more
                        sustainable food system.
                    </p>
                </div>
            </div>

            {/* Live Counters */}
            <div className="py-16 bg-white" data-oid="yha--v7">
                <div className="max-w-6xl mx-auto px-6" data-oid="c3lc-9p">
                    <h2
                        className="text-4xl font-bold text-center text-gray-800 mb-12"
                        data-oid="v4u764p"
                    >
                        Our Impact This Year
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="t-uhlmn">
                        <div className="text-center bg-green-50 rounded-2xl p-8" data-oid=":0:w9q4">
                            <div className="text-6xl mb-4" data-oid="lz7az39">
                                🌍
                            </div>
                            <div
                                className="text-4xl font-bold text-green-600 mb-2"
                                data-oid="p0s940x"
                            >
                                {counters.co2Offset.toLocaleString()}
                            </div>
                            <div className="text-lg text-gray-700 font-medium" data-oid="u2cxzmz">
                                Pounds of CO₂ Offset
                            </div>
                            <div className="text-sm text-gray-600 mt-2" data-oid="tg3e6kr">
                                Equivalent to planting 156 trees
                            </div>
                        </div>

                        <div className="text-center bg-blue-50 rounded-2xl p-8" data-oid="0gdvy-s">
                            <div className="text-6xl mb-4" data-oid="psia.mj">
                                🍽️
                            </div>
                            <div
                                className="text-4xl font-bold text-blue-600 mb-2"
                                data-oid="6657ehi"
                            >
                                {counters.mealsSaved.toLocaleString()}
                            </div>
                            <div className="text-lg text-gray-700 font-medium" data-oid="7vhn5zg">
                                Meals Saved from Waste
                            </div>
                            <div className="text-sm text-gray-600 mt-2" data-oid="_6oab0e">
                                Through our food rescue program
                            </div>
                        </div>

                        <div className="text-center bg-amber-50 rounded-2xl p-8" data-oid="eo376ep">
                            <div className="text-6xl mb-4" data-oid="6o0ycs6">
                                🌱
                            </div>
                            <div
                                className="text-4xl font-bold text-amber-600 mb-2"
                                data-oid="exdhjky"
                            >
                                {counters.compostGenerated.toLocaleString()}
                            </div>
                            <div className="text-lg text-gray-700 font-medium" data-oid="6btdfaf">
                                Pounds of Compost Generated
                            </div>
                            <div className="text-sm text-gray-600 mt-2" data-oid="8966:9z">
                                Returned to our partner farms
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Farm-to-Table Journey */}
            <div
                className="py-20 bg-gradient-to-br from-green-100 to-emerald-100"
                data-oid="338ma96"
            >
                <div className="max-w-6xl mx-auto px-6" data-oid="ncnzlpr">
                    <h2
                        className="text-4xl font-bold text-center text-gray-800 mb-16"
                        data-oid="vbo8hub"
                    >
                        Farm-to-Table Journey
                    </h2>

                    <div className="relative" data-oid="8gev2qy">
                        {/* Journey visualization */}
                        <div className="flex items-center justify-between mb-12" data-oid="3752b6z">
                            {journeySteps.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center relative"
                                    data-oid="jexk10f"
                                >
                                    <div
                                        className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl transition-all duration-500 ${
                                            index === currentStep
                                                ? 'bg-green-600 text-white scale-125 shadow-lg'
                                                : 'bg-white text-gray-600 shadow-md'
                                        }`}
                                        data-oid="ro80wde"
                                    >
                                        {step.icon}
                                    </div>
                                    <div className="text-center mt-4 max-w-32" data-oid="a:wga4k">
                                        <h3
                                            className="font-semibold text-gray-800 text-sm"
                                            data-oid="7gw_ivr"
                                        >
                                            {step.title}
                                        </h3>
                                    </div>

                                    {index < journeySteps.length - 1 && (
                                        <div
                                            className="absolute top-10 left-20 w-32 h-1 bg-green-200"
                                            data-oid="qp50bl9"
                                        >
                                            <div
                                                className="h-full bg-green-600 transition-all duration-500"
                                                style={{
                                                    width: index < currentStep ? '100%' : '0%',
                                                }}
                                                data-oid="7_lbjbo"
                                            ></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Step details */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg" data-oid="6g2ahh4">
                            <h3
                                className="text-2xl font-bold text-gray-800 mb-4"
                                data-oid="2ul_2n:"
                            >
                                {journeySteps[currentStep].title}
                            </h3>
                            <p className="text-lg text-gray-600 mb-4" data-oid="m8l4w7k">
                                {journeySteps[currentStep].description}
                            </p>
                            <p className="text-gray-700" data-oid="s5fcge7">
                                {journeySteps[currentStep].details}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Partner Farms */}
            <div className="py-20 bg-white" data-oid="x12b.d4">
                <div className="max-w-6xl mx-auto px-6" data-oid="u0ecpyy">
                    <h2
                        className="text-4xl font-bold text-center text-gray-800 mb-16"
                        data-oid="wttf6wy"
                    >
                        Our Farm Partners
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid="d-4a256">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                                data-oid="et2:wb5"
                            >
                                <div className="flex items-start space-x-4" data-oid="_tb0-3p">
                                    <div className="text-5xl" data-oid="1.yh5oc">
                                        {partner.image}
                                    </div>
                                    <div className="flex-1" data-oid="jg-ex:7">
                                        <h3
                                            className="text-xl font-bold text-gray-800 mb-1"
                                            data-oid="12faa1-"
                                        >
                                            {partner.name}
                                        </h3>
                                        <p
                                            className="text-green-600 font-medium mb-2"
                                            data-oid="c7ry:j."
                                        >
                                            {partner.owner}
                                        </p>
                                        <div
                                            className="space-y-1 text-sm text-gray-600 mb-3"
                                            data-oid="ojwhor8"
                                        >
                                            <p data-oid=":6h67ki">🌾 {partner.specialty}</p>
                                            <p data-oid="b5hhehs">📍 {partner.distance} away</p>
                                            <p data-oid="ed9u4ew">
                                                🤝 {partner.partnership} partnership
                                            </p>
                                        </div>
                                        <p className="text-gray-700 text-sm" data-oid="aag7dh:">
                                            {partner.story}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sustainability Blog */}
            <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50" data-oid="rsuexq6">
                <div className="max-w-6xl mx-auto px-6" data-oid="q.v9zm4">
                    <h2
                        className="text-4xl font-bold text-center text-gray-800 mb-16"
                        data-oid="nowr:gh"
                    >
                        Sustainability Blog
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="-m1-r5x">
                        {blogPosts.map((post, index) => (
                            <article
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                                data-oid="pd1q3jx"
                            >
                                <div
                                    className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-6xl"
                                    data-oid="alaqdk1"
                                >
                                    {post.image}
                                </div>
                                <div className="p-6" data-oid="ra.oq4s">
                                    <div
                                        className="flex items-center justify-between mb-3"
                                        data-oid="e-vj1zc"
                                    >
                                        <span
                                            className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium"
                                            data-oid="jsg2yt9"
                                        >
                                            {post.category}
                                        </span>
                                        <span className="text-gray-500 text-xs" data-oid="f30m7ob">
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-3"
                                        data-oid="rz.7a1r"
                                    >
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4" data-oid="bjhv.a6">
                                        {post.excerpt}
                                    </p>
                                    <div
                                        className="flex items-center justify-between"
                                        data-oid="jrw4i07"
                                    >
                                        <span className="text-gray-500 text-sm" data-oid="8c6aauc">
                                            {new Date(post.date).toLocaleDateString()}
                                        </span>
                                        <button
                                            className="text-green-600 font-medium hover:text-green-700"
                                            data-oid="3lvquuj"
                                        >
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
            <div className="py-20 bg-white" data-oid="ctikmln">
                <div className="max-w-6xl mx-auto px-6" data-oid="j5pe6g0">
                    <h2
                        className="text-4xl font-bold text-center text-gray-800 mb-16"
                        data-oid="66xa2x:"
                    >
                        Community & Education
                    </h2>

                    {/* Upcoming Events */}
                    <div className="mb-16" data-oid="oii.izf">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8" data-oid="fb:0y-a">
                            Upcoming Events
                        </h3>
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            data-oid="tsqub-o"
                        >
                            <div
                                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6"
                                data-oid="ci9.4z1"
                            >
                                <div className="text-3xl mb-3" data-oid="98nsk.v">
                                    👩‍🍳
                                </div>
                                <h4 className="font-bold text-gray-800 mb-2" data-oid="fs2a-bn">
                                    Plant-Based Cooking Workshop
                                </h4>
                                <p className="text-sm text-gray-600 mb-3" data-oid="h1:_y5y">
                                    Feb 15, 6:00 PM - 8:00 PM
                                </p>
                                <p className="text-gray-700 text-sm mb-4" data-oid="fdew3b8">
                                    Learn to create delicious plant-based meals with our head chef.
                                </p>
                                <div
                                    className="flex justify-between items-center"
                                    data-oid="sdc0vov"
                                >
                                    <span className="text-green-600 font-bold" data-oid="3-1t3yp">
                                        $45
                                    </span>
                                    <button
                                        className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors"
                                        data-oid="q9:o4oj"
                                    >
                                        Register
                                    </button>
                                </div>
                            </div>

                            <div
                                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6"
                                data-oid="mslivqd"
                            >
                                <div className="text-3xl mb-3" data-oid="he.y432">
                                    ♻️
                                </div>
                                <h4 className="font-bold text-gray-800 mb-2" data-oid="95b46yj">
                                    Urban Composting 101
                                </h4>
                                <p className="text-sm text-gray-600 mb-3" data-oid="8vt5p3x">
                                    Feb 20, 2:00 PM - 4:00 PM
                                </p>
                                <p className="text-gray-700 text-sm mb-4" data-oid="yxxa4bz">
                                    Start your own composting system and reduce food waste.
                                </p>
                                <div
                                    className="flex justify-between items-center"
                                    data-oid="41mo5-u"
                                >
                                    <span className="text-blue-600 font-bold" data-oid="3d7:80d">
                                        $25
                                    </span>
                                    <button
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                                        data-oid="w9fk2iu"
                                    >
                                        Register
                                    </button>
                                </div>
                            </div>

                            <div
                                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6"
                                data-oid=":0biwil"
                            >
                                <div className="text-3xl mb-3" data-oid="1zdx4a5">
                                    🥗
                                </div>
                                <h4 className="font-bold text-gray-800 mb-2" data-oid="66fotz3">
                                    Vegan Nutrition Talk
                                </h4>
                                <p className="text-sm text-gray-600 mb-3" data-oid="_lt-knn">
                                    Feb 25, 7:00 PM - 8:30 PM
                                </p>
                                <p className="text-gray-700 text-sm mb-4" data-oid="v9i3x.9">
                                    Learn about optimal plant-based nutrition.
                                </p>
                                <div
                                    className="flex justify-between items-center"
                                    data-oid="zh4gih_"
                                >
                                    <span className="text-purple-600 font-bold" data-oid="u6gcmvf">
                                        $15
                                    </span>
                                    <button
                                        className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors"
                                        data-oid="vrwb2ac"
                                    >
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Volunteer Opportunities */}
                    <div className="mb-16" data-oid="._ljnoe">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8" data-oid="47qp::y">
                            Volunteer With Us
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid=":lcyvkp">
                            <div
                                className="bg-white border border-gray-200 rounded-xl p-6"
                                data-oid="zwnts-g"
                            >
                                <div className="flex items-center mb-4" data-oid="dnjocto">
                                    <div className="text-3xl mr-4" data-oid=".lvg_kw">
                                        🌱
                                    </div>
                                    <div data-oid=":j34qrb">
                                        <h4 className="font-bold text-gray-800" data-oid="cby5x:0">
                                            Urban Garden Volunteer
                                        </h4>
                                        <p className="text-green-600 text-sm" data-oid="olek22-">
                                            4 hours/week
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4" data-oid="-wgy41e">
                                    Help maintain our rooftop garden and community growing spaces.
                                </p>
                                <button
                                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                                    data-oid="9_.5.xa"
                                >
                                    Apply to Volunteer
                                </button>
                            </div>

                            <div
                                className="bg-white border border-gray-200 rounded-xl p-6"
                                data-oid="z_cnl9b"
                            >
                                <div className="flex items-center mb-4" data-oid=":df5gh9">
                                    <div className="text-3xl mr-4" data-oid="z:dzv_v">
                                        🤝
                                    </div>
                                    <div data-oid="noqk849">
                                        <h4 className="font-bold text-gray-800" data-oid="mq8q7ax">
                                            Food Donation Helper
                                        </h4>
                                        <p className="text-blue-600 text-sm" data-oid="4q7oefe">
                                            2 hours/week
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4" data-oid="a3:oay2">
                                    Assist with collecting and distributing surplus food to local
                                    shelters.
                                </p>
                                <button
                                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                    data-oid="35a8e_o"
                                >
                                    Apply to Volunteer
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Ambassador Program */}
                    <div
                        className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8"
                        data-oid="1-r8pph"
                    >
                        <h3
                            className="text-2xl font-bold text-gray-800 mb-6 text-center"
                            data-oid="m.csw-4"
                        >
                            Ambassador Program
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid="q_kvenr">
                            <div data-oid="x9c00:y">
                                <h4 className="font-semibold text-gray-800 mb-4" data-oid="fgguzr7">
                                    Program Benefits
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-700" data-oid="-p-b9au">
                                    <li className="flex items-center" data-oid="5hb45_3">
                                        <span className="text-green-600 mr-2" data-oid="7_6al18">
                                            ✓
                                        </span>
                                        Free monthly meals
                                    </li>
                                    <li className="flex items-center" data-oid="6tpngc:">
                                        <span className="text-green-600 mr-2" data-oid="oemi4p5">
                                            ✓
                                        </span>
                                        Exclusive workshop access
                                    </li>
                                    <li className="flex items-center" data-oid="56chi.0">
                                        <span className="text-green-600 mr-2" data-oid="ul.3hsu">
                                            ✓
                                        </span>
                                        Sustainability certification
                                    </li>
                                    <li className="flex items-center" data-oid="fihm.le">
                                        <span className="text-green-600 mr-2" data-oid="-dx0vho">
                                            ✓
                                        </span>
                                        Networking opportunities
                                    </li>
                                </ul>
                            </div>
                            <div data-oid="vc19x.y">
                                <h4 className="font-semibold text-gray-800 mb-4" data-oid="_7k4_6n">
                                    Requirements
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-700" data-oid="au3jpqw">
                                    <li className="flex items-center" data-oid="7bsm_b5">
                                        <span className="text-blue-600 mr-2" data-oid="jxiz5fa">
                                            •
                                        </span>
                                        Passion for sustainability
                                    </li>
                                    <li className="flex items-center" data-oid="8tc_dt1">
                                        <span className="text-blue-600 mr-2" data-oid="rnwr28e">
                                            •
                                        </span>
                                        Active social media presence
                                    </li>
                                    <li className="flex items-center" data-oid=".pulwfp">
                                        <span className="text-blue-600 mr-2" data-oid="9gia.5d">
                                            •
                                        </span>
                                        6-month commitment
                                    </li>
                                    <li className="flex items-center" data-oid=":qihpuk">
                                        <span className="text-blue-600 mr-2" data-oid="m-7pycc">
                                            •
                                        </span>
                                        Monthly meetup attendance
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center mt-8" data-oid="huft.yb">
                            <button
                                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all"
                                data-oid="30731n3"
                            >
                                Apply for Ambassador Program
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
