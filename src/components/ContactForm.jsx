import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaPhone, FaEnvelope, FaGraduationCap, FaGlobe, FaPaperPlane } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { countries } from '../data/countries';

export default function ContactForm({ title = "Get In Touch", subtitle = "Have questions about MBBS abroad? Send us an enquiry and our experts will guide you." }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'MBBS',
    country: 'Georgia',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Redirecting to WhatsApp...");

      // Pre-filled WhatsApp message with details
      const textMessage = `Hello MedScope, I would like to make an MBBS study abroad enquiry.

*Details:*
• *Name:* ${formData.name}
• *Phone:* ${formData.phone}
• *Email:* ${formData.email}
• *Course Interest:* ${formData.course}
• *Preferred Country:* ${formData.country}
${formData.message ? `• *Message:* ${formData.message}` : ''}`;

      const whatsappUrl = `https://wa.me/919037575561?text=${encodeURIComponent(textMessage)}`;
      window.location.href = whatsappUrl;

      setFormData({
        name: '',
        phone: '',
        email: '',
        course: 'MBBS',
        country: 'Georgia',
        message: ''
      });
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="glass-panel rounded-3xl p-6 sm:p-10 shadow-antigravity border border-brand-blue/10 relative overflow-hidden">
        
        {/* Glow backdrop bubble */}
        <div className="absolute -top-12 -left-12 w-36 h-36 rounded-full bg-brand-blue/5 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-36 h-36 rounded-full bg-brand-green/5 blur-2xl pointer-events-none" />

        <div className="text-center mb-8 relative z-10">
          <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-navy">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-brand-textMuted mt-2 font-sans">
            {subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted mb-1 font-semibold">
                Full Name *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-textMuted">
                  <FaUser className="text-sm" />
                </span>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-white text-sm focus:border-brand-blue focus:ring-brand-blue shadow-sm"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted mb-1 font-semibold">
                Phone Number *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-textMuted">
                  <FaPhone className="text-sm" />
                </span>
                <input
                  type="tel"
                  required
                  placeholder="Enter 10 digit number"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-white text-sm focus:border-brand-blue focus:ring-brand-blue shadow-sm"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Row 2: Email */}
          <div>
            <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted mb-1 font-semibold">
              Email Address *
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-textMuted">
                <FaEnvelope className="text-sm" />
              </span>
              <input
                type="email"
                required
                placeholder="johndoe@example.com"
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-white text-sm focus:border-brand-blue focus:ring-brand-blue shadow-sm"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          {/* Row 3: Course & Country Preference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted mb-1 font-semibold">
                Course Interest
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-textMuted">
                  <FaGraduationCap className="text-sm" />
                </span>
                <select
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-white text-sm focus:border-brand-blue focus:ring-brand-blue shadow-sm appearance-none"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                >
                  <option value="MBBS">MBBS (Medicine)</option>
                  <option value="BDS">BDS (Dental)</option>
                  <option value="Veterinary">BVSc (Veterinary)</option>
                  <option value="Nursing">BSc Nursing</option>
                  <option value="Paramedical">Paramedical Courses</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted mb-1 font-semibold">
                Preferred Country
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-textMuted">
                  <FaGlobe className="text-sm" />
                </span>
                <select
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-white text-sm focus:border-brand-blue focus:ring-brand-blue shadow-sm appearance-none"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                >
                  {countries.map((c) => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                  <option value="Other">Other Country</option>
                </select>
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted mb-1 font-semibold">
              Message / Special Notes
            </label>
            <textarea
              rows="4"
              placeholder="Tell us about your requirements..."
              className="block w-full p-4 border border-gray-200 rounded-xl bg-white text-sm focus:border-brand-blue focus:ring-brand-blue shadow-sm"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-glow w-full bg-gradient-brand text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-102 transition-all duration-300 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : (
              <>
                <FaPaperPlane className="text-xs" />
                <span>Send Enquiry</span>
              </>
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
