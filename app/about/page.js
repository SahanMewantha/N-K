"use client";

import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

// Animation variants for reuse
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

// Reusable SVG components
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1E4B8C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1E4B8C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1E4B8C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

// Feature card component with hover animation
const FeatureCard = ({ icon, text }) => (
  <motion.div
    className="bg-gradient-to-br from-[#1E4B8C]/10 to-[#5f62c9]/5 backdrop-blur-sm p-5 rounded-xl flex items-center gap-4 border border-[#1E4B8C]/20 shadow-lg"
    whileHover={{
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(30, 75, 140, 0.3)",
      borderColor: "rgba(255, 215, 0, 0.5)"
    }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full p-3 shadow-md">
      {icon}
    </div>
    <span className="font-semibold text-white text-lg">{text}</span>
  </motion.div>
);

// Expert card component with animations
const ExpertCard = ({ imageSrc, title, description, features, index }) => (
  <motion.div
    className="group bg-gradient-to-b from-[#1a1a2e] to-[#16162a] rounded-2xl shadow-2xl overflow-hidden border border-[#5f62c9]/30 hover:border-[#FFD700]/50 transition-colors duration-300"
    variants={fadeInUp}
    whileHover={{ y: -10 }}
    transition={{ type: "spring", stiffness: 300, damping: 25 }}
  >
    <div className="relative h-64 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </motion.div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent opacity-60" />
      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-[#FFD700] mb-3 font-quicksand">{title}</h3>
      <p className="text-gray-300 mb-5 font-raleway leading-relaxed">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 font-raleway text-gray-200">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500]">
              <svg className="w-3 h-3 text-[#1E4B8C]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

// Team quality item component with animation
const TeamQualityItem = ({ title, description, index }) => (
  <motion.div
    className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-[#1E4B8C]/10 to-transparent backdrop-blur-sm border border-[#5f62c9]/20 hover:border-[#FFD700]/30 transition-colors duration-300"
    variants={fadeInUp}
    whileHover={{ scale: 1.02, x: 5 }}
    transition={{ type: "spring", stiffness: 300, damping: 25 }}
  >
    <motion.div
      className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full p-3 mt-1 flex-shrink-0 shadow-lg"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      <ShieldIcon />
    </motion.div>
    <div>
      <h4 className="font-bold text-white text-lg font-quicksand">{title}</h4>
      <p className="text-gray-400 text-sm font-raleway mt-1">{description}</p>
    </div>
  </motion.div>
);

const About = () => {
  const features = [
    { icon: <CheckIcon />, text: "Eco-Friendly" },
    { icon: <ClockIcon />, text: "Time-Efficient" },
    { icon: <ShieldIcon />, text: "Fully Insured" }
  ];

  const expertCards = [
    {
      imageSrc: "/expert-1.webp",
      title: "Professional Training",
      description: "Our experts undergo rigorous training in the latest cleaning techniques and use of eco-friendly products to ensure exceptional results.",
      features: ["Certified Techniques", "Continuous Education"]
    },
    {
      imageSrc: "/expert-2.webp",
      title: "Trusted & Verified",
      description: "Security and trust are our priorities. All team members undergo thorough background checks and in-person interviews.",
      features: ["Reference Checked", "Interviewed In-Person"]
    },
    {
      imageSrc: "/expert-3.webp",
      title: "Insured & Protected",
      description: "For your peace of mind, our team is fully insured and bonded, providing protection for both your property and our staff.",
      features: ["Insured & Bonded", "Liability Coverage"]
    }
  ];

  const teamQualities = [
    { title: "Experienced & Professional", description: "Minimum 3 years of professional cleaning experience" },
    { title: "Reference Checked", description: "Multiple professional references verified" },
    { title: "Interviewed In-Person", description: "Rigorous personal and professional assessment" },
    { title: "Honest and Dependable", description: "Trustworthy team you can rely on consistently" },
    { title: "Insured & Bonded", description: "Complete protection for your property" },
    { title: "Trustworthy", description: "Background-checked and personally vetted" }
  ];

  return (
    <>
      {/* Add metadata for SEO */}
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
              "founder": {
                "@type": "Person",
                "name": "Nicole Kim"
              },
              "description": "Professional cleaning services provider specializing in residential and commercial cleaning with eco-friendly products and techniques."
            }
          })
        }}
      />

      <section
        id="about"
        className="min-h-screen bg-gradient-to-b from-[#0a0a14] via-[#141428] to-[#0a0a14] pt-16 text-white overflow-hidden"
      >
        {/* Hero Section with animated gradient */}
        <div className="relative">
          {/* Animated background gradient */}
          <div className="absolute inset-0 h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E4B8C]/40 via-[#5f62c9]/30 to-[#1E4B8C]/40 rounded-bl-[100px] md:rounded-bl-[200px]" />
            {/* Decorative floating elements */}
            <motion.div
              className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#FFD700]/10 blur-3xl"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-10 left-20 w-48 h-48 rounded-full bg-[#5f62c9]/20 blur-3xl"
              animate={{
                y: [0, 20, 0],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center pt-20 pb-16"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-[#FFD700] to-white bg-clip-text text-transparent font-quicksand leading-tight"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                About N&K Spotless Solutions
              </motion.h1>

              <motion.div
                className="w-32 h-1.5 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] mx-auto rounded-full my-8"
                variants={scaleIn}
                transition={{ duration: 0.5, delay: 0.2 }}
                aria-hidden="true"
              />

              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto font-raleway leading-relaxed"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Your trusted partner for exceptional cleaning services since 2024
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Company Journey Section */}
        <div className="container mx-auto px-4 mt-16 md:mt-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Content - Left side */}
            <motion.div
              className="w-full lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent mb-6 font-quicksand"
                variants={fadeInLeft}
              >
                Our Journey
              </motion.h2>

              <motion.div
                className="w-24 h-1.5 bg-gradient-to-r from-[#1E4B8C] to-[#5f62c9] rounded-full mb-8"
                variants={scaleIn}
                aria-hidden="true"
              />

              <motion.p
                className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed font-raleway"
                variants={fadeInLeft}
              >
                N&K Spotless Solutions was founded in 2024 with the goal of providing
                top-notch cleaning services to homes and businesses. Our team is dedicated
                to creating spotless environments using environmentally friendly products
                and advanced cleaning techniques.
              </motion.p>

              <motion.p
                className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed font-raleway"
                variants={fadeInLeft}
              >
                Whether you need a deep clean or regular maintenance, we strive to exceed
                your expectations with every service. We believe in transparency, reliability,
                and uncompromising quality.
              </motion.p>

              {/* Feature Cards */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10"
                variants={staggerContainer}
              >
                {features.map((feature, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <FeatureCard icon={feature.icon} text={feature.text} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Images - Right side */}
            <motion.div
              className="w-full lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="relative"
                variants={fadeInRight}
                transition={{ duration: 0.6 }}
              >
                {/* Main Image with floating animation */}
                <motion.div
                  className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-[#5f62c9]/30"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/about-journey.webp"
                    alt="Our Cleaning Journey"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E4B8C]/30 to-transparent" />
                </motion.div>

                {/* Secondary Image */}
                <motion.div
                  className="absolute -bottom-12 -left-8 w-48 md:w-64 aspect-[4/3] hidden lg:block"
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border-4 border-[#FFD700]/50">
                    <Image
                      src="/about-detail.webp"
                      alt="Cleaning Detail"
                      fill
                      className="object-cover"
                      sizes="256px"
                      loading="lazy"
                    />
                  </div>
                </motion.div>

                {/* Decorative accent */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/10 rounded-full blur-2xl" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Experts Section */}
        <div className="container mx-auto px-4 py-24 md:py-32">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#FFD700] via-white to-[#FFD700] bg-clip-text text-transparent mb-6 font-quicksand"
              variants={fadeInUp}
            >
              Our Cleaning Experts
            </motion.h2>

            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] mx-auto rounded-full mb-8"
              variants={scaleIn}
              aria-hidden="true"
            />

            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto font-raleway leading-relaxed"
              variants={fadeInUp}
            >
              At N&K Spotless Solutions, we assure you that we have hired the best and most
              suitable team to help you achieve your desired outcome. Every single one
              of our teammates is friendly, experienced, and, most importantly, trustworthy.
            </motion.p>
          </motion.div>

          {/* Expert Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {expertCards.map((card, index) => (
              <ExpertCard key={index} {...card} index={index} />
            ))}
          </motion.div>

          {/* Team Qualities Section */}
          <motion.div
            className="mt-20 bg-gradient-to-br from-[#1a1a2e]/80 to-[#0a0a14]/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-[#5f62c9]/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent mb-10 text-center font-quicksand"
              variants={fadeInUp}
            >
              Why Our Team Stands Out
            </motion.h3>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {teamQualities.map((quality, index) => (
                <TeamQualityItem key={index} {...quality} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default About;