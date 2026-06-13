import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa';
import logoImg from '../assets/logo.jpeg';

export default function Navbar({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'MBBS Admissions', path: '/mbbs-admissions' },
    { name: 'Admission Process', path: '/admission-process' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav
        className={`fixed z-40 transition-all duration-500 ${isScrolled
            ? 'top-0 left-0 right-0 bg-white/85 backdrop-blur-md shadow-md border-b border-slate-200/50 py-2.5'
            : 'top-4 left-4 right-4 rounded-2xl bg-white/65 backdrop-blur-md shadow-lg border border-white/40 py-3'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 lg:gap-1.5 xl:gap-3 group">
              <img
                src={logoImg}
                alt="MedScope Logo"
                className="h-9 w-9 lg:h-8 lg:w-8 xl:h-12 xl:w-12 rounded-full object-cover border-2 border-brand-blue/30 shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-lg lg:text-base xl:text-2xl leading-none flex items-center">
                  <span className="text-[#1B5FAA]">Med</span>
                  <span className="text-[#3A8C2F]">Scope</span>
                </span>
                <span className="font-accent text-[7px] lg:text-[6px] xl:text-[9px] tracking-[0.2em] text-brand-textMuted uppercase font-bold mt-0.5">
                  Guiding Your Medical Future
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-6">
              <div className="flex items-center gap-3 xl:gap-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `relative font-sans text-xs xl:text-sm font-semibold tracking-wide py-2 transition-all duration-300 group/link ${isActive
                        ? 'text-brand-blue font-bold'
                        : 'text-brand-navy hover:text-brand-blue'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        <span className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-transform duration-300 ${isActive
                            ? 'bg-gradient-brand scale-x-100'
                            : 'bg-brand-blue scale-x-0 group-hover/link:scale-x-100'
                          }`} />
                      </>
                    )}
                  </NavLink>
                ))}
              </div>

              {/* Consultation Button */}
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-1.5 border border-brand-blue/30 bg-brand-blue/5 text-brand-blue hover:bg-brand-blue hover:text-white px-2.5 py-2 xl:px-4 xl:py-2.5 rounded-full font-semibold text-[10px] xl:text-xs tracking-wider uppercase transition-all duration-300 whitespace-nowrap hover:scale-105 hover:shadow-md"
              >
                <FaCalendarCheck />
                Book Consultation
              </button>

              {/* Desktop CTA */}
              <Link
                to="/admission-process"
                className="btn-glow bg-gradient-brand text-white px-4 py-2 xl:px-6 xl:py-2.5 rounded-full font-semibold text-[10px] xl:text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="p-2 rounded-full border border-brand-blue/30 text-brand-blue hover:bg-brand-blue/5 transition-all text-sm"
                aria-label="Book free Consultation"
              >
                <FaCalendarCheck />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-brand-navy hover:bg-brand-blue/5 transition-all"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer (Slide-In) */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
      >
        {/* Background Overlay */}
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 bg-brand-navy/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'
            }`}
        />

        {/* Drawer Panel */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col p-6 z-10 transition-transform duration-500 ease-out ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
            }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-100">
            <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <img
                src={logoImg}
                alt="MedScope Logo"
                className="h-9 w-9 rounded-full object-cover border border-brand-blue/20"
              />
              <span className="font-display font-black text-lg text-brand-blue leading-none">
                Med<span className="text-brand-green">Scope</span>
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full text-brand-textMuted hover:bg-gray-100 transition-all"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 py-6 space-y-4 overflow-y-auto">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block font-sans text-base font-semibold py-2 px-3 rounded-xl transition-all duration-200 ${isActive
                    ? 'bg-brand-blue/5 text-brand-blue font-bold pl-5 border-l-4 border-brand-blue'
                    : 'text-brand-navy hover:bg-brand-lightBg hover:text-brand-blue'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Footer CTA in Drawer */}
          <div className="pt-6 border-t border-gray-100 space-y-3">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white py-3 rounded-xl font-semibold text-sm transition-all duration-300"
            >
              <FaCalendarCheck />
              Book Free Consultation
            </button>
            <Link
              to="/admission-process"
              onClick={() => setIsOpen(false)}
              className="btn-glow block text-center w-full bg-gradient-brand text-white py-3 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300"
            >
              Apply Now
            </Link>
            <div className="text-center pt-2">
              <a
                href="tel:+919778229747"
                className="text-xs text-brand-textMuted hover:text-brand-blue font-semibold flex items-center justify-center gap-1"
              >
                <FaPhoneAlt className="text-[10px]" /> Call support: +91 9778 229 747
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
