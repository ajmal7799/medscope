import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCheckCircle, FaExclamationTriangle, FaPlane, FaMapMarkedAlt, FaKaaba, FaPassport, FaBus, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import ServiceCard from '../components/ServiceCard';
import CountryCard from '../components/CountryCard';
import UniversityList from '../components/UniversityList';
import CoachingSection from '../components/CoachingSection';
import VideoTestimonials from '../components/VideoTestimonials';
import ContactForm from '../components/ContactForm';

import studentImg from '../assets/medical_student.png';
import { countries } from '../data/countries';

export default function Home({ onOpenBooking }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isUnivListOpen, setIsUnivListOpen] = useState(false);

  const handleViewUniversities = (country) => {
    setSelectedCountry(country);
    setIsUnivListOpen(true);
  };

  const features = [
    "NMC Recognized Universities",
    "Scholarship Support Available",
    "Comprehensive Visa Assistance",
    "End-to-End Post-Arrival Support"
  ];

  const servicesData = [
    { icon: "🎓", title: "University Admissions", description: "MBBS, BDS, Veterinary & Nursing admissions in 14+ countries with full guidance.", link: "/services" },
    { icon: "✈️", title: "Flight Booking", description: "Hassle-free international and domestic flight bookings at student-friendly rates.", link: "/services" },
    { icon: "🗺️", title: "Tour Packages", description: "Curated leisure and travel packages customized for families and corporate groups.", link: "/services" },
    { icon: "🕌", title: "Umrah Services", description: "Complete, premium Umrah packages including visas, premium stays, and guides.", link: "/services" },
    { icon: "🪪", title: "Tourist Visa Assistance", description: "Fast, document-checked visa processing for travel to over 50+ countries.", link: "/services" },
    { icon: "🚌", title: "Bus & Train Tickets", description: "Convenient local booking services for all domestic rail and bus routes.", link: "/services" }
  ];

  // Exclude Uzbekistan from normal country cards for advisory display
  const regularCountries = countries.filter(c => c.id !== 'uzbekistan');

  return (
    <div className="pt-0 pb-0">

      {/* 1. Hero Section */}
      <HeroSection onOpenBooking={onOpenBooking} />

      {/* 2. Stats Bar */}
      <StatsBar />

      {/* 3. Who We Are Section */}
      <section className="py-24 bg-brand-lightBg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-green rounded-3xl transform rotate-3 scale-98 opacity-10 pointer-events-none" />
              <img
                src={studentImg}
                alt="Medical Student Partner"
                className="rounded-3xl shadow-antigravity w-full object-cover aspect-[4/5] relative z-10 border border-brand-blue/10 hover:scale-102 transition-transform duration-500"
              />
              {/* Floating badges */}
              <div className="absolute top-10 -right-6 z-20 glass-panel p-3 rounded-2xl shadow-lg border border-white/50 flex items-center gap-2 animate-float-slow">
                <span className="text-xl">👩‍⚕️</span>
                <span className="text-[10px] font-accent uppercase tracking-wider font-extrabold text-brand-navy">Future Doctor</span>
              </div>
              <div className="absolute bottom-10 -left-6 z-20 bg-brand-navy text-white p-3.5 rounded-2xl shadow-lg border border-white/10 flex items-center gap-2 animate-float-delayed">
                <span className="text-emerald-400">✓</span>
                <span className="text-[10px] font-accent uppercase tracking-wider font-semibold">WHO & NMC Approved</span>
              </div>
            </motion.div>

            {/* Right Details Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-left space-y-6"
            >
              <span className="text-xs font-accent uppercase tracking-widest text-brand-blue font-bold px-3 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/10 inline-block">
                About MedScope
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-navy leading-tight">
                Trusted Guidance for Your Medical Future
              </h2>
              <p className="text-sm sm:text-base text-brand-textMuted leading-relaxed">
                MedScope, operating under the Association for International Medical Education
                and Development (AIMEAD), is a trusted global platform dedicated to helping
                students secure MBBS, BDS, Veterinary, and BSc Nursing admissions in top
                international universities. Built by a team of experienced education consultants,
                academic advisors, and international admission specialists, we transform student
                ambitions into successful medical careers — with integrity, transparency, and
                personalized guidance at every step.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-brand-blue/5 shadow-sm">
                    <FaCheckCircle className="text-brand-green text-xl shrink-0" />
                    <span className="text-sm font-semibold text-brand-navy">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="btn-glow bg-gradient-brand text-white font-semibold py-3 px-6 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  Meet Our Director
                </Link>
                <button
                  onClick={onOpenBooking}
                  className="bg-white hover:bg-brand-lightBg border border-brand-blue/20 text-brand-blue font-semibold py-3 px-6 rounded-full text-xs uppercase tracking-wider transition-all"
                >
                  Ask Counselors
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Services Overview Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Glow bubble */}
        <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full glow-bg-green opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-accent uppercase tracking-widest text-brand-green font-bold px-3 py-1.5 rounded-full bg-brand-green/5 border border-brand-green/10 inline-block">
              Our Services
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-navy mt-4">
              Comprehensive Support For Your Career
            </h2>
            <p className="text-sm sm:text-base text-brand-textMuted mt-3 font-sans">
              From picking the right university to ticket bookings, tourist visas, and Umrah packages, we have you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                index={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. MBBS Countries Section */}
      <section className="py-24 bg-brand-lightBg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-accent uppercase tracking-widest text-brand-blue font-bold px-3 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/10 inline-block">
              Study MBBS Abroad — With Scholarship
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-navy mt-4">
              Explore Top Medical Countries
            </h2>
            <p className="text-sm sm:text-base text-brand-textMuted mt-3 font-sans">
              We place students in NMC-recognized universities across 9+ countries with world-class education standards.
            </p>
          </div>

          {/* Grid of Country Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {regularCountries.slice(0, 9).map((country, index) => (
              <CountryCard
                key={country.id}
                country={country}
                onViewUniversities={handleViewUniversities}
                index={index}
              />
            ))}
          </div>



          {/* Country Landing Page Route Trigger */}
          <div className="text-center mt-12">
            <Link
              to="/mbbs-admissions"
              className="inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold py-4 px-8 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <span>View All MBBS Destinations</span>
              <FaAngleRight className="text-sm" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. Licensing Exam Coaching */}
      <CoachingSection />

      {/* 7. Video Testimonials */}
      <VideoTestimonials />

      {/* 7. Contact Form Section */}
      <section className="py-24 bg-gradient-brand relative overflow-hidden">
        {/* Glow backdrop bubble */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full glow-bg-blue opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full glow-bg-green opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ContactForm
            title="Book Your Free Admission Counselling"
            subtitle="Fill in the details below. Our Chelannur-based study abroad mentors will call you back within 24 hours."
          />
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