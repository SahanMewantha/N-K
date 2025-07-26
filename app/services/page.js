"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Building2, Dumbbell, Briefcase, School, ShoppingBag, Window, Home, Factory, Building, Warehouse, FileCheck, House, Brush, Settings, Columns2 } from "lucide-react";
import Footer from "../components/Footer";

// Service Card Component
const ServiceCard = ({ title, index }) => {
    const router = useRouter();
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

    const handleClick = () => {
      router.push(`/services/slug?title=${encodeURIComponent(title)}`);
    };

  // Get appropriate icon based on service type
  const getServiceIcon = (title) => {
    if (title.includes("Body Corporate")) return <Building2 size={24} className="text-accent" />;
    if (title.includes("Leisure & Entertainment")) return <Building size={24} className="text-accent" />;
    if (title.includes("Gym") || title.includes("Fitness")) return <Dumbbell size={24} className="text-accent" />;
    if (title.includes("Age Care") || title.includes("Medical")) return <Building size={24} className="text-accent" />;
    if (title.includes("School") || title.includes("Educational")) return <School size={24} className="text-accent" />;
    if (title.includes("Retail") || title.includes("Shopping")) return <ShoppingBag size={24} className="text-accent" />;
    if (title.includes("Window")) return <Columns2 size={24} className="text-accent" />;
    if (title.includes("End Of Lease") || title.includes("Move In")) return <FileCheck size={24} className="text-accent" />;
    if (title.includes("Building")) return <Building size={24} className="text-accent" />;
    if (title.includes("Factory") || title.includes("Warehouse")) return <Warehouse size={24} className="text-accent" />;
    if (title.includes("Office")) return <Briefcase size={24} className="text-accent" />;
    if (title.includes("Residential")) return <Home size={24} className="text-accent" />;
    if (title.includes("Carpet")) return <Brush size={24} className="text-accent" />;
    if (title.includes("Customized")) return <Settings size={24} className="text-accent" />;
    
    // Default icon if no match is found
    return <Brush size={24} className="text-accent" />;
  };

  return (
    <div
    onClick={handleClick} 
    className="cursor-pointer group bg-[#333333] rounded-lg p-6 overflow-hidden relative shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#58A6FF]">
      {/* Accent corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-primary transform rotate-12 translate-x-6 -translate-y-6"></div>
      
      <div className="flex flex-col">
        {/* Icon and title row */}
        <div className="flex items-center mb-4 z-10">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#333333] mr-3 shadow-md ">
            {getServiceIcon(title)}
          </div>
          <h3 className="text-secondary text-lg font-bold group-hover:text-[#5f62c9] transition-colors duration-300 font-raleway">{title}</h3>
        </div>
        
        {/* Service number pill */}
        <div className="absolute top-3 right-3 bg-primary text-text text-xs font-bold px-2 py-1 rounded-full z-10">
          {index + 1}
        </div>
        
        {/* Description */}
        <p className="text-text opacity-90 pl-2 border-l-2 border-primary font-raleway">
          Tailored {title.toLowerCase()} solutions for your needs.
        </p>
        
        {/* Hidden details that show on hover */}
        <div className="mt-4 pt-4 border-t border-[#454545] transform opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300">
          <p className="text-sm text-text font-raleway opacity-75">
            Professional cleaning experts with attention to detail and industry-specific knowledge.
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Services Section Component
const ServicesSection = () => {
  const services = [
    "Body Corporate Cleaning Services",
    "Leisure & Entertainment Cleaning",
    "Gym, Health & Fitness Centers Cleaning",
    "Age Care & Medical Facilities Cleaning",
    "School & Educational Facilities Cleaning",
    "Retail & Shopping Centers Cleaning",
    "Window Cleaning",
    "End Of Lease & Move In Cleaning",
    "Building Cleaning",
    "Factory/Warehouse Cleaning",
    "Office Cleaning",
    "Residential Cleaning",
    "Carpet Steam Cleaning",
    "Customized Cleaning",
  ];

  return (
    <section className="relative pt-16 bg-gradient-to-br from-[#2b2828] via-black to-[#141414]">
      {/* Hexagonal pattern overlay */}
      <div className="absolute inset-0 opacity-5" 
           >
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="mb-12 text-center mt-6">
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-4xl font-bold text-text relative z-10 mt-8 font-quicksand">
              Our Services
            </h2>
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-accent"></div>
            <div className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-secondary"></div>
          </div>
          <p className="text-text font-raleway opacity-80 mt-6 max-w-2xl mx-auto">
            Professional cleaning solutions customized to meet the unique requirements of your industry or space.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service} index={index} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ServicesSection;