import type { Locale, SiteContent } from "./types";
import { en } from "./en";
import { fr } from "./fr";

const dictionaries: Record<Locale, SiteContent> = { fr, en };

export function getContent(locale: Locale): SiteContent {
  return dictionaries[locale];
}

export type { Locale, SiteContent } from "./types";
