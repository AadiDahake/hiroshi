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
        <div
            className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-16"
            data-oid="y0bifh6"
        >
            {/* Hero Section */}
            <div
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16"
                data-oid=":q6v1kb"
            >
                <div className="max-w-6xl mx-auto px-6 text-center" data-oid="0dm4rrh">
                    <h1 className="text-5xl md:text-6xl font-light mb-4" data-oid="3yzv22h">
                        Reservations & Ordering
                    </h1>
                    <p className="text-xl md:text-2xl font-light" data-oid="w_piu:8">
                        Book your table or order for pickup and delivery
                    </p>
                </div>
            </div>

            {/* Service Type Selection */}
            <div className="py-12 bg-white" data-oid="0dbxt5w">
                <div className="max-w-4xl mx-auto px-6" data-oid="r_:aagg">
                    <div className="flex justify-center mb-8" data-oid="ggemwld">
                        <div className="bg-gray-100 rounded-full p-1 flex" data-oid="ahb-0md">
                            <button
                                onClick={() => setOrderType('dine-in')}
                                className={`px-6 py-3 rounded-full font-medium transition-all ${
                                    orderType === 'dine-in'
                                        ? 'bg-green-600 text-white shadow-md'
                                        : 'text-gray-600 hover:text-green-600'
                                }`}
                                data-oid=":8697eg"
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
                                data-oid="tma96de"
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
                                data-oid="k0ncr_."
                            >
                                🚚 Delivery
                            </button>
                        </div>
                    </div>

                    {/* Dine-In Reservation */}
                    {orderType === 'dine-in' && (
                        <div className="bg-white rounded-2xl shadow-lg p-8" data-oid="a6t8mw4">
                            <h2
                                className="text-2xl font-bold text-gray-800 mb-6"
                                data-oid="aw9wihe"
                            >
                                Make a Reservation
                            </h2>

                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                                data-oid="7lnunj8"
                            >
                                <div data-oid="rbo10wp">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="a938o7s"
                                    >
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        min={new Date().toISOString().split('T')[0]}
                                        data-oid="kw_l12q"
                                    />
                                </div>

                                <div data-oid="0djqzjr">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="gck0w2b"
                                    >
                                        Party Size
                                    </label>
                                    <select
                                        value={partySize}
                                        onChange={(e) => setPartySize(Number(e.target.value))}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        data-oid="x_52q2n"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map((size) => (
                                            <option key={size} value={size} data-oid="b8kwf_2">
                                                {size} {size === 1 ? 'Guest' : 'Guests'}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="mb-6" data-oid="bg1umk9">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="wz:elyw"
                                >
                                    Preferred Time
                                </label>
                                <div
                                    className="grid grid-cols-3 md:grid-cols-5 gap-2"
                                    data-oid="4.w2.oc"
                                >
                                    {timeSlots.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={`px-4 py-2 rounded-lg border transition-all ${
                                                selectedTime === time
                                                    ? 'bg-green-600 text-white border-green-600'
                                                    : 'bg-white text-gray-700 border-gray-300 hover:border-green-400'
                                            }`}
                                            data-oid="islo497"
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                                data-oid="gj.6vs5"
                            >
                                <div data-oid="39hja6p">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="j1xtmlu"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        placeholder="Your name"
                                        data-oid="yy2p-gv"
                                    />
                                </div>

                                <div data-oid="7eggws9">
                                    <label
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                        data-oid="vmrziev"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        placeholder="Your phone number"
                                        data-oid="tbggsdl"
                                    />
                                </div>
                            </div>

                            <div className="mb-6" data-oid="naq45i5">
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                    data-oid="69:_4hn"
                                >
                                    Special Requests
                                </label>
                                <textarea
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    rows={3}
                                    placeholder="Any dietary restrictions, allergies, or special occasions?"
                                    data-oid="g:11l5_"
                                ></textarea>
                            </div>

                            <button
                                className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                data-oid="klghk-7"
                            >
                                Confirm Reservation
                            </button>
                        </div>
                    )}

                    {/* Carry-Out & Delivery Ordering */}
                    {(orderType === 'carry-out' || orderType === 'delivery') && (
                        <div className="space-y-8" data-oid="97thlvx">
                            {/* Delivery Zone Selection */}
                            {orderType === 'delivery' && (
                                <div
                                    className="bg-white rounded-2xl shadow-lg p-6"
                                    data-oid="65uj55g"
                                >
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-4"
                                        data-oid="yj1baz9"
                                    >
                                        Delivery Zone
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                        data-oid="2rkygql"
                                    >
                                        {deliveryZones.map((zone, index) => (
                                            <div
                                                key={index}
                                                className="border border-gray-200 rounded-lg p-4 hover:border-green-400 cursor-pointer transition-colors"
                                                data-oid="rndualt"
                                            >
                                                <div
                                                    className="flex justify-between items-center"
                                                    data-oid="wmyeleu"
                                                >
                                                    <div data-oid="1pd140:">
                                                        <h4
                                                            className="font-semibold text-gray-800"
                                                            data-oid="-yxpw:r"
                                                        >
                                                            {zone.name}
                                                        </h4>
                                                        <p
                                                            className="text-sm text-gray-600"
                                                            data-oid="6p7d6ra"
                                                        >
                                                            {zone.time}
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="text-green-600 font-semibold"
                                                        data-oid="mpoph65"
                                                    >
                                                        ${zone.fee}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Menu Items */}
                            <div className="bg-white rounded-2xl shadow-lg p-6" data-oid=".z2iv0s">
                                <h3
                                    className="text-xl font-bold text-gray-800 mb-4"
                                    data-oid="yls9.dq"
                                >
                                    Menu
                                </h3>
                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                                    data-oid="r0yvt-2"
                                >
                                    {menuItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className="border border-gray-200 rounded-lg p-4"
                                            data-oid="2.zp783"
                                        >
                                            <div className="text-center mb-3" data-oid="_vb7220">
                                                <div className="text-4xl mb-2" data-oid="sd:0wq5">
                                                    {item.image}
                                                </div>
                                                <h4
                                                    className="font-semibold text-gray-800"
                                                    data-oid="v0euh7l"
                                                >
                                                    {item.name}
                                                </h4>
                                                <p
                                                    className="text-green-600 font-bold"
                                                    data-oid="82jatyw"
                                                >
                                                    ${item.price}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => addToCart(item)}
                                                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                                                data-oid="um4pe:k"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Cart */}
                            {cartItems.length > 0 && (
                                <div
                                    className="bg-white rounded-2xl shadow-lg p-6"
                                    data-oid=".911zm5"
                                >
                                    <h3
                                        className="text-xl font-bold text-gray-800 mb-4"
                                        data-oid="1asl_0x"
                                    >
                                        Your Order
                                    </h3>
                                    <div className="space-y-3 mb-4" data-oid="fvn9g:r">
                                        {cartItems.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex justify-between items-center"
                                                data-oid="z-5ssji"
                                            >
                                                <div data-oid="zb0rmtm">
                                                    <span
                                                        className="font-medium"
                                                        data-oid="kutrf-4"
                                                    >
                                                        {item.name}
                                                    </span>
                                                    <span
                                                        className="text-gray-600 ml-2"
                                                        data-oid="-j.:8hz"
                                                    >
                                                        x{item.quantity}
                                                    </span>
                                                </div>
                                                <div
                                                    className="flex items-center space-x-2"
                                                    data-oid="lx217ok"
                                                >
                                                    <span
                                                        className="font-semibold"
                                                        data-oid="hbpo.i3"
                                                    >
                                                        ${item.price * item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="text-red-500 hover:text-red-700"
                                                        data-oid="-2gopio"
                                                    >
                                                        ✕
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t pt-4" data-oid="u3_.4lf">
                                        <div
                                            className="flex justify-between items-center mb-4"
                                            data-oid="nvw08n2"
                                        >
                                            <span className="text-lg font-bold" data-oid="-i6438b">
                                                Total: ${cartTotal.toFixed(2)}
                                            </span>
                                            <div
                                                className="text-sm text-green-600"
                                                data-oid=".7rm5mi"
                                            >
                                                💎 {loyaltyPoints} points available
                                            </div>
                                        </div>

                                        <button
                                            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                            data-oid="g-p-gts"
                                        >
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
            <div className="py-12 bg-gradient-to-br from-green-50 to-emerald-50" data-oid="duyzana">
                <div className="max-w-4xl mx-auto px-6" data-oid="d5jyjmb">
                    <div className="bg-white rounded-2xl shadow-lg p-8" data-oid="o-hbqto">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="ahu634-">
                            Your Dining Preferences
                        </h2>
                        <p className="text-gray-600 mb-6" data-oid="v5ks5d2">
                            Save your preferences for faster ordering and personalized
                            recommendations.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="m33-yh5">
                            <div data-oid="5uu182y">
                                <h3 className="font-semibold text-gray-800 mb-3" data-oid="h5lhfuu">
                                    Dietary Preferences
                                </h3>
                                <div className="space-y-2" data-oid="of6g:sg">
                                    {['Vegan', 'Vegetarian', 'Gluten-Free', 'Keto', 'Raw'].map(
                                        (diet) => (
                                            <label
                                                key={diet}
                                                className="flex items-center"
                                                data-oid="f.58_w8"
                                            >
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
                                                    data-oid="4xd0aw2"
                                                />

                                                <span
                                                    className="ml-2 text-gray-700"
                                                    data-oid="oh_zfwy"
                                                >
                                                    {diet}
                                                </span>
                                            </label>
                                        ),
                                    )}
                                </div>
                            </div>

                            <div data-oid="rqgnn01">
                                <h3 className="font-semibold text-gray-800 mb-3" data-oid="3x3pma.">
                                    Allergies
                                </h3>
                                <div className="space-y-2" data-oid="t45cs4x">
                                    {['Nuts', 'Soy', 'Gluten', 'Sesame'].map((allergy) => (
                                        <label
                                            key={allergy}
                                            className="flex items-center"
                                            data-oid="23_fbx7"
                                        >
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
                                                data-oid="v1agfkh"
                                            />

                                            <span className="ml-2 text-gray-700" data-oid="z_-240c">
                                                {allergy}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button
                            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                            data-oid="ylm.aih"
                        >
                            Save Preferences
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
