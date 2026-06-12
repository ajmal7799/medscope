import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaGlobeAmericas, FaUniversity, FaAward } from 'react-icons/fa';

// Workaround for react-countup double-default nesting issue in Vite builds
const CountUpComponent = typeof CountUp === 'object' && CountUp.default ? CountUp.default : CountUp;

export default function StatsBar() {
  const stats = [
    { id: 1, label: 'Students Mentored', end: 7000, suffix: '+', icon: FaUserGraduate, color: 'text-brand-blue bg-brand-blue/10' },
    { id: 2, label: 'Admissions Secured', end: 3200, suffix: '+', icon: FaAward, color: 'text-brand-green bg-brand-green/10' },
    { id: 3, label: 'Partnered Universities', end: 150, suffix: '+', icon: FaUniversity, color: 'text-brand-cyan bg-brand-cyan/10' },
    { id: 4, label: 'Study Destinations', end: 18, suffix: '+', icon: FaGlobeAmericas, color: 'text-brand-blue bg-brand-blue/10' }
  ];

  return (
    <div className="relative -mt-10 z-20 max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl p-6 sm:p-8 shadow-antigravity border border-brand-blue/5 flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={stat.id} className="flex items-center gap-4 text-left w-full md:w-auto md:justify-center">
              {/* Icon Container */}
              <div className={`p-4 rounded-2xl ${stat.color} text-2xl shrink-0 transition-transform duration-300 hover:scale-110`}>
                <Icon />
              </div>
              
              {/* Count & Label */}
              <div>
                <span className="block font-display font-black text-3xl sm:text-4xl text-brand-navy leading-none">
                  <CountUpComponent
                    end={stat.end}
                    suffix={stat.suffix}
                    duration={2.5}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </span>
                <span className="block text-xs font-accent uppercase tracking-widest text-brand-textMuted mt-1.5 font-bold">
                  {stat.label}
                </span>
              </div>

              {/* Separator on Desktop */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block h-10 w-px bg-gray-200 ml-12" />
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
