import {
  FiLayers,
  FiPenTool,
  FiSmartphone,
  FiCode,
  FiServer,
} from "react-icons/fi";
import { SiOpenai } from "react-icons/si";

const SERVICES = [
  {
    icon: FiPenTool,
    title: "UI/UX Design",
    desc: "Figma-based prototyping for web and mobile — intuitive, user-centered interfaces with modern design principles.",
  },
  {
    icon: FiCode,
    title: "Frontend Development",
    desc: "Specialized in React, Next.js, and modern UI frameworks.",
  },
  {
    icon: FiLayers,
    title: "Full‑Stack Web Apps",
    desc: "End-to-end web applications with both frontend and backend expertise.",
  },
  {
    icon: FiServer,
    title: "Backend Development",
    desc: "API development, databases, and server-side logic.",
  },

  {
    icon: FiSmartphone,
    title: "Mobile App Development",
    desc: "Cross‑platform mobile solutions with responsive design, smooth performance, and seamless API integration.",
  },

  {
    icon: SiOpenai,
    title: "AI Integrations",
    desc: "Chatbots and assistants powered by OpenAI and robust backends.",
  },
  
  
];

// Optional: subtle color variety per card (repeats)
const BADGE_STYLES = [
  "from-sky-500/15 to-emerald-500/15 ring-sky-400/30",
  "from-indigo-500/15 to-purple-500/15 ring-purple-400/30",
  "from-emerald-500/15 to-sky-500/15 ring-emerald-400/30",
  "from-fuchsia-500/15 to-violet-500/15 ring-fuchsia-400/30",
  "from-orange-500/15 to-rose-500/15 ring-orange-400/30",
  "from-cyan-500/15 to-blue-500/15 ring-cyan-400/30",
];

export default function Services() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {SERVICES.map(({ icon: Icon, title, desc }, idx) => {
        const badge = BADGE_STYLES[idx % BADGE_STYLES.length];
        return (
          <div
            key={title}
            className="group h-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              className={`inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${badge} ring-1 transition-transform duration-200 group-hover:scale-105`}
              title={title}
            >
              <Icon className="text-slate-800 dark:text-slate-100" size={22} aria-hidden />
            </div>

            <h3 className="mt-4 text-base md:text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}