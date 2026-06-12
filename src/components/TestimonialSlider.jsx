import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaGraduationCap } from 'react-icons/fa';
import { testimonials } from '../data/testimonials';

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play cycling on mobile (only cycles when width is mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-brand-navy text-white py-20 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full glow-bg-blue opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="glass-panel-dark text-xs font-accent uppercase tracking-widest text-brand-cyan px-4 py-2 rounded-full border border-white/5 shadow-sm font-semibold">
            🎓 Student Success Stories
          </span>

          <p className="text-sm sm:text-base text-gray-400 font-sans mt-3">
            Real stories from medical aspirants who embarked on their global medical journeys with MedScope.
          </p>
        </div>

        {/* Desktop View (Grid of all 3) */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-brand-cyan/40 hover:-translate-y-2 hover:shadow-glow transition-all duration-300 relative group"
            >
              <FaQuoteLeft className="text-brand-cyan/20 text-4xl absolute top-6 right-8 group-hover:scale-110 transition-transform duration-300" />
              
              <div className="space-y-6">
                <p className="text-sm text-gray-300 italic leading-relaxed relative z-10">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8 border-t border-white/5 pt-6">
                {/* Custom Avatar with Gradient */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${t.avatarBg} text-white flex items-center justify-center font-display font-bold text-sm shadow-md`}>
                  {t.avatarText}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white">{t.name}</h4>
                  <p className="text-xs text-brand-cyan font-semibold flex items-center gap-1 mt-0.5">
                    <FaGraduationCap /> {t.course} in {t.country}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{t.university}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View (Carousel slider) */}
        <div className="md:hidden relative px-4">
          <div className="overflow-hidden min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {testimonials.map((t, index) => {
                if (index !== activeIndex) return null;
                return (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex flex-col justify-between w-full shadow-lg relative"
                  >
                    <FaQuoteLeft className="text-brand-cyan/20 text-3xl absolute top-4 right-6" />
                    
                    <p className="text-sm text-gray-300 italic leading-relaxed pt-2">
                      "{t.quote}"
                    </p>

                    <div className="flex items-center gap-4 mt-6 border-t border-white/5 pt-4">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${t.avatarBg} text-white flex items-center justify-center font-display font-bold text-xs shadow-md`}>
                        {t.avatarText}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-xs text-white">{t.name}</h4>
                        <p className="text-[10px] text-brand-cyan font-semibold flex items-center gap-0.5 mt-0.5">
                          <FaGraduationCap /> {t.course} in {t.country}
                        </p>
                        <p className="text-[9px] text-gray-400 mt-0.5">{t.university}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Slider controls */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
              aria-label="Previous Testimonial"
            >
              <FaChevronLeft className="text-xs" />
            </button>

            {/* Dots indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-6 bg-brand-cyan' : 'bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
              aria-label="Next Testimonial"
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
