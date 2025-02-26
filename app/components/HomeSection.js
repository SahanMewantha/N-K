import React from "react";
import { motion } from "framer-motion";
import Button from "./ContactUsButton"; // Reusable button component

const HomeSection = ({ onNavClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Subtle Animation */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
      >
        <img
          src="/bac.jpg" // Replace with your background image path
          alt="Cleaning Service Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />

      {/* Content Container */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to <span className=" text-[#1941b4]">N&K Spotless Solutions</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-gray-300 text-lg mb-8">
            We'll Make It Shine, Every Time.
          </p>
        </motion.div>

        {/* Call-to-Action Button */}
        <div className="flex mt-6 align-center justify-center">
            
            <Button onClick={() => onNavClick("contact")}>Contact Us</Button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;