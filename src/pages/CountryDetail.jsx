import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaChevronRight, FaCheckCircle, FaExclamationTriangle, FaSearch, FaArrowLeft, FaFileInvoiceDollar, FaRegClock } from 'react-icons/fa';
import { countries } from '../data/countries';
import { universities } from '../data/universities';

export default function CountryDetail({ onOpenBooking }) {
  const { countryId } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Find the selected country object
  const country = countries.find(c => c.id === countryId);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [countryId]);

  if (!country) {
    return (
      <div className="pt-32 pb-24 max-w-md mx-auto text-center px-4">
        <FaExclamationTriangle className="text-brand-blue text-5xl mx-auto mb-4" />
        <h2 className="font-display font-black text-2xl text-brand-navy">Country Not Found</h2>
        <p className="text-sm text-brand-textMuted mt-2">
          The requested study abroad destination is not available or has been updated.
        </p>
        <Link
          to="/mbbs-admissions"
          className="mt-6 inline-flex items-center gap-2 bg-gradient-brand text-white px-6 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
        >
          <FaArrowLeft /> View All Countries
        </Link>
      </div>
    );
  }

  // Get universities
  const list = universities[country.id] || [];

  // Filter list based on search term
  const filteredList = list.filter(univ => {
    const name = typeof univ === 'string' ? univ : univ.name;
    return name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="pt-20">
      
      {/* 1. Hero Banner */}
      <section className="relative bg-brand-navy py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/30 to-brand-green/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full glow-bg-blue opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          <Link
            to="/mbbs-admissions"
            className="inline-flex items-center gap-2 text-xs text-brand-cyan hover:text-white transition-colors font-accent uppercase tracking-widest font-bold mb-4"
          >
            <FaArrowLeft /> Back to admissions
          </Link>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-4xl sm:text-5xl">{country.flag}</span>
                <motion.h1
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="font-display font-black text-3xl sm:text-5xl text-white"
                >
                  MBBS in {country.name}
                </motion.h1>
              </div>
              <p className="text-sm sm:text-base text-gray-300 max-w-xl font-sans">
                Secure your medical admissions in top WHO-recognized universities in {country.name}.
              </p>
            </div>

            {/* Quick Pricing widget */}
            <div className="glass-panel-dark px-6 py-5 rounded-2xl border border-white/10 shrink-0">
              <span className="block text-[10px] font-accent uppercase tracking-widest text-brand-cyan font-bold">Estimated Cost</span>
              <span className="text-2xl sm:text-3xl font-display font-black text-white mt-1 block">
                {country.feeRange}
              </span>
              <span className="text-[10px] text-gray-400 block mt-1">Total Fee (6 Years program)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Page Layout */}
      <section className="py-20 bg-brand-lightBg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Quick Facts & Highlights */}
            <div className="lg:col-span-5 space-y-8 text-left">
              
              {/* Quick Facts Card */}
              <div className="bg-white p-6 rounded-3xl shadow-antigravity border border-brand-blue/5">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4 border-b pb-3 border-gray-100">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-brand-textMuted flex items-center gap-1.5"><FaFileInvoiceDollar /> Total Tuition Fee</span>
                    <span className="text-sm font-semibold text-brand-navy">{country.feeRange}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-brand-textMuted flex items-center gap-1.5"><FaRegClock /> Program Duration</span>
                    <span className="text-sm font-semibold text-brand-navy">{country.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-brand-textMuted flex items-center gap-1.5">📚 Medium of Instruction</span>
                    <span className="text-sm font-semibold text-brand-navy">{country.medium}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-brand-textMuted flex items-center gap-1.5"><FaCheckCircle className="text-brand-green" /> NMC Status</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">Recognized</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-brand-textMuted flex items-center gap-1.5">🏥 Hospital Practice</span>
                    <span className="text-sm font-semibold text-brand-navy">English Rotations</span>
                  </div>
                </div>
              </div>

              {/* Destination Highlights */}
              <div className="bg-white p-6 rounded-3xl shadow-antigravity border border-brand-blue/5">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4 border-b pb-3 border-gray-100">
                  Why Study In {country.name}?
                </h3>
                <div className="space-y-3">
                  {country.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <FaCheckCircle className="text-brand-green text-base mt-0.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-brand-textDark leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scholarship Support Card */}
              {country.withScholarship && (
                <div className="bg-gradient-brand text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-white/10 pointer-events-none" />
                  <span className="bg-white/20 text-[10px] font-accent uppercase tracking-widest px-3 py-1 rounded-full font-bold inline-block">
                    Scholarship Eligible
                  </span>
                  <h4 className="font-display font-black text-lg mt-3">
                    Academic Scholarships Available
                  </h4>
                  <p className="text-xs text-white/80 mt-2 leading-relaxed">
                    MedScope provides guidance to students scoring high marks in 12th Board Exams or NEET. Apply early to reserve scholarship slots.
                  </p>
                  <button
                    onClick={onOpenBooking}
                    className="mt-4 bg-white text-brand-blue font-semibold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider shadow-sm hover:scale-103 transition-transform"
                  >
                    Check Eligibility
                  </button>
                </div>
              )}

            </div>

            {/* Right Column: Searchable Universities List */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-antigravity border border-brand-blue/5">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6 border-gray-100">
                  <div>
                    <h3 className="font-display font-bold text-xl text-brand-navy">
                      Approved Universities
                    </h3>
                    <p className="text-xs text-brand-textMuted mt-1">
                      Showing WHO and NMC approved medical institutions in {country.name}
                    </p>
                  </div>
                  
                  {/* Search inside card */}
                  <div className="relative w-full sm:w-60 shrink-0">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-textMuted">
                      <FaSearch className="text-sm" />
                    </span>
                    <input
                      type="text"
                      placeholder="Filter by name..."
                      className="block w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl bg-brand-lightBg text-xs focus:border-brand-blue focus:ring-brand-blue shadow-sm"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Universities listing */}
                {filteredList.length > 0 ? (
                  <div className="space-y-4 mt-6">
                    {filteredList.map((univ, index) => {
                      const isObject = typeof univ === 'object';
                      const name = isObject ? univ.name : univ;
                      const type = isObject ? univ.type : null;

                      return (
                        <div
                          key={index}
                          className="p-4 rounded-2xl bg-brand-lightBg/50 border border-gray-100 shadow-sm flex items-start gap-4 hover:border-brand-blue/30 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                        >
                          <div className="w-8 h-8 rounded-full bg-brand-blue/5 text-brand-blue flex items-center justify-center font-display font-bold text-xs shrink-0 mt-0.5 border border-brand-blue/10">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-sans font-semibold text-brand-navy text-sm leading-snug">
                              {name}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-[10px] text-brand-textMuted uppercase font-semibold font-accent">WHO APPROVED</span>
                              <span className="w-1 h-1 rounded-full bg-gray-300" />
                              <span className="text-[10px] text-brand-textMuted uppercase font-semibold font-accent">NMC APPROVED</span>
                              {type && (
                                <>
                                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                                  <span className="text-[9px] font-accent uppercase tracking-wider font-extrabold text-[#3A8C2F] bg-emerald-50 border border-emerald-100 px-2 rounded-full">
                                    {type}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12 text-brand-textMuted">
                    <FaExclamationTriangle className="text-3xl mx-auto text-gray-300 mb-2" />
                    <p className="text-sm">No medical colleges found matching your filter.</p>
                  </div>
                )}

              </div>

              {/* Direct Admission Process CTA */}
              <div className="bg-brand-navy text-white rounded-3xl p-6 sm:p-8 border border-white/5 relative overflow-hidden flex flex-col sm:flex-row justify-between items-center gap-6 shadow-lg">
                <div className="absolute top-0 right-0 w-36 h-36 rounded-full glow-bg-blue opacity-30 pointer-events-none" />
                <div className="text-left space-y-1 relative z-10">
                  <h4 className="font-display font-black text-lg text-white">
                    Ready to Apply for {country.name}?
                  </h4>
                  <p className="text-xs text-gray-300 font-sans">
                    Complete our online registration form and upload your marksheets to begin.
                  </p>
                </div>
                <Link
                  to="/admission-process"
                  className="btn-glow whitespace-nowrap bg-gradient-brand text-white font-semibold py-3 px-6 rounded-xl text-xs uppercase tracking-wider shadow-md hover:scale-103 transition-transform relative z-10"
                >
                  Start Application <FaChevronRight className="text-[9px] inline-block ml-1" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
