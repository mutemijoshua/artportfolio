// The full gallery ( /gallery ): every artwork, with a filter by series.

import type { Metadata } from "next";
import { getAllArtworks, getSeries } from "@/lib/artworks";
import { Gallery } from "@/components/Gallery";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Paintings, drawings and studies — the full collection.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Gallery" intro="Paintings, drawings and studies. Select any piece to see it larger and ask about it." />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-20">
        <Gallery artworks={getAllArtworks()} series={getSeries()} />
      </div>
    </>
  );
}
