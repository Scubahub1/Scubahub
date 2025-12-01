import React from "react";
import { Image, Link, notFound } from "../../../lib/next-shim";
import { blogPosts } from "../../../data/mockData";
import Button from "../../../components/ui/Button";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Scuba Hub Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/blog"
          className="text-ocean-400 hover:text-white mb-8 inline-block"
        >
          ← Back to Blog
        </Link>

        <header className="mb-12 text-center">
          <div className="inline-block px-4 py-1 rounded-full border border-ocean-500/30 text-ocean-300 text-xs font-bold uppercase mb-4">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="text-slate-400">{post.date}</div>
        </header>

        <div className="relative w-full aspect-[2/1] rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-invert prose-lg mx-auto text-slate-300">
          <p className="lead text-xl text-white mb-8">{post.excerpt}</p>
          <p>
            Scuba diving at Netrani Island is an experience unlike any other in
            India. The visibility often exceeds 20 meters, allowing divers to
            see the vibrant coral reef life in all its glory.
          </p>
          <h3>What to bring?</h3>
          <p>While we provide all the scuba gear, we recommend bringing:</p>
          <ul>
            <li>Swimwear and a towel</li>
            <li>Sunscreen (Reef safe preferred)</li>
            <li>Seasickness medication (if prone to motion sickness)</li>
            <li>A thirst for adventure!</li>
          </ul>
          <p>
            The boat ride from Murudeshwar takes about an hour, offering scenic
            views of the coastline and the towering Shiva statue.
          </p>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to dive in?
          </h3>
          <Button href="/book" variant="primary">
            Book Your Trip Now
          </Button>
        </div>
      </div>
    </article>
  );
}
