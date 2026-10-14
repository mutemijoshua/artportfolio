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
        <div role="group" aria-label="Filter by series" className="mb-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] uppercase tracking-[0.2em]">
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
          ? "border-b border-accent pb-1 text-ink"
          : "border-b border-transparent pb-1 text-muted hover:text-ink"
      }
    >
      {children}
    </button>
  );
}
