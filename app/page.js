"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
// Dynamically import components that might rely on browser APIs
import dynamic from "next/dynamic";
import Loader from "./components/Loader"; // Import the Loader component

const Header = dynamic(() => import("./components/Header"), { ssr: false });
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });
const AboutSection = dynamic(() => import("./components/AboutSection"), { ssr: false });
const ServicesSection = dynamic(() => import("./components/ServicesSection"), { ssr: false });
const ContactSection = dynamic(() => import("./components/ContactSection"), { ssr: false });
const Gallery = dynamic(() => import("./components/Gallery"), { ssr: false });
const HomeSection = dynamic(() => import("./components/HomeSection"), { ssr: false });

const page = () => {
  const scrollRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading state
  

  // Simulate a loading delay (e.g., for data fetching or rendering)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const scrollToSection = (sectionId) => {
    if (typeof window !== 'undefined') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Ensure useScroll only runs on the client side
  const { scrollYProgress } = typeof window !== 'undefined'
    ? useScroll({ container: scrollRef })
    : { scrollYProgress: null };

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <Loader />
          <motion.h1
            initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
            animate={{ opacity: 1, y: 0 }} // Animate to visible and centered
            transition={{ duration: 1, delay: 0.5 }} // Add a delay for effect
            className="mt-36 text-3xl font-bold text-[#174fde]"
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
            {/* Pass onNavClick to HomeSection */}
            <Header onNavClick={scrollToSection} />
            <HomeSection onNavClick={scrollToSection} />
            <AboutSection />
            <ServicesSection id="services" />
            <Gallery />
            <ContactSection />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default page;