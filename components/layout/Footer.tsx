import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-1000 pt-16 pb-8  bg-gradient-to-b from-slate-950 via-slate-900 to-slate-1000">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold font-display text-white"
            >
              Scuba<span className="text-ocean-400">Hub</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium scuba diving operators specializing in Netrani Island
              adventures. Safety, fun, and marine conservation are our core
              values.
            </p>
            <div className="flex gap-4">
              {/* Social Icons (Simple SVGs) */}
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-ocean-600 hover:text-white transition-colors cursor-pointer">
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/packages"
                  className="text-slate-400 hover:text-ocean-400 transition-colors text-sm"
                >
                  Dive Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-slate-400 hover:text-ocean-400 transition-colors text-sm"
                >
                  Underwater Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-ocean-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="text-slate-400 hover:text-ocean-400 transition-colors text-sm"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-ocean-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-ocean-400">📍</span>
                <span>
                  Temple Road, Murudeshwar,
                  <br />
                  Karnataka, India 581350
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-ocean-400">📞</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-ocean-400">✉️</span>
                <span>dive@Scuba Hub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>
            © {new Date().getFullYear()} Scuba Hub — Murudeshwar • Designed &
            Developed by{" "}
            <a
              href="https://your-portfolio-link-here.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 hover:underline transition duration-200"
            >
              N.T. Hrutikkumar
            </a>{" "}
            • Dive Beyond
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
