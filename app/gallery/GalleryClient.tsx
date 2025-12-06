"use client";

import React, { useState } from "react";

const GalleryClient: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<
    null | (typeof images)[number]
  >(null);
  const [filter, setFilter] = useState<
    "all" | "marine" | "landscape" | "training"
  >("all");

  const images = [
    { id: 10, caption: "Clear waters of Netrani", category: "landscape" },
    { id: 16, caption: "Sunset at Murudeshwar", category: "landscape" },
    { id: 28, caption: "Discover Scuba Training", category: "training" },
    { id: 54, caption: "Coral Reef Formations", category: "marine" },
    { id: 79, caption: "Advanced Divers Descent", category: "training" },
    { id: 40, caption: "Curious Batfish", category: "marine" },
    { id: 15, caption: "Schools of Tropical Fish", category: "marine" },
    { id: 29, caption: "Night Dive Preparation", category: "training" },
    { id: 42, caption: "Sea Turtle Encounter", category: "marine" },
    { id: 48, caption: "Underwater Cave Exploration", category: "landscape" },
    { id: 82, caption: "Group Dive Session", category: "training" },
    { id: 91, caption: "Vibrant Reef Life", category: "marine" },
    { id: 103, caption: "Blue Waters Deep Dive", category: "landscape" },
    { id: 119, caption: "Equipment Check", category: "training" },
    { id: 133, caption: "Clownfish in Anemone", category: "marine" },
    { id: 146, caption: "Boat Journey to Netrani", category: "landscape" },
    { id: 157, caption: "Safety Briefing", category: "training" },
    { id: 165, caption: "Barracuda Patrol", category: "marine" },
    { id: 177, caption: "Golden Hour Dive", category: "landscape" },
    { id: 180, caption: "Wreck Exploration", category: "landscape" },
    { id: 188, caption: "Certification Celebration", category: "training" },
    { id: 201, caption: "Octopus Camouflage", category: "marine" },
    { id: 212, caption: "Crystal Clear Visibility", category: "landscape" },
    { id: 225, caption: "Buddy System Practice", category: "training" },
    { id: 237, caption: "Moray Eel Hideout", category: "marine" },
  ];

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  const categories = [
    { id: "all", label: "All Photos", icon: "🌊" },
    { id: "marine", label: "Marine Life", icon: "🐠" },
    { id: "landscape", label: "Underwater Scenes", icon: "🏝️" },
    { id: "training", label: "Training & Dives", icon: "🤿" },
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Underwater Gallery
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Moments captured beneath the surface of Netrani Island
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === cat.id
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50 scale-105"
                    : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700"
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:z-10"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
              }}
            >
              <img
                src={`https://picsum.photos/id/${img.id}/800/800`}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></div>

              {/* Caption */}
              <div className="absolute inset-0 flex items-end p-5">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-lg mb-1">
                    {img.caption}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-blue-500/30 backdrop-blur-sm rounded-full text-blue-200 border border-blue-400/30">
                      {categories.find((c) => c.id === img.category)?.icon}{" "}
                      {img.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-3xl"></div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-slate-800/50 to-blue-900/30 border border-slate-700/50 backdrop-blur-sm">
            <p className="text-slate-300 mb-4 text-lg">
              Follow us on Instagram for daily underwater adventures
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @ScubaHub
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fadeIn"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-cyan-400 transition-colors"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`https://picsum.photos/id/${selectedImage.id}/1200/1200`}
              alt={selectedImage.caption}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedImage.caption}
              </h3>
              <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 border border-blue-400/30">
                {categories.find((c) => c.id === selectedImage.category)?.label}
              </span>
            </div>
          </div>
        </div>
      )}

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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default GalleryClient;
