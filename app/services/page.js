"use client";

import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Building2, Dumbbell, Briefcase, School, ShoppingBag, Window, Home, Factory, Building, Warehouse, FileCheck, House, Brush, Settings, Columns2, Loader2, ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import Link from "next/link";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

// Loading Overlay Component with enhanced styling
const LoadingOverlay = ({ isVisible, title }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gradient-to-br from-[#1a1a2e] to-[#16162a] border border-[#5f62c9]/30 rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <div className="text-center">
          <div className="relative mb-6">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#1E4B8C]/30 to-[#5f62c9]/30 rounded-full flex items-center justify-center">
              <Loader2 size={32} className="text-[#FFD700] animate-spin" />
            </div>
            <div className="absolute inset-0 w-16 h-16 mx-auto border-2 border-[#FFD700]/30 rounded-full animate-ping"></div>
          </div>

          <h3 className="text-xl font-semibold bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent mb-2 font-quicksand">
            Loading Service
          </h3>
          <p className="text-gray-400 font-raleway text-sm mb-4">
            Preparing {title} details...
          </p>

          {/* Progress dots */}
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-[#FFD700] rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Service Card Component with Framer Motion
const ServiceCard = ({ title, index }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const handleClick = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      router.push(`/services/slug?title=${encodeURIComponent(title)}`);
    }, 1500);
  };

  // Get appropriate icon based on service type
  const getServiceIcon = (title) => {
    const iconProps = { size: 24, className: "text-[#FFD700]" };

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
      <motion.div
        onClick={handleClick}
        variants={cardVariants}
        whileHover={{
          y: -8,
          scale: 1.02,
          boxShadow: "0 25px 50px rgba(30, 75, 140, 0.3)"
        }}
        whileTap={{ scale: 0.98 }}
        className={`
          cursor-pointer group relative overflow-hidden rounded-2xl
          bg-gradient-to-br from-[#1a1a2e] to-[#16162a] 
          border border-[#5f62c9]/20 hover:border-[#FFD700]/50
          transition-colors duration-300
          ${loading ? 'pointer-events-none opacity-75' : ''}
        `}
      >
        {/* Loading overlay */}
        {loading && (
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center z-20 rounded-2xl">
            <div className="bg-gradient-to-br from-[#1E4B8C] to-[#5f62c9] rounded-full p-3">
              <Loader2 size={24} className="text-white animate-spin" />
            </div>
          </div>
        )}

        {/* Gradient hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E4B8C]/20 to-[#5f62c9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Gold accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        {/* Service number badge */}
        <motion.div
          className="absolute top-4 right-4 z-10"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <div className="bg-gradient-to-br from-[#1E4B8C] to-[#5f62c9] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-[#FFD700]/30">
            {loading ? (
              <Loader2 size={12} className="animate-spin" />
            ) : (
              String(index + 1).padStart(2, '0')
            )}
          </div>
        </motion.div>

        <div className="p-6 relative z-10">
          {/* Icon and Title */}
          <div className="flex items-start gap-4 mb-4">
            <motion.div
              className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#1E4B8C]/30 to-[#5f62c9]/20 border border-[#5f62c9]/30 shadow-lg group-hover:border-[#FFD700]/50 transition-colors duration-300"
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
              {loading ? (
                <Loader2 size={24} className="text-[#FFD700] animate-spin" />
              ) : (
                getServiceIcon(title)
              )}
            </motion.div>

            <div className="flex-1">
              <h3 className="text-lg font-bold text-white group-hover:text-[#FFD700] transition-colors duration-300 font-quicksand leading-tight">
                {title}
              </h3>
              {loading && (
                <p className="text-xs text-[#FFD700] font-medium mt-1">
                  Loading...
                </p>
              )}
            </div>
          </div>

          {/* Description with accent bar */}
          <div className="relative pl-4 mb-4">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFD700] to-[#FFA500] rounded-full group-hover:w-1.5 transition-all duration-300" />
            <p className="text-gray-400 text-sm font-raleway leading-relaxed">
              Tailored {title.toLowerCase()} solutions for your needs.
            </p>
          </div>

          {/* Hover reveal section */}
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            whileHover={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pt-4 border-t border-[#5f62c9]/20">
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500 font-raleway">
                  Professional experts with attention to detail
                </p>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight size={16} className="text-[#FFD700]" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Click indicator */}
          <div className="flex items-center justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs text-[#FFD700] font-medium mr-2">Learn More</span>
            <ArrowRight size={14} className="text-[#FFD700]" />
          </div>
        </div>

        {/* Corner decoration */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#1E4B8C]/10 to-[#5f62c9]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
      </motion.div>

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
    <section className="relative min-h-screen pt-16 bg-gradient-to-b from-[#0a0a14] via-[#141428] to-[#0a0a14] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#1E4B8C]/10 blur-3xl"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-[#5f62c9]/10 blur-3xl"
          animate={{
            y: [0, 40, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-[#FFD700]/5 blur-3xl"
          animate={{
            x: [0, 30, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16 pt-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Decorative line */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-6 mt-6"
            variants={scaleIn}
          >
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#FFD700]" />
            <div className="w-3 h-3 bg-[#FFD700] rounded-full" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#FFD700]" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-[#FFD700] to-white bg-clip-text text-transparent font-quicksand leading-tight mb-6"
            variants={fadeInUp}
          >
            Our Services
          </motion.h1>

          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-[#1E4B8C] via-[#5f62c9] to-[#1E4B8C] mx-auto rounded-full mb-8"
            variants={scaleIn}
          />

          <motion.p
            className="text-gray-300 font-raleway max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
            variants={fadeInUp}
          >
            Professional cleaning solutions customized to meet the unique requirements of your industry or space.
          </motion.p>

          <motion.p
            className="text-[#FFD700] font-medium mt-4 text-sm md:text-base"
            variants={fadeInUp}
          >
            Click any service to learn more about our specialized approach
          </motion.p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} title={service} index={index} />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.div
            className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#16162a] rounded-3xl p-8 md:p-12 border border-[#5f62c9]/30 shadow-2xl"
            whileHover={{ borderColor: "rgba(255, 215, 0, 0.3)" }}
            transition={{ duration: 0.3 }}
          >
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#1E4B8C]/20 to-[#5f62c9]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/5 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <motion.h3
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent mb-4 font-quicksand"
                variants={fadeInUp}
              >
                Don't see your specific cleaning need?
              </motion.h3>

              <motion.p
                className="text-gray-300 font-raleway mb-8 max-w-2xl mx-auto text-base md:text-lg"
                variants={fadeInUp}
              >
                We offer customized cleaning solutions tailored to your unique requirements.
                Contact us to discuss your specific cleaning needs.
              </motion.p>

              <Link href="/contact">
                <motion.button
                  className="relative overflow-hidden bg-gradient-to-r from-[#1E4B8C] to-[#5f62c9] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg group"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(30, 75, 140, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Custom Quote
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute inset-0 flex items-center justify-center gap-2 text-[#1E4B8C] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Get Custom Quote
                    <ArrowRight size={20} />
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </section>
  );
};

export default ServicesSection;