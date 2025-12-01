import React from "react";
import { Image, Link } from "../lib/next-shim"; // Shim imports
import Button from "../components/ui/Button";
import SectionTitle from "../components/ui/SectionTitle";
import { experiences, testimonials } from "../data/mockData";
import TestimonialSlider from "../components/TestimonialSlider";
import DiveProcess from "../components/DiveProcess";

export default function Home() {
  return (
    <>
      {/* HERO SECTION - Always Dark/Immersive */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-sky-900 to-teal-850 animate-ripple bg-[length:200%_200%]"></div>
        <div className="absolute inset-0 z-0 opacity-30 bg-underwater-mesh"></div>

        {/* High-res background overlay for premium feel */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
          <Image
            src="https://picsum.photos/id/16/1600/900"
            alt="Underwater Texture"
            fill
            className="object-cover"
          />
        </div>

        {/* Floating Bubbles Decoration */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-white/10 blur-[1px] animate-float"></div>
        <div className="absolute top-1/2 left-3/4 w-8 h-8 rounded-full bg-white/10 blur-[2px] animate-float-delayed"></div>

        <div className="container relative z-10 px-4 text-center flex flex-col items-center">
          {/* Premium Location Badge - CLICKABLE */}
          <div className="mb-8 animate-float">
            <a
              href="https://www.google.com/maps/place/Netrani+Island"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel px-6 py-2 rounded-full flex items-center gap-3 border border-ocean-400/30 shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:bg-white/10 transition-colors group cursor-pointer"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ocean-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-ocean-500"></span>
              </span>
              <span className="text-white font-semibold tracking-wide text-sm uppercase group-hover:text-ocean-300 transition-colors">
                Live from Netrani Island
                <span className="ml-2 text-xs opacity-70">↗</span>
              </span>
            </a>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold font-display tracking-tight text-white mb-8 drop-shadow-2xl leading-none">
            BREATHE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-400">
              DEEP
            </span>
            <br />
            DIVE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-ocean-300">
              BEYOND
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            India's premier scuba destination. Crystal clear waters, vibrant
            coral reefs, and certified PADI professionals waiting for you.
          </p>

          {/* Key Info Chips */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="glass-panel px-6 py-3 rounded-xl text-left min-w-[140px] border border-white/10 hover:border-ocean-400/50 transition-colors">
              <span className="block text-slate-400 text-xs uppercase tracking-wider mb-1">
                Visibility
              </span>
              <span className="block text-white font-bold text-lg">15-30m</span>
            </div>
            <div className="glass-panel px-6 py-3 rounded-xl text-left min-w-[140px] border border-white/10 hover:border-ocean-400/50 transition-colors">
              <span className="block text-slate-400 text-xs uppercase tracking-wider mb-1">
                Water Temp
              </span>
              <span className="block text-white font-bold text-lg">28°C</span>
            </div>
            <div className="glass-panel px-6 py-3 rounded-xl text-left min-w-[140px] border border-white/10 hover:border-ocean-400/50 transition-colors">
              <span className="block text-slate-400 text-xs uppercase tracking-wider mb-1">
                Depth
              </span>
              <span className="block text-white font-bold text-lg">6-30m</span>
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <Button
              href="/book"
              variant="primary"
              className="px-8 py-3 text-lg"
            >
              Book Dive
            </Button>
            <Button
              href="/packages"
              variant="outline"
              className="px-8 py-3 text-lg "
            >
              Packages
            </Button>
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-1000 transition-colors duration-300">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-teal-500/20 rounded-2xl transform rotate-3"></div>
            <div
              className="relative 
  h-[400px] w-full                     /* Desktop */
  max-md:h-[260px]                     /* Tablets */
  max-sm:h-[200px]                     /* Small mobiles */
  max-[380px]:h-[160px]                /* Extra small mobiles */
  rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://picsum.photos/id/40/800/800"
                alt="Diver at Netrani Island"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div>
            <SectionTitle
              align="left"
              title="Why Dive With Scuba Hub?"
              subtitle="We are the Netrani Island specialists."
            />
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Scuba Hub Adventures was born from a passion to showcase the
              hidden underwater gem of India: Netrani Island. Located off
              Murudeshwar, this heart-shaped island offers the clearest waters
              in mainland India.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "PADI Certified Instructors & Dive Masters",
                "Dedicated High-Speed Dive Boat",
                "Small Groups (Max 4:1 Ratio)",
                "Top-tier Scubapro Equipment",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-medium"
                >
                  <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 text-xs font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/about" variant="secondary">
              Know More
            </Button>
          </div>
        </div>
      </section>

      {/* DIVE PROCESS & GEAR (Component Handles its own dark/light bg) */}
      <DiveProcess />

      {/* EXPERIENCES */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 transition-colors duration-300">
        <div className="container relative z-10 px-4 mx-auto">
          <SectionTitle
            title="Popular Services"
            subtitle="Explore our most requested room stays, and cab services."
          />

          <div className="grid md:grid-cols-2 gap-5 justify-center items-center">
            {experiences.slice(0, 3).map((exp) => (
              <a key={exp.slug} href="tel:+91XXXXXXXXXX">
                <div className="group rounded-2xl overflow-hidden glass-panel border border-slate-200 dark:border-white/10 hover:border-ocean-400/30 transition-all duration-300 cursor-pointer">
                  <div className="relative h-48">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                      {exp.shortDescription}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
