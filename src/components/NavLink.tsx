"use client";
// "use client" = this component runs in the browser too.
// It needs to, because it reads the current URL to underline the active page.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActive } from "@/lib/nav";

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = isActive(pathname, href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`border-b py-1 text-[13px] uppercase tracking-[0.2em] transition-colors ${
        active ? "border-accent text-ink" : "border-transparent text-muted hover:text-ink"
      }`}
    >
      {children}
    </Link>
  );
}
