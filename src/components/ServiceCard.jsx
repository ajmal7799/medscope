import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ServiceCard({ icon, title, description, link = "/services", index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white p-6 rounded-2xl shadow-antigravity hover:shadow-antigravityHover hover:-translate-y-2 transition-all duration-300 border border-brand-blue/5 flex flex-col justify-between group cursor-pointer"
    >
      <div className="space-y-4">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-brand-lightBg flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="font-display font-bold text-lg text-brand-navy group-hover:text-brand-blue transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-brand-textMuted leading-relaxed">
          {description}
        </p>
      </div>

      {/* Learn More Link */}
      <div className="pt-6">
        <Link
          to={link}
          className="inline-flex items-center gap-1 text-xs font-accent uppercase tracking-widest text-brand-blue font-bold group-hover:gap-2 transition-all"
        >
          Explore Details <FaChevronRight className="text-[10px]" />
        </Link>
      </div>
    </motion.div>
  );
}
