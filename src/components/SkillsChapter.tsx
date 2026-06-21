"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/profile";

export function SkillsChapter() {
  return (
    <section id="stack" className="border-t border-line content-offset py-24">
      <div className="max-w-5xl">
        <p className="chapter-number">05</p>
        <h2 className="font-display text-4xl md:text-5xl">Stack & compétences</h2>
        <p className="mt-4 text-ink-soft">
          Extraits de mon CV — stacks modernes, mobile, DevOps et méthodologie Agile.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="border border-line bg-white p-6"
            >
              <h3 className="font-display text-xl">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
