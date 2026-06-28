"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getContent, type Locale, type SiteContent } from "@/i18n";

type LocaleContextValue = {
  locale: Locale;
  content: SiteContent;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-locale");
    if (saved === "fr" || saved === "en") setLocaleState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem("portfolio-locale", locale);
  }, [locale]);

  const setLocale = (next: Locale) => setLocaleState(next);
  const toggleLocale = () => setLocaleState((l) => (l === "fr" ? "en" : "fr"));

  return (
    <LocaleContext.Provider
      value={{
        locale,
        content: getContent(locale),
        setLocale,
        toggleLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function useContent() {
  return useLocale().content;
}
