"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Trophy } from "lucide-react";
import { useContent } from "@/context/LocaleContext";

const ASPNET_PATH_URL =
  "https://learn.microsoft.com/fr-fr/training/paths/aspnet-core-fundamentals/";
const BLAZOR_PATH_URL =
  "https://learn.microsoft.com/fr-fr/training/paths/build-web-apps-with-blazor/";

export function NowChapter() {
  const { ui } = useContent();

  return (
    <section id="now" className="border-t border-line bg-paper-dark/40 content-offset py-24">
      <div className="max-w-5xl">
        <p className="chapter-number">06</p>
        <h2 className="font-display text-4xl md:text-5xl">{ui.sectionNow}</h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-ink-muted">
              {ui.nowEyebrow}
            </p>
            <h3 className="font-display text-2xl md:text-3xl">{ui.nowTitle}</h3>
            <p className="text-lg leading-relaxed text-ink-soft">{ui.nowIntro}</p>

            <div className="flex flex-wrap gap-2">
              {[".NET", "ASP.NET Core", "C#", "Web", "Architecture"].map((t) => (
                <span key={t} className="tag text-[10px]">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.aside
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
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

