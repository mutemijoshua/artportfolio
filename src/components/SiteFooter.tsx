import { site, whatsappLink } from "@/content/site";

export function SiteFooter() {
  const links = [{ label: "WhatsApp", href: whatsappLink() }, ...site.socials];

  return (
    <footer className="mx-auto mt-24 flex w-full max-w-7xl flex-wrap justify-between gap-4 border-t border-line px-4 py-8 text-sm text-muted sm:px-8">
      <p>© {site.name}. All artwork is the property of the artist.</p>
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {links.map((s) => (
          <li key={s.href}>
            <a href={s.href} className="hover:text-accent" target="_blank" rel="noreferrer">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
