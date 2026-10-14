import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-24 flex w-full max-w-7xl flex-wrap justify-between gap-4 border-t border-line px-4 py-8 text-sm text-muted sm:px-8">
      <p>
        © {site.name}. All artwork is the property of the artist.
      </p>
      <ul className="flex gap-5">
        {site.socials.map((s) => (
          <li key={s.href}>
            <a href={s.href} className="hover:text-ink" target="_blank" rel="noreferrer">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
