export default function Footer({ siteTitle }) {
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600 dark:text-slate-400">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteTitle}. All rights reserved.</p>
          <p>Built with Next.js & Tailwind. Deployed on Vercel.</p>
        </div>
      </div>
    </footer>
  );
}