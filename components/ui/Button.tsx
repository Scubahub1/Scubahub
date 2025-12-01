
import React from 'react';
import { Link } from '../../lib/next-shim';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href, 
  className = '',
  onClick,
  type = 'button'
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg text-sm md:text-base cursor-pointer";
  
  const variants = {
    primary: "bg-ocean-500 hover:bg-ocean-400 text-white shadow-ocean-500/30 hover:shadow-ocean-400/50 hover:-translate-y-1",
    secondary: "bg-teal-600 hover:bg-teal-500 text-white shadow-teal-600/30 hover:shadow-teal-500/50 hover:-translate-y-1",
    outline: "border-2 border-ocean-300 text-ocean-100 hover:bg-ocean-500/10 hover:border-ocean-200"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
