"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🌱</div>
              <span className="text-xl font-bold text-green-400">
                GreenLeaf Bistro
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Farm-fresh, plant-based cuisine that nourishes you and the planet.
              Join us in creating a more sustainable food system.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                📱
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                📘
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                🐦
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <span className="sr-only">YouTube</span>
                📺
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
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/story"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Menu & Reservations
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-green-400 transition-colors"
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
                  123 Green Street
                  <br />
                  Downtown, City 12345
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>hello@greenleafbistro.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-green-400 mb-2">
                🏪 Main Restaurant
              </h4>
              <p className="text-gray-300 text-sm">
                Mon-Thu: 11am-9pm
                <br />
                Fri-Sat: 11am-10pm
                <br />
                Sun: 10am-8pm
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-400 mb-2">
                🥡 Express Pickup
              </h4>
              <p className="text-gray-300 text-sm">Daily: 8am-8pm</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-400 mb-2">
                🚗 Drive-Through
              </h4>
              <p className="text-gray-300 text-sm">Daily: 7am-10pm</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 GreenLeaf Bistro. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link
              href="#"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              Accessibility
            </Link>
          </div>
        </div>

        {/* Sustainability Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-green-900 rounded-full px-6 py-3">
            <span className="text-2xl mr-3">🌍</span>
            <div className="text-left">
              <div className="text-green-400 font-semibold text-sm">
                Carbon Neutral Restaurant
              </div>
              <div className="text-gray-300 text-xs">
                Certified by Green Dining Alliance
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
