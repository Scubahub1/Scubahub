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
    <div className="pt-32 pb-20 container mx-auto px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <SectionTitle
        title="PADI Certification Courses"
        subtitle="Transform your life. Become a certified scuba diver with our expert instructors."
      />

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {courses.map((course) => (
          <div
            key={course.slug}
            className="flex flex-col md:flex-row bg-slate-900/50 rounded-3xl overflow-hidden border border-white/5 shadow-xl hover:border-ocean-500/30 transition-all"
          >
            <div className="relative w-full md:w-2/5 min-h-[250px] md:min-h-full">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-ocean-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                {course.level}
              </div>
            </div>

            <div className="p-8 flex flex-col justify-between w-full md:w-3/5">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {course.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                  <span>⏱ {course.duration}</span>
                  <span className="text-ocean-400 font-bold text-lg">
                    {course.price}
                  </span>
                </div>
                <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                  {course.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold text-sm mb-3">
                    Curriculum Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {course.curriculum.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-slate-400 text-xs"
                      >
                        <span className="text-teal-400 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button href="/book" variant="outline" className="w-full">
                Enquire & Book
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 glass-panel rounded-2xl text-center max-w-3xl mx-auto border border-ocean-500/20">
        <h3 className="text-xl font-bold text-white mb-4">
          Not sure which course is right for you?
        </h3>
        <p className="text-slate-300 mb-6">
          Our instructors can help assess your skills and goals. The Open Water
          Diver course is the standard entry-level certification.
        </p>
        <Button href="/contact" variant="secondary">
          Contact an Instructor
        </Button>
      </div>
    </div>
  );
}
