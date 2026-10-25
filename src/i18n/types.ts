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

export type PersonalProjectFeature = {
  icon: "products" | "zones" | "orders" | "inventory" | "analytics";
  title: string;
  description: string;
};

export type PersonalProjectStage = {
  icon:
    | "github"
    | "azure-pipelines"
    | "container-registry"
    | "app-service"
    | "browser"
    | "node-api"
    | "sqlite";
  title: string;
  description: string;
};

export type PersonalProjectDetails = {
  viewDetails: string;
  devopsTitle: string;
  deploymentStatus: string;
  deploymentStages: PersonalProjectStage[];
  containerTitle: string;
  containerization: string[];
  cloudTitle: string;
  azureDeployment: string[];
  automationTitle: string;
  automationStatus: string;
  ciCdAutomation: string[];
  applicationArchitectureTitle: string;
  applicationArchitectureCaption: string;
  applicationStages: PersonalProjectStage[];
  containerLayer: string;
  containerLayerDescription: string;
  featuresTitle: string;
  features: string[];
  qualityTitle: string;
  quality: string[];
  futureTitle: string;
  futureImprovements: string[];
};

export type PersonalProject = {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  status?: string;
  description: string;
  preview:
    | {
        kind: "delivery-zones";
        caption: string;
      }
      | {
        kind: "atelier-store";
        caption: string;
        storePreview: {
          label: string;
          product: string;
          action: string;
          categories: string[];
        };
      };
  features?: PersonalProjectFeature[];
  highlights?: string[];
  details?: PersonalProjectDetails;
  stack: string[];
  links: {
    demo?: string;
    source: string;
  };
};

export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  verifyUrl?: string;
  file: string;
  skills?: string[];
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
    personalProjectsIntro: string;
    personalProjectFeatures: string;
    technologyStack: string;
    liveDemo: string;
    viewSourceCode: string;
    certificationsIntro: string;
    skillsIntro: string;
    contactIntro: string;
    viewCert: string;
    verify: string;
    skillsCovered: string;
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
    sectionPersonalProjects: string;
    sectionCerts: string;
    sectionStack: string;
    sectionNow: string;
    sectionContact: string;
    sectionContactCta: string;
    emailLabel: string;
    phoneLabel: string;
    githubLabel: string;
    nowEyebrow: string;
    nowIntro: string;
    nowPathTitle: string;
    nowCompleted: string;
    nowCta: string;
    nowBlazorTitle: string;
    nowBlazorStatus: string;
    nowBlazorFocus: string;
    nowBlazorCta: string;
    nowDevopsTitle: string;
    nowDevopsDescription: string;
    nowDockerLabsTitle: string;
    nowDockerLabsPlatform: string;
    nowDockerLabsFormat: string;
    nowDockerLabsAvailability: string;
    nowDockerLabsFocus: string;
    nowDockerLabsCta: string;
  };
  chapters: Chapter[];
  chapterReactions: Record<string, ChapterReaction>;
  education: Education[];
  experiences: Experience[];
  projects: Project[];
  personalProjects: PersonalProject[];
  certifications: Certification[];
  skillGroups: { title: string; items: string[] }[];
};
