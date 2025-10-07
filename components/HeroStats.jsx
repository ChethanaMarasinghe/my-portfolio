export default function HeroStats({ projects = 0, skills = 0, hackathons = 0 }) {
  const items = [
    { label: "Projects", value: `${projects}+` },
    { label: "Technologies", value: `${skills}+` },
    { label: "Hackathons", value: `${hackathons}+` },
  ];

  return (
    <div className="mt-6 grid grid-cols-3 gap-3">
      {items.map((it) => (
        <div
          key={it.label}
          className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-4 py-3 text-center shadow-sm"
        >
          <div className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
            {it.value}
          </div>
          <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400">{it.label}</div>
        </div>
      ))}
    </div>
  );
}