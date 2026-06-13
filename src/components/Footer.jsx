import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';
import logoImg from '../assets/logo.jpeg';
import { countries } from '../data/countries';

export default function Footer({ onOpenBooking }) {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'MBBS Admissions', path: '/mbbs-admissions' },
    { name: 'Admission Process', path: '/admission-process' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const services = [
    { name: 'University Admissions', path: '/services#admissions' },
    { name: 'Flight Booking', path: '/services#travel' },
    { name: 'Tour Packages', path: '/services#tours' },
    { name: 'Umrah Services', path: '/services#tours' },
    { name: 'Tourist Visa Assistance', path: '/services#travel' },
    { name: 'Education Loan Support', path: '/services#loans' }
  ];

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-6 relative overflow-hidden border-t border-white/5">
      {/* Decorative radial glows */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full glow-bg-blue opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full glow-bg-green opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="MedScope Logo"
                className="h-12 w-12 rounded-full object-cover border border-white/20"
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl leading-none">
                  <span className="text-white">Med</span>
                  <span className="text-brand-green">Scope</span>
                </span>
                <span className="font-accent text-[9px] tracking-[0.2em] text-[#A5B4FC] uppercase font-bold mt-1">
                  Guiding Your Medical Future
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-gray-400 font-sans leading-relaxed">
              Kozhikode's premier study abroad consultancy. Dedicated to helping aspiring medical students secure MBBS, BDS, and Nursing admissions globally.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/medscope.studyabroad/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg text-gray-300 hover:text-[#E1306C] hover:bg-white hover:scale-110 hover:shadow-lg transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/@medscopestudyabroad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg text-gray-300 hover:text-[#FF0000] hover:bg-white hover:scale-110 hover:shadow-lg transition-all duration-300"
                aria-label="Subscribe to our YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://wa.me/919037575561"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-lg text-[#25D366] hover:bg-[#25D366] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-accent uppercase tracking-widest text-[#A5B4FC] font-bold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-brand-cyan hover:pl-2 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-sm text-gray-400 hover:text-brand-cyan hover:pl-2 transition-all text-left duration-300"
                >
                  Book Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Countries */}
          <div>
            <h3 className="text-xs font-accent uppercase tracking-widest text-[#A5B4FC] font-bold mb-6">
              MBBS Countries
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {countries.slice(0, 8).map((country) => (
                <Link
                  key={country.id}
                  to={`/mbbs/${country.id}`}
                  className="text-sm text-gray-400 hover:text-brand-cyan hover:pl-1 transition-all duration-300 flex items-center gap-1.5"
                >
                  <span>{country.flag}</span>
                  <span>{country.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-accent uppercase tracking-widest text-[#A5B4FC] font-bold mb-6">
              Contact Details
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-brand-cyan text-lg mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  Chelannur, Kozhikode,<br />Kerala — 673616, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-brand-cyan shrink-0" />
                <div className="flex flex-col text-sm">
                  <a href="tel:+919778229747" className="text-gray-400 hover:text-white transition-colors">
                    +91 9778 229 747
                  </a>
                  <a href="tel:+918606158378" className="text-gray-400 hover:text-white transition-colors">
                    +91 8606 158 378
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-brand-cyan shrink-0" />
                <a href="mailto:info@medscope.in" className="text-sm text-gray-400 hover:text-white transition-colors">
                  info@medscope.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip 1: Services List */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-[11px] font-accent uppercase tracking-widest text-gray-500 font-semibold leading-relaxed">
            MBBS • BDS • Veterinary • BSc Nursing • Flight Booking • Tour Packages • Umrah Services • Tourist Visa • Bus Ticket • Train Ticket
          </p>
        </div>

        {/* Bottom Strip 2: Copyright */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            © 2026 MedScope. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1">
            Designed with <FaHeart className="text-red-500 animate-pulse" /> in Kerala
          </p>
        </div>
      </div>
    </footer>
  );
}
