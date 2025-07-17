"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from "next/image";
import {
  Home as HomeIcon,
  Info as AboutIcon,
  Wrench as ServiceIcon,
  Mail as ContactIcon,
  Camera as GalleryIcon,
  X,
  Menu,
} from "lucide-react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { icon: HomeIcon, label: "Home", path: "/" },
    { icon: AboutIcon, label: "About", path: "/about" },
    { icon: ServiceIcon, label: "Services", path: "/services" },
    { icon: GalleryIcon, label: "Our Projects", path: "/projects" }, 
    { icon: ContactIcon, label: "Contact", path: "/contact" },
  ];

  if (isMobile) {
    return (
      <>
        {/* Mobile Header Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg bg-background border-b border-primary/20"
        >
          <div className="flex items-center justify-between p-4">
            {/* Mobile Logo - Left Side */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-secondary shadow-md group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.jpeg"
                  alt="N&K Spotless Solutions Logo"
                  className="w-full h-full object-cover"
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  fill
                />
              </div>
              <div className="flex flex-col font-quicksand">
                <span className="text-text font-bold text-lg tracking-tight">N&K Spotless</span>
                <span className="text-secondary text-xs font-raleway">Cleaning Excellence</span>
              </div>
            </Link>

            {/* Hamburger Menu Button - Right Side */}
            <button
              onClick={() => setIsMenuOpen((pv) => !pv)}
              className="p-2 rounded-full hover:bg-primary/20 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="text-text" size={24} />
              ) : (
                <Menu className="text-text" size={24} />
              )}
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu - Slides in from right */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-background text-text"
          >
            {/* Menu Header with Logo */}
            <div className="flex items-center justify-between p-4 border-b border-primary/20">
              <Link href="/" className="flex items-center space-x-3 group" onClick={() => setIsMenuOpen(false)}>
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-secondary shadow-md group-hover:scale-105 transition-transform">
                  <Image
                    src="/logo.jpeg"
                    alt="N&K Spotless Solutions Logo"
                    className="w-full h-full object-cover"
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    fill
                  />
                </div>
                <div className="flex flex-col font-quicksand">
                  <span className="text-text font-bold text-xl tracking-tight">N&K Spotless</span>
                  <span className="text-secondary text-sm font-raleway">Cleaning Excellence</span>
                </div>
              </Link>
              
              <button
                onClick={() => setIsMenuOpen(false)}
                className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="Close menu"
              >
                <X className="text-text" size={20} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col space-y-2 font-raleway p-4 pt-8">
              {navItems.map(({ icon: Icon, label, path }, index) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={path}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                      <Icon size={20} className="text-secondary group-hover:text-accent transition-colors" />
                    </div>
                    <span className="text-lg text-text group-hover:text-accent transition-colors font-medium">
                      {label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Menu Footer */}
            <div className="absolute bottom-8 left-4 right-4">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-secondary/20">
                    <Image
                      src="/logo.jpeg"
                      alt="N&K Spotless Solutions Logo"
                      className="w-full h-full object-cover"
                      loading="eager"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      fill
                    />
                  </div>
                  <span className="text-secondary text-sm font-raleway">Professional Cleaning Services</span>
                </div>
                <p className="text-text/60 text-xs font-raleway">
                  Excellence in every detail
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </>
    );
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-primary/20"
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:px-8 md:py-4">

        {/* Logo and Brand Name - Desktop */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 2xl:w-16 2xl:h-16 rounded-full overflow-hidden bg-secondary shadow-md group-hover:rotate-6 transition-transform">

            <Image
              src="/logo.jpeg"
              alt="N&K Spotless Solutions Logo"
              className="w-full h-full object-cover"
              loading="eager"
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
            />
          </div>
          <div className="flex flex-col font-quicksand">
            <span className="text-text font-bold text-lg md:text-xl lg:text-2xl 2xl:text-3xl tracking-tight">
              N&K Spotless Solutions
            </span>
            <span className="text-secondary text-xs md:text-sm lg:text-base font-raleway">
              Cleaning Excellence
            </span>
          </div>

        </Link>

        {/* Navigation Items - Centered */}
        <div className="hidden md:flex flex-grow justify-end space-x-4 lg:space-x-6 2xl:space-x-10 font-raleway">
          {navItems.map(({ icon: Icon, label, path }) => (
            <Link
              key={path}
              href={path}
              className="text-text text-sm md:text-base lg:text-lg flex items-center space-x-2 hover:text-accent transition-colors group"
            >
              <Icon size={18} className="text-secondary group-hover:text-accent transition-colors" />
              <span className="font-medium">{label}</span>
            </Link>
          ))}
        </div>

      </nav>
    </motion.header>
  );
};

export default Header;