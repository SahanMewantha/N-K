import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useReducedMotion from "../components/hooks/useReducedMotion";

const ServiceCard = ({ title, description, index, shouldAnimate }) => {
  const cardVariants = shouldAnimate ? {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  } : {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      whileHover={shouldAnimate ? { scale: 1.02 } : {}}
      className="bg-background/80 backdrop-blur rounded-lg p-6 text-center border border-primary/20 hover:bg-primary/10 transition-all cursor-pointer"
      aria-label={`${title} service`}
    >
      <h3 className="text-lg md:text-xl font-semibold text-text font-quicksand mb-2">{title}</h3>
      <div className="w-12 h-1 bg-secondary mx-auto rounded-full mb-3" aria-hidden="true" />
      <p className="text-white text-sm font-raleway">
        {description || `Professional ${title.toLowerCase()} solutions tailored to your needs.`}
      </p>
    </motion.article>
  );
};

const ServicesSection = () => {
  const shouldAnimate = !useReducedMotion();
  
  const services = [
    {
      title: "Body Corporate Cleaning",
      description: "Comprehensive cleaning for strata and body corporate properties"
    },
    {
      title: "Entertainment Venues",
      description: "Specialized cleaning for leisure and entertainment facilities"
    },
    {
      title: "Gym & Fitness Centers",
      description: "Hygienic cleaning solutions for health and fitness facilities"
    },
    {
      title: "Medical Facilities",
      description: "Sanitized cleaning for aged care and medical centers"
    },
    {
      title: "Educational Facilities",
      description: "Safe and thorough cleaning for schools and universities"
    },
    {
      title: "Retail Centers",
      description: "Professional cleaning for shops and shopping centers"
    },
    {
      title: "Window Cleaning",
      description: "Crystal clear window cleaning for all building types"
    },
    {
      title: "End of Lease Cleaning",
      description: "Detailed cleaning for bond return and move-in ready properties"
    },
    {
      title: "Commercial Buildings",
      description: "Complete building maintenance and cleaning services"
    },
    {
      title: "Industrial Cleaning",
      description: "Heavy-duty cleaning for factories and warehouses"
    },
    {
      title: "Office Cleaning",
      description: "Regular cleaning services for productive workspaces"
    },
    {
      title: "Residential Cleaning",
      description: "House cleaning services for spotless homes"
    },
    {
      title: "Carpet Steam Cleaning",
      description: "Deep carpet cleaning and stain removal services"
    },
    {
      title: "Customized Solutions",
      description: "Tailored cleaning packages to meet your specific needs"
    }
  ];

  const headerVariants = shouldAnimate ? {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  } : {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      id="services"
      className="relative min-h-screen py-16 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-opacity-90">
        <Image
          src="/clea-background.jpeg"
          alt="Professional cleaning services background"
          fill
          className="object-cover"
          sizes="100vw"
          quality={75}
          loading="eager"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.header
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-quicksand mb-4">
            Our Professional Services
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-4" aria-hidden="true" />
          <p className="text-text max-w-2xl mx-auto text-base md:text-lg font-raleway">
            Comprehensive cleaning solutions for residential, commercial, and industrial properties 
            across the region. All services backed by our satisfaction guarantee.
          </p>
        </motion.header>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              title={service.title} 
              description={service.description}
              index={index} 
              shouldAnimate={shouldAnimate}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-text mb-4 text-lg font-raleway">
            Need a service not listed? We offer customized cleaning solutions!
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-quicksand font-medium"
            aria-label="Contact us for custom cleaning services"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </div>

      {/* Structured Data for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Cleaning Service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "N&K Spotless Solutions"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Cleaning Services",
              "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "name": service.title,
                "description": service.description
              }))
            }
          })
        }}
      />
    </section>
  );
};

export default ServicesSection;