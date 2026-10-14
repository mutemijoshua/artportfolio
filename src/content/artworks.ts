// ─────────────────────────────────────────────────────────────
// Your artworks. To add a piece:
//   1. Put the image in src/content/images/  (jpg, png or webp)
//   2. Import it below, like the others
//   3. Add an entry to the `artworks` list
// The order of the list is the order on the site (newest first works well).
//
// The images here now are generated placeholders — replace them with your work.
// ─────────────────────────────────────────────────────────────

import type { StaticImageData } from "next/image";

import tideStudy from "./images/tide-study.jpg";
import marketNoon from "./images/market-noon.jpg";
import redSoil from "./images/red-soil.jpg";
import nightMatatu from "./images/night-matatu.jpg";
import acaciaLine from "./images/acacia-line.jpg";
import rainWindow from "./images/rain-window.jpg";
import indigoCloth from "./images/indigo-cloth.jpg";
import saltFlats from "./images/salt-flats.jpg";

export type Artwork = {
  /** Used in the URL: /work/<slug>. Lowercase, words joined with hyphens, must be unique. */
  slug: string;
  title: string;
  year: number;
  /** e.g. "Oil on canvas", "Ink on paper", "Digital" */
  medium: string;
  /** Optional, e.g. "60 × 80 cm" */
  dimensions?: string;
  /** Groups work on the home page filter, e.g. "Paintings", "Studies" */
  series: string;
  /** Short description for screen readers and search engines. Describe what is visible. */
  alt: string;
  /** Optional longer text shown on the artwork's own page. Each string is a paragraph. */
  description?: string[];
  /** Optional: "Available", "Sold", "Private collection"… */
  status?: string;
  image: StaticImageData;
};

export const artworks: Artwork[] = [
  {
    slug: "night-matatu",
    title: "Night Matatu",
    year: 2026,
    medium: "Acrylic on canvas",
    dimensions: "75 × 105 cm",
    series: "Paintings",
    alt: "Looping dark lines over a warm yellow field with deep navy blocks and small turquoise shapes.",
    description: [
      "Placeholder text. Write a few sentences about where this piece came from — what you saw, what you were trying to hold on to, and what changed along the way.",
    ],
    status: "Available",
    image: nightMatatu,
  },
  {
    slug: "market-noon",
    title: "Market, Noon",
    year: 2026,
    medium: "Acrylic on canvas",
    dimensions: "100 × 75 cm",
    series: "Paintings",
    alt: "Abstract composition of saturated orange, mustard and dark teal shapes with gestural lines.",
    image: marketNoon,
  },
  {
    slug: "tide-study",
    title: "Tide Study",
    year: 2025,
    medium: "Gouache on paper",
    dimensions: "32 × 40 cm",
    series: "Studies",
    alt: "Blurred blue and pale aqua shapes crossed by flowing lines, like water at low tide.",
    image: tideStudy,
  },
  {
    slug: "red-soil",
    title: "Red Soil",
    year: 2025,
    medium: "Oil on board",
    dimensions: "60 × 60 cm",
    series: "Paintings",
    alt: "Square composition of rust red, terracotta and sand-coloured forms.",
    status: "Sold",
    image: redSoil,
  },
  {
    slug: "acacia-line",
    title: "Acacia Line",
    year: 2025,
    medium: "Ink and wash on paper",
    dimensions: "42 × 28 cm",
    series: "Studies",
    alt: "Wide landscape format with olive and dark green masses and ochre highlights.",
    image: acaciaLine,
  },
  {
    slug: "rain-window",
    title: "Rain Window",
    year: 2024,
    medium: "Watercolour on paper",
    dimensions: "30 × 38 cm",
    series: "Studies",
    alt: "Soft grey-green and blush shapes with thin lines, like a view through a wet window.",
    image: rainWindow,
  },
  {
    slug: "indigo-cloth",
    title: "Indigo Cloth",
    year: 2024,
    medium: "Digital",
    series: "Digital",
    alt: "Square composition of indigo, plum and dusty rose layered shapes.",
    image: indigoCloth,
  },
  {
    slug: "salt-flats",
    title: "Salt Flats",
    year: 2024,
    medium: "Digital",
    series: "Digital",
    alt: "Pale grey wide composition with a few coral accents and fine dark lines.",
    image: saltFlats,
  },
];
