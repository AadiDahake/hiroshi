'use client';

import { useState } from 'react';

export default function CommunityPage() {
    const [selectedEvent, setSelectedEvent] = useState<any>(null);
    const [volunteerForm, setVolunteerForm] = useState({
        name: '',
        email: '',
        interest: '',
        experience: '',
    });

    const events = [
        {
            id: 1,
            title: 'Plant-Based Cooking Workshop',
            date: '2024-02-15',
            time: '6:00 PM - 8:00 PM',
            type: 'Workshop',
            capacity: 20,
            registered: 15,
            price: 45,
            description:
                'Learn to create delicious plant-based meals with our head chef Sarah Chen.',
            image: '👩‍🍳',
            skills: ['Knife skills', 'Flavor pairing', 'Meal planning'],
        },
        {
            id: 2,
            title: 'Urban Composting 101',
            date: '2024-02-20',
            time: '2:00 PM - 4:00 PM',
            type: 'Education',
            capacity: 15,
            registered: 8,
            price: 25,
            description: 'Start your own composting system at home and reduce food waste.',
            image: '♻️',
            skills: ['Composting basics', 'Bin setup', 'Troubleshooting'],
        },
        {
            id: 3,
            title: 'Vegan Nutrition Talk',
            date: '2024-02-25',
            time: '7:00 PM - 8:30 PM',
            type: 'Talk',
            capacity: 50,
            registered: 32,
            price: 15,
            description: 'Nutritionist Dr. Amanda Green discusses optimal plant-based nutrition.',
            image: '🥗',
            skills: ['Nutrition planning', 'Supplement guidance', 'Health optimization'],
        },
        {
            id: 4,
            title: 'Rooftop Garden Tour',
            date: '2024-03-01',
            time: '10:00 AM - 12:00 PM',
            type: 'Tour',
            capacity: 25,
            registered: 18,
            price: 20,
            description: 'Explore our rooftop garden and learn about urban farming techniques.',
            image: '🌱',
            skills: ['Urban farming', 'Hydroponic systems', 'Seasonal planning'],
        },
    ];

    const volunteerOpportunities = [
        {
            title: 'Urban Garden Volunteer',
            commitment: '4 hours/week',
            description: 'Help maintain our rooftop garden and community growing spaces.',
            skills: ['Gardening', 'Physical work', 'Plant care'],
            icon: '🌱',
        },
        {
            title: 'Food Donation Drive Helper',
            commitment: '2 hours/week',
            description: 'Assist with collecting and distributing surplus food to local shelters.',
            skills: ['Organization', 'Communication', 'Logistics'],
            icon: '🤝',
        },
        {
            title: 'Workshop Assistant',
            commitment: '6 hours/month',
            description: 'Support our educational workshops and cooking classes.',
            skills: ['Teaching', 'Organization', 'People skills'],
            icon: '👨‍🏫',
        },
        {
            title: 'Social Media Ambassador',
            commitment: '3 hours/week',
            description: 'Help spread awareness about sustainable living on social platforms.',
            skills: ['Social media', 'Content creation', 'Photography'],
            icon: '📱',
        },
    ];

    const ambassadorProgram = {
        benefits: [
            'Free monthly meals',
            'Exclusive workshop access',
            'Sustainability certification',
            'Networking opportunities',
            'Product discounts',
        ],

        requirements: [
            'Passion for sustainability',
            'Active social media presence',
            'Commitment to 6-month program',
            'Attend monthly meetups',
        ],
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-16"
            data-oid="1:_w8zr"
        >
            {/* Hero Section */}
            <div
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20"
                data-oid="l867xrf"
            >
                <div className="max-w-6xl mx-auto px-6 text-center" data-oid="wfds:r6">
                    <h1 className="text-5xl md:text-6xl font-light mb-6" data-oid="yy-07dr">
                        Community & Education
                    </h1>
                    <p
                        className="text-xl md:text-2xl font-light max-w-3xl mx-auto"
                        data-oid="q0wgw5b"
                    >
                        Join our community of sustainability advocates and learn together
                    </p>
                </div>
            </div>

            {/* Events Calendar */}
            <div className="py-20 bg-white" data-oid="ffc1aj.">
                <div className="max-w-6xl mx-auto px-6" data-oid="2o2s6x8">
                    <h2
                        className="text-4xl font-bold text-center text-gray-800 mb-16"
                        data-oid="rby8i7a"
                    >
                        Upcoming Events
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid="d-2oc:k">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                                onClick={() => setSelectedEvent(event)}
                                data-oid="25g20l_"
                            >
                                <div
                                    className="flex items-start justify-between mb-4"
                                    data-oid="j--yz:9"
                                >
                                    <div className="text-4xl" data-oid="11cwmh_">
                                        {event.image}
                                    </div>
                                    <div className="text-right" data-oid="ny41ujo">
                                        <div
                                            className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                                            data-oid="7t_g7-e"
                                        >
                                            {event.type}
                                        </div>
                                        <div
                                            className="text-2xl font-bold text-green-600 mt-2"
                                            data-oid="ixd93ss"
                                        >
                                            ${event.price}
                                        </div>
                                    </div>
                                </div>

                                <h3
                                    className="text-xl font-bold text-gray-800 mb-2"
                                    data-oid="bombb::"
                                >
                                    {event.title}
                                </h3>
                                <p className="text-gray-600 mb-4" data-oid="l8ceo1c">
                                    {event.description}
                                </p>

                                <div className="space-y-2 text-sm text-gray-700" data-oid="p-ri:1e">
                                    <div className="flex items-center" data-oid="8n763hr">
                                        <span className="mr-2" data-oid="7ahnvtw">
                                            📅
                                        </span>
                                        {new Date(event.date).toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </div>
                                    <div className="flex items-center" data-oid="d._n:z8">
                                        <span className="mr-2" data-oid="iw24vy_">
                                            ⏰
                                        </span>
                                        {event.time}
                                    </div>
                                    <div className="flex items-center" data-oid="f-4ng7d">
                                        <span className="mr-2" data-oid=".6950xb">
                                            👥
                                        </span>
                                        {event.registered}/{event.capacity} registered
                                    </div>
                                </div>

                                <div className="mt-4" data-oid="u.41_q2">
                                    <div
                                        className="w-full bg-gray-200 rounded-full h-2"
                                        data-oid="rb3ssg4"
                                    >
                                        <div
                                            className="bg-green-600 h-2 rounded-full transition-all duration-300"
                                            style={{
                                                width: `${(event.registered / event.capacity) * 100}%`,
                                            }}
                                            data-oid="z4zqwyw"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Volunteer Opportunities */}
            <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50" data-oid="ihgulv-">
                <div className="max-w-6xl mx-auto px-6" data-oid="4k-2rof">
                    <h2
                        className="text-4xl font-bold text-center text-gray-800 mb-16"
                        data-oid="t0.-jd6"
                    >
                        Volunteer With Us
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" data-oid="3u84298">
                        {volunteerOpportunities.map((opportunity, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                                data-oid=".4w7:98"
                            >
                                <div className="flex items-center mb-4" data-oid="hjp-ogx">
                                    <div className="text-3xl mr-4" data-oid="wdwwfgk">
                                        {opportunity.icon}
                                    </div>
                                    <div data-oid="b-v2_js">
                                        <h3
                                            className="text-xl font-bold text-gray-800"
                                            data-oid="0gk_bj2"
                                        >
                                            {opportunity.title}
                                        </h3>
                                        <p
                                            className="text-green-600 font-medium"
                                            data-oid="onpkwd."
                                        >
                                            {opportunity.commitment}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-4" data-oid="ohjo8a7">
                                    {opportunity.description}
                                </p>

                                <div className="mb-4" data-oid="f4yu602">
                                    <h4
                                        className="font-semibold text-gray-800 mb-2"
                                        data-oid="xvxf9e:"
                                    >
                                        Skills you'll gain:
                                    </h4>
                                    <div className="flex flex-wrap gap-2" data-oid="kcnjm76">
                                        {opportunity.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm"
                                                data-oid="xwd5y1c"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                    data-oid="rw4_fb3"
                                >
                                    Apply to Volunteer
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Volunteer Application Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8" data-oid="sx.afc3">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6" data-oid="_0jh-u-">
                            Volunteer Application
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="pf_mrqd">
                            <div data-oid="::g_ld5">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="zfb-li8"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={volunteerForm.name}
                                    onChange={(e) =>
                                        setVolunteerForm((prev) => ({
                                            ...prev,
                                            name: e.target.value,
                                        }))
                                    }
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Your full name"
                                    data-oid="bgv:j3c"
                                />
                            </div>

                            <div data-oid="4mebmdl">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="4-98g9x"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={volunteerForm.email}
                                    onChange={(e) =>
                                        setVolunteerForm((prev) => ({
                                            ...prev,
                                            email: e.target.value,
                                        }))
                                    }
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="your.email@example.com"
                                    data-oid="54xhsmt"
                                />
                            </div>
                        </div>

                        <div className="mt-6" data-oid="mm7k:lr">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="z.nsslh"
                            >
                                Area of Interest
                            </label>
                            <select
                                value={volunteerForm.interest}
                                onChange={(e) =>
                                    setVolunteerForm((prev) => ({
                                        ...prev,
                                        interest: e.target.value,
                                    }))
                                }
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                data-oid="emj-8sy"
                            >
                                <option value="" data-oid="hb1k-i6">
                                    Select an area
                                </option>
                                <option value="garden" data-oid="_39b910">
                                    Urban Garden
                                </option>
                                <option value="food-donation" data-oid="5rcdq83">
                                    Food Donation
                                </option>
                                <option value="workshops" data-oid="ee6z2lj">
                                    Workshops
                                </option>
                                <option value="social-media" data-oid="vjsbk.l">
                                    Social Media
                                </option>
                            </select>
                        </div>

                        <div className="mt-6" data-oid="5b7i-zy">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                data-oid="k7u9i:-"
                            >
                                Relevant Experience
                            </label>
                            <textarea
                                value={volunteerForm.experience}
                                onChange={(e) =>
                                    setVolunteerForm((prev) => ({
                                        ...prev,
                                        experience: e.target.value,
                                    }))
                                }
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                rows={4}
                                placeholder="Tell us about any relevant experience or why you're interested in volunteering with us..."
                                data-oid="jwae4g4"
                            ></textarea>
                        </div>

                        <button
                            className="mt-6 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                            data-oid="h-nuzcj"
                        >
                            Submit Application
                        </button>
                    </div>
                </div>
            </div>

            {/* Ambassador Program */}
            <div className="py-20 bg-white" data-oid="uvfn32.">
                <div className="max-w-6xl mx-auto px-6" data-oid="p6h8_rw">
                    <h2
                        className="text-4xl font-bold text-center text-gray-800 mb-16"
                        data-oid="j8_12yr"
                    >
                        Ambassador Program
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-oid="7hvsnnx">
                        <div data-oid="ra1_z2u">
                            <h3
                                className="text-2xl font-bold text-gray-800 mb-6"
                                data-oid="2prjl1u"
                            >
                                Program Benefits
                            </h3>
                            <div className="space-y-4" data-oid="q5b2mee">
                                {ambassadorProgram.benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center"
                                        data-oid="5t:koqm"
                                    >
                                        <div
                                            className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3"
                                            data-oid="92qjpja"
                                        >
                                            <span className="text-white text-sm" data-oid="j2t1:pt">
                                                ✓
                                            </span>
                                        </div>
                                        <span className="text-gray-700" data-oid="za3tj_:">
                                            {benefit}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div data-oid="ahnp8rz">
                            <h3
                                className="text-2xl font-bold text-gray-800 mb-6"
                                data-oid="y-a8_f_"
                            >
                                Requirements
                            </h3>
                            <div className="space-y-4" data-oid="e.vxg9e">
                                {ambassadorProgram.requirements.map((requirement, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center"
                                        data-oid="5ca3aga"
                                    >
                                        <div
                                            className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3"
                                            data-oid="clu2u09"
                                        >
                                            <span className="text-white text-sm" data-oid="smrssyb">
                                                !
                                            </span>
                                        </div>
                                        <span className="text-gray-700" data-oid="gdp8a2-">
                                            {requirement}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12" data-oid="segmx2h">
                        <button
                            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-105"
                            data-oid="-qmxeb9"
                        >
                            Apply for Ambassador Program
                        </button>
                    </div>
                </div>
            </div>

            {/* Event Detail Modal */}
            {selectedEvent && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    data-oid="14p8405"
                >
                    <div
                        className="bg-white rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto"
                        data-oid="nsllg-l"
                    >
                        <div className="p-8" data-oid=".ss8gj.">
                            <div
                                className="flex justify-between items-start mb-6"
                                data-oid="stqa_rn"
                            >
                                <div className="flex items-center" data-oid="cpulelw">
                                    <div className="text-5xl mr-4" data-oid="wh3-5os">
                                        {selectedEvent.image}
                                    </div>
                                    <div data-oid=":f6vabq">
                                        <h2
                                            className="text-2xl font-bold text-gray-800"
                                            data-oid="i:0_171"
                                        >
                                            {selectedEvent.title}
                                        </h2>
                                        <p
                                            className="text-green-600 font-medium"
                                            data-oid="ctdyt-o"
                                        >
                                            {selectedEvent.type}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedEvent(null)}
                                    className="text-gray-500 hover:text-gray-700 text-2xl"
                                    data-oid="6vj75f0"
                                >
                                    ✕
                                </button>
                            </div>

                            <p className="text-gray-600 mb-6" data-oid="gaixqtk">
                                {selectedEvent.description}
                            </p>

                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                                data-oid="88zraj0"
                            >
                                <div data-oid="6nzpx6x">
                                    <h3
                                        className="font-semibold text-gray-800 mb-3"
                                        data-oid="ei06rqg"
                                    >
                                        Event Details
                                    </h3>
                                    <div
                                        className="space-y-2 text-sm text-gray-700"
                                        data-oid="h.rm75x"
                                    >
                                        <div data-oid="t3-1nit">
                                            📅 {new Date(selectedEvent.date).toLocaleDateString()}
                                        </div>
                                        <div data-oid="u72724u">⏰ {selectedEvent.time}</div>
                                        <div data-oid="06yzyv5">
                                            👥 {selectedEvent.capacity} max capacity
                                        </div>
                                        <div data-oid="t7n1l8j">
                                            💰 ${selectedEvent.price} per person
                                        </div>
                                    </div>
                                </div>

                                <div data-oid="hl.s3i5">
                                    <h3
                                        className="font-semibold text-gray-800 mb-3"
                                        data-oid="kbqb:f."
                                    >
                                        What You'll Learn
                                    </h3>
                                    <div className="space-y-1" data-oid="02p9gy0">
                                        {selectedEvent.skills.map(
                                            (skill: string, index: number) => (
                                                <div
                                                    key={index}
                                                    className="text-sm text-gray-700"
                                                    data-oid="2ace5at"
                                                >
                                                    • {skill}
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between" data-oid="..xpcat">
                                <div className="text-sm text-gray-600" data-oid="pmas0cv">
                                    {selectedEvent.registered} of {selectedEvent.capacity} spots
                                    filled
                                </div>
                                <button
                                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                    data-oid="oh9uth4"
                                >
                                    Register for Event
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
