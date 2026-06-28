"use client";

import { useLocale } from "@/context/LocaleContext";

export function LanguageSwitcher({ collapsed = false }: { collapsed?: boolean }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={`flex rounded border border-line bg-white p-0.5 ${
        collapsed ? "flex-col" : "flex-row"
      }`}
      role="group"
      aria-label="Language"
    >
      {(["fr", "en"] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLocale(lang)}
          className={`rounded px-2 py-1 font-mono text-[10px] uppercase tracking-widest transition ${
            locale === lang
              ? "bg-ink text-paper"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
