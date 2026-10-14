// ─────────────────────────────────────────────────────────────
// Your details. Edit this file to change your name, photo, text,
// contact links and the home page sections. Everything on the
// site that says "who you are" comes from here.
// ─────────────────────────────────────────────────────────────

// Your photo: replace src/content/images/portrait.jpg with your own
// (a portrait-shaped photo works best, e.g. 800 × 1000 px).
import portrait from "./images/portrait.jpg";

export const site = {
  name: "Your Name",
  /** Used in headings like "Who is …?" and "Read more about …" */
  firstName: "Your Name",
  // The line under your name in the big hero at the top of the home page.
  tagline: "Paintings and drawings from Nairobi",
  // Used in Google results and link previews.
  description:
    "Portfolio of Your Name — original paintings, drawings and commissions from Nairobi, Kenya.",
  // Your live URL once deployed (used for the sitemap and link previews).
  url: "https://your-domain.vercel.app",
  location: "Nairobi, Kenya",

  photo: portrait,
  photoAlt: "Portrait of Your Name in the studio",

  // The artwork shown large in the home page hero (its slug from artworks.ts).
  heroArtwork: "night-matatu",

  // ── Contact ───────────────────────────────────────────────
  email: "hello@example.com",
  // WhatsApp number in international format: country code + number,
  // no "+", no spaces, no leading 0.  0712 345 678  →  "254712345678"
  whatsapp: "254700000000",

  // Social links, shown as icons in the top bar and footer.
  // platform must be one of: instagram, tiktok, facebook, youtube, x
  // Remove any you don't use.
  socials: [
    { platform: "instagram", label: "Instagram", href: "https://www.instagram.com/yourhandle" },
    { platform: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@yourhandle" },
    { platform: "facebook", label: "Facebook", href: "https://www.facebook.com/yourpage" },
  ] as Social[],

  // ── Home page ─────────────────────────────────────────────
  // The "Who is …?" section. Keep it to two short paragraphs.
  intro: [
    "I'm a painter and software developer based in Nairobi. By day I write code; in the evenings I paint the city I live in — matatus at night, markets at noon, the colour of the soil after rain.",
    "My work moves between quick studies on paper and larger pieces on canvas, and I take on a small number of commissions each year.",
  ],

  // Optional studio / process video on the home page.
  // Paste a YouTube *embed* link, e.g. "https://www.youtube.com/embed/VIDEO_ID".
  // Leave as "" to hide the section.
  processVideo: "",

  // Quotes about your work. These are PLACEHOLDERS — replace them with real
  // words from collectors, curators or clients (with their permission), or
  // delete them all to hide the section.
  testimonials: [
    {
      quote: "Replace this with a short quote from a collector about a piece they bought.",
      name: "Collector's name",
      role: "Collector, Nairobi",
    },
    {
      quote: "Replace this with a quote from a curator, gallery or event you showed with.",
      name: "Curator's name",
      role: "Gallery or event",
    },
    {
      quote: "Replace this with a quote from a commission client about working with you.",
      name: "Client's name",
      role: "Commission client",
    },
  ],

  // A short line of yours shown in the footer. Delete the text to hide it.
  footerQuote: "Every painting starts as a small decision, and then another.",

  // ── About page ────────────────────────────────────────────
  // Each string is one paragraph.
  bio: [
    "I make paintings during the hours I'm not writing code. The two practices feed each other more than I expected: both are about building something one small decision at a time, and knowing when to stop.",
    "Most of the work here starts as quick studies on paper — street corners, light through a window, the colour of the soil after rain — and some of it grows into larger pieces on canvas.",
    "I'm open to commissions, collaborations and group shows.",
  ],

  // Optional exhibitions / events list on the About page. Delete entries you don't need.
  exhibitions: [
    { year: "2026", title: "Group show (placeholder)", place: "A gallery, Nairobi" },
    { year: "2025", title: "Open studio (placeholder)", place: "Your studio" },
  ],

  // ── Commissions page ──────────────────────────────────────
  commissions: {
    intro:
      "I paint a small number of commissions each year — portraits, places that matter to you, or a piece made for a particular wall.",
    steps: [
      { title: "Get in touch", text: "Message me on WhatsApp or email with what you have in mind, the size, and any photos or references." },
      { title: "Agree the details", text: "We settle the size, medium, price and timeline. A deposit secures your place in the schedule." },
      { title: "Sketch and progress", text: "I share a first sketch for your feedback, then progress photos as the painting develops." },
      { title: "Delivery", text: "Once the final payment is made, the finished piece is delivered in Nairobi or shipped to you." },
    ],
    note: "Typical turnaround is 3–6 weeks depending on size. Prices on request.",
  },
};

export type Social = {
  platform: "instagram" | "tiktok" | "facebook" | "youtube" | "x";
  label: string;
  href: string;
};

/** A WhatsApp chat link, optionally with a message already typed in. */
export function whatsappLink(message?: string) {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${site.whatsapp}${text}`;
}
