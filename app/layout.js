import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SITE } from "../data/site";
import DynamicBackground from "../components/DynamicBackground"; 
export const metadata = {
  metadataBase: new URL("http://chethana-marasinghe.me"),
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-100 antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var ls = localStorage.getItem('theme');
                  var m = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (ls === 'dark' || (!ls && m)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <DynamicBackground /> {/* active background */}
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded px-3 py-1">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer siteTitle={SITE.title} />
      </body>
    </html>
  );
}