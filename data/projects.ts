export type ProjectItem = {
  name: string;
  role: string;
  company?: string;
  businessProblem: string;
  strategy: string;
  execution: string;
  tools: string[];
  outcome: string;
  keyLearnings: string[];
  category?: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: ProjectItem[] = [
  {
    name: "Startup Acquisition Sprint",
    role: "Digital Growth Team Lead",
    company: "Startup growth engagement",
    businessProblem:
      "A startup needed a more structured way to generate qualified opportunities and shorten the time between initial outreach and sales conversations.",
    strategy:
      "Define target buyer segments, map the acquisition funnel, and align outreach messaging with the startup's offer and business context.",
    execution:
      "Built a lead list, created outreach sequences, coordinated follow-up, and monitored response quality across multiple channels.",
    tools: ["HubSpot", "Notion", "Google Sheets", "Canva", "ChatGPT"],
    outcome:
      "Improved pipeline clarity, tightened qualification, and made follow-up ownership easier to manage across the client journey.",
    keyLearnings: [
      "Strong market targeting improves response quality.",
      "Consistent follow-up matters as much as the first message.",
      "CRM visibility reduces missed sales opportunities.",
    ],
    category: ["Client Acquisition", "Growth"],
  },
  {
    name: "Marketplace Growth Operation",
    role: "Client Acquisition Lead",
    company: "Marketplace service operation",
    businessProblem:
      "A service business needed better visibility into inbound demand and stronger management of freelance marketplace leads.",
    strategy:
      "Create a repeatable marketplace workflow that improved profile positioning, inbound triage, and lead qualification.",
    execution:
      "Tracked marketplace activity, organized raw leads, assigned follow-up tasks, and improved communication consistency for each opportunity.",
    tools: ["Upwork", "Notion", "Google Analytics", "Slack", "Zapier"],
    outcome:
      "Created a cleaner lead triage flow and more consistent communication rhythm across inbound and outbound opportunity handling.",
    keyLearnings: [
      "Marketplace performance is affected by messaging clarity and responsiveness.",
      "Lead triage must connect directly to conversion actions.",
      "Operational discipline supports better client relationships.",
    ],
    category: ["Marketplace", "Client Acquisition"],
  },
  {
    name: "Retention & Client Nurture Program",
    role: "Client Relationship & CRM Lead",
    company: "Client lifecycle support",
    businessProblem:
      "A startup wanted to improve relationship management after initial acquisition and reduce drop-off between discovery and active delivery.",
    strategy:
      "Establish structured communication checkpoints, client notes, and follow-up tracking across ongoing opportunities.",
    execution:
      "Mapped the client lifecycle, documented relationship stages, and created role-based updates across sales and delivery touchpoints.",
    tools: ["Zoho CRM", "Slack", "ClickUp", "Google Meet", "n8n"],
    outcome:
      "Strengthened client continuity through clearer account visibility, proactive touchpoints, and more reliable handoff coordination.",
    keyLearnings: [
      "Retention improves when client communication feels organized and proactive.",
      "A clean CRM reduces risk of losing opportunities.",
      "Cross-functional visibility helps relationships stay healthy.",
    ],
    category: ["CRM", "Retention"],
  },
];
