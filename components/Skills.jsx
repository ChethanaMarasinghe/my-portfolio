import { getSkillIcon } from "./skillIcons";

function SkillBadge({ label }) {
  const Icon = getSkillIcon(label);
  return (
    <div className="group flex flex-col items-center text-center">
      <div className="relative h-20 w-20">
        <div
          className="absolute inset-0 rounded-full group-hover:animate-turn-slower"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(139,92,246,0.45), rgba(59,130,246,0.45), rgba(16,185,129,0.45), rgba(139,92,246,0.45))",
          }}
        />
        <div className="absolute inset-[6px] rounded-full bg-white/85 dark:bg-slate-900/70 ring-1 ring-purple-500/30 shadow-sm grid place-items-center transition-transform duration-200 group-hover:scale-105 group-hover:shadow-md">
          <Icon size={28} className="text-slate-800 dark:text-slate-100" />
        </div>
      </div>
      <span className="mt-3 w-24 text-sm md:text-[15px] font-medium text-slate-700 dark:text-slate-300 break-words">{label}</span>
    </div>
  );
}

export default function Skills({ data }) {
  return (
    <div className="space-y-10">
      {data.map((group) => (
        <div key={group.category} className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 p-6 shadow-sm">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">{group.category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-8 gap-y-8">
            {group.items.map((s) => <SkillBadge key={s} label={s} />)}
          </div>
        </div>
      ))}
    </div>
  );
}