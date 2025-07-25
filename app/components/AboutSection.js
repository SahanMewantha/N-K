import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useReducedMotion from "../components/hooks/useReducedMotion";

const AboutSection = () => {
  const reducedMotion = useReducedMotion();
  const shouldAnimate = !reducedMotion;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-background py-16 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <h2 className="sr-only" id="about-heading">About N&K Spotless Solutions</h2>
        
        <motion.div
          initial={shouldAnimate ? "hidden" : false}
          whileInView={shouldAnimate ? "visible" : false}
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/about.webp"
                alt="Professional cleaning team from N&K Spotless Solutions at work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
                priority
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="font-quicksand">
              <motion.h3 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-primary"
              >
                Our Commitment to Cleanliness
              </motion.h3>
              
              <motion.div 
                variants={itemVariants}
                className="w-20 h-1 bg-secondary rounded-full my-4"
              />
              
              <motion.p 
                variants={itemVariants}
                className="text-text font-raleway text-lg"
              >
                At <strong className="text-primary">N&K Spotless Solutions</strong>, we believe a clean space 
                is the foundation for health, productivity, and peace of mind.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-text font-raleway"
              >
                Founded in 2024, we've dedicated ourselves to delivering exceptional cleaning services 
                using environmentally friendly products and meticulous attention to detail.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-text font-raleway"
              >
                Our trained professionals handle both residential and commercial spaces, 
                tailoring our approach to each client's unique needs.
              </motion.p>
            </div>

            {/* Key Features */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
            >
              {[
                { icon: "♻️", text: "Eco-friendly products" },
                { icon: "🛡️", text: "Fully insured" },
                { icon: "🧹", text: "Deep cleaning specialists" },
                { icon: "⏱️", text: "Flexible scheduling" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-3"
                >
                  <span className="text-secondary text-xl mt-0.5">{feature.icon}</span>
                  <span className="text-text font-raleway">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <h3>Professional Cleaning Services</h3>
          <p>N&K Spotless Solutions provides top-quality cleaning services for homes and businesses in the local area.</p>
          <ul>
            <li>Residential cleaning services</li>
            <li>Commercial office cleaning</li>
            <li>Eco-friendly cleaning products</li>
            <li>Professional, reliable staff</li>
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
              "description": "Professional cleaning services using eco-friendly products",
              "foundingDate": "2024"
            }
          })
        }}
      />
    </section>
  );
};

export default AboutSection;