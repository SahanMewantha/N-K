"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const BeforeAfterCard = ({ beforeImage, afterImage, title }) => {
  const [sliderPosition, setSliderPosition] = useState(50); // Track position of the slider (0 to 100)
  const [isDragging, setIsDragging] = useState(false); // To detect whether the user is dragging
  const containerRef = useRef(null);

  const startDrag = (event) => {
    event.preventDefault();
    setIsDragging(true);
    handleDrag(event);
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  const handleDrag = (event) => {
    if (containerRef.current && isDragging) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      setSliderPosition(Math.min(Math.max(x, 0), 100)); // Ensure the slider position is between 0 and 100
    }
  };

  const handleTouchMove = (event) => {
    if (containerRef.current && isDragging) {
      const rect = containerRef.current.getBoundingClientRect();
      const touch = event.touches[0];
      const x = ((touch.clientX - rect.left) / rect.width) * 100;
      setSliderPosition(Math.min(Math.max(x, 0), 100));
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] rounded-xl overflow-hidden group"
      onMouseDown={startDrag}
      onMouseUp={stopDrag}
      onMouseMove={handleDrag}
      onTouchStart={startDrag}
      onTouchEnd={stopDrag}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image */}
      <div className="absolute inset-0">
        <img
          src={beforeImage}
          alt="Before"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded text-white text-sm">
          Before
        </div>
      </div>

      {/* After Image */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={afterImage}
          alt="After"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-blue-500/50 px-3 py-1 rounded text-white text-sm">
          After
        </div>
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
          <svg
            className="w-5 h-5 text-gray-800"
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
  const projects = [
    {
      id: 1,
      title: "Kitchen Deep Clean",
      beforeImage: "/header.jpg",
      afterImage: "/header1.jpg"
    },
    {
      id: 2,
      title: "Living Room Transformation",
      beforeImage: "/bac.jpg",
      afterImage: "/bac1.jpg"
    },
    {
      id: 3,
      title: "Bathroom Renovation",
      beforeImage: "/8625596.jpg",
      afterImage: "/pexels-johannes-plenio-3131634.jpg"
    },
    // Add more projects as needed
  ];

  return (
    <section id='gallery' className="min-h-screen bg-gray-900 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Transformations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Swipe or drag to see the difference our cleaning services make
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <BeforeAfterCard
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                title={project.title}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;
