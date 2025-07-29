import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#", color: "hover:text-blue-400" },
    { icon: Instagram, name: "Instagram", href: "#", color: "hover:text-pink-400" },
    { icon: Linkedin, name: "LinkedIn", href: "#", color: "hover:text-blue-300" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Residential Cleaning",
    "Commercial Cleaning",
    "Deep Cleaning",
    "Post-Construction Cleanup",
    "Window Cleaning",
    "Carpet Cleaning",
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-green-600/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
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
                <span className="text-white font-bold text-lg tracking-tight">N&K Spotless Solutions</span>
                <span className="text-gray-300 text-sm font-raleway">Cleaning Excellence</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 font-raleway">
              Professional cleaning services with attention to detail. We transform spaces with innovative
              solutions and exceptional service quality.
            </p>
            <div className="flex items-center space-x-2 text-blue-400">
              <Sparkles size={16} />
              <span className="text-sm font-raleway">Spotless Results, Every Time</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-quicksand text-white">Quick Links</h3>
            <ul className="space-y-2 font-raleway">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-quicksand text-white">Our Services</h3>
            <ul className="space-y-2 font-raleway">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm flex items-center space-x-2">
                    <span className="w-1 h-1 bg-green-400 rounded-full" />
                    <span>{service}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-quicksand text-white">Contact Info</h3>
            <div className="space-y-4 font-raleway">
              <div className="flex items-start space-x-3">
                <Mail size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a
                    href="mailto:nkspotlesssolutions@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    nkspotlesssolutions@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone size={16} className="text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Phone</p>
                  <a
                    href="tel:+61413624670"
                    className="text-green-400 hover:text-green-300 transition-colors text-sm"
                  >
                    (041) 362-4670
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Hours</p>
                  <p className="text-yellow-400 text-sm">Mon-Fri: 8AM-6PM</p>
                  <p className="text-yellow-400 text-sm">Weekend: 9AM-5PM</p>
                </div>
              </div>

              
            </div>
          </div>
        </div>

        {/* Social Media & Back to Top */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-center md:text-left">
                <h4 className="font-bold text-white mb-2 font-quicksand">Follow Us</h4>
                <div className="flex justify-center md:justify-start space-x-4">
                  {socialLinks.map(({ icon: Icon, name, href, color }) => (
                    <a
                      key={name}
                      href={href}
                      className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 ${color} transition-all duration-300 hover:bg-gray-700`}
                      aria-label={name}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm font-raleway">
              © {new Date().getFullYear()} N&K Spotless Solutions. All Rights Reserved.
            </p>
            <div className="flex space-x-4 text-sm font-raleway">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
