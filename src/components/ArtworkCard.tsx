import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/content/artworks";

// One piece in the gallery: the image plus a small wall label underneath.
export function ArtworkCard({ artwork, eager = false }: { artwork: Artwork; eager?: boolean }) {
  return (
    <Link href={`/work/${artwork.slug}`} className="group block">
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
        className="h-auto w-full transition-opacity duration-300 group-hover:opacity-90"
      />
      <div className="mt-3 text-sm leading-snug">
        <p className="font-serif text-lg italic group-hover:text-accent">{artwork.title}</p>
        <p className="text-muted">
          {artwork.medium}, {artwork.year}
          {artwork.status === "Sold" && <span> · Sold</span>}
        </p>
      </div>
    </Link>
  );
}
