import React from "react";

const news = [
  {
    id: 1,
    title: "A New Era Begins in Heaven Earth",
    date: "July 9, 2026",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
];
import { Link } from "react-router-dom";
const News = () => {
  return (
    <section className="min-h-screen bg-zinc-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            News & Updates
          </p>

          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Latest News
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Stay up to date with the latest adventures, updates, events, and
            announcements from Heaven Earth.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {news.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-zinc-700/60 bg-zinc-800/70 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />

                {/* Date */}
                
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold leading-tight text-white transition-colors group-hover:text-amber-400">
                  {item.title}
                </h2>

                <div className="mt-6 flex items-center justify-between">
                  <Link
                    to={`/news/news-details`}
                    type="button"
                    className="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-400"
                  >
                    Read Now
                  </Link>
                  <div className="rounded-full bg-zinc-900/80 px-4 py-2 text-xs font-medium text-zinc-200 backdrop-blur-md">
                  {item.date}
                </div>

                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;