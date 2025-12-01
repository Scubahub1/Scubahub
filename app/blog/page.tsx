import React from "react";
import { Image, Link } from "../../lib/next-shim";
import SectionTitle from "../../components/ui/SectionTitle";
import { blogPosts } from "../../data/mockData";

export const metadata = {
  title: "Dive Blog | Scuba Hub Adventures",
  description:
    "Tips, tricks, and stories from our instructors at Netrani Island.",
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-4">
      <SectionTitle title="The Dive Log" subtitle="Stories from the deep." />

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {blogPosts.map((post) => (
          <div
            key={post.slug}
            className="group flex flex-col glass-panel rounded-3xl overflow-hidden border border-white/5 hover:border-ocean-500/30 transition-all"
          >
            <div className="relative h-64 w-full">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-slate-950/80 text-ocean-400 text-xs font-bold px-3 py-1 rounded-full uppercase">
                {post.category}
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <div className="text-slate-500 text-sm mb-3">{post.date}</div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-ocean-300 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-slate-400 mb-6 line-clamp-3">{post.excerpt}</p>
              <div className="mt-auto">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-white font-semibold hover:text-ocean-400 transition-colors inline-flex items-center gap-2"
                >
                  Read Article <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
