"use client";
import { useState } from "react";
import Link from "next/link";
import { PROFILE } from "../data/site";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
//   { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-[1720px] px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold text-slate-800 dark:text-slate-100">
            <span className="inline-block rounded bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
              Chethana
            </span>{" "}
            Marasinghe
          </Link>

          <nav className="hidden md:flex items-center gap-3">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-2 py-1">
                {item.label}
              </a>
            ))}
            {/* <a
              href={PROFILE.resumeUrl || "/resume.pdf"}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-slate-300 dark:border-slate-700 px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              View CV
            </a> */}
            <a
              href={PROFILE.resumeUrl || "/resume.pdf"}
              className="rounded-md bg-sky-600 dark:bg-sky-500 px-3 py-2 text-sm font-medium text-white shadow hover:bg-sky-700 dark:hover:bg-sky-600"
              download
            >
              Download CV
            </a>
            <ThemeToggle />
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 p-2 text-slate-700 dark:text-slate-200"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-3">
            <div className="flex flex-col gap-2 border-t border-slate-200 dark:border-slate-800 pt-3">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-2 px-3">
                <a
                  href={PROFILE.resumeUrl || "/resume.pdf"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-md border border-slate-300 dark:border-slate-700 px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-100 text-center hover:bg-slate-50 dark:hover:bg-slate-800"
                  onClick={() => setOpen(false)}
                >
                  View CV
                </a>
                <a
                  href={PROFILE.resumeUrl || "/resume.pdf"}
                  className="flex-1 rounded-md bg-sky-600 dark:bg-sky-500 px-3 py-2 text-sm font-medium text-white text-center hover:bg-sky-700 dark:hover:bg-sky-600"
                  download
                  onClick={() => setOpen(false)}
                >
                  Download
                </a>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}