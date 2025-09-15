"use client";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import { Building2, Dumbbell, Briefcase, School, ShoppingBag, Window, Home, Factory, Building, Warehouse, FileCheck, House, Brush, Settings, Columns2, Loader2, ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import Link from "next/link";

// Loading Overlay Component
const LoadingOverlay = ({ isVisible, title }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-[#333333] border border-primary/20 rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl">
        <div className="text-center">
          <div className="relative mb-6">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <Loader2 size={32} className="text-primary animate-spin" />
            </div>
            <div className="absolute inset-0 w-16 h-16 mx-auto border-2 border-primary/20 rounded-full animate-pulse"></div>
          </div>
          
          <h3 className="text-xl font-semibold text-secondary mb-2 font-quicksand">
            Loading Service
          </h3>
          <p className="text-text/80 font-raleway text-sm mb-4">
            Preparing {title} details...
          </p>
          
          {/* Progress dots */}
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ title, index }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const handleClick = () => {
    if (loading) return; // Prevent multiple clicks
    
    setLoading(true);
    
    // Add delay for smoother animation and user feedback
    setTimeout(() => {
      router.push(`/services/slug?title=${encodeURIComponent(title)}`);
    }, 1500);
  };

  // Get appropriate icon based on service type
  const getServiceIcon = (title) => {
    const iconProps = { size: 24, className: "text-accent transition-transform duration-300 group-hover:scale-110" };
    
    if (title.includes("Body Corporate")) return <Building2 {...iconProps} />;
    if (title.includes("Leisure & Entertainment")) return <Building {...iconProps} />;
    if (title.includes("Gym") || title.includes("Fitness")) return <Dumbbell {...iconProps} />;
    if (title.includes("Age Care") || title.includes("Medical")) return <Building {...iconProps} />;
    if (title.includes("School") || title.includes("Educational")) return <School {...iconProps} />;
    if (title.includes("Retail") || title.includes("Shopping")) return <ShoppingBag {...iconProps} />;
    if (title.includes("Window")) return <Columns2 {...iconProps} />;
    if (title.includes("End Of Lease") || title.includes("Move In")) return <FileCheck {...iconProps} />;
    if (title.includes("Building")) return <Building {...iconProps} />;
    if (title.includes("Factory") || title.includes("Warehouse")) return <Warehouse {...iconProps} />;
    if (title.includes("Office")) return <Briefcase {...iconProps} />;
    if (title.includes("Residential")) return <Home {...iconProps} />;
    if (title.includes("Carpet")) return <Brush {...iconProps} />;
    if (title.includes("Customized")) return <Settings {...iconProps} />;
    
    return <Brush {...iconProps} />;
  };

  return (
    <>
      <div
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          cursor-pointer group bg-[#333333] rounded-lg p-6 overflow-hidden relative 
          shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 
          border border-transparent hover:border-[#58A6FF]
          ${loading ? 'scale-95 opacity-75 pointer-events-none' : ''}
          ${loading ? 'animate-pulse' : ''}
        `}
        style={{
          transform: loading ? 'scale(0.95)' : '',
          filter: loading ? 'brightness(0.8)' : ''
        }}
      >
        {/* Loading state overlay */}
        {loading && (
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] flex items-center justify-center z-20">
            <div className="bg-primary/90 rounded-full p-3">
              <Loader2 size={24} className="text-white animate-spin" />
            </div>
          </div>
        )}

        {/* Animated background gradient */}
        <div className={`
          absolute inset-0 bg-gradient-to-br from-primary to-secondary 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
        `}></div>
        
        {/* Accent corner with animation */}
        <div className={`
          absolute top-0 right-0 w-16 h-16 bg-primary transform rotate-12 
          translate-x-6 -translate-y-6 transition-all duration-300
          ${isHovered ? 'scale-110 bg-secondary' : ''}
        `}></div>
        
        <div className="flex flex-col relative z-10">
          {/* Icon and title row */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className={`
                w-12 h-12 flex items-center justify-center rounded-full 
                bg-[#2a2a2a] mr-4 shadow-md border border-primary/10
                group-hover:border-primary/30 transition-all duration-300
                ${isHovered ? 'scale-110' : ''}
              `}>
                {loading ? (
                  <Loader2 size={24} className="text-primary animate-spin" />
                ) : (
                  getServiceIcon(title)
                )}
              </div>
              <div>
                <h3 className={`
                  text-secondary text-lg font-bold group-hover:text-[#5f62c9] 
                  transition-colors duration-300 font-raleway
                  ${loading ? 'text-primary' : ''}
                `}>
                  {title}
                </h3>
                {loading && (
                  <p className="text-xs text-primary font-medium mt-1">
                    Loading...
                  </p>
                )}
              </div>
            </div>
            
            {/* Arrow indicator */}
            <div className={`
              transform transition-all duration-300 opacity-0 
              group-hover:opacity-100 group-hover:translate-x-0 translate-x-2
            `}>
              <ArrowRight size={20} className="text-primary" />
            </div>
          </div>
          
          {/* Service number pill with animation */}
          <div className={`
            absolute top-3 right-3 bg-primary text-text text-xs font-bold 
            px-3 py-1 rounded-full z-10 transition-all duration-300
            ${isHovered ? 'bg-secondary scale-110' : ''}
          `}>
            {loading ? (
              <Loader2 size={12} className="animate-spin" />
            ) : (
              String(index + 1).padStart(2, '0')
            )}
          </div>
          
          {/* Description with enhanced styling */}
          <div className="relative">
            <div className={`
              absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary 
              transition-all duration-300 ${isHovered ? 'w-2' : ''}
            `}></div>
            <p className="text-text opacity-90 pl-4 font-raleway">
              Tailored {title.toLowerCase()} solutions for your needs.
            </p>
          </div>
          
          {/* Enhanced hover details */}
          <div className={`
            mt-4 pt-4 border-t border-[#454545] transform transition-all duration-500
            ${isHovered && !loading 
              ? 'opacity-100 max-h-24 translate-y-0' 
              : 'opacity-0 max-h-0 translate-y-2 overflow-hidden'
            }
          `}>
            <div className="flex items-start justify-between">
              <p className="text-sm text-text font-raleway opacity-75 flex-1">
                Professional cleaning experts with attention to detail and industry-specific knowledge.
              </p>
              <div className="ml-4 text-primary">
                <ArrowRight size={16} className="animate-pulse" />
              </div>
            </div>
          </div>
          
          {/* Loading progress bar */}
          {loading && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#454545] overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
            </div>
          )}
        </div>
        
        {/* Click ripple effect */}
        <div className={`
          absolute inset-0 bg-primary/10 rounded-lg transform scale-0 
          ${loading ? 'animate-ping scale-100' : ''}
        `}></div>
      </div>

      {/* Global loading overlay */}
      <LoadingOverlay isVisible={loading} title={title} />
    </>
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
    <section className="relative pt-16 bg-gradient-to-br from-[#2b2828] via-black to-[#2c2a2a]">
      {/* Enhanced background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Title */}
        <div className="mb-16 text-center mt-6">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary blur-xl rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-text relative z-10 mt-8 font-quicksand">
              Our Services
            </h2>
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
          </div>
          <p className="text-text font-raleway opacity-80 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Professional cleaning solutions customized to meet the unique requirements of your industry or space.
            <span className="block mt-2 text-primary font-medium">
              Click any service to learn more about our specialized approach.
            </span>
          </p>
        </div>

        {/* Service Cards Grid with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <ServiceCard title={service} index={index} />
            </div>
          ))}
        </div>

        {/* Call to action section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-[#333333] to-[#2a2a2a] rounded-2xl p-8 border border-primary">
            <h3 className="text-2xl font-bold text-secondary mb-4 font-quicksand">
              Don't see your specific cleaning need?
            </h3>
            <p className="text-text font-raleway mb-6 max-w-2xl mx-auto">
              We offer customized cleaning solutions tailored to your unique requirements. 
              Contact us to discuss your specific cleaning needs.
            </p>
            <Link href="/contact">
            <button className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get Custom Quote
            </button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;