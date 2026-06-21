import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 lg:pl-64">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-display text-lg">{profile.name}</p>
        <p className="font-mono text-xs text-ink-muted">
          Chapitres de Code · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
