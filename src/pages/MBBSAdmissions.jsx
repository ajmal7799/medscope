import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaChevronRight, FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import CountryCard from '../components/CountryCard';
import UniversityList from '../components/UniversityList';
import { countries } from '../data/countries';

export default function MBBSAdmissions({ onOpenBooking }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isUnivListOpen, setIsUnivListOpen] = useState(false);

  const handleViewUniversities = (country) => {
    setSelectedCountry(country);
    setIsUnivListOpen(true);
  };

  // Filter out Uzbekistan from the normal listing to handle it specially
  const regularCountries = countries.filter(c => c.id !== 'uzbekistan');

  return (
    <div className="pt-20">
      
      {/* 1. Hero Banner */}
      <section className="relative bg-brand-navy py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/30 to-brand-green/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full glow-bg-blue opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="bg-brand-blue/30 border border-brand-cyan/20 text-brand-cyan text-xs font-accent uppercase tracking-widest font-bold px-4 py-2 rounded-full inline-block animate-pulse">
            🎓 With Scholarship Support
          </span>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-4xl sm:text-5xl text-white mt-4"
          >
            MBBS Abroad — Admissions
          </motion.h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mt-4 font-sans leading-relaxed">
            NMC-recognized universities. English medium. Fully verified medical colleges to secure your doctor career.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-300 font-accent uppercase tracking-widest font-semibold"
          >
            <Link to="/" className="hover:text-brand-cyan transition-colors">Home</Link>
            <FaChevronRight className="text-[10px]" />
            <span className="text-white">MBBS Admissions</span>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Countries Grid */}
      <section className="py-20 bg-brand-lightBg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-navy">
              Select Your MBBS Destination
            </h2>
            <p className="text-sm text-brand-textMuted mt-2">
              Browse course durations, medium of instruction, and approved university rosters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularCountries.map((country, index) => (
              <CountryCard
                key={country.id}
                country={country}
                onViewUniversities={handleViewUniversities}
                index={index}
              />
            ))}
          </div>



        </div>
      </section>

      {/* University Drawer Modal */}
      <UniversityList
        isOpen={isUnivListOpen}
        onClose={() => setIsUnivListOpen(false)}
        country={selectedCountry}
        onOpenBooking={onOpenBooking}
      />

    </div>
  );
}
