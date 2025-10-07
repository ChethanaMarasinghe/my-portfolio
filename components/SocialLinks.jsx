import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";

export default function SocialLinks({ links, className = "", size = 20, variant = "buttons", showLabels = true }) {
  const items = [
    { key: "github", icon: FaGithub, label: "GitHub", href: links.github },
    { key: "linkedin", icon: FaLinkedin, label: "LinkedIn", href: links.linkedin },
    { key: "behance", icon: FaBehance, label: "Behance", href: links.behance },
  ].filter((i) => i.href);

  if (variant === "buttons") {
    return (
      <div className={`flex flex-wrap items-center gap-3 ${className}`}>
        {items.map(({ key, icon: Icon, label, href }) => (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 px-3.5 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            title={label}
          >
            <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-sky-500/20 to-emerald-500/20 ring-1 ring-purple-500/30">
              <Icon size={size} />
            </span>
            {showLabels && <span className="text-sm font-medium">{label}</span>}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {items.map(({ key, icon: Icon, href, label }) => (
        <a key={key} href={href} target="_blank" rel="noreferrer" aria-label={label} className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" title={label}>
          <Icon size={size + 2} />
        </a>
      ))}
    </div>
  );
}