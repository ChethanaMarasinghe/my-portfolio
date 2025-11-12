"use client";
import { useEffect, useState } from "react";
import FancyAvatar from "./FancyAvatar";
import SocialLinks from "./SocialLinks";
import TechMarquee from "./TechMarquee";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

function useTyped(words = [], speed = 80, pause = 1200) {
  const [i, setI] = useState(0);       // which word
  const [t, setT] = useState("");      // text
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length] || "";
    let timeout = speed;

    if (!del && t.length < word.length) {
      setTimeout(() => setT(word.slice(0, t.length + 1)), timeout);
    } else if (!del && t.length === word.length) {
      timeout = pause;
      const id = setTimeout(() => setDel(true), timeout);
      return () => clearTimeout(id);
    } else if (del && t.length > 0) {
      setTimeout(() => setT(word.slice(0, t.length - 1)), speed / 1.3);
    } else if (del && t.length === 0) {
      setDel(false);
      setI((v) => v + 1);
    }
  }, [t, del, i, words, speed, pause]);

  return t;
}

export default function Hero({ profile, techs }) {
  const typed = useTyped(
    ["Full‑Stack Developer", "Frontend Developer", "UI/UX Developer", "AI Software Developer", "Software QA Engineer", "MERN Stack Developer"],
    75,
    1200
  );

  return (
    <section className="relative mx-auto max-w-[1720px] px-6 pt-10 md:pt-12 pb-10">
      <div className="rounded-3xl border border-slate-200/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/50 backdrop-blur-md shadow-soft">
        <div className="grid gap-8 p-6 md:p-10 lg:p-12 md:grid-cols-12 md:items-center">
          {/* Photo */}
          <div className="order-2 md:order-1 md:col-span-5 flex justify-center md:justify-start">
            <FancyAvatar src={profile.image} alt={profile.name} />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 md:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 px-3 py-1 text-xs text-slate-600 dark:text-slate-300">
              Open to opportunities
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            </span>

            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              {" "}
              <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>

            {/* typed subline */}
            <p className="mt-1 text-lg sm:text-xl text-slate-600 dark:text-slate-300">
              {typed}
              <span className="typed-caret" />
            </p>

            <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-300">
              {profile.intro}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}?subject=Hello Chethana&body=Hi, I saw your portfolio and...`}
                className="btn-shimmer rounded-md bg-gradient-to-r from-emerald-600 to-sky-600 px-5 py-2.5 text-white shadow hover:from-emerald-500 hover:to-sky-500"
              >
                Contact Me
              </a>
              {/* CHANGED: View Resume (opens in new tab), removed download */}
              <a
                href={profile.resumeUrl || "/resume.pdf"}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-slate-300 dark:border-slate-700 px-5 py-2.5 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                View Resume
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 px-3 py-1.5 text-slate-700 dark:text-slate-300">
                <FiMapPin className="text-sky-500" /> {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 px-3 py-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <FiMail className="text-emerald-500" /> {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 px-3 py-1.5 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <FiPhone className="text-sky-500" /> {profile.phone}
              </a>
            </div>

            <SocialLinks
              links={{
                github: profile.social?.github,
                linkedin: profile.social?.linkedin,
                behance: profile.social?.behance,
              }}
              className="mt-5"
              variant="buttons"
              size={20}
              showLabels
            />
          </div>
        </div>

        {/* slower tech marquee */}
        <div className="px-6 md:px-10 lg:px-12 pb-6">
          <TechMarquee items={techs} duration={70} />
        </div>
      </div>
    </section>
  );
}