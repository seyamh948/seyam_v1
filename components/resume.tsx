import { Download, FileText } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

export function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Resume"
        title="Portfolio summary and background"
        description="This portfolio is designed to be updated with a verified resume when a final PDF is ready for publication. Until then, the resume section remains editable and clearly marked as a placeholder."
      />

      <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Document</p>
              <h3 className="mt-1 text-xl font-semibold text-slate-900">Resume</h3>
            </div>
          </div>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            <Download className="h-4 w-4" />
            Download resume
          </a>
        </div>

        <p className="mt-6 text-sm leading-7 text-slate-600">
          A current PDF version is available once the final resume is prepared and approved for publication.
          Until then, this section serves as a clear placeholder and keeps the portfolio honest.
        </p>
      </div>
    </section>
  );
}
