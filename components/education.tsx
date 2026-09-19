import { Award, BriefcaseBusiness, CalendarClock, GraduationCap, Sparkles } from "lucide-react";

import { achievements } from "@/data/achievements";
import { availability } from "@/data/availability";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";

import { SectionHeading } from "@/components/section-heading";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Education"
        title="Background and continuous learning"
        description="A strong acquisition leader understands both the business context and the systems behind execution. This background supports strategic thinking, organized outreach, and better client outcomes."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          {education.map((item) => (
            <article key={`${item.institution}-${item.degree}`} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">{item.institution}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900">{item.degree}</h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700">
                  <CalendarClock className="h-3.5 w-3.5" />
                  {item.startDate} – {item.endDate}
                </span>
              </div>

              <div className="mb-4 flex items-center gap-2 text-sm text-slate-600">
                <GraduationCap className="h-4 w-4 text-sky-600" />
                <span>{item.department}</span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Relevant coursework
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {item.relevantCoursework.map((course) => (
                      <li key={course} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Highlights
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="rounded-[2rem] border border-sky-100 bg-sky-50/70 p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <BriefcaseBusiness className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Availability</p>
              <h3 className="mt-1 text-xl font-semibold text-slate-900">Open to opportunities</h3>
            </div>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-sky-200 bg-white p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-700">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Available for selected startup collaborations
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{availability.note}</p>
          </div>

          <div className="mt-6 space-y-4 rounded-[1.5rem] border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <Sparkles className="h-4 w-4 text-sky-600" />
              Growth-minded collaboration
            </div>
            <p className="text-sm leading-6 text-slate-600">
              Available for selected startup partnerships, acquisition planning, sales enablement,
              and client growth operations support.
            </p>
          </div>

          <div className="mt-6 space-y-4 rounded-[1.5rem] border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <Award className="h-4 w-4 text-sky-600" />
              Certifications
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              {certifications.map((certification) => (
                <li key={certification.name} className="leading-6">
                  <div className="font-medium text-slate-800">{certification.name}</div>
                  <div>{certification.issuer}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 space-y-4 rounded-[1.5rem] border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <Sparkles className="h-4 w-4 text-sky-600" />
              Achievements
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              {achievements.map((achievement) => (
                <li key={achievement.title} className="leading-6">
                  <div className="font-medium text-slate-800">{achievement.title}</div>
                  <div>{achievement.description}</div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
