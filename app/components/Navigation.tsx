'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Our Story', href: '/story' },
        { name: 'Menu', href: '/menu' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Kitchen & Philosophy', href: '/kitchen' },
        { name: 'Reservations', href: '/reservations' },
        { name: 'Community', href: '/community' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Shop', href: '/shop' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                darkMode ? 'bg-gray-900 text-white' : 'bg-white/95 text-gray-800'
            } backdrop-blur-md shadow-lg`}
            data-oid=":cn8bak"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="9klw:8-">
                <div className="flex justify-between items-center h-16" data-oid=".sbrnjs">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2" data-oid="72.f.9n">
                        <div className="text-2xl" data-oid="j0_0_o4">
                            🌱
                        </div>
                        <span className="text-xl font-bold text-green-600" data-oid="e7iiec_">
                            GreenLeaf Bistro
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8" data-oid="gk.nv9.">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="hover:text-green-600 transition-colors duration-200 font-medium"
                                data-oid="8zfo6n7"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right side controls */}
                    <div className="flex items-center space-x-4" data-oid="d2gccoh">
                        {/* Dark mode toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            data-oid="yamdsm7"
                        >
                            {darkMode ? '☀️' : '🌙'}
                        </button>

                        {/* Language selector */}
                        <select
                            className="bg-transparent border border-gray-300 rounded px-2 py-1 text-sm"
                            data-oid="ji-a9q4"
                        >
                            <option value="en" data-oid="i2jvc6k">
                                EN
                            </option>
                            <option value="es" data-oid="izx1ew1">
                                ES
                            </option>
                            <option value="fr" data-oid="-rb.9_h">
                                FR
                            </option>
                        </select>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                            data-oid="h.ur12y"
                        >
                            <div
                                className="w-6 h-6 flex flex-col justify-center items-center"
                                data-oid=":j9zyxr"
                            >
                                <span
                                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                                        isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                                    }`}
                                    data-oid="cc-pwo."
                                ></span>
                                <span
                                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                                        isOpen ? 'opacity-0' : 'opacity-100'
                                    }`}
                                    data-oid="7xljyvu"
                                ></span>
                                <span
                                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                                        isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                                    }`}
                                    data-oid="teqwio3"
                                ></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`lg:hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                    data-oid="pa11368"
                >
                    <div className="py-4 space-y-2" data-oid="ekya_j9">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                                onClick={() => setIsOpen(false)}
                                data-oid="vsrnvgd"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
