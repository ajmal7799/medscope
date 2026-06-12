import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaCheckCircle, FaTimes, FaWhatsapp } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '10:00 AM',
    mode: 'Phone Call'
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
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Redirecting to WhatsApp...");

      // Pre-filled WhatsApp message with details
      const message = `Hello MedScope, I would like to book a free MBBS consultation.

*Details:*
• *Name:* ${formData.name}
• *Phone:* ${formData.phone}
• *Preferred Date:* ${formData.date}
• *Preferred Time:* ${formData.time}`;

      const whatsappUrl = `https://wa.me/919037575561?text=${encodeURIComponent(message)}`;
      window.location.href = whatsappUrl;
      onClose();
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '10:00 AM',
      mode: 'Phone Call'
    });
    setIsConfirmed(false);
    onClose();
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={resetForm}>
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
                  onClick={resetForm}
                  className="absolute top-4 right-4 p-2 rounded-full text-brand-textMuted hover:text-brand-textDark hover:bg-brand-lightBg transition-all"
                >
                  <FaTimes className="text-xl" />
                </button>

                {!isConfirmed ? (
                  <>
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-display font-bold text-brand-navy mb-1"
                    >
                      Book Free Consultation
                    </Dialog.Title>
                    <p className="text-sm text-brand-textMuted mb-6">
                      Speak with our expert medical admissions counselor.
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
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Preferred Date */}
                      <div>
                        <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted mb-1 font-semibold">
                          Date *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-textMuted">
                            <FaCalendarAlt />
                          </span>
                          <input
                            type="date"
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-brand-lightBg text-sm focus:border-brand-blue focus:ring-brand-blue"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Preferred Time Grid */}
                      <div>
                        <label className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted mb-2 font-semibold font-accent">
                          Time Slot *
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                          {timeSlots.map((slot, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => setFormData({ ...formData, time: slot })}
                              className={`py-2 px-1 text-center rounded-xl text-[10px] sm:text-xs font-semibold border transition-all duration-200 ${
                                formData.time === slot
                                  ? 'bg-brand-blue text-white border-brand-blue shadow-md'
                                  : 'bg-brand-lightBg text-brand-navy border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>



                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-glow w-full bg-gradient-brand text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-sm"
                      >
                        {isSubmitting ? (
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                        ) : "Confirm Appointment"}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <FaCheckCircle className="text-brand-green text-6xl mx-auto mb-4 animate-bounce" />
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-display font-bold text-brand-navy mb-2"
                    >
                      Booking Confirmed!
                    </Dialog.Title>
                    <div className="p-4 bg-brand-lightBg rounded-2xl border border-brand-blue/5 my-4 text-left text-sm space-y-2">
                      <p className="text-brand-textDark">
                        <strong>Student Name:</strong> {formData.name}
                      </p>
                      <p className="text-brand-textDark">
                        <strong>Scheduled Time:</strong> {formData.date} at {formData.time}
                      </p>
                      <p className="text-brand-textMuted text-xs mt-2 border-t pt-2 border-dashed border-gray-200">
                        We will call you at <a href={`tel:${formData.phone}`} className="text-brand-blue font-semibold underline">{formData.phone}</a>. Please save our WhatsApp contact.
                      </p>
                    </div>

                    <a
                      href="https://wa.me/919037575561"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 mt-2"
                    >
                      <FaWhatsapp className="text-xl" />
                      Add to WhatsApp Contact
                    </a>

                    <button
                      onClick={resetForm}
                      className="block mx-auto mt-4 text-xs font-accent text-brand-textMuted hover:text-brand-blue underline uppercase tracking-widest font-semibold"
                    >
                      Close Window
                    </button>
                  </div>
                )}

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
