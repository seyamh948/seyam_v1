import { experience } from "@/data/experience";

import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Professional timeline and startup-oriented leadership roles"
        description="Each role entry is fully editable and intentionally avoids claims beyond the role description and responsibilities outlined."
      />

      <div className="mt-10 space-y-8">
        {experience.map((item) => (
          <div key={`${item.title}-${item.company}`} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">{item.title}</p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900">{item.role}</h3>
              </div>
              <div className="text-sm text-slate-500">
                <div>{item.company}</div>
                <div>{item.period}</div>
              </div>
            </div>

            <div className="mt-5">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Responsibilities:
              </p>
              <ul className="grid gap-3 md:grid-cols-2">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
