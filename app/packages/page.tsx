import React from "react";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";
import { packages } from "../../data/mockData";

export const metadata = {
  title: "Dive Packages | Scuba Hub Adventures",
  description:
    "All-inclusive dive packages at Netrani Island including accommodation and gear.",
};

export default function PackagesPage() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <SectionTitle
        title="Netrani Dive Packages"
        subtitle="Hassle-free packages including accommodation, logistics, and diving."
      />

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packages.map((pkg, idx) => (
          <div
            key={pkg.id}
            className={`rounded-3xl p-8 border flex flex-col relative ${
              idx === 1
                ? "bg-slate-900 border-ocean-500 shadow-2xl shadow-ocean-900/50 scale-105 z-10"
                : "bg-slate-950/50 border-slate-800 glass-panel"
            }`}
          >
            {idx === 1 && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ocean-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {pkg.title}
              </h3>
              <p className="text-slate-400 text-sm">{pkg.subtitle}</p>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-bold text-white">{pkg.price}</span>
              <span className="text-slate-500 text-sm block mt-1">
                {pkg.duration}
              </span>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {pkg.inclusions.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-slate-300 text-sm"
                >
                  <span className="text-teal-400 mt-0.5">✔</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <div className="text-center text-xs text-slate-500 mb-4">
                Best for:{" "}
                <span className="text-slate-300">{pkg.recommendedFor}</span>
              </div>
              <Button
                href="/book"
                variant={idx === 1 ? "primary" : "outline"}
                className="w-full"
              >
                Select Package
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
