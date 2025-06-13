"use client";

import { useState } from "react";

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      type: "bot",
      message: "Hi! I'm here to help. What can I assist you with today?",
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");

  const locations = [
    {
      name: "Main Restaurant",
      address: "123 Green Street, Downtown",
      phone: "(555) 123-4567",
      hours: "Mon-Thu: 11am-9pm, Fri-Sat: 11am-10pm, Sun: 10am-8pm",
      type: "dine-in",
      icon: "🏪",
    },
    {
      name: "Express Pickup",
      address: "456 Quick Ave, University District",
      phone: "(555) 234-5678",
      hours: "Daily: 8am-8pm",
      type: "pickup",
      icon: "🥡",
    },
    {
      name: "Drive-Through",
      address: "789 Fast Lane, Riverside",
      phone: "(555) 345-6789",
      hours: "Daily: 7am-10pm",
      type: "drive-through",
      icon: "🚗",
    },
  ];

  const faqItems = [
    {
      question: "Are all your dishes completely plant-based?",
      answer:
        "Yes! Every item on our menu is 100% plant-based. We use no animal products whatsoever, including dairy, eggs, or honey.",
    },
    {
      question: "Do you accommodate food allergies?",
      answer:
        "Absolutely. We can accommodate most allergies including nuts, soy, and gluten. Please inform us when ordering and we'll ensure your meal is prepared safely.",
    },
    {
      question: "Where do you source your ingredients?",
      answer:
        "We source 98% of our ingredients from local farms within 50 miles. Our partnerships include Green Valley Organic, Sunrise Mushroom Farm, and Heritage Grain Collective.",
    },
    {
      question: "Do you offer catering services?",
      answer:
        "Yes! We provide catering for events of all sizes. Contact us at least 48 hours in advance to discuss your needs.",
    },
    {
      question: "Can I make reservations online?",
      answer:
        "Yes, you can make reservations through our website or by calling our main location. We recommend booking in advance, especially for weekend dinners.",
    },
    {
      question: "Do you have a loyalty program?",
      answer:
        "Yes! Our GreenPoints program rewards you with points for every purchase. Points can be redeemed for free meals and exclusive experiences.",
    },
  ];

  const quickResponses = [
    "Hours and locations",
    "Make a reservation",
    "Dietary restrictions",
    "Catering inquiry",
    "Nutritional information",
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form submitted:", contactForm);
    // Reset form
    setContactForm({ name: "", email: "", subject: "", message: "" });
  };

  const handleChatMessage = (message: string) => {
    setChatMessages((prev) => [...prev, { type: "user", message }]);

    // Simple bot responses
    setTimeout(() => {
      let botResponse = "";
      if (message.toLowerCase().includes("hours")) {
        botResponse =
          "Our main restaurant is open Mon-Thu: 11am-9pm, Fri-Sat: 11am-10pm, Sun: 10am-8pm. Would you like information about our other locations?";
      } else if (message.toLowerCase().includes("reservation")) {
        botResponse =
          "You can make a reservation on our website or call (555) 123-4567. How many people will be dining?";
      } else if (
        message.toLowerCase().includes("dietary") ||
        message.toLowerCase().includes("allergy")
      ) {
        botResponse =
          "We accommodate all dietary restrictions and allergies. All our food is plant-based, and we can prepare dishes without common allergens. What specific dietary needs do you have?";
      } else if (message.toLowerCase().includes("catering")) {
        botResponse =
          "We offer catering for events of all sizes! Please call (555) 123-4567 or email catering@greenleafbistro.com with your event details.";
      } else {
        botResponse =
          "Thanks for your message! For specific questions, please call us at (555) 123-4567 or fill out our contact form. Is there anything else I can help with?";
      }

      setChatMessages((prev) => [
        ...prev,
        { type: "bot", message: botResponse },
      ]);
    }, 1000);

    setCurrentMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with any questions or
            feedback.
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    value={contactForm.subject}
                    onChange={(e) =>
                      setContactForm((prev) => ({
                        ...prev,
                        subject: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="catering">Catering</option>
                    <option value="jobs">Job Opportunities</option>
                    <option value="partnerships">Partnerships</option>
                    <option value="press">Press Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    rows={6}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Quick Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📞</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">✉️</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">hello@greenleafbistro.com</p>
                    <p className="text-sm text-gray-500">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      123 Green Street
                      <br />
                      Downtown, City 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">📱</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Social Media
                    </h3>
                    <div className="flex space-x-4 mt-2">
                      <a
                        href="#"
                        className="text-green-600 hover:text-green-700"
                      >
                        Instagram
                      </a>
                      <a
                        href="#"
                        className="text-green-600 hover:text-green-700"
                      >
                        Facebook
                      </a>
                      <a
                        href="#"
                        className="text-green-600 hover:text-green-700"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Map */}
      <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Our Locations
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map placeholder */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Interactive Map
                  </h3>
                  <p className="text-gray-600">
                    Find our locations and get directions
                  </p>
                </div>
              </div>
            </div>

            {/* Location details */}
            <div className="space-y-6">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">{location.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {location.name}
                      </h3>
                      <p className="text-gray-600 mb-2">{location.address}</p>
                      <p className="text-green-600 font-medium mb-2">
                        {location.phone}
                      </p>
                      <p className="text-sm text-gray-500">{location.hours}</p>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                      Get Directions
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {chatOpen ? (
          <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col">
            <div className="bg-green-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
              <h3 className="font-semibold">GreenLeaf Assistant</h3>
              <button
                onClick={() => setChatOpen(false)}
                className="text-white hover:text-gray-200"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      msg.type === "user"
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickResponses.map((response, index) => (
                  <button
                    key={index}
                    onClick={() => handleChatMessage(response)}
                    className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full hover:bg-green-200 transition-colors"
                  >
                    {response}
                  </button>
                ))}
              </div>
              <div className="flex">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" &&
                    currentMessage.trim() &&
                    handleChatMessage(currentMessage)
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Type a message..."
                />

                <button
                  onClick={() =>
                    currentMessage.trim() && handleChatMessage(currentMessage)
                  }
                  className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setChatOpen(true)}
            className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all transform hover:scale-110"
          >
            <span className="text-2xl">💬</span>
          </button>
        )}
      </div>
    </div>
  );
}
