import React from "react";
import { motion } from "framer-motion";
import Button from "./ContactUsButton"; // Assuming the button is already interactive
import Card from "./Card"; // Assuming Card is reusable for better modularity

const HomeSection = ({ onNavClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Animation */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.7, 1, 0.7] }} // subtle fade in and out for the background
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
      >
        <img
          src="/bac1.jpg"
          alt="Cleaning Service Background"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />

      {/* Content Container */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to
              <span className="text-blue-400"> N&K Spotless</span> Solutions
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl text-gray-200 font-light">
              We'll Make It Shine, Every Time
            </h2>

            {/* Statistics Cards with Hover Effects */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-blue-400 text-4xl font-bold mb-2">1000+</div>
                <div className="text-white">Satisfied Clients</div>
              </motion.div>
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-blue-400 text-4xl font-bold mb-2">1000+</div>
                <div className="text-white">Projects Completed</div>
              </motion.div>
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-blue-400 text-4xl font-bold mb-2">100%</div>
                <div className="text-white">Satisfaction Guaranteed</div>
              </motion.div>
            </div>

            {/* Features List with Animation */}
            <ul className="text-gray-300 text-lg space-y-3 mt-6">
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Professional & Experienced Staff
              </motion.li>
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Eco-Friendly Cleaning Solutions
              </motion.li>
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Flexible Scheduling Options
              </motion.li>
            </ul>

            {/* Contact Button with Hover Animation */}
            <div className="mt-8">
              <Button
                onClick={() => onNavClick("contact")}
                className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-xl transition duration-300 ease-in-out"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
