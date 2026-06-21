"use client";

import { motion } from "framer-motion";
import { LogoImage } from "@/components/LogoImage";
import { experiences } from "@/data/profile";

export function ExperienceChapter() {
  return (
    <section id="parcours" className="border-t border-line bg-paper-dark/40 content-offset py-24">
      <div className="max-w-5xl">
        <p className="chapter-number">02</p>
        <h2 className="font-display text-4xl md:text-5xl">Parcours professionnel</h2>
        <p className="mt-4 max-w-2xl text-ink-soft">
          Quatre expériences, quatre univers — e-commerce, santé, IoT agricole et data science.
        </p>

        <div className="relative mt-16">
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-line md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.article
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05 }}
              className={`relative mb-12 grid gap-8 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className={`md:pr-8 ${i % 2 === 0 ? "md:text-right" : "md:pl-8"}`}>
                <div
                  className="absolute left-3 h-3 w-3 rounded-full border-2 border-paper md:left-1/2 md:-translate-x-1/2"
                  style={{ background: exp.accent, top: "1.5rem" }}
                />
                <p className="font-mono text-sm text-ink-muted">{exp.period}</p>
                <h3 className="mt-2 font-display text-2xl">{exp.role}</h3>
                <p className="mt-1 font-medium" style={{ color: exp.accent }}>
                  {exp.company}
                </p>
                <p className="text-sm text-ink-muted">{exp.location}</p>
              </div>

              <div className="ml-10 border border-line bg-white p-6 md:ml-0">
                {exp.logo && (
                  <LogoImage src={exp.logo} alt={exp.company} className="mb-4 rounded" />
                )}
                <ul className="space-y-2 text-sm leading-relaxed text-ink-soft">
                  {exp.highlights.map((h) => (
                    <li key={h.slice(0, 40)} className="flex gap-2">
                      <span style={{ color: exp.accent }}>—</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.stack.map((s) => (
                    <span key={s} className="tag text-[10px]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
