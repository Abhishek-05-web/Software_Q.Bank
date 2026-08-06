import { Link } from "react-router-dom";
import { ArrowRight, Clock3, Inbox } from "lucide-react";

export function NavCard({ to, title, subtitle, meta }: { to: string; title: string; subtitle?: string; meta?: string }) {
  return (
    <Link
      to={to}
      className="group flex flex-col justify-between rounded-2xl border border-brand-100 dark:border-brand-800 bg-white dark:bg-brand-900/40 p-5 shadow-card hover:-translate-y-0.5 hover:shadow-lg transition"
    >
      <div>
        <h3 className="font-display text-lg font-semibold mb-1">{title}</h3>
        {subtitle && <p className="text-sm text-brand-500 dark:text-brand-400">{subtitle}</p>}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs font-mono text-brand-400">{meta}</span>
        <ArrowRight size={17} className="text-mark-500 group-hover:translate-x-1 transition" />
      </div>
    </Link>
  );
}

export function ComingSoon({ label }: { label: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-brand-200 dark:border-brand-700 p-5 flex flex-col gap-2 opacity-70">
      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-mark-600">
        <Clock3 size={14} /> Coming Soon
      </span>
      <h3 className="font-display text-lg font-semibold">{label}</h3>
      <p className="text-sm text-brand-500 dark:text-brand-400">This section is being added to the question bank.</p>
    </div>
  );
}

export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-brand-100 dark:bg-brand-800 overflow-hidden">
      <div className="h-full bg-mark-500 rounded-full transition-all" style={{ width: `${Math.round(value * 100)}%` }} />
    </div>
  );
}

export function EmptyState({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="text-center py-16 text-brand-400">
      <Inbox className="mx-auto mb-3" size={32} />
      <p className="font-semibold text-ink dark:text-brand-200">{title}</p>
      {hint && <p className="text-sm mt-1">{hint}</p>}
    </div>
  );
}
