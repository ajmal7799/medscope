import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaYoutube, FaCalendarAlt, FaCheckCircle, FaUser, FaClock, FaCalendarDay } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '10:00 AM',
    mode: 'Phone Call',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Redirecting to WhatsApp...");

      // Pre-filled WhatsApp message with details
      const message = `Hello MedScope, I would like to book a free MBBS consultation.

*Details:*
• *Name:* ${formData.name}
• *Phone:* ${formData.phone}
• *Preferred Date:* ${formData.date}
• *Preferred Time:* ${formData.time}
${formData.message ? `• *Message:* ${formData.message}` : ''}`;

      const whatsappUrl = `https://wa.me/919037575561?text=${encodeURIComponent(message)}`;
      window.location.href = whatsappUrl;
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '10:00 AM',
      mode: 'Phone Call',
      message: ''
    });
    setIsConfirmed(false);
  };

  const contactCards = [
    {
      title: "Call Us Direct",
      details: ["+91 9778 229 747", "+91 8606 158 378"],
      sub: "Available 9:00 AM - 6:00 PM",
      icon: FaPhoneAlt,
      link: "tel:+919778229747",
      color: "text-brand-blue bg-brand-blue/10 border-brand-blue/10"
    },
    {
      title: "WhatsApp",
      details: ["+91 9037 575 561"],
      sub: "Quick support in minutes",
      icon: FaWhatsapp,
      link: "https://wa.me/919037575561",
      color: "text-[#25D366] bg-[#25D366]/10 border-[#25D366]/20"
    },
    {
      title: "Email Support",
      details: ["info@medscope.in"],
      sub: "Drop us an official line",
      icon: FaEnvelope,
      link: "mailto:info@medscope.in",
      color: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/10"
    },
    {
      title: "Head Office",
      details: ["Chelannur, Kozhikode", "Kerala, India - 673616"],
      sub: "Walk-ins welcome",
      icon: FaMapMarkerAlt,
      link: "https://maps.google.com/?q=Chelannur,Kozhikode,Kerala",
      color: "text-brand-green bg-brand-green/10 border-brand-green/10"
    }
  ];

  return (
    <div className="pt-20">
      
      {/* 1. Hero Banner */}
      <section className="relative bg-brand-navy py-16 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/30 to-brand-green/20" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-display font-black text-3xl sm:text-4xl">
            Contact MedScope
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 mt-2 font-sans">
            Have questions? Get in touch with our Chelannur headquarters or schedule an appointment.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-20 bg-brand-lightBg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Floating Info Cards & Socials */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <h2 className="font-display font-black text-2xl text-brand-navy border-b pb-3 border-gray-200">
                Get In Touch
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactCards.map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <a
                      href={card.link}
                      target={card.link.startsWith('http') ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      key={i}
                      className="bg-white p-5 rounded-2xl border border-brand-blue/5 shadow-antigravity hover:shadow-antigravityHover hover:-translate-y-1 transition-all duration-300 block relative overflow-hidden"
                    >
                      <div className={`w-10 h-10 rounded-xl ${card.color} border flex items-center justify-center text-lg mb-4`}>
                        <Icon />
                      </div>
                      <h3 className="font-display font-bold text-sm text-brand-navy">{card.title}</h3>
                      <div className="space-y-0.5 mt-2">
                        {card.details.map((detail, idx) => (
                          <span key={idx} className="block text-xs font-semibold text-brand-navy">{detail}</span>
                        ))}
                      </div>
                      <span className="block text-[10px] text-brand-textMuted mt-1.5">{card.sub}</span>
                    </a>
                  );
                })}
              </div>

              {/* Social Channels */}
              <div className="bg-white p-6 rounded-3xl border border-brand-blue/5 shadow-antigravity">
                <h3 className="font-display font-bold text-sm text-brand-navy mb-4">Official Channels</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/medscope.studyabroad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-pink-100 hover:border-pink-200 text-xs font-semibold text-[#E1306C] bg-pink-50/50 px-4 py-2.5 rounded-xl transition-all"
                  >
                    <FaInstagram className="text-sm" /> Instagram
                  </a>
                  <a
                    href="https://youtube.com/@medscopestudyabroad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-red-100 hover:border-red-200 text-xs font-semibold text-[#FF0000] bg-red-50/50 px-4 py-2.5 rounded-xl transition-all"
                  >
                    <FaYoutube className="text-sm" /> YouTube Channel
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Inline consultation booking */}
            <div className="lg:col-span-7 text-left">
              <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-antigravity border border-brand-blue/5">
                
                {!isConfirmed ? (
                  <>
                    <h3 className="font-display font-black text-2xl text-brand-navy mb-1">
                      Book Free Consultation
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-textMuted mb-6 font-sans">
                      Schedule a slots callback or in-person session in Chelannur office.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted font-bold mb-1">Full Name *</label>
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

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted font-bold mb-1">Phone Number *</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-textMuted">
                            <FaPhoneAlt />
                          </span>
                          <input
                            type="tel"
                            required
                            placeholder="Enter 10 digit number"
                            className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-brand-lightBg text-sm focus:border-brand-blue focus:ring-brand-blue"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Date */}
                        <div>
                          <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted font-bold mb-1">Preferred Date *</label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-textMuted">
                              <FaCalendarDay />
                            </span>
                            <input
                              type="date"
                              required
                              min={new Date().toISOString().split('T')[0]}
                              className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-brand-lightBg text-sm focus:border-brand-blue"
                              value={formData.date}
                              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            />
                          </div>
                        </div>

                        {/* Time Slots */}
                        <div>
                          <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted font-bold mb-1">Preferred Time</label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-textMuted">
                              <FaClock />
                            </span>
                            <select
                              className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-brand-lightBg text-sm focus:border-brand-blue"
                              value={formData.time}
                              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            >
                              {timeSlots.map((slot, idx) => (
                                <option key={idx} value={slot}>{slot}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>



                      {/* Note Message */}
                      <div>
                        <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted font-bold mb-1">Your message (optional)</label>
                        <textarea
                          rows="3"
                          placeholder="Tell us about NEET score or query..."
                          className="block w-full border border-gray-200 rounded-xl p-3 bg-brand-lightBg text-sm"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-glow w-full bg-gradient-brand text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-102 transition-all flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                        ) : (
                          <>
                            <FaCalendarAlt className="text-xs" />
                            <span>Confirm Consultation</span>
                          </>
                        )}
                      </button>

                    </form>
                  </>
                ) : (
                  <div className="text-center py-6 space-y-6">
                    <FaCheckCircle className="text-brand-green text-6xl mx-auto animate-bounce" />
                    
                    <div>
                      <h3 className="font-display font-black text-2xl text-brand-navy">
                        Booking Confirmed!
                      </h3>
                      <p className="text-sm text-brand-textMuted mt-1 leading-relaxed">
                        We have reserved your free medical counseling slot.
                      </p>
                    </div>

                    <div className="p-5 bg-brand-lightBg rounded-2xl text-left text-sm space-y-2.5 border border-brand-blue/5">
                      <p className="text-brand-textDark">
                        <strong>Student Name:</strong> {formData.name}
                      </p>
                      <p className="text-brand-textDark">
                        <strong>Scheduled Time:</strong> {formData.date} at {formData.time}
                      </p>
                      <p className="text-brand-textMuted text-xs mt-2 border-t pt-2 border-dashed border-gray-200">
                        We will call you at <strong className="text-brand-navy">{formData.phone}</strong>. Add us on WhatsApp to receive session links.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="https://wa.me/919037575561"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
                      >
                        <FaWhatsapp className="text-lg" /> Connect WhatsApp
                      </a>
                      <button
                        onClick={handleReset}
                        className="w-full border border-gray-200 text-brand-textDark hover:bg-brand-lightBg py-3 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all"
                      >
                        Book another Slot
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Google Maps Embed - Premium Full Width */}
      <section className="w-full h-[400px] border-t border-gray-200 overflow-hidden relative">
        <iframe
          title="MedScope Chelannur Kozhikode Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15648.163351336444!2d75.79564860085449!3d11.370356500000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65922ab590ef5%3A0xc3c5443d3dc45ab8!2sChelannur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1718163012903!5m2!1sen!2sin"
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

    </div>
  );
}
