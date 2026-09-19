import { leadershipWorkflow } from "@/data/responsibilities";

import { SectionHeading } from "@/components/section-heading";

export function Leadership() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Team leadership"
        title="Coordinating marketing, outreach, CRM, and client success with structure"
        description="The team lead keeps the acquisition engine moving by aligning priorities, clarifying ownership, and ensuring execution is tracked and improved over time."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h3 className="mb-6 text-xl font-semibold text-slate-900">Leadership workflow</h3>
          <div className="flex flex-wrap gap-3">
            {leadershipWorkflow.map((item) => (
              <div
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Lead generation and prioritization",
              "Marketing and content alignment",
              "Social media coordination",
              "Marketplace operations",
              "Outreach sequencing and follow-up",
              "Sales support and client communication",
              "CRM discipline and tracking",
              "Reporting and client success monitoring",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-7 text-white shadow-[0_16px_60px_rgba(15,23,42,0.18)]">
          <p className="text-xs uppercase tracking-[0.22em] text-sky-300">Operating rhythm</p>
          <h3 className="mt-4 text-2xl font-semibold">From planning to improvement</h3>
          <div className="mt-8 space-y-4">
            {[
              "Set priorities, assign responsibilities, and keep ownership clear.",
              "Track campaign activity and client communication consistently.",
              "Monitor response quality, pipeline movement, and next actions.",
              "Review reporting and improve workflows based on performance data.",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-slate-700 bg-slate-800/70 p-4">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-[10px] font-semibold">
                  ✓
                </span>
                <p className="text-sm leading-6 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
