import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import MBBSAdmissions from './pages/MBBSAdmissions';
import CountryDetail from './pages/CountryDetail';
import AdmissionProcess from './pages/AdmissionProcess';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

// Scroll Restoration Wrapper
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Global elements: Floating WhatsApp & Scroll-to-Top
function FloatingActions({ onOpenBooking }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-brand-navy border border-white/10 text-white hover:bg-brand-blue shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          aria-label="Scroll to Top"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919037575561"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center justify-center relative group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 group-hover:animate-ping pointer-events-none" />
        <FaWhatsapp className="text-2xl relative z-10" />
      </a>
    </div>
  );
}

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {/* Navigation bar */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Dynamic page contents */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/mbbs-admissions" element={<MBBSAdmissions onOpenBooking={handleOpenBooking} />} />
            <Route path="/mbbs/:countryId" element={<CountryDetail onOpenBooking={handleOpenBooking} />} />
            <Route path="/admission-process" element={<AdmissionProcess />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Home onOpenBooking={handleOpenBooking} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenBooking={handleOpenBooking} />

        {/* Floating actions (WhatsApp & Scroll top) */}
        <FloatingActions onOpenBooking={handleOpenBooking} />

        {/* Consultation form Modal */}
        <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />

        {/* Toast alert system */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#0D1B2A',
              color: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.08)',
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif'
            },
            success: {
              iconTheme: {
                primary: '#3A8C2F',
                secondary: '#FFFFFF',
              },
            },
            error: {
              iconTheme: {
                primary: '#EF4444',
                secondary: '#FFFFFF',
              },
            }
          }}
        />
      </div>
    </Router>
  );
}

export default App;
