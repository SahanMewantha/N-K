"use client";
import dynamic from 'next/dynamic';
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const Header = dynamic(() => import('./components/Header'), { ssr: false });
const Footer = dynamic(() => import('./components/Footer'), { ssr: false });
const AboutSection = dynamic(() => import('./components/AboutSection'), { ssr: false });
const ServicesSection = dynamic(() => import('./components/ServicesSection'), { ssr: false });
const ContactSection = dynamic(() => import('./components/ContactSection'), { ssr: false });
const HomeSection = dynamic(() => import('./components/HomeSection'), { ssr: false });
const Gallery = dynamic(() => import('./components/Gallery'), { ssr: false });


const page = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = typeof window !== 'undefined' ? useScroll({ container: scrollRef }) : { scrollYProgress: null };
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
        <Gallery/>
        <ContactSection />
        
      </div>

      <Footer />
    </div>
  );
};

export default page;
