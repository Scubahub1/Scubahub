import React from "react";

const teamMembers = []; // Mock data placeholder

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Hero Section Title */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="text-9xl">🌊</div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 relative">
            Our Story
          </h1>
          <p className="text-xl text-cyan-400 relative">
            Born from the ocean, dedicated to exploration.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Murudeshwar Temple Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32 group">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl mb-6 shadow-lg shadow-cyan-500/50">
                🛕
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Murudeshwar Temple
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Our journey begins at the breathtaking{" "}
                  <span className="text-cyan-400 font-semibold">
                    Murudeshwar Temple
                  </span>
                  , home to the world's second tallest statue of Lord Shiva.
                  Overlooking the Arabian Sea, the temple stands as a symbol of
                  power and tranquility, attracting travelers and spiritual
                  seekers from across the globe.
                </p>
                <p>
                  With its magnificent cliffside view and deep cultural
                  heritage, Murudeshwar has become the gateway to ocean
                  exploration — and the heart of our diving story.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300 transform group-hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
            <img
              src="https://picsum.photos/id/1011/800/800"
              alt="Murudeshwar Temple and Coastline"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <div className="bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-lg border border-cyan-500/30">
                <p className="text-cyan-400 text-sm font-semibold">
                  📍 Gateway to Adventure
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Netrani Island Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32 group">
          <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-300 transform group-hover:scale-105 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
            <img
              src="https://picsum.photos/id/112/800/800"
              alt="Netrani Island Diving Waters"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <div className="bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-lg border border-blue-500/30">
                <p className="text-blue-400 text-sm font-semibold">
                  💙 Heart of Arabian Sea
                </p>
              </div>
            </div>
          </div>
          <div className="relative md:order-2">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl mb-6 shadow-lg shadow-blue-500/50">
                🏝️
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Netrani Island
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Just 19 km into the sea lies{" "}
                  <span className="text-blue-400 font-semibold">
                    Netrani Island
                  </span>{" "}
                  — fondly known as the Heart of the Arabian Sea. Its
                  crystal-clear visibility, calm waters, dramatic coral walls
                  and swirling schools of fish make it one of India's most
                  stunning dive sites.
                </p>
                <p>
                  The island was once a secret known only to local fishermen.
                  Today, it is celebrated as India's top diving destination and
                  a bucket-list spot for underwater adventurers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scuba Hub Diving Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32 group">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center text-2xl mb-6 shadow-lg shadow-emerald-500/50">
                🤿
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Scuba Hub Adventures
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  At{" "}
                  <span className="text-emerald-400 font-semibold">
                    Scuba Hub Adventures
                  </span>
                  , we transformed Netrani Island into a world-class diving
                  destination. Every dive is led by licensed instructors,
                  top-tier equipment and PADI standards — ensuring both{" "}
                  <span className="text-white font-semibold">
                    safety and fun
                  </span>
                  .
                </p>
                <p>
                  With more than{" "}
                  <span className="text-emerald-400 font-bold text-xl">
                    2,000 certified divers
                  </span>{" "}
                  and thousands of happy underwater memories, our mission
                  remains unchanged:{" "}
                  <em className="text-cyan-400">
                    bring people closer to the ocean, responsibly.
                  </em>
                </p>
                <p>
                  From first-timers to advanced explorers — this island is your
                  playground. Suit up, breathe deep, and let the sea do the
                  magic.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">
                    2000+
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Certified Divers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">PADI</div>
                  <div className="text-xs text-slate-400 mt-1">Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">19km</div>
                  <div className="text-xs text-slate-400 mt-1">From Shore</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 group-hover:border-emerald-500/50 transition-all duration-300 transform group-hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
            <img
              src="https://picsum.photos/id/980/800/800"
              alt="Scuba Hub Divers Underwater"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <div className="bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-lg border border-emerald-500/30">
                <p className="text-emerald-400 text-sm font-semibold">
                  🌊 Dive Into Adventure
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Join Team Section Title */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="text-9xl">👋</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
            Suit Up & Join the Squad
          </h1>
          <p className="text-lg text-cyan-400 relative">
            Help adventure seekers discover the deep blue.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="flex justify-center items-center w-full py-0">
          {/* Hiring card */}
          <div className="glass-panel rounded-2xl p-8 max-w-sm w-full flex flex-col items-center text-center border border-slate-700 shadow-xl">
            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-2xl mb-4">
              👋
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Join Our Team</h3>
            <p className="text-slate-400 text-sm mb-5">
              We're always looking for passionate Dive Masters and ocean lovers.
            </p>
            <a
              href="mailto:jobs@scubahub.com"
              className="px-4 py-2 rounded-lg bg-ocean-500 hover:bg-ocean-400 transition text-white text-sm font-semibold"
            >
              Send CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
