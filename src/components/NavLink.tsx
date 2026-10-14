"use client";
// "use client" = this component runs in the browser too.
// It needs to, because it reads the current URL to underline the active page.

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  // "Work" is active on the home page and on every /work/... page.
  const active =
    href === "/" ? pathname === "/" || pathname.startsWith("/work") : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={
        active
          ? "text-ink underline decoration-1 underline-offset-[6px]"
          : "text-muted hover:text-ink"
      }
    >
      {children}
    </Link>
  );
}
