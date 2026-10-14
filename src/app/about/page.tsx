import type { Metadata } from "next";
import Image from "next/image";

import { site } from "@/content/site";
import { ButtonLink, PageHeader, SectionTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title={`About ${site.firstName}`} />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-8 sm:py-28 md:grid-cols-[2fr_3fr] lg:gap-20">
        <Image
          src={site.photo}
          alt={site.photoAlt}
          placeholder="blur"
          loading="eager"
          sizes="(min-width: 768px) 40vw, 100vw"
          className="aspect-[4/5] w-full max-w-md object-cover"
        />
        <div>
          <div className="max-w-[62ch] space-y-5 font-serif text-2xl leading-relaxed">
            {site.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-8 text-sm uppercase tracking-[0.2em] text-muted">Based in {site.location}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/gallery">View the gallery</ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Get in touch
            </ButtonLink>
          </div>
        </div>
      </section>

      {site.exhibitions.length > 0 && (
        <section className="bg-stone">
          <div className="mx-auto max-w-4xl px-4 py-20 sm:px-8 sm:py-24">
            <SectionTitle center>Exhibitions</SectionTitle>
            <ul className="mt-12 border-t border-line">
              {site.exhibitions.map((e) => (
                <li
                  key={`${e.year}-${e.title}`}
                  className="grid grid-cols-[4.5rem_1fr] gap-4 border-b border-line py-5 sm:grid-cols-[4.5rem_1fr_1fr]"
                >
                  <span className="font-serif text-xl text-accent">{e.year}</span>
                  <span className="font-serif text-xl">{e.title}</span>
                  <span className="col-start-2 text-muted sm:col-start-auto sm:text-right">{e.place}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
