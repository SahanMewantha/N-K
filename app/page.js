"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

import dynamic from "next/dynamic";
import Loader from "./components/Loader"; // Import the Loader component
import HomeSection from "./components/HomeSection";
const Footer = dynamic(() => import("./components/Footer"));
const AboutSection = dynamic(() => import("./components/AboutSection"));
const ServicesSection = dynamic(() => import("./components/ServicesSection"));
const ContactSection = dynamic(() => import("./components/ContactSection"));
const Gallery = dynamic(() => import("./components/Gallery"));

const page = () => {
  const scrollRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading state
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 1500); 

    return () => clearTimeout(timer); 
  }, []);

  const scrollToSection = (sectionId) => {
    if (typeof window !== 'undefined') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const { scrollYProgress } = typeof window !== 'undefined'
    ? useScroll({ container: scrollRef })
    : { scrollYProgress: null };

  return (
    <>
    
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
          <Loader />
          <motion.h1
            initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
            animate={{ opacity: 1, y: 0 }} // Animate to visible and centered
            transition={{ duration: 1, delay: 0.5 }} // Add a delay for effect
            className="mt-36 text-3xl font-bold text-primary font-raleway"
          >
            N&K Spotless Solutions
          </motion.h1>
        </div>
      )}

      {/* Main Content */}
      {!isLoading && (
        <div className="h-screen overflow-x-hidden w-full" ref={scrollRef}>
          {/* Static Background */}
          <motion.div
            className="fixed inset-0 z-0 bg-black"
          ></motion.div>

          {/* Content */}
          <div className="relative z-10 pt-16">
            
            <HomeSection onNavClick={scrollToSection} />
            <AboutSection />
            <ServicesSection id="services" />
            <Gallery />
            <ContactSection />
            <Footer/>
          </div>
          
        </div>
      )}
    </>
  );
};

export default page;