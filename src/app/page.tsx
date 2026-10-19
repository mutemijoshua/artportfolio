// The home page ( / ). A server component: it runs at build time and
// is made of sections stacked top to bottom. Each section is a small
// function below, so you can reorder or delete them in HomePage().

import Image from "next/image";
import Link from "next/link";

import { site, whatsappLink } from "@/content/site";
import { getAllArtworks, getArtwork, getFeatured } from "@/lib/artworks";
import { ButtonLink, SectionTitle } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <SelectedWork />
      {site.processVideo && <ProcessVideo />}
      <Pathways />
      {site.testimonials.length > 0 && <KindWords />}
      <FollowTheWork />
      <EnquiryBand />
    </>
  );
}

/** Big dark opening section: your name, tagline, two buttons and one artwork. */
function Hero() {
  const artwork = getArtwork(site.heroArtwork) ?? getAllArtworks()[0];

  return (
    <section className="bg-charcoal text-chalk">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <h1 className="display text-5xl sm:text-7xl lg:text-8xl">{site.name}</h1>
          <p className="mt-6 font-serif text-2xl italic text-chalk-muted sm:text-3xl">{site.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/gallery">View the gallery</ButtonLink>
            <ButtonLink href="/commissions" variant="outline-light">
              Commission a piece
            </ButtonLink>
          </div>
        </div>

        {artwork && (
          <figure>
            <Link href={`/work/${artwork.slug}`} className="block">
              <Image
                src={artwork.image}
                alt={artwork.alt}
                placeholder="blur"
                loading="eager"
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="mx-auto h-auto max-h-[70dvh] w-auto object-contain shadow-2xl shadow-black/40"
              />
            </Link>
            <figcaption className="mt-4 text-center text-sm text-chalk-muted">
              <span className="font-serif text-base italic text-chalk">{artwork.title}</span>, {artwork.medium}, {artwork.year}
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}

/** "Who is …?" — your photo and a short introduction. */
function Intro() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-8 sm:py-28 md:grid-cols-[2fr_3fr] lg:gap-20">
      <Image
        src={site.photo}
        alt={site.photoAlt}
        placeholder="blur"
        sizes="(min-width: 768px) 40vw, 100vw"
        className="aspect-[4/5] w-full max-w-md object-cover"
      />
      <div>
        <SectionTitle>Who is {site.firstName}?</SectionTitle>
        <div className="mt-8 max-w-[60ch] space-y-5 text-lg leading-relaxed text-muted">
          {site.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/about" variant="outline">
            Read more
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

/** Three featured pieces, each linking to its own page. */
function SelectedWork() {
  const featured = getFeatured();

  return (
    <section className="bg-stone">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
        <SectionTitle center>Selected work</SectionTitle>
        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((a) => (
            <li key={a.slug}>
              <Link href={`/work/${a.slug}`} className="group block">
                <div className="overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.alt}
                    placeholder="blur"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-5 text-center font-serif text-2xl">{a.title}</p>
                <p className="mt-1 text-center text-xs uppercase tracking-[0.2em] text-muted">{a.series}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-14 text-center">
          <ButtonLink href="/gallery">View full gallery</ButtonLink>
        </div>
      </div>
    </section>
  );
}

/** Optional studio video (set processVideo in site.ts). */
function ProcessVideo() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-8 sm:py-28">
      <SectionTitle center>In the studio</SectionTitle>
      <div className="mt-12 aspect-video w-full overflow-hidden bg-charcoal">
        <iframe
          src={site.processVideo}
          title={`${site.name} in the studio`}
          className="h-full w-full"
          loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}

/** Three panels pointing different visitors to the right place. */
function Pathways() {
  const panels = [
    {
      title: "If you collect art",
      text: "Original paintings and drawings, each one of a kind. See what's available and ask about any piece directly.",
      href: "/gallery",
      cta: "View the gallery",
    },
    {
      title: "If you want something made for you",
      text: "A portrait, a place that matters to you, or a piece for a particular wall. See how commissions work.",
      href: "/commissions",
      cta: "Commissions",
    },
    {
      title: "If you run a gallery or publication",
      text: "I'm open to group shows, collaborations and features. Get in touch to talk about working together.",
      href: "/contact",
      cta: "Get in touch",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
      <ul className="grid gap-px bg-line md:grid-cols-3">
        {panels.map((p) => (
          <li key={p.title} className="flex flex-col bg-paper p-8 sm:p-10">
            <h2 className="font-serif text-3xl leading-tight">{p.title}</h2>
            <p className="mt-4 flex-1 leading-relaxed text-muted">{p.text}</p>
            <div className="mt-8">
              <ButtonLink href={p.href} variant="outline">
                {p.cta}
              </ButtonLink>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Quotes from collectors, curators and clients. */
function KindWords() {
  return (
    <section className="bg-charcoal text-chalk">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
        <SectionTitle light center>
          Kind words
        </SectionTitle>
        <ul className="mt-14 grid gap-12 md:grid-cols-3">
          {site.testimonials.map((t) => (
            <li key={t.quote} className="text-center">
              <blockquote className="font-serif text-2xl italic leading-snug">“{t.quote}”</blockquote>
              <p className="mt-6 text-sm uppercase tracking-[0.2em]">{t.name}</p>
              <p className="mt-1 text-sm text-chalk-muted">{t.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** A strip of recent work with links to your social profiles. */
function FollowTheWork() {
  const recent = getAllArtworks().slice(0, 6);
  const instagram = site.socials.find((s) => s.platform === "instagram");

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
      <SectionTitle center>Follow the work</SectionTitle>
      <p className="mx-auto mt-6 max-w-xl text-center text-muted">
        New pieces, studies and time-lapses go up on social media first.
      </p>
      <ul className="mt-12 grid grid-cols-3 gap-2 md:grid-cols-6">
        {recent.map((a) => (
          <li key={a.slug}>
            <Link href={`/work/${a.slug}`} className="block">
              <Image
                src={a.image}
                alt={a.alt}
                placeholder="blur"
                sizes="(min-width: 768px) 16vw, 33vw"
                className="aspect-square w-full object-cover transition-opacity hover:opacity-85"
              />
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {instagram && (
          <ButtonLink href={instagram.href} external>
            Follow on Instagram
          </ButtonLink>
        )}
        {site.socials
          .filter((s) => s.platform !== "instagram")
          .map((s) => (
            <ButtonLink key={s.href} href={s.href} variant="outline" external>
              {s.label}
            </ButtonLink>
          ))}
      </div>
    </section>
  );
}

/** Closing call to action before the footer. */
function EnquiryBand() {
  return (
    <section className="bg-stone">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-8 sm:py-20">
        <h2 className="display text-3xl sm:text-4xl">Interested in an original?</h2>
        <p className="max-w-xl text-lg text-muted">
          Ask about availability, prices or a commission. I usually reply within a day or two.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <ButtonLink href={whatsappLink(`Hi ${site.name}, I saw your work on your website.`)} external>
            Message on WhatsApp
          </ButtonLink>
          <ButtonLink href={`mailto:${site.email}`} variant="outline">
            Send an email
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
