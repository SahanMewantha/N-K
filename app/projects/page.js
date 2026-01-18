"use client";

import React, { useState, useCallback, Suspense } from "react";
import { MapPin, Calendar, Check, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

// Lazy load the lightbox component
const ImageLightbox = dynamic(() => import("../components/ImageLightbox"), {
  loading: () => null,
  ssr: false
});

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

const imageHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } }
};

const projects = [
  {
    id: 1,
    title: "Office Cleaning",
    location: "Pakenham",
    date: "February 2025",
    description:
      "Complete office cleaning service for a corporate client in Pakenham. The project included deep cleaning of workstations, conference rooms, restrooms, and common areas.",
    features: [
      "Deep carpet cleaning and stain removal",
      "Window and glass partition cleaning",
      "Sanitization of high-touch surfaces",
      "Kitchen and break room cleaning",
      "Restroom deep cleaning and sanitization",
      "Floor polishing and maintenance",
    ],
    testimonial: {
      text:
        "The team delivered exceptional cleaning services for our office space. Every corner was spotless, and the attention to detail was impressive.",
      author: "",
    },
    images: Array.from({ length: 10 }, (_, i) => ({
      src: `/office-cleaning-${i + 1}.jpeg`,
      width: 800,
      height: 600
    })),
    thumbnail: "/office-cleaning-1.jpeg"
  },
  {
    id: 2,
    title: "Child Care Cleaning",
    location: "Parkdale",
    date: "January 2025",
    description:
      "Specialized cleaning services for a child care facility in Parkdale. We implemented child-safe cleaning protocols and ensured all areas were thoroughly sanitized to maintain a healthy environment for children.",
    features: [
      "Child-safe, eco-friendly cleaning solutions",
      "Toy and play equipment sanitization",
      "Nap area deep cleaning",
      "Bathroom and changing area sanitization",
      "Kitchen and food prep area cleaning",
      "Floor sanitization and disinfection",
    ],
    testimonial: {
      text:
        "Their specialized approach to cleaning our childcare center gave us peace of mind knowing that our facility is not just clean, but safe for our little ones.",
      author: "",
    },
    images: Array.from({ length: 4 }, (_, i) => ({
      src: `/child-care-cleaning-${i + 1}.jpeg`,
      width: 800,
      height: 600
    })),
    thumbnail: "/child-care-cleaning-1.jpeg"
  },
  {
    id: 3,
    title: "Industrial Cleaning",
    location: "Dandenong South",
    date: "March 2025",
    description:
      "Comprehensive industrial cleaning for a large manufacturing facility in Dandenong South. The project involved heavy-duty cleaning equipment, safety protocols, and high-standard sanitation procedures for machinery and surfaces.",
    features: [
      "High-pressure equipment cleaning",
      "Oil and grease removal from floors",
      "Machinery sanitation and dust removal",
      "Warehouse floor scrubbing and polishing",
      "Cleaning of industrial exhaust and vents",
      "Safe chemical usage adhering to compliance"
    ],
    testimonial: {
      text:
        "Their team handled the industrial cleaning with utmost professionalism. The facility was spotless and met all our compliance requirements.",
      author: "Operations Manager, Dandenong South"
    },
    images: Array.from({ length: 11 }, (_, i) => ({
      src: `/industrial-clean-${i + 1}.jpg`,
      width: 800,
      height: 600
    })),
    thumbnail: "/industrial-clean-1.jpeg"
  }
];

const FeatureItem = React.memo(({ feature, index }) => (
  <motion.div
    className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[#1E4B8C]/10 to-transparent hover:from-[#1E4B8C]/20 transition-colors duration-300"
    variants={fadeInUp}
    whileHover={{ x: 5 }}
  >
    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center">
      <Check size={12} className="text-[#1E4B8C]" aria-hidden="true" />
    </div>
    <span className="text-sm text-gray-300 font-raleway">{feature}</span>
  </motion.div>
));

FeatureItem.displayName = 'FeatureItem';

const GalleryImage = React.memo(({ image, index, onClick, projectTitle }) => {
  return (
    <motion.button
      onClick={onClick}
      className="aspect-square rounded-xl overflow-hidden border-2 border-[#5f62c9]/30 hover:border-[#FFD700]/70 cursor-pointer relative group"
      aria-label={`View ${projectTitle} image ${index + 1}`}
      variants={scaleIn}
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <Image
        src={image.src}
        alt={`${projectTitle} - Image ${index + 1}`}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        loading={index < 4 ? "eager" : "lazy"}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* View indicator */}
      <div className="absolute bottom-2 right-2 bg-[#FFD700] text-[#1E4B8C] text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
        <Sparkles size={10} />
        View
      </div>
    </motion.button>
  );
});

GalleryImage.displayName = 'GalleryImage';

const ProjectCard = React.memo(({ project, onImageClick, index }) => {
  const handleImageClick = useCallback((imgIndex) => {
    onImageClick(project.id, imgIndex);
  }, [project.id, onImageClick]);

  const isEven = index % 2 === 0;

  return (
    <motion.article
      className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16162a] rounded-3xl overflow-hidden shadow-2xl border border-[#5f62c9]/20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeInUp}
    >
      {/* Decorative corner accents */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1E4B8C]/20 to-transparent rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#5f62c9]/20 to-transparent rounded-tr-full" />

      {/* Project Header */}
      <header className="relative bg-gradient-to-r from-[#1E4B8C] via-[#5f62c9] to-[#1E4B8C] px-6 py-6 md:px-8 md:py-8">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-white font-quicksand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {project.title}
          </motion.h2>
          <motion.div
            className="flex items-center gap-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] px-4 py-2 rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Check size={16} className="text-[#1E4B8C]" />
            <span className="text-[#1E4B8C] font-bold text-sm">Completed</span>
          </motion.div>
        </div>

        {/* Meta info */}
        <div className="relative z-10 flex flex-wrap items-center gap-6 mt-4 text-sm font-raleway">
          <div className="flex items-center text-white/90 gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <MapPin size={14} className="text-[#FFD700]" aria-hidden="true" />
            </div>
            <span>{project.location}</span>
          </div>
          <div className="flex items-center text-white/90 gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Calendar size={14} className="text-[#FFD700]" aria-hidden="true" />
            </div>
            <time>{project.date}</time>
          </div>
        </div>
      </header>

      {/* Project Content */}
      <div className="relative z-10 p-6 md:p-8">
        <motion.p
          className="text-gray-300 font-raleway leading-relaxed text-base md:text-lg mb-8"
          variants={fadeInUp}
        >
          {project.description}
        </motion.p>

        {/* Features Grid */}
        <motion.div
          className="mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-[#FFD700] mb-4 font-quicksand flex items-center gap-2">
            <Sparkles size={18} />
            Services Provided
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <FeatureItem key={idx} feature={feature} index={idx} />
            ))}
          </div>
        </motion.div>

        {/* Image Gallery */}
        <section aria-labelledby={`gallery-${project.id}`} className="mb-8">
          <h3
            id={`gallery-${project.id}`}
            className="text-lg font-semibold mb-4 font-quicksand flex items-center gap-2"
          >
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
              Project Gallery
            </span>
            <span className="text-xs text-gray-500 font-normal">
              ({project.images.length} photos)
            </span>
          </h3>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {project.images.map((image, imgIndex) => (
              <GalleryImage
                key={imgIndex}
                image={image}
                index={imgIndex}
                onClick={() => handleImageClick(imgIndex)}
                projectTitle={project.title}
              />
            ))}
          </motion.div>
        </section>

        {/* Testimonial */}
        {project.testimonial && project.testimonial.text && (
          <motion.div
            className="mt-8 pt-6 border-t border-[#5f62c9]/20"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-[#1E4B8C]/20 to-[#5f62c9]/10 rounded-2xl p-6 border border-[#5f62c9]/20">
              {/* Quote icon */}
              <div className="absolute -top-3 -left-2 w-10 h-10 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-[#1E4B8C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <blockquote className="italic text-gray-300 font-raleway text-base md:text-lg leading-relaxed pl-6">
                "{project.testimonial.text}"
              </blockquote>
              {project.testimonial.author && (
                <p className="mt-4 pl-6 text-[#FFD700] font-medium font-quicksand flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-[#FFD700]" />
                  {project.testimonial.author}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.article>
  );
});

ProjectCard.displayName = 'ProjectCard';

const ProjectsPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = useCallback((projectId, imageIndex) => {
    const project = projects.find((p) => p.id === projectId);
    setCurrentProject(project);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setCurrentProject(null);
    setCurrentImageIndex(0);
  }, []);

  const navigateImage = useCallback((direction) => {
    if (!currentProject) return;

    setCurrentImageIndex((prev) => {
      if (direction === 'next') {
        return prev === currentProject.images.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? currentProject.images.length - 1 : prev - 1;
      }
    });
  }, [currentProject]);

  return (
    <>
      {/* SEO Metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "N&K Spotless Solutions - Cleaning Projects",
            "description": "Explore our recent cleaning projects showcasing office cleaning, childcare facility cleaning, and more professional cleaning services.",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": projects.map((project, index) => ({
                "@type": "Service",
                "position": index + 1,
                "name": project.title,
                "description": project.description,
                "areaServed": project.location
              }))
            }
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-[#0a0a14] via-[#141428] to-[#0a0a14] text-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 px-4 overflow-hidden">
          {/* Background gradient orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#1E4B8C]/20 blur-3xl"
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#5f62c9]/20 blur-3xl"
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-quicksand bg-gradient-to-r from-white via-[#FFD700] to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Our Cleaning Projects
            </motion.h1>

            <motion.div
              className="h-1.5 w-32 bg-gradient-to-r from-[#1E4B8C] via-[#5f62c9] to-[#1E4B8C] mx-auto mb-8 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              aria-hidden="true"
            />

            <motion.p
              className="max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-gray-300 font-raleway leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Explore our recent cleaning projects and see the quality of our work.
              We take pride in delivering exceptional cleaning services for various
              types of facilities.
            </motion.p>
          </div>
        </section>

        {/* Projects List */}
        <main className="container mx-auto px-4 pb-20">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onImageClick={openLightbox}
                index={index}
              />
            ))}
          </div>
        </main>

        {/* Lazy loaded lightbox */}
        {lightboxOpen && currentProject && (
          <Suspense fallback={null}>
            <ImageLightbox
              project={currentProject}
              currentImageIndex={currentImageIndex}
              onClose={closeLightbox}
              onNavigate={navigateImage}
            />
          </Suspense>
        )}

        <Footer />
      </div>
    </>
  );
};

export default ProjectsPage;