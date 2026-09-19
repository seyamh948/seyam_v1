import { platformGroups } from "@/data/platforms";

import { SectionHeading } from "@/components/section-heading";

export function Platforms() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Digital platform capabilities"
          title="Platforms and channels I work with"
          description="These channels and marketplaces are used as part of a broader acquisition strategy. The exact mix is tailored to the market, target audience, and business model."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {platformGroups.map((group) => (
            <div key={group.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-5 text-xl font-semibold text-slate-900">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
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
