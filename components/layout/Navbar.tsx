"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30 group-hover:shadow-cyan-400/50 transition-all duration-300 group-hover:scale-110">
            A
          </div>
          <span
            className={`text-xl md:text-2xl font-bold font-display tracking-wide ${textColorClass} transition-colors`}
          >
            Scuba
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Hub
            </span>
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
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse"></span>
                )}

                <Link
                  href={link.href}
                  className={`
                    relative text-sm font-medium tracking-wide transition-all duration-300 pt-1
                    ${active ? "text-cyan-400" : textColorClass}
                    hover:text-cyan-300
                  `}
                >
                  {link.name}
                </Link>

                {/* Hover Indicator */}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent group-hover:w-full transition-all duration-300 rounded-full"></span>
              </div>
            );
          })}

          <div className="h-6 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent mx-4"></div>

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
        className={`md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-slate-900 to-slate-950 border-t border-cyan-500/20 overflow-hidden transition-all duration-300 shadow-xl shadow-cyan-500/10 ${
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
                className={`relative text-lg font-medium transition-colors ${
                  active ? "text-cyan-400" : "text-slate-200"
                } hover:text-cyan-300`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.6)]"></span>
                )}
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
