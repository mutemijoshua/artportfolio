// Generates /sitemap.xml so search engines can find every page.
import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getAllArtworks } from "@/lib/artworks";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/contact"].map((path) => ({ url: `${site.url}${path}` }));
  const works = getAllArtworks().map((a) => ({ url: `${site.url}/work/${a.slug}` }));
  return [...pages, ...works];
}
