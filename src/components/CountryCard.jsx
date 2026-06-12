import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaChevronRight, FaGlobe } from 'react-icons/fa';

export default function CountryCard({ country, onViewUniversities, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x coordinate within client
    const y = e.clientY - rect.top;  // y coordinate within client
    
    // Normalize coordinates (-0.5 to 0.5)
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;

    // Multiply by max tilt angles (e.g. 10 degrees)
    setTilt({
      x: normalizedX * 12,
      y: -normalizedY * 12
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="country-card relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out'
      }}
    >
      <div className="bg-white rounded-3xl p-6 shadow-antigravity border border-brand-blue/5 hover:shadow-antigravityHover transition-shadow duration-300 flex flex-col justify-between h-full relative overflow-hidden group">
        
        {/* Decorative backdrop shapes */}
        <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-brand-lightBg opacity-50 group-hover:scale-110 transition-transform duration-300 pointer-events-none" />

        <div>
          {/* Top Badge Row */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-4xl filter drop-shadow-md sm:text-5xl group-hover:scale-110 transition-transform duration-300">
              {country.flag}
            </span>
            
            {country.withScholarship && (
              <span className="bg-emerald-100 text-[#3A8C2F] text-[10px] font-accent uppercase tracking-widest font-extrabold px-3 py-1 rounded-full border border-emerald-200 shadow-sm animate-pulse">
                🎓 Scholarship
              </span>
            )}
          </div>

          {/* Country Info */}
          <h3 className="font-display font-black text-xl text-brand-navy mb-2 group-hover:text-brand-blue transition-colors duration-300">
            {country.name}
          </h3>

          {/* Highlights */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-xs text-brand-textMuted">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" />
              <span>Duration: <strong className="text-brand-navy font-semibold">{country.duration}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-xs text-brand-textMuted">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
              <span>Medium: <strong className="text-brand-navy font-semibold">{country.medium}</strong></span>
            </div>
          </div>
        </div>

        {/* View Universities Button */}
        <button
          onClick={() => onViewUniversities(country)}
          className="w-full flex items-center justify-center gap-2 bg-brand-lightBg group-hover:bg-gradient-brand text-brand-blue group-hover:text-white py-3 px-4 rounded-xl font-semibold text-xs tracking-wider uppercase shadow-sm transition-all duration-300"
        >
          <FaGraduationCap className="text-sm shrink-0" />
          <span>View Universities</span>
          <FaChevronRight className="text-[10px] ml-1 shrink-0 group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    </motion.div>
  );
}
