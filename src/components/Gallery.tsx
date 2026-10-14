"use client";
// This is a client component because it has state (which series is selected)
// and responds to clicks. The page that uses it stays a server component.

import { useState } from "react";
import type { Artwork } from "@/content/artworks";
import { ArtworkCard } from "./ArtworkCard";

export function Gallery({ artworks, series }: { artworks: Artwork[]; series: string[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  const visible = selected ? artworks.filter((a) => a.series === selected) : artworks;

  return (
    <>
      {series.length > 1 && (
        <div role="group" aria-label="Filter by series" className="mb-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <FilterButton active={selected === null} onClick={() => setSelected(null)}>
            All work
          </FilterButton>
          {series.map((s) => (
            <FilterButton key={s} active={selected === s} onClick={() => setSelected(s)}>
              {s}
            </FilterButton>
          ))}
        </div>
      )}

      {/* CSS columns give a masonry layout: every image keeps its own proportions. */}
      <ul className="columns-1 gap-x-10 sm:columns-2 lg:columns-3">
        {visible.map((artwork, i) => (
          <li key={artwork.slug} className="mb-14 break-inside-avoid">
            <ArtworkCard artwork={artwork} eager={i < 3} />
          </li>
        ))}
      </ul>
    </>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? "text-ink underline decoration-accent decoration-2 underline-offset-[6px]"
          : "text-muted hover:text-ink"
      }
    >
      {children}
    </button>
  );
}
