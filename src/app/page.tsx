// The home page ( / ). A server component: it runs at build time,
// reads your artwork list, and hands it to the interactive Gallery.

import Image from "next/image";
import { site } from "@/content/site";
import { getAllArtworks, getSeries } from "@/lib/artworks";
import { Gallery } from "@/components/Gallery";

export default function HomePage() {
  const artworks = getAllArtworks();
  const series = getSeries();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-8">
      <section className="pb-14 pt-12 sm:pb-20 sm:pt-20">
        <div className="flex items-center gap-5 sm:gap-8">
          <Image
            src={site.photo}
            alt={site.photoAlt}
            placeholder="blur"
            loading="eager"
            sizes="(min-width: 1024px) 144px, (min-width: 640px) 112px, 80px"
            className="aspect-[4/5] w-20 shrink-0 rounded-md object-cover ring-1 ring-line sm:w-28 lg:w-36"
          />
          <h1 className="font-serif text-5xl leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
            {site.name}
          </h1>
        </div>
        <p className="mt-6 max-w-xl text-lg text-muted">{site.tagline}</p>
      </section>

      <h2 className="sr-only">Work</h2>
      <Gallery artworks={artworks} series={series} />
    </div>
  );
}
