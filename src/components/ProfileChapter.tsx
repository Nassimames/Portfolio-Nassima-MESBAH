"use client";

import { motion } from "framer-motion";
import { Avatar } from "@/components/Avatar";
import { education, profile } from "@/data/profile";

export function ProfileChapter() {
  return (
    <section id="profil" className="border-t border-line px-6 py-24 lg:pl-64 lg:pr-16">
      <div className="max-w-5xl">
        <p className="chapter-number">01</p>
        <h2 className="font-display text-4xl md:text-5xl">Profil</h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg leading-relaxed text-ink-soft"
          >
            {profile.bio.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <div className="flex flex-col items-center border border-line bg-white p-6 text-center lg:items-start lg:text-left">
              <Avatar size="lg" src={profile.avatarPath} alt={profile.name} />
              <p className="mt-4 font-display text-xl">{profile.name}</p>
              <p className="mt-1 text-sm text-ink-soft">{profile.role}</p>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                Langues
              </h3>
              <ul className="mt-4 space-y-2">
                {profile.languages.map((l) => (
                  <li key={l.lang} className="flex justify-between border-b border-line py-2 text-sm">
                    <span className="font-medium">{l.lang}</span>
                    <span className="text-ink-muted">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                Centres d&apos;intérêt
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {profile.interests.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <h3 className="font-mono text-xs uppercase tracking-widest text-ink-muted">
            Formation
          </h3>
          <div className="mt-6 space-y-0">
            {education.map((edu, i) => (
              <div
                key={edu.degree}
                className={`grid gap-2 border-t border-line py-6 md:grid-cols-[140px_1fr] ${
                  i === education.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="font-mono text-sm text-ink-muted">{edu.period}</span>
                <div>
                  <p className="font-display text-xl">{edu.degree}</p>
                  <p className="mt-1 text-sm text-ink-soft">
                    {edu.school} · {edu.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
