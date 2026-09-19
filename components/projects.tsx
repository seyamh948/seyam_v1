import { projects } from "@/data/projects";

import { SectionHeading } from "@/components/section-heading";

export function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects / case studies"
          title="Portfolio work built around client acquisition and growth execution"
          description="Each project highlights the role, problem, strategy, execution, tools, and learning involved. Where results are not verified, placeholder language is used to avoid inventing outcomes."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-slate-900">{project.name}</h3>
                <span className="rounded-full bg-sky-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-sky-700">
                  {project.role}
                </span>
              </div>

              {project.company ? (
                <p className="mb-4 text-sm font-medium text-slate-600">Client / company: {project.company}</p>
              ) : null}

              {project.category ? (
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.category.map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-600">
                      {item}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="space-y-4 text-sm leading-6 text-slate-600">
                <div>
                  <h4 className="mb-1 font-semibold text-slate-900">Business problem</h4>
                  <p>{project.businessProblem}</p>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-slate-900">Strategy</h4>
                  <p>{project.strategy}</p>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-slate-900">Execution</h4>
                  <p>{project.execution}</p>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-slate-900">Tools</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-700">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-slate-900">Outcome</h4>
                  <p>{project.outcome}</p>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-slate-900">Key learnings</h4>
                  <ul className="list-disc space-y-1 pl-5">
                    {project.keyLearnings.map((learning) => (
                      <li key={learning}>{learning}</li>
                    ))}
                  </ul>
                </div>
                {(project.githubUrl || project.liveUrl) ? (
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
                      >
                        GitHub
                      </a>
                    ) : null}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
                      >
                        Live
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
