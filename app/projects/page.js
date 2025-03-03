"use client";
import React, { useState } from "react";
import { MapPin, Calendar, Check, ChevronRight, ChevronLeft, X } from "lucide-react";

const ProjectsPage = () => {
  // State for image modal/lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Project data with local image paths
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
      images: [
        "/office-cleaning-1.jpeg", // Local image in public folder
        "/office-cleaning-2.jpeg",
        "/office-cleaning-3.jpeg",
        "/office-cleaning-4.jpeg",
        "/office-cleaning-5.jpeg",
        "/office-cleaning-6.jpeg",
        "/office-cleaning-7.jpeg",
        "/office-cleaning-8.jpeg",
        "/office-cleaning-9.jpeg",
        "/office-cleaning-10.jpeg",
      ],
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
      images: [
        "/child-care-cleaning-1.jpeg", // Local image in public folder
        "/child-care-cleaning-2.jpeg",
        "/child-care-cleaning-3.jpeg",
        "/child-care-cleaning-4.jpeg",
      ],
    },
  ];

  // Handler to open lightbox
  const openLightbox = (projectId, imageIndex) => {
    const project = projects.find((p) => p.id === projectId);
    setCurrentProject(project);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  // Navigation for lightbox
  const nextImage = () => {
    if (currentProject) {
      setCurrentImageIndex((prev) =>
        prev === currentProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (currentProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? currentProject.images.length - 1 : prev - 1
      );
    }
  };

  // Close lightbox on click outside or close button click
  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentProject(null);
    setCurrentImageIndex(0);
  };

  return (
    <div className="bg-[#333333] min-h-screen text-[#FFFFFF]">
      {/* Hero Section */}
      <div className="relative py-20 px-4 bg-gradient-to-br from-[#232f8e] to-black">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15L30 0z' fill='%2358A6FF' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`, backgroundSize: "60px 60px" }}></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <div className="h-1 w-24 bg-[#FFEB3B] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Explore our recent cleaning projects and see the quality of our work.
            We take pride in delivering exceptional cleaning services for various
            types of facilities.
          </p>
        </div>
      </div>

      {/* Projects List */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-16">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#222222] rounded-lg overflow-hidden shadow-xl">
              {/* Project Header */}
              <div className="bg-[#232f8e] px-6 py-5 flex justify-between items-center">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <div className="bg-[#333333] px-3 py-1 rounded-full text-[#FFEB3B] text-sm font-medium">
                  Completed
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                  <div className="flex items-center">
                    <MapPin size={16} className="text-[#58A6FF] mr-1" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="text-[#58A6FF] mr-1" />
                    <span>{project.date}</span>
                  </div>
                </div>

                <p className="mb-6 text-[#FFFFFF] opacity-90">{project.description}</p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-3">
                        <Check size={16} className="text-[#58A6FF]" />
                      </div>
                      <span className="text-sm opacity-90">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Image Gallery */}
                <h3 className="text-xl font-semibold mb-4 text-[#FFEB3B]">Project Gallery</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-md overflow-hidden border-2 border-[#444444] hover:border-[#58A6FF] cursor-pointer transition-all duration-200"
                      onClick={() => openLightbox(project.id, index)}
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#232f8e] py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to start your cleaning project?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            Contact us today to discuss your cleaning needs and get a free quote.
          </p>
          <button className="bg-[#FFEB3B] text-[#232f8e] px-8 py-3 rounded-md font-bold hover:bg-[#58A6FF] hover:text-white transition-colors duration-300">
            Request a Quote
          </button>
        </div>
      </div>

      {/* Image Lightbox/Modal */}
      {lightboxOpen && currentProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox} // Click outside to close
        >
          <div
            className="relative w-full max-w-5xl bg-[#222222] rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 text-white hover:text-[#FFEB3B] transition-colors duration-200"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={currentProject.images[currentImageIndex]}
                alt={`${currentProject.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-auto rounded-t-lg"
              />

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white text-sm py-1 px-3 rounded-full">
                {currentImageIndex + 1} / {currentProject.images.length}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#333333] rounded-b-lg">
              <button
                onClick={prevImage}
                className="text-white hover:text-[#FFEB3B] transition-colors duration-200"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="text-white hover:text-[#FFEB3B] transition-colors duration-200"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;