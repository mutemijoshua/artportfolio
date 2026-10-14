import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} about commissions, sales and shows.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-8 sm:pt-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <h1 className="font-serif text-5xl tracking-tight sm:text-6xl">Contact</h1>

        <div className="max-w-[62ch]">
          <p className="font-serif text-xl leading-relaxed">
            For commissions, buying work, or showing it, email me. I usually reply within a few days.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-block break-all font-serif text-3xl text-accent underline decoration-1 underline-offset-8 sm:text-4xl"
          >
            {site.email}
          </a>

          {site.socials.length > 0 && (
            <ul className="mt-14 border-t border-line text-sm">
              {site.socials.map((s) => (
                <li key={s.href} className="flex justify-between gap-4 border-b border-line py-3">
                  <span className="text-muted">{s.label}</span>
                  <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-accent">
                    {s.href.replace(/^https?:\/\//, "")}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
