// One page per artwork: /work/night-matatu, /work/red-soil, …
// The folder name [slug] is a placeholder that matches any value in the URL.

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getAllArtworks, getArtwork, getNeighbours } from "@/lib/artworks";
import { Lightbox } from "@/components/Lightbox";
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
    <article className="mx-auto max-w-7xl px-4 pt-8 sm:px-8 sm:pt-12">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(16rem,1fr)] lg:gap-16">
        <Lightbox image={artwork.image} alt={artwork.alt} title={artwork.title} />

        {/* The wall label */}
        <div className="lg:sticky lg:top-12 lg:self-start">
          <h1 className="font-serif text-4xl italic leading-tight tracking-tight sm:text-5xl">
            {artwork.title}
          </h1>
          <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 border-t border-line pt-4 text-sm">
            <dt className="text-muted">Year</dt>
            <dd>{artwork.year}</dd>
            <dt className="text-muted">Medium</dt>
            <dd>{artwork.medium}</dd>
            {artwork.dimensions && (
              <>
                <dt className="text-muted">Size</dt>
                <dd>{artwork.dimensions}</dd>
              </>
            )}
            <dt className="text-muted">Series</dt>
            <dd>{artwork.series}</dd>
            {artwork.status && (
              <>
                <dt className="text-muted">Status</dt>
                <dd>{artwork.status}</dd>
              </>
            )}
          </dl>

          {artwork.description && (
            <div className="mt-6 max-w-prose space-y-4 font-serif text-lg leading-relaxed">
              {artwork.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          )}

          {artwork.status === "Available" && (
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
              {/* Opens a WhatsApp chat with a message about this piece already typed */}
              <a
                href={whatsappLink(`Hi ${site.name}, I'm interested in "${artwork.title}" (${artwork.year}).`)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-accent px-5 py-2.5 font-medium text-wall hover:opacity-90"
              >
                Ask about this piece on WhatsApp
              </a>
              {/* Opens the visitor's email app with the subject already filled in */}
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(`Enquiry: ${artwork.title}`)}`}
                className="text-accent underline underline-offset-4"
              >
                or by email
              </a>
            </div>
          )}
        </div>
      </div>

      <nav aria-label="More work" className="mt-16 flex justify-between gap-6 border-t border-line pt-6 text-sm">
        {previous ? (
          <Link href={`/work/${previous.slug}`} className="text-muted hover:text-ink">
            ← <span className="font-serif text-base italic">{previous.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/work/${next.slug}`} className="text-right text-muted hover:text-ink">
            <span className="font-serif text-base italic">{next.title}</span> →
          </Link>
        ) : (
          <Link href="/" className="text-muted hover:text-ink">
            Back to all work
          </Link>
        )}
      </nav>
    </article>
  );
}
