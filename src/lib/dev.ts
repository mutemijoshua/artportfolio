// Fetches the data for the Dev Work page. Each result is cached for about
// an hour (a few minutes if the request failed), so GitHub and Sentinel are
// asked at most once an hour no matter how many people visit.

import { cacheLife } from "next/cache";
import { dev } from "@/content/dev";

export type ClientSite = {
  name: string;
  url: string;
  host: string;
  stack: string;
  blurb: string;
  online: boolean;
};

export type Repo = {
  name: string;
  title: string;
  description: string;
  url: string;
  live: string;
  language: string;
  updated: string; // ISO date
  stars: number;
  featured: boolean;
};

export type Result<T> = { ok: true; items: T[] } | { ok: false; items: [] };

export async function getClientSites(): Promise<Result<ClientSite>> {
  "use cache";
  try {
    const res = await fetch(`${dev.sentinelUrl.replace(/\/$/, "")}/api/showcase`, {
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(String(res.status));
    const data = (await res.json()) as { sites?: ClientSite[] };
    cacheLife("hours");
    return { ok: true, items: Array.isArray(data.sites) ? data.sites : [] };
  } catch {
    cacheLife("minutes");
    return { ok: false, items: [] };
  }
}

type GithubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  pushed_at: string;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
};

export async function getRepos(): Promise<Result<Repo>> {
  "use cache";
  try {
    // Optional: a GITHUB_TOKEN environment variable (no scopes needed) raises
    // GitHub's limit from 60 to 5,000 requests an hour.
    const headers: Record<string, string> = { accept: "application/vnd.github+json" };
    if (process.env.GITHUB_TOKEN) headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

    const res = await fetch(`https://api.github.com/users/${dev.githubUser}/repos?per_page=100&sort=pushed`, {
      headers,
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(String(res.status));
    const all = (await res.json()) as GithubRepo[];

    const hidden = new Set(dev.hidden.map((n) => n.toLowerCase()));
    const byName = new Map(all.map((r) => [r.name.toLowerCase(), r]));

    const toRepo = (r: GithubRepo, over?: { title?: string; description?: string; live?: string }): Repo => ({
      name: r.name,
      title: over?.title || prettyName(r.name),
      description: over?.description ?? r.description ?? "",
      url: r.html_url,
      live: over?.live ?? r.homepage ?? "",
      language: r.language ?? "",
      updated: r.pushed_at,
      stars: r.stargazers_count,
      featured: Boolean(over),
    });

    const featured = dev.featured
      .map((f) => {
        const r = byName.get(f.repo.toLowerCase());
        return r ? toRepo(r, f) : null;
      })
      .filter((r): r is Repo => r !== null);

    const featuredNames = new Set(featured.map((r) => r.name.toLowerCase()));
    const others = all
      .filter(
        (r) =>
          !r.fork &&
          !r.archived &&
          r.description &&
          !hidden.has(r.name.toLowerCase()) &&
          !featuredNames.has(r.name.toLowerCase()) &&
          new Date(r.pushed_at).getFullYear() >= dev.showOthersSince,
      )
      .map((r) => toRepo(r));

    cacheLife("hours");
    return { ok: true, items: [...featured, ...others] };
  } catch {
    cacheLife("minutes");
    return { ok: false, items: [] };
  }
}

/** "my-cool_repo" → "My cool repo" (keeps names like EspressMVP as they are) */
export function prettyName(name: string) {
  const spaced = name.replace(/[-_.]+/g, " ").trim();
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}
