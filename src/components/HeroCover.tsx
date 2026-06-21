"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { chapters, profile } from "@/data/profile";

export function HeroCover() {
  return (
    <section
      id="cover"
      className="relative flex min-h-screen flex-col justify-end px-6 pb-16 pt-28 lg:pl-64 lg:pr-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-paper-dark opacity-60 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-line opacity-40 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl"
      >
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-ink-muted">
          Chapitres de Code · Portfolio éditorial
        </p>

        <h1 className="mt-6 font-display text-[clamp(2.8rem,8vw,6.5rem)] leading-[0.95] tracking-tight">
          {profile.name}
        </h1>

        <p className="mt-4 max-w-2xl font-display text-2xl italic text-ink-soft md:text-3xl">
          {profile.title}
        </p>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projets"
            className="inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm font-medium text-paper transition hover:opacity-85"
          >
            Explorer mes projets
            <ArrowDown size={16} />
          </a>
          <a
            href={profile.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-line bg-white px-6 py-3 text-sm transition hover:border-ink"
          >
            <Download size={16} />
            CV PDF
          </a>
        </div>
      </motion.div>

      <div className="relative mt-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {chapters.slice(1).map((ch, i) => (
          <motion.a
            key={ch.id}
            href={ch.href}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.08 }}
            className="group border border-line bg-white/70 p-4 transition hover:border-ink hover:bg-white"
          >
            <span className="font-mono text-xs text-ink-muted">{ch.number}</span>
            <p className="mt-2 font-display text-lg group-hover:underline">{ch.label}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
