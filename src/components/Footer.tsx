"use client";

import { useContent } from "@/context/LocaleContext";

export function Footer() {
  const { profile, ui } = useContent();

  return (
    <footer className="border-t border-line content-offset py-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-display text-lg">{profile.name}</p>
        <p className="font-mono text-xs text-ink-muted">
          {ui.footerTagline} · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
