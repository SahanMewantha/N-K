import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.03 }}
    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all cursor-pointer border border-white/10"
  >
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <div className="w-12 h-1 bg-blue-500 rounded-full mb-3" />
    <p className="text-gray-300 text-sm">
      Professional {title.toLowerCase()} services tailored to your needs
    </p>
  </motion.div>
);

const ServicesSection = () => {
  const services = [
    { title: "Web Development" },
    { title: "UI/UX Design" },
    { title: "Consulting" },
    { title: "Mobile App Development" },
    { title: "SEO Optimization" },
    { title: "Digital Marketing" },
    { title: "Cloud Solutions" },
    { title: "Data Analytics" },
    { title: "Cybersecurity" },
    { title: "E-commerce Solutions" },
    { title: "Content Creation" },
    { title: "Social Media Management" },
    { title: "Branding" },
    { title: "DevOps" }
  ];

  return (
    <section id="services"  className="min-h-screen bg-gradient-to-br bg-black/90 py-4">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;