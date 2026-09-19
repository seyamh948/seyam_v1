import { ChartNoAxesCombined, Gauge, RefreshCw, TrendingUp } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

const metrics = [
  { label: "New Leads", value: "84", note: "Sample" },
  { label: "Qualified Leads", value: "41", note: "Sample" },
  { label: "Outreach", value: "320", note: "Sample" },
  { label: "Response Rate", value: "18%", note: "Sample" },
  { label: "Meetings", value: "22", note: "Sample" },
  { label: "Proposals", value: "12", note: "Sample" },
  { label: "Deals", value: "05", note: "Sample" },
  { label: "Revenue", value: "$Pending", note: "Sample" },
  { label: "Client Retention", value: "82%", note: "Sample" },
  { label: "Repeat Clients", value: "06", note: "Sample" },
  { label: "Team Productivity", value: "74%", note: "Sample" },
];

export function KpiDashboard() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="KPI & analytics"
        title="Monitoring growth signals with a clear operating dashboard"
        description="The focus is not inflated metrics, but consistent tracking across lead flow, response quality, conversion readiness, retention, and team execution."
      />

      <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Sample dashboard</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">Growth overview</h3>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700">
            <Gauge className="h-4 w-4" />
            Demo metrics only
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{metric.label}</span>
                {metric.label.includes("Retention") ? (
                  <TrendingUp className="h-4 w-4 text-emerald-600" />
                ) : metric.label.includes("Productivity") ? (
                  <RefreshCw className="h-4 w-4 text-sky-600" />
                ) : (
                  <ChartNoAxesCombined className="h-4 w-4 text-slate-600" />
                )}
              </div>
              <div className="text-3xl font-semibold text-slate-900">{metric.value}</div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                {metric.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
