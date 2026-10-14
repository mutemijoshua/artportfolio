// Small helper functions for reading the artwork list.
// Pages call these instead of touching the raw list directly,
// so if you ever move your content to a CMS you only change this file.

import { artworks, type Artwork } from "@/content/artworks";

export function getAllArtworks(): Artwork[] {
  return artworks;
}

export function getArtwork(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}

/** Pieces marked `featured: true`, or the first three if none are marked. */
export function getFeatured(): Artwork[] {
  const featured = artworks.filter((a) => a.featured);
  return featured.length > 0 ? featured : artworks.slice(0, 3);
}

/** The pieces before and after this one, for the "previous / next" links. */
export function getNeighbours(slug: string) {
  const i = artworks.findIndex((a) => a.slug === slug);
  return {
    previous: i > 0 ? artworks[i - 1] : undefined,
    next: i >= 0 && i < artworks.length - 1 ? artworks[i + 1] : undefined,
  };
}

/** Every series name, in the order they first appear. */
export function getSeries(): string[] {
  return [...new Set(artworks.map((a) => a.series))];
}
