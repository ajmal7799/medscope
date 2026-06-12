import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaChevronRight } from 'react-icons/fa';

export default function HeroSection({ onOpenBooking }) {
  // Floating cards mock data
  const floatingCards = [
    { country: 'Georgia 🇬🇪', univ: 'Tbilisi State Medical University', top: 'top-10', left: 'left-6', delay: 0, shadow: 'shadow-blue-500/20' },
    { country: 'Russia 🇷🇺', univ: 'Yaroslavl State Medical Univ.', top: 'top-32', left: 'left-20', delay: 2, shadow: 'shadow-emerald-500/20' },
    { country: 'Kyrgyzstan 🇰🇬', univ: 'Kyrgyz State Medical Univ.', top: 'top-56', left: 'left-10', delay: 4, shadow: 'shadow-indigo-500/20' }
  ];

  return (
    <section className="relative w-full min-h-screen bg-white flex items-center pt-28 pb-16 overflow-hidden bg-[url('/hero/image1-mobile-fit.png')] lg:bg-[url('/hero/image1-laptop-fit.png')] bg-cover bg-center bg-no-repeat">
      {/* Animated Radial Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full glow-bg-blue pointer-events-none opacity-40" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[45vw] h-[45vw] rounded-full glow-bg-green pointer-events-none opacity-30" />

      {/* Floating Particles (CSS Animated) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-2 h-2 bg-brand-cyan rounded-full top-1/4 left-1/3 animate-ping duration-1000" />
        <div className="absolute w-3 h-3 bg-brand-green rounded-full top-1/2 left-1/10 animate-bounce duration-3000" />
        <div className="absolute w-2 h-2 bg-brand-blue rounded-full top-2/3 right-1/4 animate-pulse" />
        <div className="absolute w-3 h-3 bg-brand-cyan rounded-full top-1/3 right-1/12 animate-ping" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Info */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex"
          >
            <span className="glass-panel text-xs sm:text-sm font-accent uppercase tracking-widest text-brand-blue px-4 py-2 rounded-full border border-brand-blue/10 shadow-md font-semibold flex items-center gap-2">
              <span>🌍</span> Study Abroad Consultancy
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-brand-navy leading-tight"
          >
            Your Gateway to a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-green to-brand-cyan">
              Global Medical Career
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-slate-900 max-w-xl font-semibold leading-relaxed"
          >
            MedScope helps aspiring doctors gain admission to top international medical universities <strong className="text-brand-navy font-extrabold">with scholarships</strong>, at the most affordable costs.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <Link
              to="/mbbs-admissions"
              className="btn-glow bg-gradient-brand text-white font-semibold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center flex items-center justify-center gap-2"
            >
              <FaGraduationCap className="text-lg" />
              Explore Countries
            </Link>
            <button
              onClick={onOpenBooking}
              className="border border-brand-blue/30 hover:border-brand-blue bg-brand-blue/5 hover:bg-brand-blue/10 text-brand-blue font-semibold py-3.5 px-8 rounded-full transition-all text-center flex items-center justify-center gap-2"
            >
              <FaCalendarAlt />
              Book Free Consultation
            </button>
          </motion.div>



        </div>

        {/* Right Side Stacked Levitating Cards */}
        <div className="lg:col-span-5 h-[400px] sm:h-[450px] relative hidden sm:flex items-center justify-center">
          {/* Main Visual background rings */}
          <div className="absolute w-72 h-72 rounded-full border border-brand-blue/5 animate-pulse" />
          <div className="absolute w-96 h-96 rounded-full border border-brand-blue/5 animate-ping duration-[6000ms]" />

          {floatingCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 * index }}
              className={`absolute ${card.top} ${card.left} w-72 p-5 rounded-2xl glass-panel shadow-2xl border border-brand-blue/10 flex flex-col space-y-2 cursor-pointer hover:border-brand-cyan/50 hover:scale-105 transition-all duration-500 hover:shadow-glow`}
              style={{
                animation: index % 2 === 0 ? 'float 6s ease-in-out infinite' : 'float-delayed 8s ease-in-out infinite',
                animationDelay: `${card.delay}s`
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-accent uppercase tracking-widest text-brand-blue font-bold">
                  University Partner
                </span>
                <span className="text-lg">{card.country.split(' ')[1]}</span>
              </div>
              <h3 className="font-display font-bold text-brand-navy text-base leading-snug">
                {card.univ}
              </h3>
              <div className="flex items-center justify-between text-xs text-brand-textMuted pt-2 border-t border-slate-200">
                <span>Medium: English</span>
                <span className="text-brand-green font-semibold flex items-center gap-0.5">
                  Scholarship <FaChevronRight className="text-[8px]" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Decorative Bottom Wave Overlay */}
      <div className="wave-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-16 text-brand-lightBg fill-current">
          <path d="M0,224L80,224C160,224,320,224,480,208C640,192,800,160,960,160C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
