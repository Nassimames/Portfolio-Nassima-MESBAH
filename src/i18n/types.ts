export type Locale = "fr" | "en";

export type Chapter = {
  id: string;
  number: string;
  label: string;
  href: string;
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  location: string;
  logo?: string;
  logoWide?: boolean;
  highlights: string[];
  stack: string[];
  accent: string;
};

export type Project = {
  id: string;
  chapter: string;
  title: string;
  subtitle: string;
  context: string;
  description: string;
  role: string;
  stack: string[];
  links: { label: string; href: string }[];
  images: string[];
  logo?: string;
  logoWide?: boolean;
  accent: string;
  gallery?: "wide" | "mobile";
  imageLabels?: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  verifyUrl?: string;
  file: string;
};

export type Education = {
  period: string;
  degree: string;
  school: string;
  location: string;
};

export type ChapterReaction = {
  message: string;
  gesture: string;
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  profile: {
    name: string;
    shortName: string;
    title: string;
    role: string;
    email: string;
    phone: string;
    github: string;
    location: string;
    cvPath: string;
    avatarPath: string;
    tagline: string;
    bio: string[];
    languages: { lang: string; level: string }[];
    interests: string[];
  };
  ui: {
    portfolioYear: string;
    heroEyebrow: string;
    exploreProjects: string;
    cvPdf: string;
    downloadCv: string;
    roleLabel: string;
    chapterLabel: string;
    languagesTitle: string;
    interestsTitle: string;
    educationTitle: string;
    experienceIntro: string;
    projectsIntro: string;
    certificationsIntro: string;
    skillsIntro: string;
    contactIntro: string;
    viewCert: string;
    verify: string;
    send: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    footerTagline: string;
    collapseMenu: string;
    expandMenu: string;
    menu: string;
    prevImage: string;
    nextImage: string;
    viewCapture: string;
    captureAlt: string;
    contactSubject: string;
    sectionProfile: string;
    sectionJourney: string;
    sectionProjects: string;
    sectionCerts: string;
    sectionStack: string;
    sectionContact: string;
    sectionContactCta: string;
    emailLabel: string;
    phoneLabel: string;
    githubLabel: string;
  };
  chapters: Chapter[];
  chapterReactions: Record<string, ChapterReaction>;
  education: Education[];
  experiences: Experience[];
  projects: Project[];
  certifications: Certification[];
  skillGroups: { title: string; items: string[] }[];
};
