"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Boxes,
  BarChart3,
  Check,
  ChevronDown,
  Database,
  Globe2,
  Github,
  MapPin,
  Package,
  Route,
  ServerCog,
  ShoppingBag,
  Workflow,
} from "lucide-react";
import { useContent } from "@/context/LocaleContext";
import type { PersonalProjectFeature, PersonalProjectStage } from "@/i18n/types";

const featureIcons = {
  products: Package,
  zones: MapPin,
  orders: Route,
  inventory: Boxes,
  analytics: BarChart3,
} satisfies Record<PersonalProjectFeature["icon"], typeof Package>;

const architectureIcons = {
  browser: Globe2,
  "node-api": ServerCog,
  sqlite: Database,
  github: Github,
  "azure-pipelines": Workflow,
  "container-registry": Boxes,
  "app-service": ServerCog,
} satisfies Record<PersonalProjectStage["icon"], typeof Globe2>;

function StageFlow({
  stages,
  compact = false,
}: {
  stages: PersonalProjectStage[];
  compact?: boolean;
}) {
  const desktopLayout = compact
    ? "xl:flex-row xl:items-center"
    : "md:flex-row md:items-center";
  const desktopCardLayout = compact
    ? "xl:flex-col xl:justify-center xl:text-center"
    : "md:flex-col md:justify-center md:text-center";
  const desktopArrowRotation = compact ? "xl:rotate-0" : "md:rotate-0";

  return (
    <div className={`flex flex-col items-stretch gap-2 ${desktopLayout}`}>
      {stages.map((stage, index) => {
        const Icon = architectureIcons[stage.icon];
        return (
          <div key={stage.title} className="contents">
            <div className={`flex min-w-0 flex-1 items-center gap-3 border border-line bg-white p-3 ${desktopCardLayout}`}>
              <Icon size={compact ? 17 : 21} className="shrink-0 text-[#41675d]" aria-hidden="true" />
              <div className="min-w-0">
                <p className={`${compact ? "text-xs" : "text-sm"} font-semibold leading-snug`}>
                  {stage.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">{stage.description}</p>
              </div>
            </div>
            {index < stages.length - 1 && (
              <ArrowRight
                size={16}
                className={`mx-auto shrink-0 rotate-90 text-ink-muted ${desktopArrowRotation}`}
                aria-hidden="true"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function DeliveryCoverageIllustration({ caption }: { caption: string }) {
  return (
    <figure>
      <div className="overflow-hidden border border-line bg-[#e7ebe3]">
        <svg
          viewBox="0 0 680 420"
          aria-hidden="true"
          className="block h-auto w-full"
        >
          <rect width="680" height="420" fill="#e7ebe3" />
          <path
            d="M-25 90 128 166 243 130 349 190 473 132 716 207M-28 322 97 252 201 283 330 234 431 298 704 248M111-20l34 120-37 106 47 105-13 129M330-20l-17 104 44 105-33 92 26 150M552-18l-56 107 39 108-43 91 45 147"
            fill="none"
            stroke="#c5cec0"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-25 90 128 166 243 130 349 190 473 132 716 207M-28 322 97 252 201 283 330 234 431 298 704 248M111-20l34 120-37 106 47 105-13 129M330-20l-17 104 44 105-33 92 26 150M552-18l-56 107 39 108-43 91 45 147"
            fill="none"
            stroke="#f4f2ec"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M248 211c48-75 155-94 231-42 63 44 68 132 15 182-53 50-147 52-208 15-61-36-82-101-38-155Z"
            fill="#a9c1a7"
            fillOpacity=".52"
            stroke="#55765c"
            strokeWidth="3"
            strokeDasharray="9 8"
          />
          <path
            d="M321 251c39-13 57-70 100-66 32 3 25 52 57 65 17 7 34 4 51-2"
            fill="none"
            stroke="#244d46"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="2 11"
          />
          <circle cx="370" cy="237" r="24" fill="#244d46" fillOpacity=".13" />
          <circle cx="370" cy="237" r="12" fill="#244d46" />
          <circle cx="370" cy="237" r="4" fill="#fff" />
          <g>
            <path d="M288 185c0-13 10-23 23-23s23 10 23 23c0 18-23 40-23 40s-23-22-23-40Z" fill="#d96545" />
            <circle cx="311" cy="184" r="7" fill="#fff" />
          </g>
          <g>
            <path d="M449 296c0-13 10-23 23-23s23 10 23 23c0 18-23 40-23 40s-23-22-23-40Z" fill="#d96545" />
            <circle cx="472" cy="295" r="7" fill="#fff" />
          </g>
          <g>
            <path d="M479 207c0-13 10-23 23-23s23 10 23 23c0 18-23 40-23 40s-23-22-23-40Z" fill="#244d46" />
            <circle cx="502" cy="206" r="7" fill="#fff" />
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

function AtelierStoreIllustration({
  caption,
  storePreview,
}: {
  caption: string;
  storePreview: {
    label: string;
    product: string;
    action: string;
    categories: string[];
  };
}) {
  return (
    <figure>
      <div className="overflow-hidden border border-line bg-[#eee9df] p-4 sm:p-6">
        <div className="overflow-hidden border border-line bg-[#fbfaf7] shadow-sm">
          <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-5">
            <span className="font-display text-xl">atelier.</span>
            <span className="hidden text-xs text-ink-muted sm:inline">{storePreview.label}</span>
            <span className="flex items-center gap-1.5 text-xs text-ink-soft">
              <ShoppingBag size={14} aria-hidden="true" />
              0
            </span>
          </div>
          <div className="grid gap-4 p-4 sm:p-5">
            <div className="border border-[#ded5c8] bg-[#f0e9dc] p-5 sm:p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-muted">
                {storePreview.label}
              </p>
              <p className="mt-2 max-w-xs font-display text-2xl leading-tight sm:text-3xl">
                {storePreview.product}
              </p>
              <span className="mt-4 inline-flex border border-[#bcb09e] bg-white/70 px-3 py-2 text-[10px]">
                {storePreview.action}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {storePreview.categories.map((category, index) => (
                <div key={category} className="min-w-0">
                  <div
                    className={`flex aspect-[1.15] items-center justify-center border border-[#ded5c8] ${
                      index === 1 ? "bg-[#e5e9df]" : "bg-[#f1ece3]"
                    }`}
                    aria-hidden="true"
                  >
                    {index === 0 ? (
                      <div className="h-[58%] w-[48%] rounded-b-[40%] rounded-t-md border border-[#bcb09e] bg-[#e1d5c3] shadow-sm" />
                    ) : index === 1 ? (
                      <div className="h-[48%] w-[48%] rounded-b-xl border border-[#b4b8aa] bg-[#d5d8cb] shadow-sm" />
                    ) : (
                      <div className="h-[58%] w-[40%] border border-[#bcb09e] bg-[#e8dfd1] shadow-sm" />
                    )}
                  </div>
                  <p className="mt-1 truncate text-[9px] text-ink-soft">{category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
export function PersonalProjectsChapter() {
  const { personalProjects, ui } = useContent();

  return (
    <section
      id="personal-projects"
      className="border-t border-line bg-paper-dark/40 content-offset py-24"
    >
      <div className="max-w-6xl">
        <p className="chapter-number">04</p>
        <h2 className="font-display text-4xl md:text-5xl">{ui.sectionPersonalProjects}</h2>
        <p className="mt-4 max-w-2xl text-ink-soft">{ui.personalProjectsIntro}</p>

        <div className="mt-12 space-y-10">
          {personalProjects.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="border border-line bg-white p-5 transition-shadow duration-300 hover:shadow-lg sm:p-8 lg:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
                {project.preview.kind === "delivery-zones" ? (
                  <DeliveryCoverageIllustration caption={project.preview.caption} />
                ) : project.preview.kind === "atelier-store" ? (
                  <AtelierStoreIllustration
                    caption={project.preview.caption}
                    storePreview={project.preview.storePreview}
                  />
                ) : null}

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
                      {project.category}
                    </p>
                    {project.status && (
                      <span className="border border-[#78927b] bg-[#edf2eb] px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[#41675d]">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 font-display text-4xl md:text-5xl">{project.title}</h3>
                  <p className="mt-2 text-lg text-[#41675d]">{project.subtitle}</p>
                  <p className="mt-5 leading-relaxed text-ink-soft">{project.description}</p>

                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm text-ink-soft">
                          <Check
                            size={15}
                            className="mt-0.5 shrink-0 text-[#41675d]"
                            aria-hidden="true"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  <ul
                    className="mt-6 flex flex-wrap gap-2"
                    aria-label={ui.technologyStack}
                  >
                    {project.stack.map((technology) => (
                      <li key={technology}>
                        <span className="tag text-[10px]">{technology}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 bg-ink px-4 py-2 text-sm font-medium text-paper transition hover:bg-[#244d46] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                      >
                        {ui.liveDemo}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    )}
                    <a
                      href={project.links.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 border border-line bg-white px-4 py-2 text-sm font-medium transition hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    >
                      <Github size={16} aria-hidden="true" />
                      {ui.viewSourceCode}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>

              {project.features && project.features.length > 0 && (
                <div className="mt-10 border-t border-line pt-8">
                  <h4 className="font-display text-2xl">{ui.personalProjectFeatures}</h4>
                  <ul className="mt-5 flex flex-wrap justify-center gap-3">
                    {project.features.map((feature) => {
                      const Icon = featureIcons[feature.icon];
                      return (
                        <li
                          key={feature.title}
                          className="w-full border border-line bg-paper p-4 transition-colors hover:border-[#78927b] sm:w-[calc(50%-0.375rem)] xl:w-[calc(33.333%-0.5rem)]"
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon size={17} className="shrink-0 text-[#41675d]" aria-hidden="true" />
                            <h5 className="font-medium">{feature.title}</h5>
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                            {feature.description}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {project.details && (
                <details className="group mt-8 border-t border-line pt-5">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 border border-line bg-paper px-4 py-3 font-medium transition hover:border-[#78927b] hover:text-[#41675d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink [&::-webkit-details-marker]:hidden">
                    <span>{project.details.viewDetails}</span>
                    <ChevronDown size={18} className="shrink-0 text-ink-muted transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>

                  <div className="space-y-8 pt-6">
                    <section aria-labelledby={`${project.id}-devops`}>
                      <h4 id={`${project.id}-devops`} className="font-display text-2xl">
                        {project.details.devopsTitle}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                        {project.details.deploymentStatus}
                      </p>
                      <div className="mt-4 border border-line bg-paper p-3 sm:p-5">
                        <StageFlow stages={project.details.deploymentStages} />
                      </div>
                    </section>

                    <div className="grid gap-8 md:grid-cols-2">
                      <section aria-labelledby={`${project.id}-container`}>
                        <h4 id={`${project.id}-container`} className="font-display text-2xl">
                          {project.details.containerTitle}
                        </h4>
                        <ul className="mt-4 space-y-3">
                          {project.details.containerization.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-ink-soft">
                              <Check size={15} className="mt-0.5 shrink-0 text-[#41675d]" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </section>

                      <section aria-labelledby={`${project.id}-cloud`}>
                        <h4 id={`${project.id}-cloud`} className="font-display text-2xl">
                          {project.details.cloudTitle}
                        </h4>
                        <ul className="mt-4 space-y-3">
                          {project.details.azureDeployment.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-ink-soft">
                              <Check size={15} className="mt-0.5 shrink-0 text-[#41675d]" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </section>
                    </div>

                    <section aria-labelledby={`${project.id}-automation`}>
                      <h4 id={`${project.id}-automation`} className="font-display text-2xl">
                        {project.details.automationTitle}
                      </h4>
                      <p className="mt-2 border-l-2 border-[#78927b] bg-[#f7f8f4] px-4 py-3 text-sm font-medium text-ink-soft">
                        {project.details.automationStatus}
                      </p>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {project.details.ciCdAutomation.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-ink-soft">
                            <Check size={15} className="mt-0.5 shrink-0 text-[#41675d]" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section aria-labelledby={`${project.id}-architecture`}>
                      <h4 id={`${project.id}-architecture`} className="font-display text-2xl">
                        {project.details.applicationArchitectureTitle}
                      </h4>
                      <p className="mt-2 text-sm text-ink-soft">
                        {project.details.applicationArchitectureCaption}
                      </p>
                      <div className="mt-4 border border-dashed border-[#78927b] bg-[#f7f8f4] p-4 sm:p-5">
                        <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#41675d]">
                          <Boxes size={15} aria-hidden="true" />
                          {project.details.containerLayer}
                        </div>
                        <StageFlow stages={project.details.applicationStages} />
                        <p className="mt-4 text-xs leading-relaxed text-ink-muted">
                          {project.details.containerLayerDescription}
                        </p>
                      </div>
                    </section>

                    <section aria-labelledby={`${project.id}-features`}>
                      <h4 id={`${project.id}-features`} className="font-display text-2xl">
                        {project.details.featuresTitle}
                      </h4>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {project.details.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm leading-relaxed text-ink-soft">
                            <Check size={15} className="mt-0.5 shrink-0 text-[#41675d]" aria-hidden="true" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <div className="grid gap-8 md:grid-cols-2">
                      <section aria-labelledby={`${project.id}-quality`}>
                        <h4 id={`${project.id}-quality`} className="font-display text-2xl">
                          {project.details.qualityTitle}
                        </h4>
                        <ul className="mt-4 space-y-3">
                          {project.details.quality.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-ink-soft">
                              <Check size={15} className="mt-0.5 shrink-0 text-[#41675d]" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </section>

                      <section aria-labelledby={`${project.id}-future`}>
                        <h4 id={`${project.id}-future`} className="font-display text-2xl">
                          {project.details.futureTitle}
                        </h4>
                        <ul className="mt-4 space-y-3">
                          {project.details.futureImprovements.map((improvement) => (
                            <li key={improvement} className="flex items-start gap-2 text-sm leading-relaxed text-ink-soft">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" aria-hidden="true" />
                              {improvement}
                            </li>
                          ))}
                        </ul>
                      </section>
                    </div>
                  </div>
                </details>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
