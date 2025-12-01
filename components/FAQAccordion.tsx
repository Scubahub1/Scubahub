'use client';

import React, { useState } from 'react';
import { FAQ } from '../types';

const FAQAccordion = ({ faqs }: { faqs: FAQ[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
            openIndex === index 
              ? 'bg-slate-900/80 border-ocean-500/50 shadow-lg' 
              : 'bg-transparent border-slate-800 hover:bg-slate-900/40'
          }`}
        >
          <button 
            className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
            onClick={() => toggle(index)}
          >
            <span className={`font-semibold text-lg ${openIndex === index ? 'text-white' : 'text-slate-300'}`}>
              {faq.question}
            </span>
            <span className={`transform transition-transform duration-300 text-ocean-400 text-2xl ${openIndex === index ? 'rotate-180' : ''}`}>
              ⌄
            </span>
          </button>
          
          <div 
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
