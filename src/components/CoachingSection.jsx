import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUserMd, FaGlobe, FaAward, FaBookOpen } from 'react-icons/fa';

export default function CoachingSection() {
  const categories = [
    {
      title: "India Licensing Exams",
      description: "Mandatory licensing and practice exit examinations for medical careers in India.",
      icon: FaAward,
      color: "text-brand-blue bg-brand-blue/10 border-brand-blue/20",
      exams: [
        { name: "FMGE", desc: "Foreign Medical Graduates Examination" },
        { name: "NExT", desc: "National Exit Test (Upcoming standard exit exam)" }
      ]
    },
    {
      title: "Global Medical Pathways",
      description: "Premier licensing certifications required for entering residency and clinical practice in the West.",
      icon: FaGlobe,
      color: "text-brand-green bg-brand-green/10 border-brand-green/20",
      exams: [
        { name: "USMLE", desc: "United States Medical Licensing Examination" },
        { name: "PLAB", desc: "Professional and Linguistic Assessments Board (UK)" },
        { name: "AMC", desc: "Australian Medical Council Examination" },
        { name: "MCCQE", desc: "Medical Council of Canada Qualifying Examination" }
      ]
    },
    {
      title: "Middle East & Gulf Licensing",
      description: "Direct practice licensing exams for medical professionals in the UAE and Gulf region.",
      icon: FaUserMd,
      color: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20",
      exams: [
        { name: "DHA", desc: "Dubai Health Authority (Dubai)" },
        { name: "HAAD / DoH", desc: "Department of Health (Abu Dhabi)" },
        { name: "MOH", desc: "Ministry of Health (UAE & Gulf Countries)" },
        { name: "SMLE", desc: "Saudi Medical Licensing Exam (Saudi Arabia)" },
        { name: "QCHP Prometric", desc: "Qatar Council for Healthcare Practitioners" },
        { name: "OMSB Prometric", desc: "Oman Medical Specialty Board" },
        { name: "NHRA Prometric", desc: "National Health Regulatory Authority (Bahrain)" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] rounded-full glow-bg-blue opacity-15 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[40vw] h-[40vw] rounded-full glow-bg-green opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-accent uppercase tracking-widest text-brand-blue font-bold px-3.5 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/10 inline-flex items-center gap-2">
            <FaBookOpen className="text-brand-blue text-[10px]" />
            Exclusive Student Benefit
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-navy mt-4 leading-tight">
            Free Medical Licensing Exam Coaching
          </h2>
          <p className="text-sm sm:text-base text-brand-textMuted mt-4 leading-relaxed font-sans">
            At MedScope Consultancy, we provide <strong className="text-brand-blue font-semibold">FREE coaching classes</strong> for medical graduates preparing for international medical licensing examinations, helping students succeed in their medical careers worldwide.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-brand-lightBg border border-brand-blue/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-antigravity transition-all duration-300 relative group"
              >
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 ${cat.color} border`}>
                      <Icon />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-lg text-brand-navy">{cat.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed border-b border-brand-blue/5 pb-4">
                    {cat.description}
                  </p>

                  {/* Exams List */}
                  <div className="space-y-3">
                    {cat.exams.map((exam, eIdx) => (
                      <div 
                        key={eIdx}
                        className="flex items-start gap-3 p-3 bg-white rounded-2xl border border-brand-blue/5 shadow-sm hover:border-brand-blue/20 transition-all"
                      >
                        <FaCheckCircle className="text-brand-green text-sm shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-bold text-brand-navy">{exam.name}</h4>
                          <p className="text-[11px] text-brand-textMuted font-medium">{exam.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <div className="inline-block bg-brand-green/5 border border-brand-green/10 rounded-2xl px-6 py-4 text-xs sm:text-sm text-brand-green font-semibold">
            📢 Free coaching and guidance for students pursuing MBBS abroad through MedScope Consultancy.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
