"use client";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";

export default function About({ profile }) {
  return (
    <div className="w-full">
      <Reveal>
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 p-8 shadow-sm w-full">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          {/* Two Paragraph Layout */}
          <div className="w-full space-y-6 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* First Paragraph */}
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-sky-500 to-emerald-500 rounded-full mt-1"></div>
                  <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed md:leading-loose text-justify">
                    {profile.aboutParagraph1}
                  </p>
                </div>
              </div>

              {/* Second Paragraph */}
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-sky-500 rounded-full mt-1"></div>
                  <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed md:leading-loose text-justify">
                    {profile.aboutParagraph2}
                  </p>
                </div>
              </div>
            </div>

            {/* Highlight Box */}
            <div className="bg-gradient-to-r from-sky-50 to-emerald-50 dark:from-sky-900/20 dark:to-emerald-900/20 border border-sky-200 dark:border-sky-700 rounded-lg p-4 text-center">
              <p className="text-slate-700 dark:text-slate-300 font-medium italic">
                Passionate about creating innovative solutions that balance technical excellence with outstanding user experiences.
              </p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={profile.resumeUrl || "/resume.pdf"}
              target="_blank"
              rel="noreferrer"
              className="btn-shimmer rounded-lg bg-gradient-to-r from-sky-600 to-emerald-600 px-8 py-3 text-white hover:from-sky-500 hover:to-emerald-500 font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Resume
            </a>

            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <span className="hidden sm:inline">Connect with me:</span>
              <SocialLinks
                links={{
                  github: profile.social?.github,
                  linkedin: profile.social?.linkedin,
                  behance: profile.social?.behance,
                  email: profile.email,
                }}
                variant="icons"
                size={26}
                className="flex gap-4"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}