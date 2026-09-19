"use client";

import { motion } from "framer-motion";
import { ArrowRight, MoveRight, Sparkles } from "lucide-react";

import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.12),transparent_25%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-medium text-sky-700">
            <Sparkles className="h-3.5 w-3.5" />
            Startup growth operator
          </div>

          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-slate-500">
              {profile.name}
            </p>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {profile.role}
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-600">{profile.tagline}</p>
            <p className="max-w-2xl text-base leading-7 text-slate-600">{profile.intro}</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              {profile.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              {profile.ctaSecondary}
              <MoveRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Operations</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-900">Growth engine overview</h2>
              </div>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                Active
              </span>
            </div>

            <div className="space-y-4">
              {[
                "Lead generation",
                "CRM lifecycle",
                "Client communication",
                "Marketplace coordination",
                "Retention planning",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                    ✓
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 border-t border-slate-200 pt-5 sm:grid-cols-3">
              {[
                ["Pipeline", "Structured"],
                ["Reports", "Clear"],
                ["Retention", "Proactive"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-slate-900 p-3 text-white">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-300">{label}</div>
                  <div className="mt-2 text-lg font-semibold">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
