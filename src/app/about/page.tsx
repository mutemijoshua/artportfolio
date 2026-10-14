import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-8 sm:pt-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <h1 className="font-serif text-5xl tracking-tight sm:text-6xl">About</h1>
          <Image
            src={site.photo}
            alt={site.photoAlt}
            placeholder="blur"
            sizes="(min-width: 1024px) 320px, 70vw"
            className="mt-8 aspect-[4/5] w-full max-w-xs rounded-md object-cover ring-1 ring-line"
          />
        </div>

        <div>
          <div className="max-w-[62ch] space-y-5 font-serif text-xl leading-relaxed">
            {site.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted">Based in {site.location}</p>

          {site.exhibitions.length > 0 && (
            <section className="mt-16">
              <h2 className="font-serif text-2xl">Exhibitions</h2>
              <ul className="mt-4 border-t border-line">
                {site.exhibitions.map((e) => (
                  <li
                    key={`${e.year}-${e.title}`}
                    className="grid grid-cols-[4rem_1fr] gap-4 border-b border-line py-3 text-sm sm:grid-cols-[4rem_1fr_1fr]"
                  >
                    <span className="text-muted">{e.year}</span>
                    <span>{e.title}</span>
                    <span className="col-start-2 text-muted sm:col-start-auto">{e.place}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
