import { Link, NavLink, useLocation } from "react-router-dom";
import { Home, Compass, Bookmark, BarChart3, Sun, Moon, Sigma } from "lucide-react";
import { useTheme } from "../lib/theme";
import { Fragment } from "react";
import { InstallPrompt } from "./InstallPrompt";
import { PwaStatus } from "./PwaStatus";

const NAV = [
  { to: "/", label: "Home", icon: Home },
  { to: "/browse", label: "Classes", icon: Compass },
  { to: "/bookmarks", label: "Bookmarks", icon: Bookmark },
  { to: "/progress", label: "Progress", icon: BarChart3 }
];

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <span className="grid place-items-center w-8 h-8 rounded-lg bg-ink dark:bg-brand-700 text-mark-400">
        <Sigma size={17} strokeWidth={2.5} />
      </span>
      <span className="font-display font-semibold text-[1.05rem] tracking-tight leading-none">
        Question Bank <span className="text-mark-500">PYQs</span>
      </span>
    </Link>
  );
}

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="grid place-items-center w-9 h-9 rounded-full border border-brand-200 dark:border-brand-700 text-brand-600 dark:text-mark-400 hover:bg-brand-100 dark:hover:bg-brand-800 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mark-500"
    >
      {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col bg-paper dark:bg-slate-950 bg-grid-faint bg-[length:28px_28px]">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-mark-500 text-white px-3 py-2 rounded">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 backdrop-blur bg-paper/85 dark:bg-slate-950/85 border-b border-brand-100 dark:border-brand-800 pt-[env(safe-area-inset-top)]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Logo />
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition ${
                    isActive ? "bg-brand-600 text-white" : "text-brand-600 dark:text-brand-300 hover:bg-brand-100 dark:hover:bg-brand-800"
                  }`
                }
              >
                <Icon size={16} /> {label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <InstallPrompt />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <PwaStatus />

      <main id="main" className="flex-1 max-w-6xl w-full mx-auto px-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] py-6 pb-24 md:pb-8">
        {children}
      </main>

      <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-paper/95 dark:bg-slate-950/95 backdrop-blur border-t border-brand-100 dark:border-brand-800 flex justify-around pt-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))]">
        {NAV.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-0.5 min-w-[44px] min-h-[44px] px-3 py-1.5 rounded-lg text-[0.65rem] font-semibold ${
                isActive ? "text-mark-600" : "text-brand-500 dark:text-brand-400"
              }`
            }
          >
            <Icon size={19} /> {label}
          </NavLink>
        ))}
      </nav>

      <footer className="hidden md:block border-t border-brand-100 dark:border-brand-800 py-6 text-center text-xs text-brand-500 dark:text-brand-400">
        Questions are presented for educational practice. Editorial corrections are applied where a supplied source contains an evident
        mathematical or formatting error. Not affiliated with or endorsed by CBSE.
      </footer>
    </div>
  );
}

export function Breadcrumb({ trail }: { trail: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm mb-5 text-brand-500 dark:text-brand-400">
      {trail.map((item, i) => (
        <Fragment key={i}>
          {i > 0 && <span className="opacity-50">/</span>}
          {item.to ? (
            <Link to={item.to} className="hover:text-mark-600 font-medium">{item.label}</Link>
          ) : (
            <span className="text-ink dark:text-brand-100 font-semibold">{item.label}</span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}

export function useIsActivePath(prefix: string) {
  const { pathname } = useLocation();
  return pathname.startsWith(prefix);
}
