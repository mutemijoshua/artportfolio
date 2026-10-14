// One page per artwork: /work/night-matatu, /work/red-soil, …
// The folder name [slug] is a placeholder that matches any value in the URL.

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getAllArtworks, getArtwork, getNeighbours } from "@/lib/artworks";
import { Lightbox } from "@/components/Lightbox";
import { ButtonLink } from "@/components/ui";
import { site, whatsappLink } from "@/content/site";

// Build one page for every artwork at build time (fast, static HTML).
export function generateStaticParams() {
  return getAllArtworks().map((a) => ({ slug: a.slug }));
}

// Per-artwork <title>, description and link-preview image.
export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const artwork = getArtwork(slug);
  if (!artwork) return {};

  return {
    title: artwork.title,
    description: `${artwork.title} (${artwork.year}), ${artwork.medium}.`,
    openGraph: {
      title: artwork.title,
      images: [{ url: artwork.image.src, width: artwork.image.width, height: artwork.image.height, alt: artwork.alt }],
    },
  };
}

export default async function ArtworkPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const artwork = getArtwork(slug);
  if (!artwork) notFound();

  const { previous, next } = getNeighbours(slug);

  return (
    <article>
      {/* The artwork on a dark wall, click to view full screen */}
      <div className="bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-16">
          <Lightbox image={artwork.image} alt={artwork.alt} title={artwork.title} />
          <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-chalk-muted">Select the image to view full screen</p>
        </div>
      </div>

      {/* Details: title, wall label, description and enquiry buttons */}
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            <Link href="/gallery" className="hover:text-accent">
              Gallery
            </Link>{" "}
            / {artwork.series}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">{artwork.title}</h1>
          <div className="mt-6 h-px w-16 bg-accent" />
          {artwork.description && (
            <div className="mt-8 max-w-prose space-y-4 text-lg leading-relaxed text-muted">
              {artwork.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          )}
        </div>

        <div>
          <dl className="grid grid-cols-[7rem_1fr] border-t border-line">
            {[
              ["Year", String(artwork.year)],
              ["Medium", artwork.medium],
              ["Size", artwork.dimensions],
              ["Series", artwork.series],
              ["Status", artwork.status],
            ]
              .filter(([, value]) => value)
              .map(([label, value]) => (
                <div key={label} className="col-span-2 grid grid-cols-subgrid border-b border-line py-4">
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted">{label}</dt>
                  <dd className="font-serif text-xl">{value}</dd>
                </div>
              ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-4">
            {artwork.status === "Sold" ? (
              <ButtonLink href="/commissions">Commission something similar</ButtonLink>
            ) : (
              <ButtonLink
                href={whatsappLink(`Hi ${site.name}, I'm interested in "${artwork.title}" (${artwork.year}).`)}
                external
              >
                Ask about this piece
              </ButtonLink>
            )}
            <ButtonLink
              href={`mailto:${site.email}?subject=${encodeURIComponent(`Enquiry: ${artwork.title}`)}`}
              variant="outline"
            >
              Email
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Previous / next artwork */}
      <nav aria-label="More work" className="border-t border-line">
        <div className="mx-auto flex max-w-7xl justify-between gap-6 px-4 py-8 sm:px-8">
          {previous ? (
            <Link href={`/work/${previous.slug}`} className="group">
              <span className="block text-xs uppercase tracking-[0.2em] text-muted">Previous</span>
              <span className="font-serif text-2xl group-hover:text-accent">{previous.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/work/${next.slug}`} className="group text-right">
              <span className="block text-xs uppercase tracking-[0.2em] text-muted">Next</span>
              <span className="font-serif text-2xl group-hover:text-accent">{next.title}</span>
            </Link>
          ) : (
            <Link href="/gallery" className="group text-right">
              <span className="block text-xs uppercase tracking-[0.2em] text-muted">Back to</span>
              <span className="font-serif text-2xl group-hover:text-accent">The gallery</span>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
