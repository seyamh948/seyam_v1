import {
  Bot,
  Briefcase,
  FileText,
  Search,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

const aiUseCases = [
  { icon: Search, title: "Lead research", description: "Accelerate prospect discovery with structured research and context gathering." },
  { icon: Target, title: "Lead qualification", description: "Organize potential fit, urgency, and next-step readiness using AI-assisted review." },
  { icon: Workflow, title: "Market research", description: "Summarize signals, competitor context, and positioning opportunities for decision-making." },
  { icon: FileText, title: "Client reply drafting", description: "Draft initial outreach, follow-ups, and response support with human review and refinement." },
  { icon: Briefcase, title: "Proposal assistance", description: "Support structure, clarity, and consistency for proposal-ready materials and sales notes." },
  { icon: Sparkles, title: "Follow-up generation", description: "Generate relevant, timely follow-up prompts and reminders for ongoing conversations." },
  { icon: Bot, title: "Content ideation", description: "Create campaign ideas, messaging hooks, and content angles aligned to target audiences." },
  { icon: Search, title: "Competitor research", description: "Organize competitor findings and market signals to inform outreach and positioning strategy." },
  { icon: FileText, title: "Meeting summaries", description: "Capture notes, action items, and follow-up tasks for cleaner client communications." },
  { icon: Workflow, title: "CRM assistance", description: "Improve note-taking, lead categorization, and pipeline hygiene with clear human oversight." },
  { icon: Target, title: "Reporting", description: "Help summarize activity and performance data into clear reporting snapshots." },
  { icon: Briefcase, title: "Workflow automation", description: "Support repeatable processes that reduce admin work and keep teams focused on client conversations." },
];

export function AIGrowth() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="AI-powered growth"
        title="Responsible AI for faster research, better workflows, and clearer execution"
        description="AI is used to support productivity, research, drafting, analysis, and process efficiency while preserving human judgment, client insight, and decision-making."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {aiUseCases.map(({ icon: Icon, title, description }) => (
          <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
