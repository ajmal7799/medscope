import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const videoTestimonialsData = [
  {
    id: 'vvPxHVgN7Lw',
    title: "Student Review",
    subtitle: "Feedback on admission and college support",
    category: "Student Story",
  },
  {
    id: 'K_GVG7kf8V0',
    title: "Relocation Experience",
    subtitle: "Support during transition and arrival",
    category: "Student Review",
  },
  {
    id: 'XV_ShcRYNN4',
    title: "Clinical Facilities Check",
    subtitle: "Exploring medical infrastructure abroad",
    category: "Facility Inspection",
  },
  {
    id: 'qMGwhuxTvic',
    title: "Mess facilities",
    subtitle: "Student feedback on selection & guidance",
    category: "Student Success",
  }
];

export default function VideoTestimonials() {
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <section className="py-24 bg-brand-lightBg relative overflow-hidden border-t border-brand-blue/5">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[40vw] h-[40vw] rounded-full glow-bg-blue opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full glow-bg-green opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-accent uppercase tracking-widest text-brand-blue font-bold px-3 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/10 inline-block">
            🎥 Student Video Testimonials
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-navy mt-4">
            Hear From Our Successful Students
          </h2>
          <p className="text-sm sm:text-base text-brand-textMuted font-sans mt-3">
            Watch real, unfiltered feedback from students sharing their journey and experience with MedScope.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {videoTestimonialsData.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="space-y-4"
            >
              {/* Thumbnail Card */}
              <div 
                onClick={() => setActiveVideoId(video.id)}
                className="group cursor-pointer relative rounded-3xl overflow-hidden aspect-[9/16] shadow-antigravity hover:shadow-antigravityHover hover:-translate-y-1 transition-all duration-300 border border-brand-blue/5 bg-brand-navy"
              >
                {/* Thumbnail Image */}
                <img
                  src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Play Button Overlay (matches user's screenshot layout in bottom left) */}
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-gradient-brand text-white flex items-center justify-center shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-300 z-20">
                  <FaPlay className="ml-1 text-sm text-white" />
                </div>
              </div>

              {/* Description below card */}
              <div className="text-left px-2">
                <span className="text-[10px] font-accent uppercase tracking-wider font-extrabold text-[#3A8C2F]">
                  {video.category}
                </span>
                <h3 className="font-display font-bold text-base text-brand-navy mt-1 leading-snug">
                  {video.title}
                </h3>
                <p className="text-xs text-brand-textMuted font-sans mt-0.5">
                  {video.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal (Embeds YouTube Shorts player vertically) */}
      <Transition.Root show={activeVideoId !== null} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setActiveVideoId(null)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-brand-navy/85 backdrop-blur-sm transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-black shadow-2xl transition-all w-full max-w-[360px] aspect-[9/16] flex items-center justify-center">
                  {/* Close button */}
                  <button
                    onClick={() => setActiveVideoId(null)}
                    className="absolute top-4 right-4 z-50 rounded-full p-2 bg-black/60 text-white hover:bg-black/90 transition-colors border border-white/10"
                  >
                    <FaTimes className="text-lg" />
                  </button>

                  {/* YouTube Iframe Player */}
                  {activeVideoId && (
                    <iframe
                      src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&mute=0&rel=0`}
                      title="YouTube Shorts Video Testimonial"
                      className="w-full h-full border-0 rounded-3xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </section>
  );
}
