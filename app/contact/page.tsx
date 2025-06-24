"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Mail, Phone, Send, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const faqItems = [
    {
      question: "Are all your dishes completely plant-based?",
      answer:
        "Yes! Every item on our menu is 100% plant-based. We use no animal products whatsoever, including dairy, eggs, or honey.",
    },
    {
      question: "Do you accommodate food allergies?",
      answer:
        "Absolutely. We can accommodate most allergies including nuts, soy, and gluten. Please inform us when ordering and we will ensure your meal is prepared safely.",
    },
    {
      question: "Where do you source your ingredients?",
      answer:
        "We source our ingredients from dedicated local farms and specialty purveyors from Japan to ensure authenticity and freshness in every bowl.",
    },
    {
      question: "Do you offer catering services?",
      answer:
        "Yes! We provide catering for events of all sizes. Contact us at least 48 hours in advance to discuss your needs.",
    },
    {
      question: "Can I make reservations online?",
      answer:
        'Yes, you can make reservations through our "Reservations" page. We recommend booking in advance, especially for weekend dinners.',
    },
  ];

  return (
    <>
      <Navbar currentPage="Contact" />
      <div className="bg-[var(--color-bianca-50)] text-marshland-900 font-sans relative overflow-hidden">
        {/* Dark Header Section with Footer Theme */}
        <div className="bg-gradient-to-b from-shiso-900 via-shiso-800 to-shiso-900 relative overflow-hidden">
          {/* Animated Background Elements for Header */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Lanterns */}
            <motion.div
              className="absolute top-20 left-10 w-8 h-12 bg-amber-400/20 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-40 right-20 w-6 h-10 bg-amber-300/30 rounded-full"
              animate={{
                y: [0, -15, 0],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute bottom-20 left-1/4 w-7 h-11 bg-amber-500/25 rounded-full"
              animate={{
                y: [0, -25, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </div>
          <main className="container mx-auto px-4 py-12 relative z-10">
            <header className="text-center w-full clamp-[pt,18,24,sm,3xl] clamp-[pb,18,24,sm,3xl] relative">
              {/* Vertical Kanji background */}
              <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
                <span className="font-sawarabi-mincho text-[20vw] text-bianca-50 opacity-5 select-none" style={{ writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '0.2em' }}>連絡先</span>
              </div>
              <motion.h1 
                className="text-6xl font-serif mb-2 text-bianca-50 relative z-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Contact Us
              </motion.h1>
              <motion.p 
                className="text-xl text-shiso-200 relative z-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We cherish our community. Whether you have a question or just want to share your experience, we are here to listen.
              </motion.p>
            </header>
          </main>
        </div>
        {/* Rest of the page with original light theme */}
        <main>
          <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
              >
                <ContactInfo />
                <div className="h-80 bg-gray-200 rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Stylized map of the restaurant location"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </section>
          <section className="bg-bianca-200 py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-serif text-shiso-800 text-center mb-12">
                Frequently Asked
              </h2>
              <div className="space-y-4">
                {faqItems.map((item, i) => (
                  <FAQItem item={item} key={i} />
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

const ContactInfo = () => (
  <div className="space-y-6">
    <InfoLine
      icon={<MapPin />}
      title="Our Address"
      text="123 Serenity Lane, Kyoto, Japan 604-8001"
    />
    <InfoLine
      icon={<Clock />}
      title="Opening Hours"
      text="Mon-Sun: 11:00 AM - 10:00 PM"
    />
    <InfoLine
      icon={<Mail />}
      title="Email Us"
      text="contact@hiroshiramen.com"
    />
    <InfoLine icon={<Phone />} title="Call Us" text="+81 75-123-4567" />
  </div>
);

const InfoLine = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div className="flex items-start space-x-4">
    <div className="bg-[var(--color-shiso-100)] p-3 rounded-full text-shiso-700">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-lg text-shiso-900">{title}</h3>
      <p className="text-marshland-700">{text}</p>
    </div>
  </div>
);

const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border-1 border-shiso-300">
      <h2 className="text-3xl font-bold text-shiso-800 mb-6">Send a Message</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-shiso-50 border-2 border-transparent focus:border-shiso-400 p-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-shiso-50 border-2 border-transparent focus:border-shiso-400 p-3 rounded-lg"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="w-full bg-shiso-50 border-2 border-transparent focus:border-shiso-400 p-3 rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full bg-shiso-50 border-2 border-transparent focus:border-shiso-400 p-3 rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 bg-shiso-500 text-white font-bold py-3 rounded-lg hover:bg-shiso-600 transition-all"
        >
          <span>Send Message</span>
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

const FAQItem = ({ item }: { item: { question: string; answer: string } }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center"
      >
        <h3 className="font-semibold text-lg text-shiso-900">
          {item.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-marshland-700">{item.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
