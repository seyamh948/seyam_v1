import { crmStages, salesJourney } from "@/data/responsibilities";

import { SectionHeading } from "@/components/section-heading";

export function CRM() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Marketing & sales workflow"
          title="Linking marketing activity to business outcomes"
          description="This workflow keeps marketing activity connected to conversations, deals, project delivery, and ongoing client value without relying on fabricated performance claims."
        />

        <div className="mt-10">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {salesJourney.map((step, index) => (
              <div
                key={step}
                className="flex min-w-0 flex-col items-center rounded-[1.5rem] border border-slate-200 bg-white p-4 text-center shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700">
                  {index + 1}
                </div>
                <div className="mt-3 text-sm font-semibold text-slate-800 break-words">{step}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="CRM & client management"
            title="Maintaining visibility across the full client lifecycle"
            description="A clean pipeline helps teams follow up, track proposals, communicate clearly, and keep client status organized from initial lead to retention."
          />

          <div className="mt-10">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {crmStages.map((stage, index) => (
                <div
                  key={stage}
                  className="flex min-w-0 flex-col rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    {index + 1}
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 break-words">{stage}</h4>
                  <ul className="mt-3 space-y-2 text-xs text-slate-600">
                    <li>Follow-up tracking</li>
                    <li>Client notes</li>
                    <li>Requirements</li>
                    <li>Proposal status</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
