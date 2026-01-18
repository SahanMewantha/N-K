"use client";

import { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Mail, Clock, Send, CheckCircle, MapPin, Sparkles } from "lucide-react";
import Footer from "../components/Footer";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

// Contact info item component
const ContactInfoItem = ({ icon: Icon, title, children, href, delay = 0 }) => {
  const isExternal = href && (href.startsWith('https://') || href.startsWith('http://'));

  const content = (
    <>
      <motion.div
        className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon size={22} className="text-[#1E4B8C]" />
      </motion.div>
      <div>
        <h4 className="text-[#FFD700] font-semibold font-quicksand mb-1">{title}</h4>
        <div className="text-gray-300 group-hover:text-[#FFD700] transition-colors duration-300 font-raleway text-sm">
          {children}
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-[#1E4B8C]/10 to-transparent hover:from-[#1E4B8C]/20 transition-all duration-300 group cursor-pointer"
        variants={fadeInLeft}
        whileHover={{ x: 5, scale: 1.02 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-[#1E4B8C]/10 to-transparent hover:from-[#1E4B8C]/20 transition-all duration-300 group"
      variants={fadeInLeft}
      whileHover={{ x: 5, scale: 1.02 }}
    >
      {content}
    </motion.div>
  );
};

// Form input component
const FormInput = ({ label, id, type = "text", required, value, onChange, rows }) => {
  const InputTag = rows ? 'textarea' : 'input';

  return (
    <motion.div variants={fadeInUp}>
      <label
        htmlFor={id}
        className="block text-gray-300 mb-2 font-raleway text-sm"
      >
        {label} {required && <span className="text-[#FFD700]">*</span>}
      </label>
      <InputTag
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className="w-full px-4 py-3 bg-[#1a1a2e] border-2 border-[#5f62c9]/30 rounded-xl 
          focus:outline-none focus:border-[#FFD700]/50 focus:ring-2 focus:ring-[#FFD700]/20
          text-white placeholder-gray-500 transition-all duration-300
          hover:border-[#5f62c9]/50"
        placeholder={`Enter your ${label.toLowerCase()}`}
      />
    </motion.div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log(formData);
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a14] via-[#141428] to-[#0a0a14] text-white overflow-hidden">
      <Head>
        <title>Contact Us | N&K Spotless Solutions</title>
        <meta name="description" content="Contact N&K Spotless Solutions for professional cleaning services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-10 left-1/4 w-80 h-80 rounded-full bg-[#1E4B8C]/20 blur-3xl"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-[#5f62c9]/15 blur-3xl"
            animate={{
              y: [0, 30, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto text-center relative z-10">
          {/* Decorative element */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#FFD700]" />
            <Sparkles className="text-[#FFD700]" size={24} />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#FFD700]" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-quicksand bg-gradient-to-r from-white via-[#FFD700] to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact Us
          </motion.h1>

          <motion.div
            className="h-1.5 w-32 bg-gradient-to-r from-[#1E4B8C] via-[#5f62c9] to-[#1E4B8C] mx-auto mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          <motion.p
            className="max-w-2xl mx-auto text-base md:text-lg text-gray-300 font-raleway"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We'd love to hear from you! Get in touch for a spotless cleaning experience.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Contact Information */}
          <motion.div
            className="bg-gradient-to-br from-[#1a1a2e] to-[#16162a] rounded-3xl p-6 md:p-8 shadow-2xl border border-[#5f62c9]/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#1E4B8C]/20 to-transparent rounded-bl-full" />

            <motion.h3
              className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent mb-8 font-quicksand"
              variants={fadeInUp}
            >
              Get In Touch
            </motion.h3>

            <div className="space-y-4">
              <ContactInfoItem icon={Phone} title="Phone" href="tel:+61413624670">
                041 362 4670
              </ContactInfoItem>

              <ContactInfoItem icon={MessageCircle} title="WhatsApp" href="https://wa.me/+61413624670">
                041 362 4670
              </ContactInfoItem>

              <ContactInfoItem icon={Mail} title="Email" href="mailto:info@nkspotless.com">
                info@nkspotless.com
              </ContactInfoItem>

              <ContactInfoItem icon={Clock} title="Business Hours">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </ContactInfoItem>

              <ContactInfoItem icon={MapPin} title="Service Area">
                <p>Melbourne Metropolitan Area</p>
                <p>Victoria, Australia</p>
              </ContactInfoItem>
            </div>

            {/* Social links or additional CTA */}
            <motion.div
              className="mt-8 pt-6 border-t border-[#5f62c9]/20"
              variants={fadeInUp}
            >
              <p className="text-gray-400 text-sm font-raleway mb-4">
                Follow us for cleaning tips and updates
              </p>
              <div className="flex gap-3">
                {['Facebook', 'Instagram', 'LinkedIn'].map((social, i) => (
                  <motion.button
                    key={social}
                    className="px-4 py-2 bg-[#1E4B8C]/20 hover:bg-[#FFD700]/20 rounded-lg text-sm text-gray-300 hover:text-[#FFD700] transition-colors duration-300 border border-[#5f62c9]/20 hover:border-[#FFD700]/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gradient-to-br from-[#1a1a2e] to-[#16162a] rounded-3xl p-6 md:p-8 shadow-2xl border border-[#5f62c9]/20 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Decorative corner */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#5f62c9]/10 to-transparent rounded-br-full" />

            <motion.h3
              className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent mb-8 font-quicksand relative z-10"
              variants={fadeInUp}
            >
              Send Us a Message
            </motion.h3>

            {/* Success message */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  className="mb-6 p-4 bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-500/30 rounded-xl flex items-center gap-3"
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle size={20} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-green-300 font-medium">Message sent successfully!</p>
                    <p className="text-green-400/70 text-sm">We'll get back to you shortly.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <FormInput
                label="Name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
              />

              <FormInput
                label="Email"
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <FormInput
                label="Message"
                id="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
              />

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative overflow-hidden bg-gradient-to-r from-[#1E4B8C] to-[#5f62c9] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(30, 75, 140, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <span className="absolute inset-0 flex items-center justify-center gap-2 text-[#1E4B8C] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Send Message
                  <Send size={18} />
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}