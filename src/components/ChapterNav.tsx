"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoMark } from "@/components/LogoMark";
import { chapters, profile } from "@/data/profile";
import { useActiveChapter } from "@/hooks/useActiveChapter";

export function ChapterNav() {
  const [open, setOpen] = useState(false);
  const active = useActiveChapter();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between px-5 py-4">
          <a href="#cover" className="flex items-center gap-2">
            <LogoMark size="sm" />
            <span className="font-display text-lg">Nassima</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="rounded border border-line p-2"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-line px-5 py-4">
            {chapters.map((ch) => (
              <a
                key={ch.id}
                href={ch.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 py-2 text-sm"
              >
                <span className="font-mono text-ink-muted">{ch.number}</span>
                {ch.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-56 flex-col border-r border-line bg-paper/95 px-6 py-10 backdrop-blur lg:flex">
        <a href="#cover" className="mb-10 flex items-center gap-3">
          <LogoMark />
          <div>
            <p className="font-display text-xl leading-tight">Nassima</p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
              Portfolio · 2026
            </p>
          </div>
        </a>

        <nav className="flex flex-1 flex-col gap-1">
          {chapters.map((ch) => (
            <a
              key={ch.id}
              href={ch.href}
              className={`group flex items-center gap-3 rounded px-2 py-2 text-sm transition ${
                active === ch.id
                  ? "bg-ink text-paper"
                  : "text-ink-soft hover:bg-paper-dark"
              }`}
            >
              <span className="font-mono text-xs opacity-60">{ch.number}</span>
              {ch.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.cvPath}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto border border-line bg-white px-3 py-2 text-center text-xs uppercase tracking-widest transition hover:bg-ink hover:text-paper"
        >
          Télécharger CV
        </a>
      </aside>
    </>
  );
}
