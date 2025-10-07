"use client";
import { useMemo } from "react";
import { getSkillIcon } from "./skillIcons";

export default function TechMarquee({ items = [], duration = 65 }) {
  const list = useMemo(() => {
    const uniq = Array.from(new Set(items.map((s) => s.trim()))).slice(0, 16);
    return uniq.length ? uniq : ["React", "Next.js", "Node.js", "MongoDB", "MySQL", "Tailwind CSS"];
  }, [items]);

  const doubled = [...list, ...list];

  return (
    <div className="relative mt-8 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 backdrop-blur">
      <div className="marquee-track" style={{ ["--marquee-duration"]: `${duration}s` }}>
        {doubled.map((s, i) => {
          const Icon = getSkillIcon(s);
          return (
            <div key={`${s}-${i}`} className="flex items-center gap-2 px-5 py-3">
              <span className="grid h-8 w-8 place-items-center rounded-full ring-1 ring-purple-500/40 bg-gradient-to-br from-violet-500/10 to-indigo-500/10">
                <Icon size={18} className="text-slate-800 dark:text-slate-100" />
              </span>
              <span className="text-sm text-slate-700 dark:text-slate-300">{s}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}