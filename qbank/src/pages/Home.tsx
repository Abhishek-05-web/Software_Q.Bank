import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, BookOpen, Bookmark, CheckCircle2 } from "lucide-react";
import { questionBank, totalQuestionCount, allQuestionsFlat } from "../data/questionBank";
import { NavCard, ComingSoon } from "../components/UI";
import { useStringSet, STORAGE_KEYS } from "../lib/storage";

export function Home() {
  const total = totalQuestionCount();
  const flat = allQuestionsFlat();
  const completed = useStringSet(STORAGE_KEYS.completed);
  const bookmarked = useStringSet(STORAGE_KEYS.bookmarked);
  const activeClasses = questionBank.filter((c) => c.active).length;
  const activeChapters = flat.reduce((set, x) => set.add(x.chapterId), new Set<string>()).size;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-brand-100 dark:border-brand-800 bg-ink dark:bg-brand-900 text-white px-6 py-12 sm:px-12 sm:py-16 mb-10">
        <div className="absolute inset-0 bg-grid-faint bg-[length:24px_24px] opacity-[0.08]" />
        <div className="relative max-w-2xl">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-mark-400 mb-4">
            <Sparkles size={14} /> CBSE Class 9–12 Question Bank
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold leading-[1.1] mb-4">
            Practice Previous Year Questions.<br />Learn Smarter. Score Better.
          </h1>
          <p className="text-brand-200 text-base sm:text-lg mb-7 max-w-lg">
            Verified PYQs with step-by-step solutions, worked hints and real exam formatting — starting with Class 10 Mathematics.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/browse/class-10/mathematics/chapter-wise/real-numbers/2026" className="inline-flex items-center gap-2 bg-mark-500 hover:bg-mark-600 transition text-white font-semibold px-5 py-3 rounded-xl shadow-glow">
              Start Practising <ArrowRight size={17} />
            </Link>
            <Link to="/browse" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition font-semibold px-5 py-3 rounded-xl">
              Browse Questions
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        <Stat icon={<BookOpen size={16} />} label="Total Questions" value={total} />
        <Stat icon={<Sparkles size={16} />} label="Active Classes" value={activeClasses} />
        <Stat icon={<CheckCircle2 size={16} />} label="Completed" value={completed.items.length} />
        <Stat icon={<Bookmark size={16} />} label="Bookmarked" value={bookmarked.items.length} />
      </section>

      {/* Continue practising */}
      {completed.items.length > 0 && (
        <Section title="Continue Practising">
          <NavCard
            to="/browse/class-10/mathematics/chapter-wise/real-numbers/2026"
            title="Real Numbers — 2026"
            subtitle={`${completed.items.length} question(s) completed so far`}
            meta="Resume →"
          />
        </Section>
      )}

      {/* Classes */}
      <Section title="Browse by Class">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {questionBank.map((c) =>
            c.active ? (
              <NavCard key={c.id} to={`/browse/${c.id}`} title={c.name} subtitle={`${activeChapters} active chapter(s)`} meta="Open →" />
            ) : (
              <ComingSoon key={c.id} label={c.name} />
            )
          )}
        </div>
      </Section>

      {/* Features */}
      <Section title="Built for Focused Practice">
        <div className="grid sm:grid-cols-3 gap-4">
          <Feature title="Verified solutions" text="Every hint, answer and full solution is editorially reviewed for mathematical correctness." />
          <Feature title="Works everywhere" text="Install it on your phone, tablet or laptop — iOS, Android, Windows and macOS all supported." />
          <Feature title="Tracks your progress" text="Bookmarks and completion are saved on this device, so you always pick up where you left off." />
        </div>
      </Section>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="rounded-xl border border-brand-100 dark:border-brand-800 bg-white dark:bg-brand-900/40 p-4">
      <div className="flex items-center gap-1.5 text-brand-400 mb-2">{icon}<span className="text-xs font-semibold uppercase tracking-wide">{label}</span></div>
      <p className="font-display text-2xl font-semibold">{value}</p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-brand-100 dark:border-brand-800 p-5 bg-white dark:bg-brand-900/40">
      <h3 className="font-semibold mb-1.5">{title}</h3>
      <p className="text-sm text-brand-500 dark:text-brand-400 leading-6">{text}</p>
    </div>
  );
}
