'use client';

import { useState, useEffect } from 'react';

export default function ReservationsPage() {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [partySize, setPartySize] = useState(2);
    const [orderType, setOrderType] = useState<'dine-in' | 'carry-out' | 'delivery'>('dine-in');
    const [loyaltyPoints, setLoyaltyPoints] = useState(1250);
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [userPreferences, setUserPreferences] = useState({
        dietary: [] as string[],
        allergies: [] as string[],
        seating: 'no-preference',
    });

    const timeSlots = [
        '5:00 PM',
        '5:30 PM',
        '6:00 PM',
        '6:30 PM',
        '7:00 PM',
        '7:30 PM',
        '8:00 PM',
        '8:30 PM',
        '9:00 PM',
    ];

    const deliveryZones = [
        { name: 'Downtown', fee: 2.99, time: '25-35 min' },
        { name: 'University District', fee: 3.99, time: '30-40 min' },
        { name: 'Riverside', fee: 4.99, time: '35-45 min' },
        { name: 'Hillside', fee: 5.99, time: '40-50 min' },
    ];

    const menuItems = [
        {
            id: 1,
            name: 'Rainbow Buddha Bowl',
            price: 16,
            image: '🥗',
            category: 'Bowls',
        },
        {
            id: 2,
            name: 'Wild Mushroom Risotto',
            price: 22,
            image: '🍄',
            category: 'Mains',
        },
        {
            id: 3,
            name: 'Jackfruit Tacos',
            price: 15,
            image: '🌮',
            category: 'Mexican',
        },
    ];

    const addToCart = (item: any) => {
        setCartItems((prev) => [...prev, { ...item, quantity: 1, id: Date.now() }]);
    };

    const removeFromCart = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-16">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-light mb-4">
                        Reservations & Ordering
                    </h1>
                    <p className="text-xl md:text-2xl font-light">
                        Book your table or order for pickup and delivery
                    </p>
                </div>
            </div>

            {/* Service Type Selection */}
            <div className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex justify-center mb-8">
                        <div className="bg-gray-100 rounded-full p-1 flex">
                            <button
                                onClick={() => setOrderType('dine-in')}
                                className={`px-6 py-3 rounded-full font-medium transition-all ${
                                    orderType === 'dine-in'
                                        ? 'bg-green-600 text-white shadow-md'
                                        : 'text-gray-600 hover:text-green-600'
                                }`}
                            >
                                🍽️ Dine-In Reservation
                            </button>
                            <button
                                onClick={() => setOrderType('carry-out')}
                                className={`px-6 py-3 rounded-full font-medium transition-all ${
                                    orderType === 'carry-out'
                                        ? 'bg-green-600 text-white shadow-md'
                                        : 'text-gray-600 hover:text-green-600'
                                }`}
                            >
                                🥡 Carry-Out
                            </button>
                            <button
                                onClick={() => setOrderType('delivery')}
                                className={`px-6 py-3 rounded-full font-medium transition-all ${
                                    orderType === 'delivery'
                                        ? 'bg-green-600 text-white shadow-md'
                                        : 'text-gray-600 hover:text-green-600'
                                }`}
                            >
                                🚚 Delivery
                            </button>
                        </div>
                    </div>

                    {/* Dine-In Reservation */}
                    {orderType === 'dine-in' && (
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                Make a Reservation
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Party Size
                                    </label>
                                    <select
                                        value={partySize}
                                        onChange={(e) => setPartySize(Number(e.target.value))}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map((size) => (
                                            <option key={size} value={size}>
                                                {size} {size === 1 ? 'Guest' : 'Guests'}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Preferred Time
                                </label>
                                <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                                    {timeSlots.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={`px-4 py-2 rounded-lg border transition-all ${
                                                selectedTime === time
                                                    ? 'bg-green-600 text-white border-green-600'
                                                    : 'bg-white text-gray-700 border-gray-300 hover:border-green-400'
                                            }`}
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
                    )}

                    {/* Carry-Out & Delivery Ordering */}
                    {(orderType === 'carry-out' || orderType === 'delivery') && (
                        <div className="space-y-8">
                            {/* Delivery Zone Selection */}
                            {orderType === 'delivery' && (
                                <div className="bg-white rounded-2xl shadow-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                                        Delivery Zone
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {deliveryZones.map((zone, index) => (
                                            <div
                                                key={index}
                                                className="border border-gray-200 rounded-lg p-4 hover:border-green-400 cursor-pointer transition-colors"
                                            >
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800">
                                                            {zone.name}
                                                        </h4>
                                                        <p className="text-sm text-gray-600">
                                                            {zone.time}
                                                        </p>
                                                    </div>
                                                    <div className="text-green-600 font-semibold">
                                                        ${zone.fee}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Menu Items */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Menu</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {menuItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className="border border-gray-200 rounded-lg p-4"
                                        >
                                            <div className="text-center mb-3">
                                                <div className="text-4xl mb-2">{item.image}</div>
                                                <h4 className="font-semibold text-gray-800">
                                                    {item.name}
                                                </h4>
                                                <p className="text-green-600 font-bold">
                                                    ${item.price}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => addToCart(item)}
                                                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Cart */}
                            {cartItems.length > 0 && (
                                <div className="bg-white rounded-2xl shadow-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                                        Your Order
                                    </h3>
                                    <div className="space-y-3 mb-4">
                                        {cartItems.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex justify-between items-center"
                                            >
                                                <div>
                                                    <span className="font-medium">{item.name}</span>
                                                    <span className="text-gray-600 ml-2">
                                                        x{item.quantity}
                                                    </span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <span className="font-semibold">
                                                        ${item.price * item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="text-red-500 hover:text-red-700"
                                                    >
                                                        ✕
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t pt-4">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-lg font-bold">
                                                Total: ${cartTotal.toFixed(2)}
                                            </span>
                                            <div className="text-sm text-green-600">
                                                💎 {loyaltyPoints} points available
                                            </div>
                                        </div>

                                        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                                            {orderType === 'carry-out'
                                                ? 'Place Pickup Order'
                                                : 'Place Delivery Order'}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Dietary Preferences Profile */}
            <div className="py-12 bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Your Dining Preferences
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Save your preferences for faster ordering and personalized
                            recommendations.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-3">
                                    Dietary Preferences
                                </h3>
                                <div className="space-y-2">
                                    {['Vegan', 'Vegetarian', 'Gluten-Free', 'Keto', 'Raw'].map(
                                        (diet) => (
                                            <label key={diet} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                                                    checked={userPreferences.dietary.includes(diet)}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setUserPreferences((prev) => ({
                                                                ...prev,
                                                                dietary: [...prev.dietary, diet],
                                                            }));
                                                        } else {
                                                            setUserPreferences((prev) => ({
                                                                ...prev,
                                                                dietary: prev.dietary.filter(
                                                                    (d) => d !== diet,
                                                                ),
                                                            }));
                                                        }
                                                    }}
                                                />

                                                <span className="ml-2 text-gray-700">{diet}</span>
                                            </label>
                                        ),
                                    )}
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800 mb-3">Allergies</h3>
                                <div className="space-y-2">
                                    {['Nuts', 'Soy', 'Gluten', 'Sesame'].map((allergy) => (
                                        <label key={allergy} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                                                checked={userPreferences.allergies.includes(
                                                    allergy,
                                                )}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setUserPreferences((prev) => ({
                                                            ...prev,
                                                            allergies: [...prev.allergies, allergy],
                                                        }));
                                                    } else {
                                                        setUserPreferences((prev) => ({
                                                            ...prev,
                                                            allergies: prev.allergies.filter(
                                                                (a) => a !== allergy,
                                                            ),
                                                        }));
                                                    }
                                                }}
                                            />

                                            <span className="ml-2 text-gray-700">{allergy}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                            Save Preferences
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
