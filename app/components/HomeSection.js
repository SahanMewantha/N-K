import React from "react";
import { motion } from "framer-motion";
import Button from "./ContactUsButton";
import Card from "./Card";

const HomeSection = ({ onNavClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/pexels-mstudio-2324562.jpg"
          alt="Cleaning Service Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-blue-400 text-4xl font-bold mb-2">1000+</div>
                <div className="text-white">Satisfied Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-blue-400 text-4xl font-bold mb-2">1000+</div>
                <div className="text-white">Satisfied Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-blue-400 text-4xl font-bold mb-2">100%</div>
                <div className="text-white">Satisfaction Guaranteed</div>
              </div>
            </div>

            <ul className="text-gray-300 text-lg space-y-3 mt-6">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Professional & Experienced Staff
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Eco-Friendly Cleaning Solutions
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Flexible Scheduling Options
              </li>
            </ul>

            <div className="mt-8">
              <Button onClick={() => onNavClick("contact")} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;