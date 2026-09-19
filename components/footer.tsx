import { profile } from "@/data/profile";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Timeline", href: "#experience" },
  { label: "Reach out", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
              AM
            </span>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-900">
                {profile.name}
              </div>
              <div className="text-xs text-slate-500">{profile.role}</div>
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap gap-5 text-sm text-slate-600">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-slate-900">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
