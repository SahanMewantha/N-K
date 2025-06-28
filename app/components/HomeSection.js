import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./ContactUsButton";
import useReducedMotion from "../components/hooks/useReducedMotion";

const HomeSection = ({ onNavClick }) => {
  const reducedMotion = useReducedMotion();
  const shouldAnimate = !reducedMotion;
  return (
    <section 
    
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Home section"
    >
      {/* Optimized Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bac.webp"
          alt="Professional cleaning service - N&K Spotless Solutions"
          fill
          priority // Critical for LCP
          quality={85} 
          className="object-cover"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
          loading="eager"
        />
      </div>

      
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />

      {/* Content Container */}
      <div className="container mx-auto px-4 z-10 text-center">
        {/* Remove animation or use CSS animations instead of JS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} // Reduced duration
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Welcome to{' '}
            <span className="text-[#1941b4] font-roboto block md:inline">
              N<span className="text-2xl text-yellow-400" aria-label="and">&</span>K Spotless Solutions
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }} // Reduced delay
        >
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Professional Cleaning Services - We'll Make It Shine, Every Time.
          </p>
        </motion.div>

        {/* Call-to-Action Button */}
        <div className="flex mt-6 items-center justify-center">
          <Button 
            onClick={() => onNavClick("contact")}
            aria-label="Contact us for cleaning services"
          >
            Get Free Quote
          </Button>
        </div>

        {/* Add structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CleaningService",
              "name": "N&K Spotless Solutions",
              "slogan": "We'll Make It Shine, Every Time",
              "image": "/bac.jpg",
              "url": typeof window !== 'undefined' ? window.location.href : '',
            })
          }}
        />
      </div>
    </section>
  );
};

export default HomeSection;