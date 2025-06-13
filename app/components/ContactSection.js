import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, Send } from "lucide-react";
import useReducedMotion from "../components/hooks/useReducedMotion";

const ContactSection = () => {
  const shouldAnimate = !useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Replace with your actual contact details
  const CONTACT_INFO = {
    phone: "+1234567890",
    phoneDisplay: "+1 (234) 567-890",
    whatsapp: "1234567890",
    email: "info@nkspotless.com",
    address: "Your Business Address Here"
  };

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formStatus.type === "error") {
      setFormStatus({ type: "", message: "" });
    }
  }, [formStatus.type]);

  const validateForm = () => {
    if (!formData.name.trim()) {
      setFormStatus({ type: "error", message: "Please enter your name" });
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormStatus({ type: "error", message: "Please enter a valid email" });
      return false;
    }
    if (!formData.message.trim()) {
      setFormStatus({ type: "error", message: "Please enter your message" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Replace with your actual form submission logic
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setFormStatus({ type: "success", message: "Message sent successfully! We'll get back to you soon." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setFormStatus({ type: "error", message: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = shouldAnimate ? {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  } : {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 }
  };

  const itemVariants = shouldAnimate ? {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  } : {
    hidden: { opacity: 1, x: 0 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen bg-gradient-to-br from-[#454545] via-black to-[#262626] py-16"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4">
        <motion.header
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 id="contact-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#174fde] mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-[#ecc106] mx-auto rounded-full mb-6" aria-hidden="true" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready for a spotless space? Contact us today for a free quote.
          </p>
        </motion.header>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8 p-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            
            <address className="space-y-6 not-italic">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors w-full group"
                aria-label="Call us"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400">Call Us</p>
                  <p className="text-lg font-medium">{CONTACT_INFO.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-300 hover:text-green-400 transition-colors w-full group"
                aria-label="Contact us on WhatsApp"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageSquare className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="text-lg font-medium">{CONTACT_INFO.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center space-x-4 text-gray-300 hover:text-purple-400 transition-colors w-full group"
                aria-label="Email us"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="text-lg font-medium">{CONTACT_INFO.email}</p>
                </div>
              </a>
            </address>

            {/* Business Hours */}
            <div className="mt-8 p-4 bg-white/5 rounded-lg">
              <h4 className="text-white font-semibold mb-2">Business Hours</h4>
              <p className="text-gray-300 text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-300 text-sm">Saturday: 9:00 AM - 4:00 PM</p>
              <p className="text-gray-300 text-sm">Sunday: Closed</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={shouldAnimate ? { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } } : {}}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name" 
                  required
                  aria-required="true"
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-gray-400"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email" 
                  required
                  aria-required="true"
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-gray-400"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your cleaning needs..." 
                  rows="5"
                  required
                  aria-required="true"
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-gray-400 resize-none"
                />
              </div>

              {/* Status Messages */}
              {formStatus.message && (
                <div 
                  className={`p-4 rounded-lg text-sm ${
                    formStatus.type === "success" 
                      ? "bg-green-500/20 text-green-300 border border-green-500/30" 
                      : "bg-red-500/20 text-red-300 border border-red-500/30"
                  }`}
                  role="alert"
                >
                  {formStatus.message}
                </div>
              )}
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#174fde] hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-4 rounded-lg flex items-center justify-center space-x-2 transition-all"
                aria-label="Send message"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send className={`w-5 h-5 ${isSubmitting ? "animate-pulse" : ""}`} aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "N&K Spotless Solutions",
              "telephone": CONTACT_INFO.phone,
              "email": CONTACT_INFO.email,
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "16:00"
                }
              ]
            }
          })
        }}
      />
    </section>
  );
};

export default ContactSection;