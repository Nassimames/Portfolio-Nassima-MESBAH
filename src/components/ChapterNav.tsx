"use client";

import { useState } from "react";
import {
  Award,
  BookOpen,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  FolderKanban,
  Mail,
  Menu,
  User,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LogoMark } from "@/components/LogoMark";
import { useSidebar } from "@/context/SidebarContext";
import { chapters, profile } from "@/data/profile";
import { useActiveChapter } from "@/hooks/useActiveChapter";

const chapterIcons: Record<string, LucideIcon> = {
  cover: BookOpen,
  profil: User,
  parcours: Briefcase,
  projets: FolderKanban,
  certifs: Award,
  stack: Code2,
  contact: Mail,
};

export function ChapterNav() {
  const [open, setOpen] = useState(false);
  const active = useActiveChapter();
  const { collapsed, toggle } = useSidebar();

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
            {chapters.map((ch) => {
              const Icon = chapterIcons[ch.id] ?? BookOpen;
              return (
                <a
                  key={ch.id}
                  href={ch.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded py-2.5 text-sm ${
                    active === ch.id ? "font-medium text-ink" : "text-ink-soft"
                  }`}
                >
                  <Icon size={16} strokeWidth={1.75} />
                  <span className="font-mono text-xs text-ink-muted">{ch.number}</span>
                  {ch.label}
                </a>
              );
            })}
          </nav>
        )}
      </header>

      <aside
        className={`fixed left-0 top-0 z-40 hidden h-screen flex-col border-r border-line bg-paper/95 backdrop-blur transition-[width] duration-300 ease-in-out lg:flex ${
          collapsed ? "w-[4.5rem] px-2 py-8" : "w-56 px-6 py-10"
        }`}
      >
        <div
          className={`mb-8 flex items-center ${collapsed ? "justify-center" : "justify-between gap-2"}`}
        >
          <a
            href="#cover"
            className={`flex items-center ${collapsed ? "justify-center" : "gap-3"}`}
            title="Couverture"
          >
            <LogoMark size={collapsed ? "sm" : "md"} />
            {!collapsed && (
              <div>
                <p className="font-display text-xl leading-tight">Nassima</p>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                  Portfolio · 2026
                </p>
              </div>
            )}
          </a>

          {!collapsed && (
            <button
              type="button"
              onClick={toggle}
              aria-label="Réduire le menu"
              className="rounded border border-line p-1.5 text-ink-muted transition hover:border-ink hover:text-ink"
            >
              <ChevronLeft size={16} strokeWidth={1.75} />
            </button>
          )}
        </div>

        {collapsed && (
          <button
            type="button"
            onClick={toggle}
            aria-label="Ouvrir le menu"
            className="mb-4 flex justify-center rounded border border-line p-1.5 text-ink-muted transition hover:border-ink hover:text-ink"
          >
            <ChevronRight size={16} strokeWidth={1.75} />
          </button>
        )}

        <nav className="flex flex-1 flex-col gap-1">
          {chapters.map((ch) => {
            const Icon = chapterIcons[ch.id] ?? BookOpen;
            const isActive = active === ch.id;

            return (
              <a
                key={ch.id}
                href={ch.href}
                title={collapsed ? ch.label : undefined}
                className={`group flex items-center rounded transition ${
                  collapsed ? "justify-center px-2 py-2.5" : "gap-3 px-2 py-2 text-sm"
                } ${
                  isActive
                    ? "bg-ink text-paper"
                    : "text-ink-soft hover:bg-paper-dark"
                }`}
              >
                <Icon
                  size={18}
                  strokeWidth={1.75}
                  className={isActive ? "text-paper" : "text-ink-muted group-hover:text-ink"}
                />
                {!collapsed && (
                  <>
                    <span className="font-mono text-xs opacity-60">{ch.number}</span>
                    <span>{ch.label}</span>
                  </>
                )}
              </a>
            );
          })}
        </nav>

        <a
          href={profile.cvPath}
          target="_blank"
          rel="noopener noreferrer"
          title={collapsed ? "Télécharger CV" : undefined}
          className={`mt-auto border border-line bg-white transition hover:bg-ink hover:text-paper ${
            collapsed
              ? "flex items-center justify-center p-2.5"
              : "px-3 py-2 text-center text-xs uppercase tracking-widest"
          }`}
        >
          {collapsed ? (
            <Download size={18} strokeWidth={1.75} />
          ) : (
            "Télécharger CV"
          )}
        </a>
      </aside>
    </>
  );
}
