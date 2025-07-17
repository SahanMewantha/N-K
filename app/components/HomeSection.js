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
      className="relative min-h-screen flex items-center justify-center "
      aria-label="Home section"
    >
      {/* Optimized Background with Video Fallback */}
      <div className="absolute inset-0">
        <Image
          src="/bac1.webp"
          alt="Professional cleaning service team at work"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
        />
      </div>

      {/* Gradient Overlay with Directional Focus */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/20" />

      {/* Content Container with Improved Hierarchy */}
      <div className="container mx-auto  z-10 text-center max-w-4xl">
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Logo/Brand Mark could be placed here */}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight font-quicksand">
            <span className="block text-gray-100 font-light">Professional</span>
            <span className="text-white font-bold">
              Cleaning <span className="text-secondary">Services</span>
            </span>
          </h1>

          <motion.div
            initial={shouldAnimate ? { opacity: 0 } : false}
            animate={shouldAnimate ? { opacity: 1 } : false}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-gray-200 text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed font-raleway">
              Transform your space with our eco-friendly cleaning solutions
            </p>
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Button 
              onClick={() => onNavClick("contact")}
              aria-label="Contact us for cleaning services"
              className="px-8 py-3 text-lg"
            >
              Get Free Estimate
            </Button>
            
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CleaningService",
            "name": "N&K Spotless Solutions",
            "description": "Professional eco-friendly cleaning services",
            "image": "/bac.jpg",
            "url": typeof window !== 'undefined' ? window.location.href : '',
          })
        }}
      />
    </section>
  );
};

export default HomeSection;