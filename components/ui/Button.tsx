import React from "react";
import { Link } from "../../lib/next-shim";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "gradient" | "glow";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
  type = "button",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg text-sm md:text-base cursor-pointer relative overflow-hidden group";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-blue-500/40 hover:shadow-cyan-400/60 hover:-translate-y-1 hover:scale-105",

    secondary:
      "bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-500 hover:to-emerald-400 text-white shadow-teal-600/40 hover:shadow-emerald-500/60 hover:-translate-y-1 hover:scale-105",

    outline:
      "border-2 border-cyan-400/60 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-300 hover:text-white backdrop-blur-sm hover:shadow-cyan-400/30",

    gradient:
      "bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white shadow-cyan-500/50 hover:shadow-teal-400/60 hover:-translate-y-1 animate-gradient",

    glow: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/80 hover:shadow-2xl hover:-translate-y-1 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
