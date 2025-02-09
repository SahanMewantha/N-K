"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import HomeSection from "./components/HomeSection";

const Home = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen overflow-y-scroll" ref={scrollRef}>
      <Header onNavClick={scrollToSection} />
      <motion.div
        className="fixed inset-0 bg-black z-0"
        style={{ opacity }}
      ></motion.div>

      <div className="relative z-10 pt-16">
        {/* Pass onNavClick to HomeSection */}
        <HomeSection onNavClick={scrollToSection} />
        <AboutSection />
        <ServicesSection id="services" />
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
