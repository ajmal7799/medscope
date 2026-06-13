import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes, FaSearchPlus, FaImage } from 'react-icons/fa';

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  // Statically defined list of the 32 images in public/gallery/
  const images = [
    "/gallery/photo_2026-06-13_14-03-58.jpg",
    "/gallery/photo_2026-06-13_14-04-08.jpg",
    "/gallery/photo_2026-06-13_14-04-30.jpg",
    "/gallery/photo_2026-06-13_14-04-33.jpg",
    "/gallery/photo_2026-06-13_14-04-36.jpg",
    "/gallery/photo_2026-06-13_14-04-45.jpg",
    "/gallery/photo_2026-06-13_14-04-55.jpg",
    "/gallery/photo_2026-06-13_14-05-00.jpg",
    "/gallery/photo_2026-06-13_14-05-04.jpg",
    "/gallery/photo_2026-06-13_14-05-07.jpg",
    "/gallery/photo_2026-06-13_14-05-10.jpg",
    "/gallery/photo_2026-06-13_14-05-13.jpg",
    "/gallery/photo_2026-06-13_14-05-16.jpg",
    "/gallery/photo_2026-06-13_14-05-20.jpg",
    "/gallery/photo_2026-06-13_14-05-23.jpg",
    "/gallery/photo_2026-06-13_14-05-26.jpg",
    "/gallery/photo_2026-06-13_14-05-30.jpg",
    "/gallery/photo_2026-06-13_14-05-32.jpg",
    "/gallery/photo_2026-06-13_14-05-35.jpg",
    "/gallery/photo_2026-06-13_14-05-37.jpg",
    "/gallery/photo_2026-06-13_14-05-40.jpg",
    "/gallery/photo_2026-06-13_14-05-43.jpg",
    "/gallery/photo_2026-06-13_14-05-45.jpg",
    "/gallery/photo_2026-06-13_14-05-48.jpg",
    "/gallery/photo_2026-06-13_14-05-51.jpg",
    "/gallery/photo_2026-06-13_14-05-54.jpg",
    "/gallery/photo_2026-06-13_14-05-56.jpg",
    "/gallery/photo_2026-06-13_14-05-59.jpg",
    "/gallery/photo_2026-06-13_14-06-01.jpg",
    "/gallery/photo_2026-06-13_14-06-04.jpg",
    "/gallery/photo_2026-06-13_14-06-06.jpg",
    "/gallery/photo_2026-06-13_14-06-08.jpg"
  ];

  // Navigation handlers
  const handlePrev = (e) => {
    e?.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev + 1) % images.length);
  };

  const handleClose = () => {
    setSelectedIdx(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') handleClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  return (
    <div className="pt-20 min-h-screen bg-brand-lightBg">
      
      {/* 1. Hero Banner */}
      <section className="relative bg-brand-navy py-16 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/30 to-brand-green/20" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-accent uppercase tracking-widest text-brand-cyan font-bold px-4 py-1.5 rounded-full bg-white/10 border border-white/10 inline-block mb-3"
          >
            MedScope Gallery
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl text-white mt-1"
          >
            Life & Events at MedScope
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs sm:text-sm text-gray-300 mt-2 max-w-xl mx-auto leading-relaxed font-sans"
          >
            Take a look at our activities, student counseling sessions, events, seminars, and successful student integrations abroad.
          </motion.p>
        </div>
      </section>

      {/* 2. Photo Grid Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Intro Bar */}
        <div className="flex items-center justify-between mb-8 border-b border-slate-200/60 pb-4">
          <div className="flex items-center gap-2 text-brand-navy font-display font-black text-lg">
            <FaImage className="text-brand-blue" />
            <span>Photo Albums</span>
          </div>
          <span className="text-xs font-semibold text-brand-textMuted bg-white border border-brand-blue/10 px-3 py-1 rounded-full">
            {images.length} Images
          </span>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              onClick={() => setSelectedIdx(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white border border-brand-blue/5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 aspect-square flex items-center justify-center"
            >
              {/* Skeleton background placeholder */}
              <div className="absolute inset-0 bg-slate-200/50 animate-pulse z-0" />
              
              {/* Image element */}
              <img
                src={src}
                alt={`MedScope Gallery Activity ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover relative z-10 group-hover:scale-108 transition-all duration-500"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                <div className="p-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                  <FaSearchPlus className="text-lg" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Lightbox Gallery Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-50 p-3.5 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/10 transition-all cursor-pointer"
              aria-label="Close Lightbox"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Left Nav Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-6 z-50 p-4 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/10 transition-all cursor-pointer active:scale-95"
              aria-label="Previous Image"
            >
              <FaChevronLeft className="text-xl sm:text-2xl" />
            </button>

            {/* Main Image Viewport */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[85vw] max-h-[80vh] flex items-center justify-center"
            >
              <img
                src={images[selectedIdx]}
                alt={`MedScope Gallery Fullscreen ${selectedIdx + 1}`}
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />
              
              {/* Pagination/Image index label */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/80 font-sans text-xs bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
                {selectedIdx + 1} / {images.length}
              </div>
            </motion.div>

            {/* Right Nav Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-6 z-50 p-4 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/10 transition-all cursor-pointer active:scale-95"
              aria-label="Next Image"
            >
              <FaChevronRight className="text-xl sm:text-2xl" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
