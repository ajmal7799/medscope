import React, { useState, useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaPlaneDeparture, FaKaaba, FaHandHoldingUsd, FaCheckCircle, FaChevronRight, FaTimes, FaUser, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import toast from 'react-hot-toast';

export default function Services() {
  const { hash } = useLocation();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({ name: '', age: '', phone: '', whatsapp: '' });
  const [sameAsPhone, setSameAsPhone] = useState(false);

  const handlePhoneChange = (val) => {
    setFormData(prev => {
      const updated = { ...prev, phone: val };
      if (sameAsPhone) {
        updated.whatsapp = val;
      }
      return updated;
    });
  };

  const handleSameAsPhoneToggle = (checked) => {
    setSameAsPhone(checked);
    if (checked) {
      setFormData(prev => ({ ...prev, whatsapp: prev.phone }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.whatsapp || !formData.age) {
      toast.error("Please fill in all required fields.");
      return;
    }

    toast.success("Redirecting to WhatsApp...");

    const message = `Hello MedScope, I would like to start processing.

*Service:* ${selectedService?.title}
*Name:* ${formData.name}
*Age:* ${formData.age}
*Phone:* ${formData.phone}
*WhatsApp:* ${formData.whatsapp}`;

    const whatsappUrl = `https://wa.me/919037575561?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;

    setIsEnquiryOpen(false);
    setFormData({ name: '', age: '', phone: '', whatsapp: '' });
    setSameAsPhone(false);
  };

  // Scroll to targeted element if hash exists (e.g. /services#loans)
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const serviceSections = [
    {
      id: 'admissions',
      title: 'University Admissions',
      subtitle: 'Securing medical seats globally with full authenticity.',
      icon: '🎓',
      iconClass: 'text-brand-blue bg-brand-blue/10',
      courses: ['MBBS (Medicine)', 'BDS (Dental)', 'BVSc (Veterinary)', 'BSc Nursing', 'Paramedical Courses'],
      countries: 'Georgia, Russia, Uzbekistan, Tajikistan, Armenia, Kyrgyzstan, Moldova, Egypt, Barbados, Kazakhstan, Sierra Leone',
      features: [
        'NEET Score profiling and documentation analysis',
        'Direct university selection and slot bookings',
        'Application submission and track management',
        'Direct processing of official Admission Letters',
        'Strict verification of NMC & WHO recognition status',
        'Special assistance for academic scholarships'
      ]
    },
    {
      id: 'travel',
      title: 'Travel & Visa Processing',
      subtitle: 'Complete visa logistics & student travel clearances.',
      icon: '✈️',
      iconClass: 'text-brand-green bg-brand-green/10',
      courses: ['Student Visa (MBBS Countries)', 'Tourist Visa (50+ Countries)', 'Transit Clearances'],
      features: [
        'A-Z translation and apostille of educational marksheet certificates',
        'Ministry endorsements and Police Clearance Certificates (PCC)',
        'Host embassy appointment booking and mock interviews',
        'Detailed documentation audit prior to embassy submission',
        'Visa rejection appeal guidance and secondary processing support',
        'Indian travel group coordination with dedicated chaperones'
      ]
    },
    {
      id: 'tours',
      title: 'Umrah Services & Tour Packages',
      subtitle: 'Curated international travels & holy pilgrimages.',
      icon: '🕌',
      iconClass: 'text-brand-cyan bg-brand-cyan/10',
      courses: ['Umrah Full-Service Pilgrimage Packages', 'International Family Tours', 'Group Travel Planning'],
      features: [
        'End-to-end Umrah visa issuance and document approvals',
        'Premium hotel accommodations close to Al-Haram in Mecca and Medina',
        'Local guided tours (Ziyarath) with experienced scholars',
        'Custom tourist visa processing for 50+ countries',
        'Curated travel itineraries for families and corporate outings',
        'Group ticket discounts and flight booking arrangements'
      ]
    },
    {
      id: 'loans',
      title: 'Education Loan Support',
      subtitle: 'Making global medical study financially achievable.',
      icon: '💵',
      iconClass: 'text-brand-blue bg-brand-blue/10',
      courses: ['Partnered NBFCs', 'Nationalized Banks', 'Cooperative Banks'],
      features: [
        'Documentation file preparation for nationalized and private banks',
        'Official admission letters and fee schedules formatted for bank scrutiny',
        'Educational loan amounts sanctioned up to ₹50 Lakhs',
        'Coordinating direct bank transfers to university bank accounts',
        'Fast-track file processing using dedicated banking contacts',
        'Counselling on interest rates and moratorium benefits'
      ]
    }
  ];

  return (
    <div className="pt-20">
      
      {/* 1. Hero Banner */}
      <section className="relative bg-brand-navy py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/30 to-brand-green/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full glow-bg-blue opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-4xl sm:text-5xl text-white"
          >
            Our Consulting Services
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-300 font-accent uppercase tracking-widest font-semibold"
          >
            <Link to="/" className="hover:text-brand-cyan transition-colors">Home</Link>
            <FaChevronRight className="text-[10px]" />
            <span className="text-white">Services</span>
          </motion.div>
        </div>
      </section>

      {/* 2. Detailed Service blocks */}
      <section className="py-20 bg-brand-lightBg space-y-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {serviceSections.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`bg-white rounded-3xl p-6 sm:p-10 shadow-antigravity border border-brand-blue/5 flex flex-col lg:flex-row items-stretch gap-10 scroll-mt-28 mb-12 hover:shadow-antigravityHover transition-shadow duration-300 ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Left Overview Column */}
                <div className="lg:w-5/12 text-left flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-brand-lightBg flex items-center justify-center text-3xl shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-display font-black text-2xl text-brand-navy">
                          {service.title}
                        </h3>
                        <p className="text-xs font-accent text-brand-blue uppercase tracking-wider font-bold mt-1">
                          Consultation Areas
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-brand-textMuted mt-4 leading-relaxed font-sans">
                      {service.subtitle}
                    </p>

                    {/* Courses/Programs Bullet Pills */}
                    <div className="mt-6 space-y-2">
                      <span className="block text-[10px] font-accent uppercase tracking-widest text-brand-textMuted font-bold">Supported Programs:</span>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {service.courses.map((c, i) => (
                          <span key={i} className="text-xs font-semibold text-brand-navy bg-brand-lightBg px-3 py-1 rounded-full border border-brand-blue/5">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Eligible countries detail if admissions */}
                    {service.id === 'admissions' && (
                      <div className="mt-4 pt-3 border-t border-gray-100">
                        <span className="block text-[10px] font-accent uppercase tracking-widest text-brand-textMuted font-bold">Key Destinations:</span>
                        <p className="text-xs text-brand-navy font-semibold mt-1">
                          {service.countries}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4">
                    {service.id === 'admissions' ? (
                      <Link
                        to="/admission-process"
                        className="btn-glow inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold py-3 px-6 rounded-xl text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                      >
                        Start Processing
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          setSelectedService(service);
                          setIsEnquiryOpen(true);
                        }}
                        className="btn-glow inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold py-3 px-6 rounded-xl text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                      >
                        Start Processing
                      </button>
                    )}
                  </div>
                </div>

                {/* Vertical Separator on Desktop */}
                <div className="hidden lg:block w-px bg-gray-100 self-stretch my-2" />

                {/* Right Checklist Column */}
                <div className="lg:w-7/12 text-left flex flex-col justify-center space-y-4">
                  <h4 className="text-xs font-accent uppercase tracking-widest text-brand-textMuted font-bold">
                    What we provide
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <FaCheckCircle className="text-brand-green text-base mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-sm text-brand-textDark leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>
      </section>

      {/* Service Enquiry Modal */}
      <Transition.Root show={isEnquiryOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsEnquiryOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-brand-navy/80 backdrop-blur-sm transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95 translate-y-8"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100 translate-y-0"
                leaveTo="opacity-0 scale-95 translate-y-8"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-3xl bg-white p-6 text-left align-middle shadow-2xl border border-brand-blue/10 relative transition-all">
                  
                  <button
                    onClick={() => setIsEnquiryOpen(false)}
                    className="absolute top-4 right-4 p-2 rounded-full text-brand-textMuted hover:text-brand-textDark hover:bg-brand-lightBg transition-all"
                  >
                    <FaTimes className="text-xl" />
                  </button>

                  <Dialog.Title
                    as="h3"
                    className="text-xl font-display font-black text-brand-navy mb-1"
                  >
                    Start Processing
                  </Dialog.Title>
                  <p className="text-xs text-brand-textMuted mb-6">
                    {selectedService?.title} Enquiry Details
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted mb-1 font-semibold">
                        Full Name *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-textMuted">
                          <FaUser />
                        </span>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-brand-lightBg text-sm focus:border-brand-blue focus:ring-brand-blue"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Age */}
                    <div>
                      <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted mb-1 font-semibold">
                        Age *
                      </label>
                      <input
                        type="number"
                        required
                        placeholder="18"
                        min="1"
                        className="block w-full px-3 py-3 border border-gray-200 rounded-xl bg-brand-lightBg text-sm focus:border-brand-blue focus:ring-brand-blue"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted mb-1 font-semibold">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-textMuted">
                          <FaPhone />
                        </span>
                        <input
                          type="tel"
                          required
                          placeholder="Enter 10 digit number"
                          className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-brand-lightBg text-sm focus:border-brand-blue focus:ring-brand-blue"
                          value={formData.phone}
                          onChange={(e) => handlePhoneChange(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted font-semibold">
                          WhatsApp Number *
                        </label>
                        <label className="flex items-center gap-1.5 text-xs text-brand-blue font-semibold cursor-pointer">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                            checked={sameAsPhone}
                            onChange={(e) => handleSameAsPhoneToggle(e.target.checked)}
                          />
                          Same as Phone
                        </label>
                      </div>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-textMuted">
                          <FaWhatsapp className="text-emerald-500" />
                        </span>
                        <input
                          type="tel"
                          required
                          disabled={sameAsPhone}
                          placeholder="Enter WhatsApp number"
                          className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-brand-lightBg text-sm focus:border-brand-blue focus:ring-brand-blue disabled:opacity-75 disabled:bg-gray-50"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="btn-glow w-full bg-gradient-brand text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                    >
                      <FaWhatsapp className="text-lg" />
                      Submit & Chat on WhatsApp
                    </button>
                  </form>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

    </div>
  );
}
