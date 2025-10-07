export default function SubtleBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-24 -left-24 h-[55vmax] w-[55vmax] rounded-full bg-sky-400/10 dark:bg-sky-300/12 blur-3xl aurora-slow" />
      <div className="absolute -bottom-40 -right-28 h-[55vmax] w-[55vmax] rounded-full bg-emerald-400/10 dark:bg-emerald-300/12 blur-3xl aurora-slow [animation-delay:6s]" />
      <div className="absolute top-1/3 -right-24 h-[38vmax] w-[38vmax] rounded-full bg-sky-300/8 dark:bg-sky-200/10 blur-3xl aurora-slow [animation-delay:12s]" />
    </div>
  );
}