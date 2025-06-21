"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-yellow-400">
                Hiroshi Ramen
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Rich, savory, vegetarian ramen crafted with authentic broths, hand-pulled noodles,
              and fresh toppings. Taste the tradition in every bowl.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                📸
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                📘
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                🐦
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <span className="sr-only">Yelp</span>
                ⭐
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Menu & Reservations
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                <span>
                  456 Noodle Lane
                  <br />
                  San Francisco, CA 94102
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <span>(415) 567-8901</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>hello@hiroshiramen.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-yellow-400 mb-2">
                🍜 Dine-In Hours
              </h4>
              <p className="text-gray-300 text-sm">
                Mon-Fri: 11am–3pm, 5pm–10pm
                <br />
                Sat-Sun: 11am–10pm
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-400 mb-2">
                🥡 Takeout Hours
              </h4>
              <p className="text-gray-300 text-sm">Daily: 11am–9pm</p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-400 mb-2">
                🚗 Delivery Hours
              </h4>
              <p className="text-gray-300 text-sm">Daily: 11am–9pm</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Hiroshi Ramen. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              Accessibility
            </Link>
          </div>
        </div>

        {/* Award Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-yellow-900 rounded-full px-6 py-3">
            <span className="text-2xl mr-3">🍜</span>
            <div className="text-left">
              <div className="text-yellow-400 font-semibold text-sm">
                Awarded Best Ramen 2024
              </div>
              <div className="text-gray-300 text-xs">
                Voted by Global Ramen Awards
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
