import { acquisitionSteps } from "@/data/responsibilities";

import { SectionHeading } from "@/components/section-heading";

export function AcquisitionPipeline() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Client acquisition system"
        title="Structuring the journey from opportunity to retention"
        description="The team lead is accountable for leading the process, coordinating follow-through, and keeping each stage aligned to the startup’s goals and client expectations."
      />

      <div className="mt-10">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {acquisitionSteps.map((step, index) => (
            <div
              key={step}
              className="flex min-w-0 items-center gap-3 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700">
                {index + 1}
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Stage</div>
                <div className="mt-1 text-sm font-semibold text-slate-800 break-words">{step}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          "Research target segments and define the right startup fit.",
          "Identify and prioritize high-potential prospects and channels.",
          "Coordinate outreach, discovery, and qualifying conversations.",
          "Support proposals, workflow handoff, and client retention planning.",
        ].map((item) => (
          <div key={item} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm leading-7 text-slate-600">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
