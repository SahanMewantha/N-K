"use client"
import { useState } from 'react';
import Head from 'next/head';
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to an API
    console.log(formData);
    // Show success message
    setSubmitted(true);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2e2e2e] via-background to-[#141414] text-text pt-16">
      <Head>
        <title>Contact Us | N&K Spotless Solutions</title>
        <meta name="description" content="Contact N&K Spotless Solutions for professional cleaning services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary font-quicksand mb-4">N&K Spotless Solutions</h1>
          <h2 className="text-3xl font-semibold text-accent font-raleway mb-2">Contact Us</h2>
          <p className="text-lg text-gray-300 font-raleway">We'd love to hear from you! Get in touch for a spotless cleaning experience.</p>
        </header>
        
        <div className="flex flex-col md:flex-row gap-8 font-raleway">
          {/* Contact Information */}
          <div className="bg-background bg-opacity-50 rounded-xl p-6 shadow-lg flex-1">
            <h3 className="text-2xl font-semibold text-secondary mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-accent rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-accent font-medium">Phone</h4>
                  <a href="tel:+61413624670" className="text-text hover:text-[#FFEB3B] transition-colors">041 362 4670</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-accent font-medium">WhatsApp</h4>
                  <a href="https://wa.me/+61413624670" className="text-text hover:text-[#FFEB3B] transition-colors">041 362 4670</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-accent font-medium">Email</h4>
                  <a href="mailto:info@nkspotless.com" className="text-text hover:text-[#FFEB3B] transition-colors">info@nkspotless.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-accent font-medium">Hours</h4>
                  <p className="text-text">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-text">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-text">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-background bg-opacity-50 rounded-xl p-6 shadow-lg flex-1">
            <h3 className="text-2xl font-semibold text-secondary mb-6">Send Us a Message</h3>
            
            {submitted ? (
              <div className="bg-green-600 bg-opacity-25 border border-green-500 text-green-100 px-4 py-3 rounded mb-4">
                <p>Thank you for your message! We'll get back to you shortly.</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-accent mb-1">Name <span className="text-[#FFEB3B]">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-text bg-opacity-90 border-2 border-gray-600 rounded-md focus:outline-none focus:border-accent text-background"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-accent mb-1">Email <span className="text-[#FFEB3B]">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-text bg-opacity-90 border-2 border-gray-600 rounded-md focus:outline-none focus:border-accent text-background"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-accent mb-1">Message <span className="text-[#FFEB3B]">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 bg-text bg-opacity-90 border-2 border-gray-600 rounded-md focus:outline-none focus:border-accent text-background resize-y"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-accent hover:bg-[#FFEB3B] hover:text-background text-text font-semibold py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center"
              >
                <span>Send Message</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}