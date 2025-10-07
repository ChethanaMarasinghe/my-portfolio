export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-[1720px] px-6 py-12 md:py-16">
      <div className="mb-7">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight inline-flex items-center gap-3">
          <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
            {title}
          </span>
          <span className="h-px w-16 bg-gradient-to-r from-sky-500/60 to-emerald-500/60" />
        </h2>
      </div>
      {children}
    </section>
  );
}