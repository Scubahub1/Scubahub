"use client";

import React from "react";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";
import { packages } from "../../data/mockData";

export default function PackagesClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="pt-32 pb-20 container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Netrani Dive Packages"
          subtitle="Hassle-free packages including accommodation, logistics, and diving."
        />

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 flex flex-col relative transform transition-all duration-500 hover:scale-105 ${
                idx === 1
                  ? "bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 border-2 border-cyan-400/50 shadow-2xl shadow-cyan-500/30 md:-mt-4 md:mb-4"
                  : "bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/30"
              }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both`,
              }}
            >
              {/* Popular Badge */}
              {idx === 1 && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-70 animate-pulse"></div>
                    <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-wider shadow-lg">
                      ⭐ Most Popular
                    </div>
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="mb-6 mt-2">
                <h3
                  className={`text-3xl font-bold mb-2 ${
                    idx === 1
                      ? "bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                      : "text-white"
                  }`}
                >
                  {pkg.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {pkg.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8 relative">
                <div className={`inline-block ${idx === 1 ? "relative" : ""}`}>
                  {idx === 1 && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                  )}
                  <span
                    className={`text-5xl font-bold relative ${
                      idx === 1
                        ? "bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                        : "text-white"
                    }`}
                  >
                    {pkg.price}
                  </span>
                </div>
                <span className="text-slate-500 text-sm block mt-2">
                  {pkg.duration}
                </span>
              </div>

              {/* Divider */}
              <div
                className={`h-px mb-8 ${
                  idx === 1
                    ? "bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
                    : "bg-gradient-to-r from-transparent via-slate-700 to-transparent"
                }`}
              ></div>

              {/* Inclusions */}
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.inclusions.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-300 text-sm group"
                  >
                    <span
                      className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs transition-all ${
                        idx === 1
                          ? "bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30"
                          : "bg-teal-500/20 text-teal-400 group-hover:bg-teal-500/30"
                      }`}
                    >
                      ✓
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="mt-auto pt-6 border-t border-slate-700/50">
                <div className="text-center text-sm text-slate-400 mb-4 flex items-center justify-center gap-2">
                  <span className="text-slate-500">Best for:</span>
                  <span
                    className={`font-semibold ${
                      idx === 1 ? "text-cyan-400" : "text-slate-300"
                    }`}
                  >
                    {pkg.recommendedFor}
                  </span>
                </div>
                <Button
                  href="/book"
                  variant={idx === 1 ? "glow" : "outline"}
                  className="w-full"
                >
                  {idx === 1 ? "Choose Popular Plan" : "Select Package"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-slate-900/50 via-blue-900/30 to-slate-900/50 backdrop-blur-sm rounded-3xl p-10 border border-cyan-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Not sure which package to choose?
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Our dive experts are here to help you find the perfect package
              based on your experience level and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="/contact">
                Talk to an Expert
              </Button>
              <Button variant="outline" href="/courses">
                View Courses
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
