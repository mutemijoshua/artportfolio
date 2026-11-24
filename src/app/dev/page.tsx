// The Dev Work page ( /dev ): client websites (from Sentinel) and code
// projects (from GitHub). What it shows is set in src/content/dev.ts.

import type { Metadata } from "next";
import { Suspense } from "react";

import { dev } from "@/content/dev";
import { site } from "@/content/site";
import { getClientSites, getRepos, type Repo } from "@/lib/dev";
import { ButtonLink, PageHeader, SectionTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: dev.title,
  description: `Websites, web apps and Android apps built by ${site.name}.`,
};

export default function DevPage() {
  return (
    <>
      <PageHeader title={dev.title} intro={dev.intro} />
      <p className="bg-stone pb-14 text-center text-xs uppercase tracking-[0.2em] text-muted sm:pb-20">
        {dev.tools.join("  ·  ")}
      </p>

      <section className="bg-charcoal text-chalk">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-8 sm:py-24">
          <SectionTitle light>Client websites</SectionTitle>
          <Suspense fallback={<Waiting light />}>
            <ClientSites />
          </Suspense>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-8 sm:py-24">
        <SectionTitle>Code &amp; apps</SectionTitle>
        <Suspense fallback={<Waiting />}>
          <Repos />
        </Suspense>
        <div className="mt-14 flex flex-wrap gap-4">
          <ButtonLink href={`https://github.com/${dev.githubUser}`} external>
            Everything on GitHub
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Work with me
          </ButtonLink>
        </div>
      </section>
    </>
  );
}

async function ClientSites() {
  const { ok, items } = await getClientSites();
  if (items.length === 0) {
    return (
      <p className="mt-10 text-chalk-muted">
        {ok ? "New projects are on their way." : "This list couldn't be loaded just now — please try again shortly."}
      </p>
    );
  }

  return (
    <ol className="mt-12 border-t border-charcoal-line">
      {items.map((s, i) => (
        <li
          key={s.url}
          className="grid grid-cols-[3rem_1fr] gap-x-4 gap-y-3 border-b border-charcoal-line py-7 sm:grid-cols-[3.5rem_1fr_auto] sm:items-baseline"
        >
          <span className="font-serif text-xl text-accent-light">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl">{s.name}</h3>
            <p className="mt-1 text-sm text-chalk-muted">
              {s.host}
              {s.stack && ` · ${s.stack}`}
            </p>
            {s.blurb && <p className="mt-3 max-w-[56ch] leading-relaxed text-chalk/90">{s.blurb}</p>}
          </div>
          <div className="col-start-2 flex items-center gap-6 text-sm sm:col-start-auto sm:flex-col sm:items-end sm:gap-2">
            {s.online && (
              <span className="flex items-center gap-2 text-chalk-muted">
                <span className="size-1.5 rounded-full bg-accent-light" aria-hidden />
                Online now
              </span>
            )}
            <a
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="uppercase tracking-[0.18em] text-chalk underline decoration-accent-light underline-offset-4 hover:text-accent-light"
            >
              Visit site ↗
            </a>
          </div>
        </li>
      ))}
    </ol>
  );
}

async function Repos() {
  const { ok, items } = await getRepos();
  if (items.length === 0) {
    return (
      <p className="mt-10 text-muted">
        {ok ? "Projects coming soon." : "GitHub couldn't be reached just now — see the full list on GitHub below."}
      </p>
    );
  }

  const featured = items.filter((r) => r.featured);
  const others = items.filter((r) => !r.featured);

  return (
    <>
      <div className="mt-12 grid gap-x-14 gap-y-12 md:grid-cols-2">
        {featured.map((r) => (
          <article key={r.name} className="border-t border-ink pt-6">
            <h3 className="font-serif text-3xl">{r.title}</h3>
            {r.description && <p className="mt-3 leading-relaxed text-muted">{r.description}</p>}
            <RepoMeta repo={r} />
          </article>
        ))}
      </div>

      {others.length > 0 && (
        <>
          <h3 className="mt-20 text-xs uppercase tracking-[0.2em] text-muted">More projects</h3>
          <ul className="mt-4 border-t border-line">
            {others.map((r) => (
              <li key={r.name} className="border-b border-line py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <span className="font-serif text-xl">{r.title}</span>
                  <span className="text-sm text-muted">{r.description}</span>
                </div>
                <RepoMeta repo={r} compact />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

function RepoMeta({ repo, compact = false }: { repo: Repo; compact?: boolean }) {
  const updated = new Date(repo.updated).toLocaleDateString("en-GB", { month: "short", year: "numeric" });
  const link = "uppercase tracking-[0.18em] text-ink underline decoration-accent underline-offset-4 hover:text-accent";
  return (
    <div className={`${compact ? "mt-2" : "mt-5"} flex flex-wrap items-center gap-x-5 gap-y-2 text-xs`}>
      <span className="text-muted">
        {[repo.language, `Updated ${updated}`, repo.stars > 0 ? `★ ${repo.stars}` : ""].filter(Boolean).join(" · ")}
      </span>
      <a href={repo.url} target="_blank" rel="noreferrer" className={link}>
        Code ↗
      </a>
      {repo.live && (
        <a href={repo.live} target="_blank" rel="noreferrer" className={link}>
          Live ↗
        </a>
      )}
    </div>
  );
}

function Waiting({ light = false }: { light?: boolean }) {
  return <p className={`mt-10 ${light ? "text-chalk-muted" : "text-muted"}`}>Loading…</p>;
}
