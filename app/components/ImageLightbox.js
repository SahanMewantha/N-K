// components/ImageLightbox.jsx
import React from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft, X } from "lucide-react";

const ImageLightbox = ({ project, currentImageIndex, onClose, onNavigate }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      <div
        className="relative w-full max-w-5xl bg-[#222222] rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-[#FFEB3B] transition-colors duration-200 z-10"
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>

        <div className="relative aspect-[4/3] w-full">
          <Image
            src={project.images[currentImageIndex].src}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-contain rounded-t-lg"
            priority
          />

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white text-sm py-1 px-3 rounded-full">
            {currentImageIndex + 1} / {project.images.length}
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-2 bg-[#333333] rounded-b-lg">
          <button
            onClick={() => onNavigate('prev')}
            className="text-white hover:text-[#FFEB3B] transition-colors duration-200 p-2"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => onNavigate('next')}
            className="text-white hover:text-[#FFEB3B] transition-colors duration-200 p-2"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;