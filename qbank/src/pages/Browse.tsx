import { useParams } from "react-router-dom";
import { questionBank } from "../data/questionBank";
import { Breadcrumb } from "../components/Layout";
import { NavCard, ComingSoon, ProgressBar } from "../components/UI";
import { YearView } from "./YearView";
import { NotFound } from "./NotFound";
import { useStringSet, STORAGE_KEYS } from "../lib/storage";

const MODE_SLUG = { chapterWise: "chapter-wise", setWise: "set-wise" } as const;
const MODE_LABEL = { "chapter-wise": "Chapter-wise", "set-wise": "Set-wise" } as const;

export function Browse() {
  const params = useParams();
  const segments = (params["*"] ?? "").split("/").filter(Boolean);
  const [classId, subjectId, modeSlug, chapterId, yearStr] = segments;
  const { has: isCompleted } = useStringSet(STORAGE_KEYS.completed);

  const base = "/browse";
  const trail: { label: string; to?: string }[] = [{ label: "Home", to: "/" }, { label: "All Classes", to: segments.length ? base : undefined }];

  // ── Level 0: choose a class ──────────────────────────────────────────
  if (!classId) {
    return (
      <div>
        <Breadcrumb trail={trail} />
        <Header title="All Classes" subtitle="Pick a class to browse its subjects and previous-year questions." />
        <Grid>
          {questionBank.map((c) =>
            c.active ? (
              <NavCard key={c.id} to={`${base}/${c.id}`} title={c.name} subtitle={`${c.subjects.filter((s) => s.active).length} active subject(s)`} meta="Open →" />
            ) : (
              <ComingSoon key={c.id} label={c.name} />
            )
          )}
        </Grid>
      </div>
    );
  }

  const cls = questionBank.find((c) => c.id === classId);
  if (!cls) return <NotFound />;
  trail.push({ label: cls.name, to: subjectId ? `${base}/${cls.id}` : undefined });

  // ── Level 1: choose a subject ────────────────────────────────────────
  if (!subjectId) {
    return (
      <div>
        <Breadcrumb trail={trail} />
        <Header title={cls.name} subtitle="Choose a subject." />
        <Grid>
          {cls.subjects.map((s) =>
            s.active ? (
              <NavCard key={s.id} to={`${base}/${cls.id}/${s.id}`} title={s.name} meta="Open →" />
            ) : (
              <ComingSoon key={s.id} label={s.name} />
            )
          )}
        </Grid>
      </div>
    );
  }

  const subject = cls.subjects.find((s) => s.id === subjectId);
  if (!subject) return <NotFound />;
  trail.push({ label: subject.name, to: modeSlug ? `${base}/${cls.id}/${subject.id}` : undefined });

  // ── Level 2: chapter-wise vs set-wise ────────────────────────────────
  if (!modeSlug) {
    return (
      <div>
        <Breadcrumb trail={trail} />
        <Header title={subject.name} subtitle="Practice by chapter, or by full previous-year question sets." />
        <Grid>
          {(["chapterWise", "setWise"] as const).map((mode) =>
            subject[mode].length > 0 ? (
              <NavCard key={mode} to={`${base}/${cls.id}/${subject.id}/${MODE_SLUG[mode]}`} title={MODE_LABEL[MODE_SLUG[mode]]} subtitle={`${subject[mode].length} chapter(s)`} meta="Open →" />
            ) : (
              <ComingSoon key={mode} label={MODE_LABEL[MODE_SLUG[mode]]} />
            )
          )}
        </Grid>
      </div>
    );
  }

  const modeKey = (Object.entries(MODE_SLUG).find(([, slug]) => slug === modeSlug)?.[0] as "chapterWise" | "setWise") || undefined;
  if (!modeKey) return <NotFound />;
  const chapters = subject[modeKey];
  trail.push({ label: MODE_LABEL[modeSlug as "chapter-wise" | "set-wise"], to: chapterId ? `${base}/${cls.id}/${subject.id}/${modeSlug}` : undefined });

  // ── Level 3: choose a chapter ────────────────────────────────────────
  if (!chapterId) {
    return (
      <div>
        <Breadcrumb trail={trail} />
        <Header title={MODE_LABEL[modeSlug as "chapter-wise" | "set-wise"]} subtitle={`${subject.name} · ${cls.name}`} />
        <Grid>
          {chapters.map((ch) =>
            ch.active ? (
              <NavCard key={ch.id} to={`${base}/${cls.id}/${subject.id}/${modeSlug}/${ch.id}`} title={ch.name} subtitle={`${ch.years.length} year(s) available`} meta="Open →" />
            ) : (
              <ComingSoon key={ch.id} label={ch.name} />
            )
          )}
          {chapters.length === 0 && <ComingSoon label="More chapters" />}
        </Grid>
      </div>
    );
  }

  const chapter = chapters.find((c) => c.id === chapterId);
  if (!chapter) return <NotFound />;
  trail.push({ label: chapter.name, to: yearStr ? `${base}/${cls.id}/${subject.id}/${modeSlug}/${chapter.id}` : undefined });

  // ── Level 4: choose a year ───────────────────────────────────────────
  if (!yearStr) {
    return (
      <div>
        <Breadcrumb trail={trail} />
        <Header title={chapter.name} subtitle={`${subject.name} · ${cls.name}`} />
        <Grid>
          {chapter.years.map((y) => {
            const done = y.questions.filter((q) => isCompleted(q.id)).length;
            const pct = y.questions.length ? done / y.questions.length : 0;
            return (
              <NavCard
                key={y.year}
                to={`${base}/${cls.id}/${subject.id}/${modeSlug}/${chapter.id}/${y.year}`}
                title={String(y.year)}
                subtitle={`${y.questions.length} question(s) · ${done} completed`}
                meta={`${Math.round(pct * 100)}%`}
              />
            );
          })}
        </Grid>
      </div>
    );
  }

  const year = chapter.years.find((y) => String(y.year) === yearStr);
  if (!year) return <NotFound />;
  trail.push({ label: yearStr });

  // ── Level 5: the question list itself ───────────────────────────────
  const done = year.questions.filter((q) => isCompleted(q.id)).length;
  return (
    <div>
      <Breadcrumb trail={trail} />
      <Header title={`${chapter.name} — ${yearStr}`} subtitle={`${subject.name} · ${cls.name} · ${year.questions.length} question(s)`} />
      <div className="mb-6 max-w-xs"><ProgressBar value={year.questions.length ? done / year.questions.length : 0} /></div>
      <YearView questions={year.questions} chapterName={chapter.name} />
    </div>
  );
}

function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h1 className="font-display text-2xl sm:text-3xl font-semibold">{title}</h1>
      {subtitle && <p className="text-brand-500 dark:text-brand-400 mt-1">{subtitle}</p>}
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{children}</div>;
}
