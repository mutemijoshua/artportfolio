import Link from "next/link";
import { site } from "@/content/site";
import { NavLink } from "./NavLink";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-baseline justify-between gap-6 px-4 pb-4 pt-6 sm:px-8 sm:pt-8">
      <Link href="/" className="font-serif text-xl tracking-tight">
        {site.name}
      </Link>
      <nav aria-label="Main">
        <ul className="flex gap-5 text-sm sm:gap-7">
          <li>
            <NavLink href="/">Work</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
