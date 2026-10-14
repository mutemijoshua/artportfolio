import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/content/artworks";

// One piece in the gallery grid: the image plus its title and details underneath.
export function ArtworkCard({ artwork, eager = false }: { artwork: Artwork; eager?: boolean }) {
  return (
    <Link href={`/work/${artwork.slug}`} className="group block">
      <div className="overflow-hidden">
        <Image
          src={artwork.image}
          alt={artwork.alt}
          placeholder="blur" // shows a tiny blurred version while the real image loads
          // The first few images are on screen right away, so load them immediately;
          // the rest load lazily as you scroll.
          loading={eager ? "eager" : "lazy"}
          // Tells the browser roughly how wide the image is shown at each screen size,
          // so it downloads a file of the right size instead of the full original.
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-4">
        <p className="font-serif text-2xl leading-tight group-hover:text-accent">{artwork.title}</p>
        <p className="mt-1 text-sm text-muted">
          {artwork.medium}, {artwork.year}
          {artwork.status === "Sold" && <span className="text-accent"> · Sold</span>}
        </p>
      </div>
    </Link>
  );
}
