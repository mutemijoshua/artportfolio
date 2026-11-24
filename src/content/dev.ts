// ─────────────────────────────────────────────────────────────
// The "Dev Work" page ( /dev ). Edit this file to change what it shows.
//
// Two lists fill themselves in:
//  • Client websites come from Sentinel. Tick "Show this site on my
//    portfolio" on a site in the Sentinel dashboard and it appears here.
//  • Code projects come from your public GitHub repositories.
//
// Both refresh about once an hour, so no redeploy is needed.
// ─────────────────────────────────────────────────────────────

export const dev = {
  title: "Dev Work",
  intro:
    "By day I design and build websites and apps — WordPress sites for organisations across Kenya, web apps, and Android apps in Kotlin.",

  // What you work with, shown as a short line under the intro.
  tools: ["WordPress", "Elementor & Kadence", "Next.js", "Python & Django", "Kotlin & Jetpack Compose"],

  // ── Client websites (from Sentinel) ─────────────────────────
  sentinelUrl: "https://sentinel-josh-6df4.vercel.app",

  // ── GitHub ──────────────────────────────────────────────────
  githubUser: "mutemijoshua",

  // Shown first, in this order. `title`, `description` and `live` override what
  // GitHub has (useful when a repo has no description yet).
  // Set live: "" to hide the "Live" link (e.g. for a private dashboard).
  featured: [
    {
      repo: "sentinel",
      description:
        "Uptime and security dashboard for every client website I run. Pairs with Sentinel Guard, a WordPress security plugin I wrote, and emails me the moment a site goes down.",
      live: "",
    },
    {
      repo: "EspressMVP",
      title: "Espress",
      description:
        "Android app (Kotlin) that automates sending, receiving and tracking parcels for matatu saccos in Kenya.",
    },
    {
      repo: "artportfolio",
      title: "Art portfolio",
      description: "This website — a Next.js portfolio for my paintings and drawings.",
    },
    { repo: "Ecomerce", title: "E-commerce store", description: "Online shop built with Django and JavaScript." },
    { repo: "Counter_Jetpack" },
  ] as FeaturedRepo[],

  // Never shown, even if they have a description.
  hidden: ["Espress", "Espress-Parcels", "Espress.Parcels", "EspressAdmin", "try", "hello-world", "class", "me"],

  // Repos not featured are only shown if they have a description on GitHub
  // and were updated after this year. Add a description on GitHub to make
  // one appear.
  showOthersSince: 2022,
};

export type FeaturedRepo = {
  repo: string;
  title?: string;
  description?: string;
  live?: string;
};
