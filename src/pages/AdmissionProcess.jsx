import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function AdmissionProcess() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [useWhatsAppAsPhone, setUseWhatsAppAsPhone] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: 'Male',
    phone: '',
    whatsapp: '',
    fatherName: '',
    motherName: '',
    passedNeet: 'No',
    neetYear: '',
    passed12Year: ''
  });

  const handlePhoneChange = (val) => {
    setFormData(prev => ({
      ...prev,
      phone: val,
      whatsapp: useWhatsAppAsPhone ? val : prev.whatsapp
    }));
  };

  const handleWhatsAppToggle = (checked) => {
    setUseWhatsAppAsPhone(checked);
    if (checked) {
      setFormData(prev => ({ ...prev, whatsapp: prev.phone }));
    }
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.age || !formData.phone || !formData.whatsapp || !formData.fatherName || !formData.motherName || !formData.passed12Year) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    if (formData.passedNeet === 'Yes' && !formData.neetYear) {
      toast.error("Please specify your NEET pass out year.");
      return;
    }

    toast.success("Redirecting to WhatsApp...");

    // Pre-filled WhatsApp message
    const message = `Hello MedScope, I just submitted my MBBS eligibility application form.

*Details:*
• *Name:* ${formData.fullName}
• *Age:* ${formData.age}
• *Gender:* ${formData.gender}
• *Phone:* ${formData.phone}
• *WhatsApp:* ${formData.whatsapp}
• *Father's Name:* ${formData.fatherName}
• *Mother's Name:* ${formData.motherName}
• *Passed NEET:* ${formData.passedNeet}${formData.passedNeet === 'Yes' ? ` (Year: ${formData.neetYear})` : ''}
• *12th Passed Year:* ${formData.passed12Year}`;

    const whatsappUrl = `https://wa.me/919037575561?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      age: '',
      gender: 'Male',
      phone: '',
      whatsapp: '',
      fatherName: '',
      motherName: '',
      passedNeet: 'No',
      neetYear: '',
      passed12Year: ''
    });
    setUseWhatsAppAsPhone(true);
    setIsConfirmed(false);
  };

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="relative bg-brand-navy py-12 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/30 to-brand-green/20" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-display font-black text-3xl sm:text-4xl">
            MBBS Admission Registration
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 mt-2 font-sans">
            Fill in the details below to evaluate your global eligibility.
          </p>
        </div>
      </section>

      {/* Main Form Content */}
      <section className="py-16 bg-brand-lightBg min-h-[60vh] flex flex-col justify-center">
        <div className="max-w-2xl mx-auto px-4 w-full">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-antigravity border border-brand-blue/5 relative">
            {!isConfirmed ? (
              <form onSubmit={handleFinalSubmit} className="space-y-6 text-left">
                <h3 className="font-display font-bold text-lg text-brand-navy border-b pb-3 flex items-center gap-2">
                  <FaUser className="text-brand-blue text-sm" /> Registration Form
                </h3>

                {/* Name & Age */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted font-bold mb-1 font-semibold">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter full name"
                      className="block w-full border border-gray-200 rounded-xl px-4 py-3 bg-brand-lightBg text-sm focus:border-brand-blue focus:ring-brand-blue outline-none"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted font-bold mb-1 font-semibold">Age *</label>
                    <input
                      type="number"
                      required
                      min="15"
                      max="50"
                      placeholder="Enter age"
                      className="block w-full border border-gray-200 rounded-xl px-4 py-3 bg-brand-lightBg text-sm focus:border-brand-blue focus:ring-brand-blue outline-none"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    />
                  </div>
                </div>

                {/* Gender & 12th passed year */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted font-bold mb-1 font-semibold">Gender *</label>
                    <select
                      className="block w-full border border-gray-200 rounded-xl px-4 py-3 bg-brand-lightBg text-sm focus:border-brand-blue focus:ring-brand-blue outline-none appearance-none"
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted font-bold mb-1 font-semibold">12th Passed Out Year *</label>
                    <input
                      type="number"
                      required
                      placeholder="e.g. 2025"
                      className="block w-full border border-gray-200 rounded-xl px-4 py-3 bg-brand-lightBg text-sm focus:border-brand-blue focus:ring-brand-blue outline-none"
                      value={formData.passed12Year}
                      onChange={(e) => setFormData({ ...formData, passed12Year: e.target.value })}
                    />
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted font-bold mb-1 font-semibold">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="10 digit number"
                      className="block w-full border border-gray-200 rounded-xl px-4 py-3 bg-brand-lightBg text-sm focus:border-brand-blue focus:ring-brand-blue outline-none"
                      value={formData.phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted font-bold mb-1 font-semibold">WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      disabled={useWhatsAppAsPhone}
                      placeholder="WhatsApp number"
                      className={`block w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-brand-blue focus:ring-brand-blue outline-none ${useWhatsAppAsPhone ? 'bg-gray-100 text-gray-400' : 'bg-brand-lightBg'}`}
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    />
                    <label className="flex items-center gap-1.5 mt-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        className="rounded text-brand-blue focus:ring-brand-blue"
                        checked={useWhatsAppAsPhone}
                        onChange={(e) => handleWhatsAppToggle(e.target.checked)}
                      />
                      <span className="text-[10px] text-brand-textMuted font-semibold">Same as phone number</span>
                    </label>
                  </div>
                </div>

                {/* Father & Mother Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted font-bold mb-1 font-semibold">Father's Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter father's name"
                      className="block w-full border border-gray-200 rounded-xl px-4 py-3 bg-brand-lightBg text-sm focus:border-brand-blue focus:ring-brand-blue outline-none"
                      value={formData.fatherName}
                      onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted font-bold mb-1 font-semibold">Mother's Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter mother's name"
                      className="block w-full border border-gray-200 rounded-xl px-4 py-3 bg-brand-lightBg text-sm focus:border-brand-blue focus:ring-brand-blue outline-none"
                      value={formData.motherName}
                      onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
                    />
                  </div>
                </div>

                {/* NEET status */}
                <div>
                  <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted font-bold mb-1 font-semibold">Did you pass the NEET? *</label>
                  <select
                    className="block w-full border border-gray-200 rounded-xl px-4 py-3 bg-brand-lightBg text-sm focus:border-brand-blue focus:ring-brand-blue outline-none appearance-none"
                    value={formData.passedNeet}
                    onChange={(e) => setFormData({ ...formData, passedNeet: e.target.value })}
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>

                {/* NEET passout year conditional */}
                {formData.passedNeet === 'Yes' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="grid grid-cols-1 gap-5"
                  >
                    <div>
                      <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted font-bold mb-1 font-semibold">NEET Pass Out Year *</label>
                      <input
                        type="number"
                        required
                        placeholder="e.g. 2025"
                        className="block w-full border border-gray-200 rounded-xl px-4 py-3 bg-brand-lightBg text-sm focus:border-brand-blue focus:ring-brand-blue outline-none"
                        value={formData.neetYear}
                        onChange={(e) => setFormData({ ...formData, neetYear: e.target.value })}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn-glow w-full bg-gradient-brand text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-102 transition-all duration-300 flex items-center justify-center gap-2 text-sm mt-4"
                >
                  <span>Submit Application</span> <FaCheckCircle />
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-6">
                <FaCheckCircle className="text-brand-green text-7xl mx-auto animate-bounce" />
                
                <div>
                  <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-navy">
                    Application Submitted!
                  </h2>
                  <p className="text-sm text-brand-textMuted mt-2 leading-relaxed">
                    Thank you, <strong className="text-brand-navy">{formData.fullName}</strong>. Your medical eligibility review has been successfully registered.
                  </p>
                </div>

                <div className="bg-brand-lightBg p-5 rounded-2xl text-left text-sm space-y-2.5 border border-brand-blue/5">
                  <p className="text-brand-navy">
                    <strong>Student Name:</strong> {formData.fullName}
                  </p>
                  <p className="text-brand-navy">
                    <strong>Age:</strong> {formData.age}
                  </p>
                  <p className="text-brand-navy">
                    <strong>Gender:</strong> {formData.gender}
                  </p>
                  <p className="text-brand-navy">
                    <strong>Phone:</strong> {formData.phone}
                  </p>
                  <p className="text-brand-navy">
                    <strong>WhatsApp:</strong> {formData.whatsapp}
                  </p>
                  <p className="text-brand-navy">
                    <strong>Father's Name:</strong> {formData.fatherName}
                  </p>
                  <p className="text-brand-navy">
                    <strong>Mother's Name:</strong> {formData.motherName}
                  </p>
                  <p className="text-brand-navy">
                    <strong>Passed NEET:</strong> {formData.passedNeet} {formData.passedNeet === 'Yes' ? `(${formData.neetYear})` : ''}
                  </p>
                  <p className="text-brand-navy">
                    <strong>12th Passed Year:</strong> {formData.passed12Year}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href={`https://wa.me/919037575561?text=Hi%20MedScope,%20I%20just%20submitted%20my%20MBBS%20eligibility%20form%20for%20${formData.fullName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    <FaWhatsapp className="text-lg" />
                    Chat on WhatsApp
                  </a>
                  <button
                    onClick={handleReset}
                    className="text-xs font-accent text-brand-textMuted hover:text-brand-blue font-bold uppercase tracking-widest underline block mx-auto"
                  >
                    Submit another application
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
