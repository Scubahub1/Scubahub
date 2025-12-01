"use client";

import React, { useState, useEffect } from "react";
import { Link, usePathname } from "../../lib/next-shim";
import Button from "../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },

    { name: "Courses", href: "/courses" },

    { name: "Packages", href: "/packages" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
  ];

  // Helper to determine if a link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "/index.html";
    }
    return pathname.startsWith(href);
  };

  const textColorClass = "text-slate-100";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-header py-3 shadow-md" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ocean-400 to-teal-500 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:animate-pulse-slow">
            A
          </div>
          <span
            className={`text-xl md:text-2xl font-bold font-display tracking-wide ${textColorClass} transition-colors`}
          >
            Scuba<span className="text-ocean-400">Hub</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <div key={link.name} className="relative px-3 py-2 group">
                {/* Active Indicator (Dot) ABOVE the text */}
                {active && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-ocean-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)] animate-pulse"></span>
                )}

                <Link
                  href={link.href}
                  className={`
                    relative text-sm font-medium tracking-wide transition-colors duration-300 pt-1
                    ${active ? "text-ocean-400" : textColorClass}
                    hover:text-ocean-300
                  `}
                >
                  {link.name}
                </Link>

                {/* Hover Indicator (subtle glow from bottom) */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-ocean-400/50 group-hover:w-1/2 transition-all duration-300"></span>
              </div>
            );
          })}

          <div className="h-6 w-px bg-white/20 mx-4"></div>

          <Button href="/book" variant="primary" className="py-2 px-5 text-sm">
            Book Now
          </Button>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${textColorClass} focus:outline-none p-2`}
            aria-label="Toggle Menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-current transition-transform ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-current transition-opacity ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-current transition-transform ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-white/10 overflow-hidden transition-all duration-300 shadow-xl ${
          isOpen ? "max-h-[500px] py-6" : "max-h-0 py-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-medium ${
                  active ? "text-ocean-400" : "text-slate-200"
                } hover:text-ocean-500`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Button
            href="/book"
            variant="primary"
            onClick={() => setIsOpen(false)}
          >
            Book Netrani Dive
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
