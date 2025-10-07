"use client";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import SocialLinks from "./SocialLinks";

export default function Contact({ email, phone, location }) {
  const mailto = `mailto:${email}?subject=Portfolio Contact&body=Hi Chethana,`;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-sky-50/60 to-emerald-50/60 dark:from-slate-800/60 dark:to-slate-800/30 p-6 shadow-sm">
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />

      <p className="text-slate-700 dark:text-slate-300 text-base">
        Let's connect me about internships, collaborations, or freelance opportunities.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <a
          className="group rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 p-4 hover:-translate-y-0.5 hover:shadow-md transition-all"
          href={mailto}
        >
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-gradient-to-br from-sky-500/20 to-emerald-500/20 text-emerald-600">
              <FiMail />
            </span>
            <div>
              <p className="text-sm text-slate-500">Email</p>
              <p className="font-medium text-sky-700 dark:text-sky-400 break-words">{email}</p>
            </div>
          </div>
        </a>

        <a
          className="group rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 p-4 hover:-translate-y-0.5 hover:shadow-md transition-all"
          href={`tel:${phone}`}
        >
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-gradient-to-br from-sky-500/20 to-emerald-500/20 text-sky-600">
              <FiPhone />
            </span>
            <div>
              <p className="text-sm text-slate-500">Phone</p>
              <p className="font-medium text-slate-800 dark:text-slate-200">{phone}</p>
            </div>
          </div>
        </a>

        <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 p-4">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-gradient-to-br from-sky-500/20 to-emerald-500/20 text-sky-500">
              <FiMapPin />
            </span>
            <div>
              <p className="text-sm text-slate-500">Location</p>
              <p className="font-medium text-slate-800 dark:text-slate-200 break-words">{location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA and socials */}
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <a
          href={mailto}
          className="btn-shimmer inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-sky-600 to-emerald-600 px-4 py-2 text-white hover:from-sky-500 hover:to-emerald-500"
        >
          <FiSend /> Send an Email
        </a>

        <SocialLinks
          links={{ email, github: undefined, linkedin: undefined, behance: undefined }}
          variant="icons"
          className="hidden"
        />
      </div>
    </div>
  );
}