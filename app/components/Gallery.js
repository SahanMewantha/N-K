"use client";
import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import useReducedMotion from "../components/hooks/useReducedMotion";

const BeforeAfterCard = ({ beforeImage, afterImage, title, alt }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  // Optimize event handlers with useCallback
  const handleMove = useCallback((clientX) => {
    if (containerRef.current && isDragging) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      setSliderPosition(Math.min(Math.max(x, 0), 100));
    }
  }, [isDragging]);

  const handleMouseMove = useCallback((e) => {
    handleMove(e.clientX);
  }, [handleMove]);

  const handleTouchMove = useCallback((e) => {
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  const startDrag = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    handleMove(clientX);
  }, [handleMove]);

  const stopDrag = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Keyboard accessibility
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition(prev => Math.max(prev - 5, 0));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition(prev => Math.min(prev + 5, 100));
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden group cursor-ew-resize select-none"
      onMouseDown={startDrag}
      onMouseUp={stopDrag}
      onMouseMove={handleMouseMove}
      onMouseLeave={stopDrag}
      onTouchStart={startDrag}
      onTouchEnd={stopDrag}
      onTouchMove={handleTouchMove}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="slider"
      aria-label={`Before and after comparison for ${title}`}
      aria-valuenow={sliderPosition}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Before Image */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage}
          alt={`Before ${alt}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="eager"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
        />
        <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded text-white text-sm font-medium">
          Before
        </div>
      </div>

      {/* After Image - Only render when visible */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="relative w-full h-full" style={{ width: `${100 / (sliderPosition / 100)}%` }}>
          <Image
            src={afterImage}
            alt={`After ${alt}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="eager"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
          />
        </div>
        <div className="absolute top-4 left-4 bg-[#ffeb3b] px-3 py-1 rounded text-[#432405] text-sm font-medium">
          After
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize transition-none"
        style={{ left: `${sliderPosition}%` }}
        aria-hidden="true"
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const shouldAnimate = !useReducedMotion();
  
  const projects = [
    {
      id: 1,
      title: "Kitchen Deep Clean",
      beforeImage: "/1af.png",
      afterImage: "/1bf.png",
      alt: "kitchen cleaning transformation",
      description: "Complete kitchen deep cleaning including appliances, countertops, and cabinets"
    },
    {
      id: 2,
      title: "Living Room Transformation",
      beforeImage: "/2af.png",
      afterImage: "/2bf.png",
      alt: "living room cleaning transformation",
      description: "Thorough living room cleaning with carpet care and furniture detailing"
    },
    {
      id: 3,
      title: "Bathroom Renovation Clean",
      beforeImage: "/3af.png",
      afterImage: "/3bf.png",
      alt: "bathroom cleaning transformation",
      description: "Deep bathroom sanitization and tile restoration"
    }
  ];

  const containerVariants = shouldAnimate ? {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  } : {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 }
  };

  const itemVariants = shouldAnimate ? {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  } : {
    hidden: { opacity: 1, scale: 1 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section 
      id='gallery' 
      className="min-h-screen bg-gradient-to-br from-[#454545] via-black to-[#262626] py-16"
      aria-labelledby="gallery-heading"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        {/* Header */}
        <header className="text-center mb-12">
          <h2 id="gallery-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#174fde] mb-4 font-quicksand">
            Our Cleaning Transformations
          </h2>
          <div className="w-24 h-1 bg-[#ecc106] mx-auto rounded-full mb-6" aria-hidden="true" />
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-raleway">
            Swipe or drag the slider to see the remarkable difference our professional cleaning services make. 
            Use arrow keys for keyboard navigation.
          </p>
        </header>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.1, 0.3) }}
              className="group"
            >
              <BeforeAfterCard
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                title={project.title}
                alt={project.alt}
              />
              <div className="mt-4 text-center">
                <h3 className="text-white font-semibold text-lg font-raleway">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-1 font-raleway">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        
      </motion.div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "N&K Spotless Solutions Cleaning Gallery",
            "description": "Before and after photos of our professional cleaning services",
            "image": projects.map(project => ({
              "@type": "ImageObject",
              "name": project.title,
              "description": project.description,
              "contentUrl": project.afterImage
            }))
          })
        }}
      />
    </section>
  );
};

export default Gallery;