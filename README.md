# Nassima Mesbah — Portfolio

Portfolio éditorial **« Chapitres de Code »** — Next.js 15, données extraites du CV et des assets `Docs/`.

## Concept

Chaque section est un **chapitre numéroté** (00–06) : profil, parcours, projets avec captures réelles, certifications PDF, stack et contact.

## Données intégrées

- CV PDF (`Docs/CV Nassima MESBAH (10).pdf`)
- Projets : GoBeldi, MyShop, Mobile, HUIR/GAD-H, TechCenter Mooster
- Certifications Cisco & Coursera (`Docs/Certifs/`)
- Logos et captures depuis `Docs/`

## Lancer

```bash
npm install
npm run dev
```

## Structure

- `src/data/profile.ts` — toutes les données (CV, projets, certifs)
- `public/assets/` — images, logos, PDFs copiés depuis Docs
- `src/components/` — chapitres du portfolio
