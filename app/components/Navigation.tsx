'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Our Story', href: '/story' },
        { name: 'Menu & Reservations', href: '/menu' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                darkMode ? 'bg-gray-900 text-white' : 'bg-white/95 text-gray-800'
            } backdrop-blur-md shadow-lg`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="text-2xl">🌱</div>
                        <span className="text-xl font-bold text-green-600">GreenLeaf Bistro</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="hover:text-green-600 transition-colors duration-200 font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right side controls */}
                    <div className="flex items-center space-x-4">
                        {/* Dark mode toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            {darkMode ? '☀️' : '🌙'}
                        </button>

                        {/* Language selector */}

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <div className="w-6 h-6 flex flex-col justify-center items-center">
                                <span
                                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                                        isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                                    }`}
                                ></span>
                                <span
                                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                                        isOpen ? 'opacity-0' : 'opacity-100'
                                    }`}
                                ></span>
                                <span
                                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                                        isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                                    }`}
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
                >
                    <div className="py-4 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                                onClick={() => setIsOpen(false)}
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
