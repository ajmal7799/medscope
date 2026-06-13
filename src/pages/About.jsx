import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaQuoteLeft, FaCompass, FaRegLightbulb, FaShieldAlt, FaUsers, FaChevronRight, FaGlobe, FaHandshake, FaStar, FaClipboardCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CoachingSection from '../components/CoachingSection';

export default function About() {
  const values = [
    { title: 'Transparency', desc: 'No hidden charges. Clear university fees, direct university payments, and honest guidance at every stage.', icon: FaShieldAlt, color: 'text-brand-blue bg-brand-blue/10' },
    { title: 'Excellence', desc: 'Partnered exclusively with top-tier, WHO and NMC recognized medical institutions across the globe.', icon: FaGraduationCap, color: 'text-brand-green bg-brand-green/10' },
    { title: 'Accessibility', desc: 'Providing scholarship support and complete bank education loan documentation to every deserving student.', icon: FaCompass, color: 'text-brand-cyan bg-brand-cyan/10' },
    { title: 'Student-First', desc: 'End-to-end guidance from initial profiling and university selection all the way to post-arrival support.', icon: FaRegLightbulb, color: 'text-brand-blue bg-brand-blue/10' },
    { title: 'Global Network', desc: 'Strong partnerships with universities across 14+ countries to give students the widest range of options.', icon: FaGlobe, color: 'text-brand-green bg-brand-green/10' },
    { title: 'Ethical Guidance', desc: 'We recommend only what is right for the student — never driven by commissions or shortcuts.', icon: FaHandshake, color: 'text-brand-cyan bg-brand-cyan/10' },
    { title: 'Proven Results', desc: 'Hundreds of students successfully placed in recognized medical universities with consistent career outcomes.', icon: FaStar, color: 'text-brand-blue bg-brand-blue/10' },
    { title: 'Full Compliance', desc: 'All universities and processes are fully aligned with NMC, WHO, and international accreditation standards.', icon: FaClipboardCheck, color: 'text-brand-green bg-brand-green/10' },
  ];
  const milestones = [
    { year: '2024', label: 'Established', color: 'text-brand-blue' },
    { year: '14+', label: 'Countries', color: 'text-brand-green' },
    { year: '100%', label: 'NMC Compliant', color: 'text-brand-cyan' },
    { year: '500+', label: 'Students Guided', color: 'text-brand-blue' },
  ];

  return (
    <div className="pt-20">

      {/* 1. Hero Banner */}
      <section className="relative bg-brand-navy py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/30 to-brand-green/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full glow-bg-blue opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-accent uppercase tracking-widest text-brand-cyan font-bold px-4 py-1.5 rounded-full bg-white/10 border border-white/10 inline-block mb-4"
          >
            Association for International Medical Education and Development
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mt-2"
          >
            About MedScope
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed font-sans"
          >
            A trusted global platform dedicated to guiding aspiring medical students toward international education opportunities — with integrity, transparency, and genuine care.
          </motion.p>

          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-300 font-accent uppercase tracking-widest font-semibold"
          >
            <Link to="/" className="hover:text-brand-cyan transition-colors">Home</Link>
            <FaChevronRight className="text-[10px]" />
            <span className="text-white">About Us</span>
          </motion.div>
        </div>
      </section>

      {/* 2. Milestones Bar */}
      <section className="bg-white border-b border-brand-blue/5 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h4 className={`text-3xl font-display font-black ${m.color}`}>{m.year}</h4>
                <p className="text-xs font-accent uppercase tracking-wider text-brand-textMuted font-bold mt-1">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Company Details */}
      <section className="py-24 bg-brand-lightBg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Vision & Mission cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-3xl shadow-antigravity border border-brand-blue/5 relative group hover:shadow-antigravityHover transition-all">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-xl text-brand-blue">
                  🎯
                </div>
                <h3 className="font-display font-black text-xl text-brand-navy mb-3">Our Mission</h3>
                <p className="text-sm sm:text-base text-brand-textMuted leading-relaxed">
                  "To make world-class medical education accessible to every deserving student, regardless of financial barriers, by providing genuine counselling, transparent fees, and end-to-end relocation support."
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-antigravity border border-brand-blue/5 relative group hover:shadow-antigravityHover transition-all">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-brand-green/5 flex items-center justify-center text-xl text-brand-green">
                  👁️
                </div>
                <h3 className="font-display font-black text-xl text-brand-navy mb-3">Our Vision</h3>
                <p className="text-sm sm:text-base text-brand-textMuted leading-relaxed">
                  "To become the most trusted global medical study abroad platform, recognized for ethical practices, absolute transparency, and the successful placement of skilled doctors worldwide."
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-antigravity border border-brand-blue/5 relative group hover:shadow-antigravityHover transition-all">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-brand-cyan/5 flex items-center justify-center text-xl text-brand-cyan">
                  🤝
                </div>
                <h3 className="font-display font-black text-xl text-brand-navy mb-3">Our Commitment</h3>
                <p className="text-sm sm:text-base text-brand-textMuted leading-relaxed">
                  "We stand beside every student from the moment they reach out to the day they walk into their university — handling every document, every visa, and every concern along the way."
                </p>
              </div>
            </motion.div>

            {/* General Info text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-left space-y-6"
            >
              <span className="text-xs font-accent uppercase tracking-widest text-brand-blue font-bold px-3 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/10 inline-block">
                Our Foundation
              </span>
              <h2 className="font-display font-black text-3xl text-brand-navy leading-tight">
                Empowering Aspirations Since 2024
              </h2>
              <p className="text-sm sm:text-base text-brand-textMuted leading-relaxed">
                MedScope, operating under the Association for International Medical Education and Development (AIMEAD), is a trusted global platform dedicated to guiding aspiring medical students toward the right international education opportunities. We specialize in MBBS, BDS, Veterinary, and BSc Nursing admissions through structured counseling, transparent processes, and genuine end-to-end support.
              </p>
              <p className="text-sm sm:text-base text-brand-textMuted leading-relaxed font-sans">
                Our organization is built by a team of experienced education consultants, academic advisors, and international admission specialists who are committed to transforming student ambitions into successful medical careers. We focus on delivering accurate information and personalized counseling so that every student makes a confident, informed decision — from university selection and documentation to visa assistance and post-arrival settling.
              </p>
              <p className="text-sm sm:text-base text-brand-textMuted leading-relaxed font-sans">
                With a strong understanding of global medical education systems, we help students identify the right universities, countries, and programs aligned with their career goals — ensuring every choice is backed by research, ethics, and genuine care.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Leadership Desk */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Director's Desk */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-navy text-white rounded-3xl p-8 sm:p-12 shadow-antigravity border border-white/5 relative overflow-hidden"
          >
            {/* Glow bubbles */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full glow-bg-green opacity-20 pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full glow-bg-blue opacity-25 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 text-left">

              {/* Director Image Box */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
                <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white/10 select-none bg-brand-navy flex items-center justify-center">
                  <img
                    src="/photos/jameela%20V.H.jpeg"
                    alt="Jameela V. H."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Jameela V. H.</h3>
                  <p className="text-xs font-accent uppercase tracking-wider text-brand-cyan font-bold mt-1">
                    Founder & Managing Director, MedScope
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-2 w-full">
                  <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2">
                    <span className="text-brand-cyan text-xs">✓</span>
                    <span className="text-xs text-gray-300 font-semibold">15+ Years in Medical Education</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2">
                    <span className="text-brand-cyan text-xs">✓</span>
                    <span className="text-xs text-gray-300 font-semibold">International University Partner</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2">
                    <span className="text-brand-cyan text-xs">✓</span>
                    <span className="text-xs text-gray-300 font-semibold">NMC Compliance Expert</span>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="lg:col-span-8 space-y-6">
                <div className="relative">
                  <FaQuoteLeft className="text-5xl text-brand-cyan/20 absolute -top-8 -left-6" />
                  <h4 className="font-display font-bold text-lg sm:text-xl text-white relative z-10">
                    From The Director's Desk
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                  "At MedScope, we believe every student deserves access to quality medical education — no matter their background or financial situation. Our team works tirelessly to ensure that nothing stands between a student and their dream of becoming a doctor."
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                  "We personally verify each university we recommend, inspect their campus facilities, and maintain long-standing relationships with university administrations to ensure our students receive the best academic and local support. Your safety, your learning, and your future are our highest priorities."
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                  "MedScope was built with one promise — to be the most honest and transparent partner a student can have on their journey to international medical education. We do not just place students; we build doctors."
                </p>
                <div className="pt-2 border-t border-white/10">
                  <p className="text-xs text-brand-cyan font-accent uppercase tracking-widest font-bold">
                    — Jameela V. H., Founder & Managing Director, MedScope | AIMEAD
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* CEO's Desk */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-brand-navy text-white rounded-3xl p-8 sm:p-12 shadow-antigravity border border-white/5 relative overflow-hidden"
          >
            {/* Glow bubbles */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full glow-bg-green opacity-20 pointer-events-none" />
            <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full glow-bg-blue opacity-25 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 text-left">

              {/* CEO Image Box */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
                <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white/10 select-none bg-brand-navy flex items-center justify-center">
                  <img
                    src="/photos/Dr.%20Inshalu.jpg"
                    alt="Dr. Inshalu"
                    className="w-full h-full object-cover scale-[1.75]"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Dr. Inshalu</h3>
                  <p className="text-xs font-accent uppercase tracking-wider text-brand-cyan font-bold mt-1">
                    Chief Executive Officer (CEO), MedScope
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-2 w-full">
                  <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2">
                    <span className="text-brand-cyan text-xs">✓</span>
                    <span className="text-xs text-gray-300 font-semibold">Global Education Strategist</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2">
                    <span className="text-brand-cyan text-xs">✓</span>
                    <span className="text-xs text-gray-300 font-semibold">Career Guidance Mentor</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2">
                    <span className="text-brand-cyan text-xs">✓</span>
                    <span className="text-xs text-gray-300 font-semibold">Student Welfare Advocate</span>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="lg:col-span-8 space-y-6">
                <div className="relative">
                  <FaQuoteLeft className="text-5xl text-brand-cyan/20 absolute -top-8 -left-6" />
                  <h4 className="font-display font-bold text-lg sm:text-xl text-white relative z-10">
                    From The CEO's Desk
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                  "Our focus at MedScope is to streamline the pathway for future doctors. We believe in providing robust guidance, verified university options, and reliable services that help students transition smoothly into their international academic lives."
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                  "We are committed to maintaining the highest ethical standards in medical consultancy. By offering personalized counseling and absolute transparency in fee structures, we ensure that both students and parents can make decisions with complete peace of mind."
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                  "Empowering the next generation of healthcare professionals is our passion. We stand by our students at every milestone, ensuring they are equipped to excel in their global medical careers."
                </p>
                <div className="pt-2 border-t border-white/10">
                  <p className="text-xs text-brand-cyan font-accent uppercase tracking-widest font-bold">
                    — Dr. Inshalu, Chief Executive Officer (CEO), MedScope | AIMEAD
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Values Grid */}
      <section className="py-24 bg-brand-lightBg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-accent uppercase tracking-widest text-brand-blue font-bold px-3 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/10 inline-block">
              Our Values
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-navy mt-4">
              Built on Trust and Integrity
            </h2>
            <p className="text-sm sm:text-base text-brand-textMuted mt-3 font-sans">
              Every decision we make is guided by these core principles — because students deserve nothing less.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white p-6 rounded-3xl shadow-antigravity hover:shadow-antigravityHover hover:-translate-y-1.5 transition-all duration-300 border border-brand-blue/5 text-left flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-2xl ${v.color} flex items-center justify-center text-xl`}>
                      <Icon />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-navy">{v.title}</h3>
                    <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. Licensing Exam Coaching */}
      <CoachingSection />

      {/* 7. Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full glow-bg-green opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-accent uppercase tracking-widest text-brand-green font-bold px-3 py-1.5 rounded-full bg-brand-green/5 border border-brand-green/10 inline-block">
              Why MedScope
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-navy mt-4">
              The MedScope Difference
            </h2>
            <p className="text-sm sm:text-base text-brand-textMuted mt-3 font-sans">
              We are not just a consultancy — we are a partner invested in your long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎓',
                title: 'Expert-Verified Universities',
                desc: 'Every university in our network is personally vetted by our team for academic quality, NMC compliance, campus safety, and student welfare standards.'
              },
              {
                icon: '📋',
                title: 'Zero-Surprise Fee Structure',
                desc: 'We provide a complete, itemized breakdown of all costs upfront — tuition, hostel, visa, and travel — so families can plan with full confidence and no hidden fees.'
              },
              {
                icon: '🛬',
                title: 'Post-Arrival Support',
                desc: 'Our support does not end at the airport. We coordinate local orientation, university registration, SIM cards, and initial accommodation to ease your transition.'
              },
              {
                icon: '📑',
                title: 'Documentation Mastery',
                desc: 'From NMC screening and apostille to visa applications and university enrollment forms — our documentation team handles it all with precision and speed.'
              },
              {
                icon: '💰',
                title: 'Scholarship Guidance',
                desc: 'We identify and apply for every available scholarship and financial assistance program to ensure students get the most affordable pathway to their degree.'
              },
              {
                icon: '🌐',
                title: 'Global University Network',
                desc: 'With active partnerships across 14+ countries including Russia, Kazakhstan, Georgia, Nepal, Bangladesh, Philippines, and more — students have the widest options available.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-brand-lightBg p-7 rounded-3xl border border-brand-blue/5 hover:shadow-antigravity transition-all duration-300 text-left"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-base text-brand-navy mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. CTA Banner */}
      <section className="py-20 bg-gradient-brand relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full glow-bg-blue opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full glow-bg-green opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="text-xs font-accent uppercase tracking-widest text-white/70 font-bold px-3 py-1.5 rounded-full bg-white/10 border border-white/10 inline-block">
              Begin Your Journey
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
              Ready to Start Your Medical Career Abroad?
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto font-sans">
              Talk to one of our expert counselors today — completely free. We will help you find the right country, the right university, and the right path to your MBBS degree.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="bg-white text-brand-navy font-semibold py-3 px-8 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Book Free Counselling
              </Link>
              <Link
                to="/mbbs-admissions"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 px-8 rounded-full text-xs uppercase tracking-wider transition-all"
              >
                Explore Destinations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}