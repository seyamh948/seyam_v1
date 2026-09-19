import { BadgeCheck, BriefcaseBusiness, Compass, Sparkles } from "lucide-react";

import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";

import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title="Building a repeatable digital growth system for startups"
        description="This role sits inside a startup organization, where the focus is to coordinate acquisition, marketing execution, prospect communication, and client relationship management in a way that supports sustainable growth."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-lg leading-8 text-slate-700">{profile.summary}</p>
          <p className="text-base leading-7 text-slate-600">
            I work across digital marketing, lead generation, client acquisition, sales support,
            online platform management, and CRM coordination to help startup teams move from
            attention to qualified conversations and stronger client retention.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              "Digital growth",
              "Client acquisition",
              "CRM",
              "Automation",
              "AI-assisted workflows",
              "Team coordination",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {[
            {
              title: "Digital growth expertise",
              icon: Compass,
              text: "Acquisition strategy, market targeting, lead flow management, and high-value outreach coordination.",
            },
            {
              title: "Client-facing operations",
              icon: BriefcaseBusiness,
              text: "Handling communication, proposal support, meetings, and handoff coordination between sales and delivery teams.",
            },
            {
              title: "Team leadership",
              icon: BadgeCheck,
              text: "Prioritizing team tasks, tracking execution, and aligning marketing, sales, and client communication activity.",
            },
          ].map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="skills" className="mt-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">Skills</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">Core capabilities</h3>
          </div>
          <Sparkles className="hidden h-5 w-5 text-sky-600 md:block" />
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((group) => (
            <div key={group.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="mb-4 text-base font-semibold text-slate-900">{group.title}</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
