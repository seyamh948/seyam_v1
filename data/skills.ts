export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Digital Growth",
    items: [
      "Lead generation",
      "Client acquisition",
      "Sales support",
      "Digital marketing",
      "Online platforms",
      "Conversion workflows",
    ],
  },
  {
    title: "Operations",
    items: [
      "CRM management",
      "Client communication",
      "Proposal support",
      "Marketplace operations",
      "Project coordination",
      "Reporting",
    ],
  },
  {
    title: "Leadership",
    items: [
      "Team coordination",
      "Task delegation",
      "Performance monitoring",
      "Workflow optimization",
      "Client relationship management",
      "Retention planning",
    ],
  },
  {
    title: "Automation & AI",
    items: [
      "Marketing automation",
      "AI-assisted research",
      "Lead qualification",
      "Follow-up generation",
      "Workflow optimization",
      "Content ideation",
    ],
  },
];
