import type { Metadata } from "next";

import { site, whatsappLink } from "@/content/site";
import { ButtonLink, PageHeader } from "@/components/ui";
import { SocialIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} about commissions, sales and shows.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        intro="For buying work, commissions, shows or press, message me on WhatsApp or send an email. I usually reply within a day or two."
      />

      <section className="mx-4 my-20 grid max-w-5xl gap-px bg-line sm:my-28 md:grid-cols-2 lg:mx-auto">
        <div className="bg-paper p-10 text-center sm:p-14">
          <div className="mx-auto w-fit text-accent">
            <SocialIcon platform="whatsapp" size={32} />
          </div>
          <h2 className="mt-6 font-serif text-3xl">WhatsApp</h2>
          <p className="mt-3 text-muted">The quickest way to reach me.</p>
          <div className="mt-8">
            <ButtonLink href={whatsappLink(`Hi ${site.name}, I saw your work on your website.`)} external>
              Message on WhatsApp
            </ButtonLink>
          </div>
        </div>
        <div className="bg-paper p-10 text-center sm:p-14">
          <p className="font-serif text-4xl leading-none text-accent">@</p>
          <h2 className="mt-6 font-serif text-3xl">Email</h2>
          <p className="mt-3 break-all text-muted">{site.email}</p>
          <div className="mt-8">
            <ButtonLink href={`mailto:${site.email}`} variant="outline">
              Send an email
            </ButtonLink>
          </div>
        </div>
      </section>

      {site.socials.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 pb-20 text-center sm:px-8 sm:pb-28">
          <h2 className="display text-2xl sm:text-3xl">Follow the work</h2>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-6">
            {site.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-accent">
                  <SocialIcon platform={s.platform} size={22} />
                  <span className="text-sm uppercase tracking-[0.2em]">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
