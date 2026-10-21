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

import mammito from "./images/mammito.jpg";
import ikigai from "./images/ikigai.jpg";
import kunfayakun from "./images/kun_faya_kun.jpg";
import serenity from "./images/serenity.jpg";
import surrender from "./images/surrender.jpg";
import obama from "./images/obama.jpg";
import pele from "./images/pele.jpg";
import mbappe from "./images/mbappe.jpg";
import study1 from "./images/study1.jpg"
import study2 from "./images/study2.jpg"
import study3 from "./images/study3.jpg"
import study4 from "./images/study4.jpg"
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
  /** Show this piece in "Selected work" on the home page (pick about three). */
  featured?: boolean;
  image: StaticImageData;
};

export const artworks: Artwork[] = [
  {
    slug: "serenity",
    title: "Serenity",
    year: 2026,
    medium: "Charcoal & accrylic ",
    dimensions: "29 × 45 cm",
    series: "Mixed media",
    alt: "",
    description: [
      "",
    ],
    status: "Available",
    image: serenity,
  },
  {
    slug: "ikigai",
    featured: true,
    title: "Ikigai",
    year: 2026,
    medium: "Acrylic on canvas",
    dimensions: "50 × 42 cm",
    series: "Paintings",
    alt: "",
    image: ikigai,
  },
  {
    slug: "kun-faya-kun",
    featured: true,
    title: "Kun faya Kun",
    year: 2026,
    medium: "Acrylic on canvas",
    dimensions: "A5",
    series: "Studies",
    alt: "",
    image: kunfayakun,
  },
  {
    slug: "surrender",
    featured: true,
    title: "Surrender",
    year: 2026,
    medium: "Acrylic on canvas",
    dimensions: "50 × 42 cm",
    series: "Paintings",
    alt: "Square composition of rust red, terracotta and sand-coloured forms.",
    status: "Sold",
    image: surrender,
  },
  {
    slug: "obama",
    title: "Obama",
    year: 2024,
    medium: " on paper",
    dimensions: "70 × 60 cm",
    series: "Portraits",
    alt: "",
    image: obama,
  },
  {
    slug: "pele",
    title: "pele",
    year: 2024,
    medium: "Charlcoal on paper",
    
    series: "Portraits",
    alt: "Soft grey-green and blush shapes with thin lines, like a view through a wet window.",
    image: pele,
  },
  {
    slug: "mbappe",
    title: "Mbappe",
    year: 2025,
    medium: "Charcoal on paper",
    series: "Portraits",
    dimensions: "70 × 60 cm",
    alt: "Square composition of indigo, plum and dusty rose layered shapes.",
    image: mbappe ,
  },
  {
    slug: "mammito",
    title: "Mammito",
    year: 2024,
    medium: "Charcoal",
    series: "Portraits",
    alt: "",
    image: mammito,
  },
  {
    slug: "Study 1",
    title: "Portrait study 1",
    year: 2026,
    medium: "Acrylic",
    series: "Studies",
    alt: "",
    image: study1
  },
  {
    slug: "Study 2",
    title: "Portrait study 1",
    year: 2026,
    medium: "Acrylic",
    series: "Studies",
    alt: "",
    image: study2
  },
  {
    slug: "Study 3",
    title: "Portrait study 1",
    year: 2026,
    medium: "Acrylic",
    series: "Studies",
    alt: "",
    image: study3
  },
  {
    slug: "Study 4",
    title: "Portrait study 1",
    year: 2026,
    medium: "Acrylic",
    series: "Studies",
    alt: "",
    image: study4
  }
];
