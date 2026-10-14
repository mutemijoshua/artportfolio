// The home page ( / ). A server component: it runs at build time,
// reads your artwork list, and hands it to the interactive Gallery.

import { site } from "@/content/site";
import { getAllArtworks, getSeries } from "@/lib/artworks";
import { Gallery } from "@/components/Gallery";

export default function HomePage() {
  const artworks = getAllArtworks();
  const series = getSeries();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-8">
      <section className="pb-14 pt-12 sm:pb-20 sm:pt-20">
        <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">{site.tagline}</p>
      </section>

      <h2 className="sr-only">Work</h2>
      <Gallery artworks={artworks} series={series} />
    </div>
  );
}
