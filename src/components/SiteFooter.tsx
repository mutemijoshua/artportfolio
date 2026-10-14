import Link from "next/link";
import { site, whatsappLink } from "@/content/site";
import { navItems } from "@/lib/nav";
import { SocialIcons } from "./SocialIcons";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-chalk">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-8 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="display text-3xl tracking-[0.16em]">{site.name}</p>
          {site.footerQuote && (
            <p className="mt-5 max-w-sm font-serif text-xl italic text-chalk-muted">“{site.footerQuote}”</p>
          )}
          <SocialIcons size={20} className="mt-8" />
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-chalk-muted">Explore</h2>
          <ul className="mt-5 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent-light">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-chalk-muted">Contact</h2>
          <ul className="mt-5 space-y-3">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hover:text-accent-light">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all hover:text-accent-light">
                {site.email}
              </a>
            </li>
            <li className="text-chalk-muted">{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal-line">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-chalk-muted sm:px-8">
          © {site.name}. All artwork is the property of the artist and may not be reproduced without permission.
        </p>
      </div>
    </footer>
  );
}
