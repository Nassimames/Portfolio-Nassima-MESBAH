"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Cloud, Sparkles, Trophy } from "lucide-react";
import { useContent } from "@/context/LocaleContext";

const ASPNET_PATH_URL =
  "https://learn.microsoft.com/fr-fr/training/paths/aspnet-core-fundamentals/";
const BLAZOR_PATH_URL =
  "https://learn.microsoft.com/fr-fr/training/paths/build-web-apps-with-blazor/";
const DOCKER_LABS_URL =
  "https://academy.kube-ops.com/courses/887165bf-3cf4-43ad-8960-f785f40bad0a/lessons/8dc8f025-bcaa-41ed-9a46-cd6fc0b6d92c";
const DEVOPS_TOPICS = ["Linux", "Git", "Docker", "CI/CD", "Azure", "Azure DevOps"];

export function NowChapter() {
  const { ui } = useContent();

  return (
    <section id="now" className="border-t border-line bg-paper-dark/40 content-offset py-24">
      <div className="max-w-5xl">
        <p className="chapter-number">07</p>
        <h2 className="font-display text-4xl md:text-5xl">{ui.sectionNow}</h2>

        <div className="mt-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-ink-muted">
              {ui.nowEyebrow}
            </p>
            <p className="text-lg leading-relaxed text-ink-soft">{ui.nowIntro}</p>

            <div className="flex flex-wrap gap-2">
              {[".NET", "ASP.NET Core", "C#", "Web", "Architecture"].map((t) => (
                <span key={t} className="tag text-[10px]">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.06 }}
              className="space-y-4"
            >
              <div className="border border-line bg-white p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper">
                    <Trophy size={18} className="text-ink" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-xl leading-snug">{ui.nowPathTitle}</p>
                    <p className="mt-2 text-sm text-ink-soft">{ui.nowCompleted}</p>
                  </div>
                </div>

                <a
                  href={ASPNET_PATH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 border border-line bg-white px-4 py-2 text-sm transition hover:border-ink"
                >
                  <span className="inline-flex items-center gap-2">
                    <Sparkles size={16} />
                    {ui.nowCta}
                  </span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              <div className="border border-line bg-white p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper">
                    <Sparkles size={18} className="text-ink" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-xl leading-snug">{ui.nowBlazorTitle}</p>
                    <p className="mt-2 text-sm text-ink-soft">{ui.nowBlazorStatus}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{ui.nowBlazorFocus}</p>

                <a
                  href={BLAZOR_PATH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 border border-line bg-white px-4 py-2 text-sm transition hover:border-ink"
                >
                  <span className="inline-flex items-center gap-2">
                    <Sparkles size={16} />
                    {ui.nowBlazorCta}
                  </span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>

            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.12 }}
              className="border border-line bg-white p-6"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper">
                  <Cloud size={18} className="text-ink" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-xl leading-snug">{ui.nowDevopsTitle}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {ui.nowDevopsDescription}
                  </p>
                </div>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2" aria-label={ui.nowDevopsTitle}>
                {DEVOPS_TOPICS.map((topic) => (
                  <li key={topic}>
                    <span className="tag text-[10px]">{topic}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-line pt-5">
                <div className="flex items-start gap-3">
                  <BookOpen size={18} className="mt-1 shrink-0 text-ink-muted" />
                  <div className="min-w-0">
                    <h4 className="font-display text-lg">{ui.nowDockerLabsTitle}</h4>
                    <p className="mt-1 font-mono text-xs uppercase tracking-widest text-ink-muted">
                      {ui.nowDockerLabsPlatform} · {ui.nowDockerLabsAvailability}
                    </p>
                    <p className="mt-3 text-sm text-ink-soft">{ui.nowDockerLabsFormat}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {ui.nowDockerLabsFocus}
                    </p>
                  </div>
                </div>

                <a
                  href={DOCKER_LABS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 border border-line bg-white px-4 py-2 text-sm transition hover:border-ink"
                >
                  {ui.nowDockerLabsCta}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
