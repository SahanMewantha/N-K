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

  const CONTACT_INFO = {
    phone: "+1234567890",
    phoneDisplay: "+1 (234) 567-890",
    whatsapp: "1234567890",
    email: "nkspotlesssolutions@gmail.com",
    address: "123 Clean Street, Spotless City"
  };

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setFormStatus({ type: "success", message: "Message sent! We'll contact you soon." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setFormStatus({ type: "error", message: "Failed to send. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = shouldAnimate ? {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  } : { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } };

  const itemVariants = shouldAnimate ? {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  } : { hidden: { opacity: 1, x: 0 }, visible: { opacity: 1, x: 0 } };

  return (
    <section 
      id="contact" 
      className="min-h-screen py-20 bg-background"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.header
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-primary font-quicksand mb-4">
            Contact N&K Spotless Solutions
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6" aria-hidden="true" />
          <p className="text-text max-w-2xl mx-auto text-lg font-raleway">
            Get your free quote today or ask about our professional cleaning services
          </p>
        </motion.header>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-primary/5 p-8 rounded-xl border border-primary/10">
              <h3 className="text-2xl font-bold text-text font-quicksand mb-6">Our Contact Details</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-text font-raleway">Phone</p>
                    <a 
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-lg font-medium text-text hover:text-primary transition-colors font-quicksand"
                    >
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-text font-raleway">Email</p>
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-lg font-medium text-text hover:text-primary transition-colors font-quicksand"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-text font-raleway">WhatsApp</p>
                    <a 
                      href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-text hover:text-primary transition-colors font-quicksand"
                    >
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-text font-raleway">Address</p>
                    <p className="text-lg font-medium text-text font-quicksand">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 pt-6 border-t border-primary">
                <h4 className="text-lg font-semibold text-text font-quicksand mb-3">Business Hours</h4>
                <ul className="space-y-2 font-raleway">
                  <li className="flex justify-between text-text">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between text-text">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between text-text">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={shouldAnimate ? { 
              hidden: { opacity: 0, x: 30 }, 
              visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } } 
            } : {}}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-primary/5 p-8 rounded-xl border border-primary/10"
          >
            <h3 className="text-2xl font-bold text-text font-quicksand mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-2 font-raleway">
                  Your Name <span className="text-secondary">*</span>
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Smith" 
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-text placeholder:text-text/50 font-raleway"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-2 font-raleway">
                  Email Address <span className="text-secondary">*</span>
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com" 
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-text placeholder:text-text/50 font-raleway"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-2 font-raleway">
                  Your Message <span className="text-secondary">*</span>
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your cleaning needs..." 
                  rows="5"
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-text placeholder:text-text/50 resize-none font-raleway"
                />
              </div>

              {/* Status Messages */}
              {formStatus.message && (
                <div 
                  className={`p-4 rounded-lg text-sm font-raleway ${
                    formStatus.type === "success" 
                      ? "bg-secondary/20 text-secondary border border-secondary/30" 
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
                className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-white px-6 py-4 rounded-lg flex items-center justify-center gap-2 transition-all font-quicksand font-semibold"
                aria-label="Send message"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
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
                "streetAddress": CONTACT_INFO.address,
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