"use client";

import { motion } from "framer-motion";

import { responsibilityCards } from "@/data/responsibilities";

import { SectionHeading } from "@/components/section-heading";

export function Responsibilities() {
  return (
    <section id="services" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core responsibilities"
          title="Managing the end-to-end digital growth operation"
          description="The team lead role combines strategy, execution, communication, measurement, and coordination to create a reliable path from market opportunity to client retention."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {responsibilityCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="rounded-[1.5rem] border border-slate-800 bg-slate-900/80 p-6 shadow-[0_10px_40px_rgba(15,23,42,0.15)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sm font-semibold text-sky-300">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{card.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
