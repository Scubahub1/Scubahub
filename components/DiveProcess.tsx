import React from "react";
import { Image } from "../lib/next-shim";
import SectionTitle from "./ui/SectionTitle";
import { diveProcess, equipment } from "../data/mockData";

const DiveProcess = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="The Scuba Hub Experience"
          subtitle="Top-tier equipment and a seamless process from shore to sea."
        />

        {/* Process Steps */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20">
          {diveProcess.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-ocean-900/50 border border-ocean-500/30 flex items-center justify-center text-4xl mb-6 shadow-lg shadow-ocean-500/10 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-[200px]">
                {step.description}
              </p>
              {index < diveProcess.length - 1 && (
                <div className="hidden md:block absolute top-24 w-1/4 border-t-2 border-dashed border-slate-700 -z-10 translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Equipment Showcase */}
        <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Premium Gear Included
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                We don't compromise on safety. We use only industry-leading
                scuba equipment that is serviced regularly. Whether you are
                renting or bringing your own, our dive center is fully equipped.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-ocean-400"></span>
                  Sanitized masks & snorkels
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-ocean-400"></span>
                  Size-inclusive wetsuits (XS to XXXL)
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-ocean-400"></span>
                  Suunto Dive Computers for all courses
                </li>

                {/* New points added */}
                <li className="flex items-center gap-3 text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-ocean-400"></span>
                  Professional PADI-certified instructors
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-ocean-400"></span>
                  Safety briefing & underwater training session
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-ocean-400"></span>
                  Underwater photos & videos included
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-ocean-400"></span>
                  Life jackets & fins provided
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-ocean-400"></span>
                  Complimentary refreshments on the boat
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-ocean-400"></span>
                  Emergency oxygen & first-aid kit on board
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {equipment.map((item, idx) => (
                <div
                  key={idx}
                  className="relative group rounded-xl overflow-hidden aspect-square border border-white/10"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent flex flex-col justify-end p-4">
                    <span className="text-white font-bold text-sm">
                      {item.name}
                    </span>
                    <span className="text-ocean-400 text-xs">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiveProcess;
