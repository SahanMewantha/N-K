"use client";
import React, { useState, useCallback, lazy, Suspense } from "react";
import { MapPin, Calendar, Check } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";

// Lazy load the lightbox component to reduce initial bundle size
const ImageLightbox = dynamic(() => import("../components/ImageLightbox"), {
  loading: () => null,
  ssr: false
});

// Optimize project data structure
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
      author: "David Thompson, Office Manager",
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
      author: "Sarah Williams, Center Director",
    },
    images: Array.from({ length: 4 }, (_, i) => ({
      src: `/child-care-cleaning-${i + 1}.jpeg`,
      width: 800,
      height: 600
    })),
    thumbnail: "/child-care-cleaning-1.jpeg"
  },
];

// Feature component to reduce repetition
const FeatureItem = React.memo(({ feature }) => (
  <div className="flex items-start">
    <div className="mt-1 mr-3 flex-shrink-0">
      <Check size={16} className="text-[#58A6FF]" aria-hidden="true" />
    </div>
    <span className="text-sm opacity-90">{feature}</span>
  </div>
));

FeatureItem.displayName = 'FeatureItem';

// Gallery item component with lazy loading
const GalleryImage = React.memo(({ image, index, onClick, projectTitle }) => {
  return (
    <button
      onClick={onClick}
      className="aspect-square rounded-md overflow-hidden border-2 border-[#444444] hover:border-[#58A6FF] cursor-pointer transition-all duration-200 relative group"
      aria-label={`View ${projectTitle} image ${index + 1}`}
    >
      <Image
        src={image.src}
        alt={`${projectTitle} - Image ${index + 1}`}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
        className="object-cover"
        loading={index < 4 ? "eager" : "lazy"}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity" />
    </button>
  );
});

GalleryImage.displayName = 'GalleryImage';

// Project card component
const ProjectCard = React.memo(({ project, onImageClick }) => {
  const handleImageClick = useCallback((index) => {
    onImageClick(project.id, index);
  }, [project.id, onImageClick]);

  return (
    <article className="bg-[#222222] rounded-lg overflow-hidden shadow-xl">
      {/* Project Header */}
      <header className="bg-[#232f8e] px-6 py-5 flex justify-between items-center">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <div className="bg-[#333333] px-3 py-1 rounded-full text-[#FFEB3B] text-sm font-medium">
          Completed
        </div>
      </header>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
          <div className="flex items-center">
            <MapPin size={16} className="text-[#58A6FF] mr-1" aria-hidden="true" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="text-[#58A6FF] mr-1" aria-hidden="true" />
            <time>{project.date}</time>
          </div>
        </div>

        <p className="mb-6 text-[#FFFFFF] opacity-90">{project.description}</p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {project.features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} />
          ))}
        </div>

        {/* Image Gallery */}
        <section aria-labelledby={`gallery-${project.id}`}>
          <h3 id={`gallery-${project.id}`} className="text-xl font-semibold mb-4 text-[#FFEB3B]">
            Project Gallery
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
            {project.images.map((image, index) => (
              <GalleryImage
                key={index}
                image={image}
                index={index}
                onClick={() => handleImageClick(index)}
                projectTitle={project.title}
              />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
});

ProjectCard.displayName = 'ProjectCard';

const ProjectsPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Optimize event handlers with useCallback
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

      <div className="bg-[#333333] min-h-screen text-[#FFFFFF]">
        {/* Hero Section - Optimized for FCP */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-[#232f8e] to-black">
          <div 
            className="absolute inset-0 opacity-10" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15L30 0z' fill='%2358A6FF' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px" 
            }}
            aria-hidden="true"
          />
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-10">Our Projects</h1>
            <div className="h-1 w-24 bg-[#FFEB3B] mx-auto mb-6" aria-hidden="true" />
            <p className="max-w-2xl mx-auto text-base md:text-lg opacity-90">
              Explore our recent cleaning projects and see the quality of our work.
              We take pride in delivering exceptional cleaning services for various
              types of facilities.
            </p>
          </div>
        </section>

        {/* Projects List */}
        <main className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 gap-16">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onImageClick={openLightbox}
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