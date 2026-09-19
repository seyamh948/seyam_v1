import { toolCategories } from "@/data/tools";

import { SectionHeading } from "@/components/section-heading";

export function ToolsSection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tools & technology"
          title="A practical stack for startup acquisition and team operations"
          description="This stack is meant to be editable and situational. It reflects common tools used in CRM, project management, communication, marketing, automation, and AI-assisted work."
          align="center"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {toolCategories.map((group) => (
            <div key={group.title} className="rounded-[1.5rem] border border-slate-800 bg-slate-900/80 p-6">
              <h3 className="mb-5 text-xl font-semibold text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
