import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'center',
  light = false 
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-5xl font-bold font-display tracking-tight mb-4 ${light ? 'text-white' : 'text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-sky-300 dark:to-teal-300'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-ocean-500 rounded-full mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionTitle;