import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, Send } from "lucide-react";

const ContactSection = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+1234567890"; // Replace with actual phone number
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank"); // Replace with actual WhatsApp number
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 p-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <button
                onClick={handlePhoneClick}
                className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors w-full group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400">Call Us</p>
                  <p className="text-lg">+1 (234) 567-890</p>
                </div>
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-4 text-gray-300 hover:text-green-400 transition-colors w-full group"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="text-lg">+1 (234) 567-890</p>
                </div>
              </button>

              <div className="flex items-center space-x-4 text-gray-300">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="text-lg">info@nkspotless.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"
          >
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-white"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-white"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows="5"
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-white"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;