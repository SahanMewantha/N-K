import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useReducedMotion from "../components/hooks/useReducedMotion";

const AboutSection = () => {
  
  const reducedMotion = useReducedMotion();
  const shouldAnimate = !reducedMotion;

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-[#454545] via-black to-[#262626] py-16"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        
        <h2 className="sr-only" id="about-heading">About N&K Spotless Solutions</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Optimized Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/about.jpg"
                alt="N&K Spotless Solutions team providing professional cleaning services"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..." // Generate this
              />
            </div>
          </motion.div>

          {/* Content with better SEO structure */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#174fde]">
              About Our Journey
            </h3>
            
            <div className="w-24 h-1 bg-[#ecc106] mx-auto md:mx-0 rounded-full mb-6" />
            
            <div className="space-y-4 text-gray-300">
              <p className="text-base md:text-lg lg:text-xl">
                <strong className="text-white">N&K Spotless Solutions</strong> was founded in 2024 
                with a mission to transform spaces through exceptional cleaning services.
              </p>
              
              <p className="text-base md:text-lg">
                Our experienced team specializes in both <em>residential</em> and <em>commercial cleaning</em>, 
                using eco-friendly products and cutting-edge techniques to ensure a spotless, 
                healthy environment for our clients.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-6 text-sm md:text-base">
                <div className="text-center md:text-left">
                  <span className="block text-3xl font-bold text-[#ecc106]">100+</span>
                  <span className="text-gray-400">Happy Clients</span>
                </div>
                <div className="text-center md:text-left">
                  <span className="block text-3xl font-bold text-[#ecc106]">24/7</span>
                  <span className="text-gray-400">Available Support</span>
                </div>
              </div>
            </div>

            {/* Add trust signals */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <span className="px-4 py-2 bg-[#174fde]/20 text-[#174fde] rounded-full text-sm">
                ✓ Licensed & Insured
              </span>
              <span className="px-4 py-2 bg-[#174fde]/20 text-[#174fde] rounded-full text-sm">
                ✓ Eco-Friendly
              </span>
              <span className="px-4 py-2 bg-[#174fde]/20 text-[#174fde] rounded-full text-sm">
                ✓ Satisfaction Guaranteed
              </span>
            </div>
          </motion.div>
        </div>

        {/* Additional SEO content - hidden visually but readable by search engines */}
        <div className="sr-only">
          <h4>Why Choose N&K Spotless Solutions?</h4>
          <ul>
            <li>Professional cleaning services since 2024</li>
            <li>Environmentally friendly cleaning products</li>
            <li>Trained and background-checked staff</li>
            <li>Flexible scheduling options</li>
            <li>Competitive pricing</li>
            <li>Service areas: [Add your service locations]</li>
          </ul>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "CleaningService",
              "name": "N&K Spotless Solutions",
              "foundingDate": "2024",
              "description": "Professional residential and commercial cleaning services using eco-friendly products",
              "areaServed": "Local Area", 
              "priceRange": "$$",
              "knowsAbout": ["Residential Cleaning", "Commercial Cleaning", "Deep Cleaning", "Eco-Friendly Cleaning"]
            }
          })
        }}
      />
    </section>
  );
};

export default AboutSection;