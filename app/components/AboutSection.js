import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="h-screen flex items-center justify-center bg-black"
    >
      {/* Container for Layout */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Image on the Left Side with Motion Effects */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 mb-8 md:mb-0"
        >
          <img
            src="/about.jpg" // Replace with your image path
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text Content on the Right Side with Motion Effects */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-center md:text-left text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mx-16">
            About Our Journey
          </h2>
          <p className="text-lg md:text-xl max-w-lg md:mx-16 mr-6">
          N&K Spotless Solutions was founded in 2024 with the goal of providing 
            top-notch cleaning services to homes and businesses. Our team is dedicated 
            to creating spotless environments using environmentally friendly products 
            and advanced cleaning techniques. Whether you need a deep clean or regular 
            maintenance, we strive to exceed your expectations with every service.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
