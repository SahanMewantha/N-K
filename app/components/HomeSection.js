"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const backgroundImages = [
  "/pexels-mstudio-2324562.jpg",
  "/pexels-johannes-plenio-3131634.jpg",
  "/8625596.jpg"
];

const HomeSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? backgroundImages.length - 1 : prev - 1
    );
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 1.1 },
    animate: { 
      opacity: 0.5, 
      scale: 1,
      transition: { 
        duration: 1,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };
  const textVariants = {
    initial: { opacity: 0, y: 50, rotate: 5 },
    animate: { 
      opacity: 1, 
      y: 0,
      rotate: 0,
      transition: { 
        duration: 1,
        type: "spring",
        stiffness: 50
      }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      rotate: -5,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <AnimatePresence>
        <motion.div 
          key={currentImageIndex}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            filter: 'brightness(0.6)'
          }}
        />
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handlePrevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 
                   bg-white/20 text-white p-2 rounded-full z-10"
      >
        ←
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleNextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 
                   bg-white/20 text-white p-2 rounded-full z-10"
      >
        →
      </motion.button>

      <motion.div
          key={currentImageIndex}
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative z-20 text-center px-4"
        >
        <h1 className="text-6xl font-bold text-white mb-4">
          Welcome to MyBrand
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Transforming ideas into innovative solutions that drive success.
        </p>
      </motion.div>
    </section>
  );
};

export default HomeSection;