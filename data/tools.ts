export type ToolCategory = {
  title: string;
  items: string[];
};

export const toolCategories: ToolCategory[] = [
  {
    title: "CRM",
    items: ["HubSpot", "Zoho CRM", "Salesforce"],
  },
  {
    title: "Project Management",
    items: ["Notion", "ClickUp", "Trello", "Jira", "Asana"],
  },
  {
    title: "Communication",
    items: ["Slack", "Microsoft Teams", "Zoom", "Google Meet", "Email"],
  },
  {
    title: "Marketing",
    items: [
      "Meta Business Suite",
      "Google Analytics",
      "Google Search Console",
      "Canva",
    ],
  },
  {
    title: "Automation",
    items: ["n8n", "Make", "Zapier"],
  },
  {
    title: "AI",
    items: ["ChatGPT", "Claude", "Gemini", "Other AI tools"],
  },
];
