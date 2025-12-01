import React from "react";
import { Image, Link } from "../../lib/next-shim";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";
import { courses } from "../../data/mockData";

export const metadata = {
  title: "Scuba Certification Courses | Scuba Hub Adventures",
  description:
    "Become a certified PADI diver at Netrani Island. Open Water, Advanced, and Rescue courses available.",
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="pt-32 pb-20 container mx-auto px-4 relative z-10">
        <SectionTitle
          title="PADI Certification Courses"
          subtitle="Transform your life. Become a certified scuba diver with our expert instructors."
        />

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mt-16">
          {courses.map((course, idx) => (
            <div
              key={course.slug}
              className="group flex flex-col bg-slate-900/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02]"
              style={{
                animation: `fadeInUp 0.6s ease-out ${idx * 0.2}s both`,
              }}
            >
              {/* Image Section */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                {/* Level Badge */}
                <div className="absolute top-4 left-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-md opacity-70"></div>
                    <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                      {course.level}
                    </div>
                  </div>
                </div>

                {/* Certification Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-cyan-400/30 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {course.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-slate-400">
                      <svg
                        className="w-5 h-5 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{course.duration}</span>
                    </div>

                    <div className="px-4 py-1.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full">
                      <span className="text-cyan-400 font-bold text-lg">
                        {course.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-6"></div>

                {/* Description */}
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Curriculum */}
                <div className="mb-8 flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <h4 className="text-white font-semibold">
                      Curriculum Highlights
                    </h4>
                  </div>

                  <ul className="space-y-3">
                    {course.curriculum.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-300 text-sm group/item"
                      >
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs mt-0.5 group-hover/item:bg-teal-500/30 transition-colors">
                          ✓
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button href="/book" variant="primary" className="w-full">
                  Enquire & Book Course
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/50 to-slate-900/80 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>

            {/* Content */}
            <div className="relative p-10 text-center border border-cyan-500/30 rounded-3xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-6">
                <svg
                  className="w-8 h-8 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Not sure which course is right for you?
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Our certified PADI instructors can help assess your skills and
                goals. The Open Water Diver course is the standard entry-level
                certification for beginners.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="glow" href="/contact">
                  Contact an Instructor
                </Button>
                <Button variant="outline" href="/about">
                  Learn About Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* PADI Badge Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-full">
            <svg
              className="w-6 h-6 text-cyan-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.86-.94-6.5-5.03-6.5-9V8.34L12 5.18l6.5 3.16V11c0 3.97-2.64 8.06-6.5 9z" />
            </svg>
            <span className="text-slate-300 text-sm font-medium">
              Certified PADI Training Center
            </span>
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
