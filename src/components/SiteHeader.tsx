import Link from "next/link";
import { site } from "@/content/site";
import { NavLink } from "./NavLink";
import { navItems } from "@/lib/nav";
import { MobileMenu } from "./MobileMenu";
import { SocialIcons } from "./SocialIcons";

export function SiteHeader() {
  return (
    <header>
      {/* Thin dark bar with your location and social icons */}
      <div className="bg-charcoal text-chalk">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-chalk-muted">{site.location}</p>
          <SocialIcons size={15} />
        </div>
      </div>

      {/* Your name, centred, with the menu underneath (desktop) or a menu button (phone) */}
      <div className="relative border-b border-line bg-paper">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-8 md:flex-col md:gap-5 md:py-8">
          <Link href="/" className="display text-2xl tracking-[0.18em] sm:text-3xl md:text-4xl">
            {site.name}
          </Link>
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex gap-10">
              {navItems.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
