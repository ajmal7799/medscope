import React, { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaTimes, FaSearch, FaCheckCircle, FaGraduationCap, FaPaperPlane, FaTimesCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { universities } from '../data/universities';

export default function UniversityList({ isOpen, onClose, country, onOpenBooking }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Reset search when country changes
  useEffect(() => {
    setSearchTerm('');
  }, [country]);

  if (!country) return null;

  // Retrieve university list for the selected country
  const list = universities[country.id] || [];

  // Filter list based on search term
  const filteredList = list.filter(univ => {
    const name = typeof univ === 'string' ? univ : univ.name;
    return name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleApplyClick = () => {
    onClose();
    navigate('/admission-process');
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        
        {/* Backdrop Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              
              {/* Sliding Panel */}
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-2xl border-l border-brand-blue/5">
                    
                    {/* Header */}
                    <div className="px-6 py-6 bg-brand-navy text-white relative">
                      <div className="absolute top-0 right-0 w-48 h-48 rounded-full glow-bg-blue opacity-30 pointer-events-none" />
                      
                      <div className="flex items-center justify-between relative z-10">
                        <Dialog.Title className="text-xl font-display font-black flex items-center gap-2">
                          <span className="text-3xl">{country.flag}</span>
                          <span>MBBS in {country.name}</span>
                        </Dialog.Title>
                        <button
                          onClick={onClose}
                          className="rounded-full p-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          <FaTimes className="text-lg" />
                        </button>
                      </div>

                      <div className="mt-4 flex items-center gap-2 relative z-10">
                        <span className="bg-brand-green/30 border border-brand-green/20 text-brand-green text-[10px] font-accent uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full">
                          {country.duration}
                        </span>
                      </div>
                    </div>

                    {/* Quick Stats Banner */}
                    <div className="bg-brand-lightBg px-6 py-4 border-b border-gray-100 grid grid-cols-2 gap-4">
                      <div>
                        <span className="block text-[10px] font-accent text-brand-textMuted uppercase tracking-wider font-semibold">NMC Status</span>
                        <span className="text-xs font-semibold text-brand-navy flex items-center gap-1 mt-0.5">
                          <FaCheckCircle className="text-brand-green" /> NMC Recognized
                        </span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-accent text-brand-textMuted uppercase tracking-wider font-semibold">Medium of Instruction</span>
                        <span className="text-xs font-semibold text-brand-navy mt-0.5 block">
                          📚 {country.medium}
                        </span>
                      </div>
                    </div>

                    {/* Search Bar */}
                    <div className="p-6 border-b border-gray-100 bg-white sticky top-0 z-10">
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-textMuted">
                          <FaSearch />
                        </span>
                        <input
                          type="text"
                          placeholder="Search universities..."
                          className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl bg-brand-lightBg text-sm focus:border-brand-blue focus:ring-brand-blue"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Universities List */}
                    <div className="flex-1 px-6 py-4 space-y-4">
                      <h3 className="text-xs font-accent uppercase tracking-widest text-brand-textMuted font-bold flex items-center gap-1.5">
                        <FaGraduationCap className="text-sm" /> Approved Medical Colleges ({filteredList.length})
                      </h3>

                      {filteredList.length > 0 ? (
                        <div className="space-y-3 mt-3">
                          {filteredList.map((univ, index) => {
                            const isObject = typeof univ === 'object';
                            const name = isObject ? univ.name : univ;
                            const type = isObject ? univ.type : null;

                            return (
                              <div
                                key={index}
                                className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-brand-blue/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-3 relative overflow-hidden"
                              >
                                <div className="w-8 h-8 rounded-full bg-brand-blue/5 text-brand-blue flex items-center justify-center font-display font-bold text-xs shrink-0 mt-0.5">
                                  {index + 1}
                                </div>
                                <div className="space-y-1">
                                  <h4 className="font-sans font-semibold text-brand-navy text-sm leading-snug">
                                    {name}
                                  </h4>
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-[10px] text-brand-textMuted">WHO Approved</span>
                                    {type && (
                                      <span className={`text-[9px] font-accent uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full ${
                                        type === 'Budget Friendly' 
                                          ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' 
                                          : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                                      }`}>
                                        {type}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="text-center py-12 text-brand-textMuted">
                          <FaTimesCircle className="text-4xl mx-auto text-gray-300 mb-2" />
                          <p className="text-sm">No universities match your search.</p>
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="p-6 border-t border-gray-100 bg-brand-lightBg space-y-3">
                      <button
                        onClick={handleApplyClick}
                        className="btn-glow w-full flex items-center justify-center gap-2 bg-gradient-brand text-white py-3.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <FaPaperPlane className="text-xs" />
                        Apply For Admission
                      </button>
                      <button
                        onClick={() => {
                          onClose();
                          onOpenBooking();
                        }}
                        className="w-full text-center text-xs font-accent text-brand-textMuted hover:text-brand-blue uppercase tracking-widest font-bold pt-1 transition-colors"
                      >
                        Ask a Question
                      </button>
                    </div>

                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
