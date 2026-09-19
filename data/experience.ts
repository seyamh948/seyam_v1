export type ExperienceItem = {
  title: string;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Team Lead",
    role: "Digital Growth & Client Acquisition",
    company: "Independent growth practice",
    period: "Selected engagements",
    responsibilities: [
      "Led digital growth operations",
      "Coordinated marketing team activity",
      "Managed lead-generation workflows",
      "Supervised client acquisition operations",
      "Coordinated marketplace activities",
      "Managed client communication",
      "Monitored KPIs and reporting",
      "Improved acquisition and workflow systems",
    ],
  },
  {
    title: "Growth Operations Support",
    role: "Marketing & Client Relationship Coordination",
    company: "Startup growth partner",
    period: "Selected engagements",
    responsibilities: [
      "Supported outreach and lead qualification",
      "Tracked campaign performance and follow-up",
      "Maintained CRM records and communication history",
      "Prepared proposal-support documentation",
      "Monitored engagement and response quality",
      "Improved team handoff processes",
    ],
  },
];
