import type { Metadata } from "next";
import { site, whatsappLink } from "@/content/site";

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
            For commissions, buying work, or showing it, message me on WhatsApp or send an email.
            I usually reply within a day or two.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* Opens WhatsApp (app on phones, WhatsApp Web on computers) with a chat to you */}
            <a
              href={whatsappLink(`Hi ${site.name}, I saw your work on your website.`)}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-6 py-3 text-base font-medium text-wall hover:opacity-90"
            >
              Message on WhatsApp
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full px-6 py-3 text-base ring-1 ring-ink/30 hover:ring-ink"
            >
              Send an email
            </a>
          </div>

          <p className="mt-4 break-all text-sm text-muted">{site.email}</p>

          {site.socials.length > 0 && (
            <section className="mt-14">
              <h2 className="font-serif text-2xl">Follow the work</h2>
              <ul className="mt-4 border-t border-line text-sm">
                {site.socials.map((s) => (
                  <li key={s.href} className="flex justify-between gap-4 border-b border-line py-3">
                    <span className="text-muted">{s.label}</span>
                    <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-accent">
                      {s.href.replace(/^https?:\/\/(www\.)?/, "")}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
