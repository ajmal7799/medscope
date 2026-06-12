import React from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaFileSignature, FaPassport, FaPlaneDeparture, FaHotel } from 'react-icons/fa';

export default function AdmissionSteps() {
  const steps = [
    {
      number: '01',
      title: 'Free Profile Evaluation & Counselling',
      description: 'Consult with our experts in Chelannur or online. We evaluate your academic profile, NEET scores, and budget to select the best medical course and country.',
      icon: FaUserPlus,
      color: 'bg-brand-blue/10 text-brand-blue'
    },
    {
      number: '02',
      title: 'University Selection & Admission Letter',
      description: 'We process your application directly with our partnered, NMC-recognized foreign universities. Your official Admission Letter is issued within 7-10 working days.',
      icon: FaFileSignature,
      color: 'bg-brand-green/10 text-brand-green'
    },
    {
      number: '03',
      title: 'Documentation & Visa Assistance',
      description: 'Our dedicated travel visa specialists handle full translation of certificates, Ministry endorsements, police clearances, and fast-track student visa processing.',
      icon: FaPassport,
      color: 'bg-brand-cyan/10 text-brand-cyan'
    },
    {
      number: '04',
      title: 'Education Loan & Flight Booking',
      description: 'We offer full supporting documentation for bank education loans and coordinate group flight tickets to ensure safe travel with fellow Indian students.',
      icon: FaPlaneDeparture,
      color: 'bg-brand-blue/10 text-brand-blue'
    },
    {
      number: '05',
      title: 'Post-Arrival Reception & Support',
      description: 'MedScope representatives receive students at the airport, assist with hostel check-in, set up bank accounts, local SIM cards, and guide medical registration.',
      icon: FaHotel,
      color: 'bg-brand-green/10 text-brand-green'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative">
        
        {/* Continuous vertical connector line */}
        <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-blue via-brand-cyan to-brand-green transform -translate-x-1/2 hidden sm:block" />
        <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-blue via-brand-cyan to-brand-green sm:hidden" />

        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col sm:flex-row items-start sm:items-center relative ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                
                {/* Timeline Bullet Badge */}
                <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-full border-4 border-brand-lightBg ${step.color} shadow-lg flex items-center justify-center text-lg hover:scale-110 transition-transform duration-300`}>
                    <Icon />
                  </div>
                </div>

                {/* Content Box */}
                <div className="w-full sm:w-[calc(50%-2rem)] ml-14 sm:ml-0">
                  <div className="bg-white p-6 rounded-3xl shadow-antigravity border border-brand-blue/5 hover:shadow-antigravityHover hover:-translate-y-1 transition-all duration-300 relative">
                    
                    {/* Visual bubble numbering */}
                    <span className="absolute top-4 right-4 text-3xl font-display font-black text-gray-100 select-none">
                      {step.number}
                    </span>

                    <h3 className="font-display font-bold text-base sm:text-lg text-brand-navy mb-2 relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Empty Spacer column on desktop */}
                <div className="hidden sm:block w-[calc(50%-2rem)]" />

              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
