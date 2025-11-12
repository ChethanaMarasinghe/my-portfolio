"use client";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function About({ profile }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {/* About text - Now with proper height control */}
      <Reveal className="md:col-span-2">
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 p-6 shadow-sm h-full flex flex-col">
          <div className="flex-1"> {/* This makes the text area grow to fill space */}
            <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line text-base md:text-lg leading-relaxed">
              {profile.aboutLong}
            </p>
          </div>
          
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={profile.resumeUrl || "/resume.pdf"}
              target="_blank"
              rel="noreferrer"
              className="btn-shimmer rounded-md bg-gradient-to-r from-sky-600 to-emerald-600 px-4 py-2 text-white hover:from-sky-500 hover:to-emerald-500"
            >
              View Resume
            </a>

            <SocialLinks
              links={{
                github: profile.social?.github,
                linkedin: profile.social?.linkedin,
                behance: profile.social?.behance,
                email: profile.email,
              }}
              variant="icons"
              className="ml-1"
              size={22}
            />
          </div>
        </div>
      </Reveal>

      {/* Quick info - Adjusted to match height */}
      <Reveal delay={0.05}>
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 p-6 shadow-sm h-full">
          <h3 className="font-semibold text-slate-900 dark:text-white text-lg mb-4">
            Quick Info
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 p-3">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-sky-500/20 to-emerald-500/20 text-emerald-500">
                <FiMail />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-500">Email</p>
                <a className="text-sm font-medium text-sky-700 dark:text-sky-400 break-words hover:underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 p-3">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-sky-500/20 to-emerald-500/20 text-sky-500">
                <FiPhone />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-500">Phone</p>
                <a className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:underline" href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
                  {profile.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}