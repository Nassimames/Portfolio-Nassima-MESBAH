"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { LogoImage } from "@/components/LogoImage";
import { useContent } from "@/context/LocaleContext";
import type { Project } from "@/i18n/types";

function ProjectGallery({ project }: { project: Project }) {
  const { ui } = useContent();
  const [active, setActive] = useState(0);
  const isMobile = project.gallery === "mobile";
  const total = project.images.length;

  const go = (dir: -1 | 1) => {
    setActive((i) => (i + dir + total) % total);
  };

  return (
    <div className="w-full">
      <div
        className={`relative mx-auto flex items-center justify-center overflow-hidden border border-line bg-paper-dark/50 ${
          isMobile
            ? "max-w-[280px] rounded-[2rem] p-3 shadow-md"
            : "w-full rounded-lg p-4 md:p-6"
        }`}
      >
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={ui.prevImage}
              className="absolute left-2 z-10 rounded-full border border-line bg-white/90 p-2 shadow-sm transition hover:bg-white md:left-4"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={ui.nextImage}
              className="absolute right-2 z-10 rounded-full border border-line bg-white/90 p-2 shadow-sm transition hover:bg-white md:right-4"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.images[active]}
          alt={`${project.title} — ${ui.captureAlt} ${active + 1}`}
          className={
            isMobile
              ? "max-h-[560px] w-full rounded-[1.5rem] object-contain object-top"
              : "max-h-[420px] w-full object-contain md:max-h-[480px]"
          }
        />
      </div>

      {project.imageLabels?.[active] && (
        <p className="mt-3 text-center text-sm font-medium text-ink-soft">
          {project.imageLabels[active]}
        </p>
      )}

      {total > 1 && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {project.images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={project.imageLabels?.[i] ?? `${ui.viewCapture} ${i + 1}`}
              title={project.imageLabels?.[i]}
              className={`shrink-0 overflow-hidden rounded border-2 transition ${
                i === active ? "border-ink" : "border-line opacity-70 hover:opacity-100"
              } ${isMobile ? "h-24 w-14" : "h-16 w-28 md:h-20 md:w-36"}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="h-full w-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}

      {total > 1 && (
        <p className="mt-2 text-center font-mono text-xs text-ink-muted">
          {active + 1} / {total}
        </p>
      )}
    </div>
  );
}

export function ProjectsChapter() {
  const { projects, ui } = useContent();

  return (
    <section id="projets" className="border-t border-line content-offset py-24">
      <div className="max-w-6xl">
        <p className="chapter-number">03</p>
        <h2 className="font-display text-4xl md:text-5xl">{ui.sectionProjects}</h2>
        <p className="mt-4 max-w-2xl text-ink-soft">{ui.projectsIntro}</p>

        <div className="mt-16 space-y-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="border-t border-line pt-12"
            >
              <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
                <div>
                  <div className="flex items-center gap-3">
                    {project.logo && (
                      <div
                        className={
                          project.logoWide
                            ? "inline-flex rounded border border-line bg-white px-3 py-2"
                            : ""
                        }
                      >
                        <LogoImage
                          src={project.logo}
                          alt=""
                          size={40}
                          wide={project.logoWide}
                          className={project.logoWide ? "" : "rounded"}
                        />
                      </div>
                    )}
                    <span className="font-mono text-xs text-ink-muted">
                      {ui.chapterLabel} {project.chapter}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-3xl md:text-4xl">{project.title}</h3>
                  <p className="mt-2 text-lg" style={{ color: project.accent }}>
                    {project.subtitle}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-ink-muted">
                    {project.context}
                  </p>

                  <p className="mt-6 leading-relaxed text-ink-soft">{project.description}</p>

                  <p className="mt-4 text-sm">
                    <span className="font-medium">{ui.roleLabel} : </span>
                    {project.role}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span key={s} className="tag text-[10px]">
                        {s}
                      </span>
                    ))}
                  </div>

                  {project.links.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-line bg-white px-4 py-2 text-sm transition hover:border-ink"
                          style={{ borderColor: project.accent }}
                        >
                          {link.label}
                          <ArrowUpRight size={14} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <ProjectGallery project={project} />
              </div>

              {index < projects.length - 1 && (
                <div className="mt-12 section-rule" aria-hidden />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
