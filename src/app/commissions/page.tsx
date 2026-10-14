// The commissions page ( /commissions ): how commissioning a piece works.
// Edit the text and steps in src/content/site.ts → commissions.

import type { Metadata } from "next";
import Image from "next/image";

import { site, whatsappLink } from "@/content/site";
import { getFeatured } from "@/lib/artworks";
import { ButtonLink, PageHeader, SectionTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "Commissions",
  description: `Commission an original painting from ${site.name}.`,
};

export default function CommissionsPage() {
  const { intro, steps, note } = site.commissions;
  const example = getFeatured()[0];

  return (
    <>
      <PageHeader title="Commissions" intro={intro} />

      <section className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-8 sm:py-28 lg:grid-cols-[3fr_2fr] lg:gap-20">
        <div>
          <SectionTitle>How it works</SectionTitle>
          <ol className="mt-12 space-y-10">
            {steps.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[3.5rem_1fr] gap-4">
                <span className="font-serif text-5xl leading-none text-accent">{i + 1}</span>
                <div>
                  <h3 className="font-serif text-2xl">{step.title}</h3>
                  <p className="mt-2 max-w-[55ch] leading-relaxed text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          {note && <p className="mt-12 border-l-2 border-accent pl-5 text-muted">{note}</p>}
        </div>

        {example && (
          <figure className="lg:pt-20">
            <Image
              src={example.image}
              alt={example.alt}
              placeholder="blur"
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="h-auto w-full"
            />
            <figcaption className="mt-3 text-sm text-muted">
              <span className="font-serif text-base italic text-ink">{example.title}</span>, {example.year}
            </figcaption>
          </figure>
        )}
      </section>

      <section className="bg-charcoal text-chalk">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-8 sm:py-20">
          <h2 className="display text-3xl sm:text-4xl">Start a commission</h2>
          <p className="max-w-xl text-lg text-chalk-muted">
            Tell me what you have in mind — the subject, size and where it will hang. Photos help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <ButtonLink href={whatsappLink(`Hi ${site.name}, I'd like to talk about a commission.`)} external>
              Message on WhatsApp
            </ButtonLink>
            <ButtonLink href={`mailto:${site.email}?subject=${encodeURIComponent("Commission enquiry")}`} variant="outline-light">
              Send an email
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
