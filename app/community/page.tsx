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
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-16">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-light mb-6">Community & Education</h1>
                    <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
                        Join our community of sustainability advocates and learn together
                    </p>
                </div>
            </div>

            {/* Events Calendar */}
            <div className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
                        Upcoming Events
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                                onClick={() => setSelectedEvent(event)}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-4xl">{event.image}</div>
                                    <div className="text-right">
                                        <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            {event.type}
                                        </div>
                                        <div className="text-2xl font-bold text-green-600 mt-2">
                                            ${event.price}
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {event.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{event.description}</p>

                                <div className="space-y-2 text-sm text-gray-700">
                                    <div className="flex items-center">
                                        <span className="mr-2">📅</span>
                                        {new Date(event.date).toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </div>
                                    <div className="flex items-center">
                                        <span className="mr-2">⏰</span>
                                        {event.time}
                                    </div>
                                    <div className="flex items-center">
                                        <span className="mr-2">👥</span>
                                        {event.registered}/{event.capacity} registered
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-green-600 h-2 rounded-full transition-all duration-300"
                                            style={{
                                                width: `${(event.registered / event.capacity) * 100}%`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Volunteer Opportunities */}
            <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
                        Volunteer With Us
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {volunteerOpportunities.map((opportunity, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="text-3xl mr-4">{opportunity.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">
                                            {opportunity.title}
                                        </h3>
                                        <p className="text-green-600 font-medium">
                                            {opportunity.commitment}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-4">{opportunity.description}</p>

                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-800 mb-2">
                                        Skills you'll gain:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {opportunity.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                                    Apply to Volunteer
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Volunteer Application Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                            Volunteer Application
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
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
                            >
                                <option value="">Select an area</option>
                                <option value="garden">Urban Garden</option>
                                <option value="food-donation">Food Donation</option>
                                <option value="workshops">Workshops</option>
                                <option value="social-media">Social Media</option>
                            </select>
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
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
                            ></textarea>
                        </div>

                        <button className="mt-6 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                            Submit Application
                        </button>
                    </div>
                </div>
            </div>

            {/* Ambassador Program */}
            <div className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
                        Ambassador Program
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Program Benefits
                            </h3>
                            <div className="space-y-4">
                                {ambassadorProgram.benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-white text-sm">✓</span>
                                        </div>
                                        <span className="text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Requirements</h3>
                            <div className="space-y-4">
                                {ambassadorProgram.requirements.map((requirement, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-white text-sm">!</span>
                                        </div>
                                        <span className="text-gray-700">{requirement}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-105">
                            Apply for Ambassador Program
                        </button>
                    </div>
                </div>
            </div>

            {/* Event Detail Modal */}
            {selectedEvent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto">
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center">
                                    <div className="text-5xl mr-4">{selectedEvent.image}</div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800">
                                            {selectedEvent.title}
                                        </h2>
                                        <p className="text-green-600 font-medium">
                                            {selectedEvent.type}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedEvent(null)}
                                    className="text-gray-500 hover:text-gray-700 text-2xl"
                                >
                                    ✕
                                </button>
                            </div>

                            <p className="text-gray-600 mb-6">{selectedEvent.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-3">
                                        Event Details
                                    </h3>
                                    <div className="space-y-2 text-sm text-gray-700">
                                        <div>
                                            📅 {new Date(selectedEvent.date).toLocaleDateString()}
                                        </div>
                                        <div>⏰ {selectedEvent.time}</div>
                                        <div>👥 {selectedEvent.capacity} max capacity</div>
                                        <div>💰 ${selectedEvent.price} per person</div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-3">
                                        What You'll Learn
                                    </h3>
                                    <div className="space-y-1">
                                        {selectedEvent.skills.map(
                                            (skill: string, index: number) => (
                                                <div key={index} className="text-sm text-gray-700">
                                                    • {skill}
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-600">
                                    {selectedEvent.registered} of {selectedEvent.capacity} spots
                                    filled
                                </div>
                                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
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
