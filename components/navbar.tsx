"use client";

import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Timeline", href: "#experience" },
  { label: "Reach out", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const savedTheme = window.localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDarkMode);
    root.style.colorScheme = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTheme = () => {
    const nextMode = !isDarkMode;
    const root = document.documentElement;

    root.classList.toggle("dark", nextMode);
    root.style.colorScheme = nextMode ? "dark" : "light";
    localStorage.setItem("theme", nextMode ? "dark" : "light");
    setIsDarkMode(nextMode);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Go to top">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white dark:bg-slate-100 dark:text-slate-900">
            AM
          </span>
          <span className="truncate text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300 sm:text-sm">
            Alex Morgan
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex dark:text-slate-300">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-slate-900 dark:hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 md:flex"
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-slate-900 px-3 text-[11px] font-medium text-white transition hover:bg-slate-700 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 sm:px-4 sm:text-sm"
          >
            <span className="hidden sm:inline">Book a conversation</span>
            <span className="sm:hidden">Reach out</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav className="border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-col gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-2 py-2.5 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
