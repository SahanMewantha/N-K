import React from "react";
import { motion } from "framer-motion";

// Service Card Component
const ServiceCard = ({ title, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="bg-black/25 backdrop-blur-lg rounded-lg p-6 text-center border border-white/10 hover:bg-black/50 transition-all cursor-pointer"
  >
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <div className="w-12 h-1 bg-[#fddb12] mx-auto rounded-full mb-3" />
    <p className="text-gray-300 text-sm">
      Tailored {title.toLowerCase()} solutions for your needs.
    </p>
  </motion.div>
);

// Main Services Section Component
const ServicesSection = () => {
  const services = [
    "Body Corporate Cleaning Services",
    "Leisure & Entertainment Cleaning",
    "Gym, Health & Fitness Centers Cleaning",
    "Age Care & Medical Facilities Cleaning",
    "School & Educational Facilities Cleaning",
    "Retail & Shopping Centers Cleaning",
    "Window Cleaning",
    "End Of Lease & Move In Cleaning",
    "Building Cleaning",
    "Factory/Warehouse Cleaning",
    "Office Cleaning",
    "Residential Cleaning",
    "Carpet Steam Cleaning",
    "Customized Cleaning",
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden py-16"
      style={{
        backgroundImage: "url('/cleaning-background.jpg')", // Replace with your image path
      }}
    >
      {/* Overlay for Reduced Transparency */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 text-roboto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#174fde] mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-[#ecc106] mx-auto rounded-full" />
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;