'use client';

import { useState } from 'react';

export default function TestimonialsPage() {
    const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);

    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Food Blogger',
            image: '👩‍💼',
            rating: 5,
            text: 'GreenLeaf Bistro has completely changed my perspective on plant-based dining. Every dish is a masterpiece of flavor and creativity.',
            date: '2024-01-15',
            platform: 'Yelp',
            verified: true,
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Local Resident',
            image: '👨‍💻',
            rating: 5,
            text: 'As someone who was skeptical about vegan food, GreenLeaf proved me completely wrong. The mushroom risotto is incredible!',
            date: '2024-01-10',
            platform: 'Google',
            verified: true,
        },
        {
            id: 3,
            name: 'Emma Rodriguez',
            role: 'Nutritionist',
            image: '👩‍⚕️',
            rating: 5,
            text: 'I love recommending GreenLeaf to my clients. They prove that healthy eating can be absolutely delicious.',
            date: '2024-01-08',
            platform: 'Instagram',
            verified: true,
        },
    ];

    const pressHighlights = [
        {
            outlet: 'City Food Magazine',
            headline: 'GreenLeaf Bistro: Redefining Plant-Based Dining',
            excerpt:
                "A revolutionary approach to sustainable cuisine that doesn't compromise on flavor.",
            date: '2024-01-20',
            logo: '📰',
        },
        {
            outlet: 'Sustainable Living Blog',
            headline: 'Zero Waste Restaurant Shows the Way Forward',
            excerpt:
                'How one restaurant is proving that environmental responsibility and profitability can go hand in hand.',
            date: '2024-01-15',
            logo: '🌱',
        },
        {
            outlet: 'Local TV News',
            headline: 'Farm-to-Table Restaurant Wins Sustainability Award',
            excerpt:
                'GreenLeaf Bistro recognized for outstanding commitment to local sourcing and waste reduction.',
            date: '2024-01-10',
            logo: '📺',
        },
    ];

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-16"
            data-oid="92get41"
        >
            {/* Hero Section */}
            <div
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20"
                data-oid=".r7iiw8"
            >
                <div className="max-w-6xl mx-auto px-6 text-center" data-oid="3y9bh39">
                    <h1 className="text-5xl md:text-6xl font-light mb-6" data-oid=".lt:tk:">
                        What People Say
                    </h1>
                    <p
                        className="text-xl md:text-2xl font-light max-w-3xl mx-auto"
                        data-oid="pqatw.x"
                    >
                        Hear from our community about their GreenLeaf experience
                    </p>
                </div>
            </div>

            {/* Customer Testimonials */}
            <div className="py-20 bg-white" data-oid="8pq:xt1">
                <div className="max-w-6xl mx-auto px-6" data-oid="_t..t3h">
                    <h2
                        className="text-4xl font-bold text-center text-gray-800 mb-16"
                        data-oid="72l2xcn"
                    >
                        Customer Love
                    </h2>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        data-oid="wuv:w31"
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                                onClick={() => setSelectedTestimonial(testimonial)}
                                data-oid="hk4gdg:"
                            >
                                <div className="flex items-center mb-4" data-oid="b9498dy">
                                    <div className="text-4xl mr-4" data-oid="tr.n:jg">
                                        {testimonial.image}
                                    </div>
                                    <div data-oid=".k18ma:">
                                        <h3 className="font-bold text-gray-800" data-oid="nea3gya">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-green-600 text-sm" data-oid="-e9orj5">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex mb-3" data-oid="xb-t:jm">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span
                                            key={i}
                                            className="text-yellow-400"
                                            data-oid=".g:ys5b"
                                        >
                                            ⭐
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-700 mb-4 line-clamp-3" data-oid="52cf8z7">
                                    {testimonial.text}
                                </p>

                                <div
                                    className="flex items-center justify-between text-sm"
                                    data-oid="ige-xcs"
                                >
                                    <span className="text-gray-500" data-oid="2m5miix">
                                        {testimonial.platform}
                                    </span>
                                    {testimonial.verified && (
                                        <span
                                            className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs"
                                            data-oid="akqhie0"
                                        >
                                            ✓ Verified
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Press Highlights */}
            <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50" data-oid=".xjdmsj">
                <div className="max-w-6xl mx-auto px-6" data-oid="jth-.8k">
                    <h2
                        className="text-4xl font-bold text-center text-gray-800 mb-16"
                        data-oid="w5.:833"
                    >
                        In the Press
                    </h2>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        data-oid="1oudhr5"
                    >
                        {pressHighlights.map((article, index) => (
                            <article
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                                data-oid="xkf.lgt"
                            >
                                <div className="text-4xl mb-4" data-oid="ba3nybf">
                                    {article.logo}
                                </div>
                                <h3
                                    className="text-xl font-bold text-gray-800 mb-3"
                                    data-oid="fm2poz_"
                                >
                                    {article.headline}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="mjtv7k8">
                                    {article.excerpt}
                                </p>
                                <div
                                    className="flex items-center justify-between"
                                    data-oid="5fbpsc7"
                                >
                                    <span className="text-green-600 font-medium" data-oid="ahyxtv4">
                                        {article.outlet}
                                    </span>
                                    <span className="text-gray-500 text-sm" data-oid="8q15wt5">
                                        {article.date}
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            {/* Social Media Feed */}
            <div className="py-20 bg-white" data-oid="5elatwk">
                <div className="max-w-6xl mx-auto px-6" data-oid="js9kpxj">
                    <h2
                        className="text-4xl font-bold text-center text-gray-800 mb-16"
                        data-oid="qevyi20"
                    >
                        Social Media Love
                    </h2>

                    <div className="text-center" data-oid="grhuj87">
                        <div className="text-6xl mb-4" data-oid="2nhkfge">
                            📱
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4" data-oid="9taqyii">
                            Follow Us for Daily Updates
                        </h3>
                        <p className="text-gray-600 mb-8" data-oid="_fffmsw">
                            See what our community is saying on social media
                        </p>

                        <div className="flex justify-center space-x-6" data-oid="62nbwxx">
                            <a
                                href="#"
                                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all"
                                data-oid="y5:6pup"
                            >
                                Instagram
                            </a>
                            <a
                                href="#"
                                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all"
                                data-oid="o67mknu"
                            >
                                Facebook
                            </a>
                            <a
                                href="#"
                                className="bg-blue-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition-all"
                                data-oid="v6-kac5"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial Modal */}
            {selectedTestimonial && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    data-oid="70pz6bv"
                >
                    <div className="bg-white rounded-2xl max-w-2xl w-full p-8" data-oid="vlnm5os">
                        <div className="flex justify-between items-start mb-6" data-oid="hndewkn">
                            <div className="flex items-center" data-oid="3v037ou">
                                <div className="text-5xl mr-4" data-oid="7ywqaux">
                                    {selectedTestimonial.image}
                                </div>
                                <div data-oid="5x0vfs6">
                                    <h2
                                        className="text-2xl font-bold text-gray-800"
                                        data-oid="l:u2:l3"
                                    >
                                        {selectedTestimonial.name}
                                    </h2>
                                    <p className="text-green-600" data-oid="rk7iyn8">
                                        {selectedTestimonial.role}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedTestimonial(null)}
                                className="text-gray-500 hover:text-gray-700 text-2xl"
                                data-oid="hyxi3ds"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="flex mb-4" data-oid="_7pt9j0">
                            {[...Array(selectedTestimonial.rating)].map((_, i) => (
                                <span
                                    key={i}
                                    className="text-yellow-400 text-xl"
                                    data-oid="k59i6l8"
                                >
                                    ⭐
                                </span>
                            ))}
                        </div>

                        <p className="text-gray-700 text-lg mb-6" data-oid="5-gvzux">
                            {selectedTestimonial.text}
                        </p>

                        <div className="flex items-center justify-between" data-oid="m_-je6i">
                            <span className="text-gray-500" data-oid="zrkqo2-">
                                Posted on {selectedTestimonial.platform} •{' '}
                                {selectedTestimonial.date}
                            </span>
                            {selectedTestimonial.verified && (
                                <span
                                    className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm"
                                    data-oid="-3t3521"
                                >
                                    ✓ Verified Customer
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
