"use client";
// The menu button shown on phones. Opens a full-width list of pages.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { isActive, navItems } from "@/lib/nav";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
        <span className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
      </button>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="absolute inset-x-0 top-full z-40 border-t border-line bg-paper shadow-sm">
          <ul className="px-4 py-2">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-line last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className={`block py-4 text-sm uppercase tracking-[0.2em] ${
                    isActive(pathname, item.href) ? "text-accent" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
