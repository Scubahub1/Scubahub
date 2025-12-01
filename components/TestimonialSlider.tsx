"use client";

import React, { useState } from "react";
import { Image } from "../lib/next-shim";
import { Testimonial } from "../types";

const TestimonialSlider = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  const [active, setActive] = useState(0);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-sm min-h-[300px] flex flex-col justify-center text-center">
        {/* Quote Icon */}
        <div className="absolute top-6 left-8 text-6xl text-ocean-500/20 font-serif">
          "
        </div>

        <div className="transition-opacity duration-500 ease-in-out">
          <p className="text-xl md:text-2xl text-slate-200 italic mb-8 relative z-10">
            {testimonials[active].quote}
          </p>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-ocean-400">
              <Image
                src={testimonials[active].avatar}
                alt={testimonials[active].name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">
                {testimonials[active].name}
              </h4>
              <span className="text-ocean-400 text-sm">
                {testimonials[active].role}
              </span>
            </div>
            <div className="flex gap-1 text-yellow-400 text-sm">
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                active === idx
                  ? "bg-ocean-400 w-8"
                  : "bg-slate-700 hover:bg-slate-600"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
