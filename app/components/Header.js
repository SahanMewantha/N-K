"use client"
import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { 
  Home as HomeIcon, 
  Info as AboutIcon, 
  Wrench as ServiceIcon, 
  Mail as ContactIcon, 
  X,
  Facebook,
  Instagram,
  Linkedin,
  Twitter
} from "lucide-react";

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

const Header = ({ onNavClick }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (section) => {
    onNavClick(section);
    setIsMenuOpen(false);
  };

  const navItems = [
    { icon: HomeIcon, label: "Home", section: "home" },
    { icon: AboutIcon, label: "About", section: "about" },
    { icon: ServiceIcon, label: "Services", section: "services" },
    { icon: ContactIcon, label: "Contact", section: "contact" }
  ];

  const socialItems = [
    { icon: Facebook, url: "#" },
    { icon: Instagram, url: "#" },
    { icon: Linkedin, url: "#" },
    { icon: Twitter, url: "#" }
  ];

  if (isMobile) {
    return (
      <>
        <MotionConfig
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <motion.button
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
            onClick={() => setIsMenuOpen((pv) => !pv)}
            className="fixed top-4 left-4 z-50 h-12 w-12 rounded-full bg-black/50 flex items-center justify-center"
          >
            {isMenuOpen ? (
              <X className="text-white" />
            ) : (
              <>
                <motion.span
                  variants={VARIANTS.top}
                  className="absolute h-1 w-6 bg-white"
                  style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
                />
                <motion.span
                  variants={VARIANTS.middle}
                  className="absolute h-1 w-6 bg-white"
                  style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                />
                <motion.span
                  variants={VARIANTS.bottom}
                  className="absolute h-1 w-4 bg-white"
                  style={{
                    x: "-50%",
                    y: "50%",
                    bottom: "35%",
                    left: "calc(50% + 10px)",
                  }}
                />
              </>
            )}
          </motion.button>
        </MotionConfig>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-40 bg-black/90 text-white"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map(({ icon: Icon, label, section }) => (
                <motion.button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className="text-3xl flex items-center space-x-4"
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={30} />
                  <span>{label}</span>
                </motion.button>
              ))}
              
              <div className="flex space-x-6 mt-8">
                {socialItems.map(({ icon: Icon, url }, index) => (
                  <motion.a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white"
                  >
                    <Icon size={30} />
                  </motion.a>
                ))}
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
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm"
    >
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Brand name on the left */}
        <div className="text-2xl font-bold text-white">MyBrand</div>

        {/* Navigation items in the middle */}
        <div className="flex flex-grow justify-center space-x-6">
          {navItems.map(({ icon: Icon, label, section }) => (
            <motion.button
              key={section}
              onClick={() => onNavClick(section)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white flex items-center space-x-2 hover:text-blue-300"
            >
              <Icon size={20} />
              <span>{label}</span>
            </motion.button>
          ))}
        </div>

        {/* Social icons on the right */}
        <div className="flex space-x-6">
          {socialItems.map(({ icon: Icon, url }, index) => (
            <motion.a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
