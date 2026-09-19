export type Profile = {
  name: string;
  role: string;
  tagline: string;
  intro: string;
  summary: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export type StartupInfo = {
  founder: string;
  ceo: string;
  teamLead: string;
  reportingLine: string;
  status: string;
};

export type Capability = {
  title: string;
  description: string;
  category: string;
};

export type PlatformGroup = {
  title: string;
  items: string[];
};

export type ProjectCategory =
  | "Digital Marketing"
  | "Growth"
  | "Client Acquisition"
  | "Sales"
  | "CRM"
  | "Automation"
  | "AI"
  | "Social Media"
  | "Marketplace";

export type Project = {
  name: string;
  role: string;
  company: string;
  problem: string;
  strategy: string;
  execution: string;
  tools: string[];
  outcome: string;
  keyLearnings: string[];
  category: ProjectCategory[];
  githubUrl?: string;
  liveUrl?: string;
};

export type CaseStudy = {
  title: string;
  challenge: string;
  research: string;
  strategy: string;
  execution: string;
  measurement: string;
  outcome: string;
  learning: string;
};

export type ExperienceItem = {
  title: string;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  department: string;
  startDate: string;
  endDate: string;
  relevantCoursework: string[];
  achievements: string[];
};

export type CertificationItem = {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
};

export type AchievementItem = {
  title: string;
  category: string;
  description: string;
};

export type TestimonialItem = {
  quote: string;
  source?: string;
};

export type SocialLinks = {
  email: string;
  linkedin?: string;
  github?: string;
  facebook?: string;
  instagram?: string;
  x?: string;
  youtube?: string;
  website?: string;
};

export type ContactFormState = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

export type KPIItem = {
  label: string;
  value: string;
  note: string;
};

export type Availability = {
  status: string;
  note: string;
};
