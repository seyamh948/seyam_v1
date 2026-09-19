"use client";

import { GitBranch, Globe, Link, Mail } from "lucide-react";
import { useState } from "react";

import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";

import { SectionHeading } from "@/components/section-heading";

const contactLinks = [
  { label: "Email", href: `mailto:${socialLinks.email}`, icon: Mail },
  { label: "LinkedIn", href: socialLinks.linkedin, icon: Link },
  { label: "GitHub", href: socialLinks.github, icon: GitBranch },
  { label: "Portfolio", href: socialLinks.portfolio, icon: Globe },
];

const initialState = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
};

export function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (errorMessage) setErrorMessage("");
    if (emailError) setEmailError("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const hasEmptyFields = Object.values(formData).some((value) => value.trim() === "");
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

    if (hasEmptyFields) {
      setErrorMessage("Please fill in all required fields");
    }

    if (!emailIsValid) {
      setEmailError("Enter a valid email address");
    }

    if (hasEmptyFields || !emailIsValid) {
      return;
    }

    setErrorMessage("");
    setEmailError("");
    setFormData(initialState);
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build a smarter acquisition system"
        description="Use this section to connect with potential clients, startup founders, and business partners who need structured digital growth operations."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-7 text-white shadow-[0_20px_70px_rgba(15,23,42,0.14)]">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.22em] text-sky-300">{profile.name}</p>
            <h3 className="mt-3 text-2xl font-semibold">Growth systems & acquisition support</h3>
          </div>

          <div className="space-y-4">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === "Portfolio" || label === "LinkedIn" || label === "GitHub" ? "_blank" : undefined}
                rel={label === "Portfolio" || label === "LinkedIn" || label === "GitHub" ? "noreferrer" : undefined}
                className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-800/70 p-3 text-slate-200 transition hover:border-slate-500"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-500"
                aria-invalid={Boolean(emailError)}
              />
              {emailError ? <p className="mt-2 text-sm text-red-600">{emailError}</p> : null}
            </div>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-700">
                Company
              </label>
              <input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project inquiry"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-500"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your startup, goals, and acquisition needs."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-500"
            />
          </div>

          {errorMessage ? <p className="mt-4 text-sm font-medium text-red-600">{errorMessage}</p> : null}

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
