import { testimonials } from "@/data/testimonials";

import { SectionHeading } from "@/components/section-heading";

export function Testimonials() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Verified feedback can be added here"
          description="This section intentionally keeps testimonials editable so no fabricated client or team endorsement is published."
          align="center"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-1">
          {testimonials.map((quote) => (
            <div key={quote} className="rounded-[1.5rem] border border-slate-800 bg-slate-900 p-8 text-center text-slate-200">
              <p className="text-base leading-7">“{quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
