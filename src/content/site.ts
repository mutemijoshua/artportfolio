// ─────────────────────────────────────────────────────────────
// Your details. Edit this file to change your name, photo, text,
// contact links and the home page sections. Everything on the
// site that says "who you are" comes from here.
// ─────────────────────────────────────────────────────────────

// Your photo: replace src/content/images/portrait.jpg with your own
// (a portrait-shaped photo works best, e.g. 800 × 1000 px).
import portrait from "./images/portrait.jpg";

export const site = {
  name: "Joshua Mutua",
  /** Used in headings like "Who is …?" and "Read more about …" */
  firstName: "Joshua",
  // The line under your name in the big hero at the top of the home page.
  tagline: "Paintings and drawings crafted from the soul",
  // Used in Google results and link previews.
  description:
    " original paintings, drawings and commissions from Nairobi, Kenya.",
  // Your live URL once deployed (used for the sitemap and link previews).
  url: "https://artportfolio-lovat.vercel.app/",
  location: "Nairobi, Kenya",

  photo: portrait,
  photoAlt: "Portrait of Your Name in the studio",

  // The artwork shown large in the home page hero (its slug from artworks.ts).
  heroArtwork: "Serenity",

  // ── Contact ───────────────────────────────────────────────
  email: "joshuamutua555@gmail.com",
  // WhatsApp number in international format: country code + number,
  // no "+", no spaces, no leading 0.  0712 345 678  →  "254712345678"
  whatsapp: "254742764477",

  // Social links, shown as icons in the top bar and footer.
  // platform must be one of: instagram, tiktok, facebook, youtube, x
  // Remove any you don't use.
  socials: [
    { platform: "instagram", label: "Instagram", href: "https://www.instagram.com/herman.s.kraft" },
    { platform: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@herman.s.kraft?_r=1&_t=ZS-9AY0TWmnpZA" },
    { platform: "facebook", label: "Facebook", href: "https://www.facebook.com/Herman.s.Kraft" },
  ] as Social[],

  // ── Home page ─────────────────────────────────────────────
  // The "Who is …?" section. Keep it to two short paragraphs.
  intro: [
    "I'm a painter,Web designer, software developer based in Nairobi. By day I work in tech; in the evenings I gather any of the will power that is left, sit down behind my desk and sketch, draw or paint.",
    "My work moves between quick studies on paper and larger pieces on canvas or on paper, and I take on a small number of commissions each year.",
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
      quote: "The commission processs was clear and smooth.Delivered perfectly even before the deadline.I highly recommend",
      name: "Damaris",
      role: "Client",
    },
    {
      quote: "Thankyou Joe for drawing me.Am happy to see myself in this image",
      name: "Herman",
      role: "Commission client",
    },
  ],

  // A short line of yours shown in the footer. Delete the text to hide it.
  footerQuote: "Every artwork starts as a small decision, and then another...",

  // ── About page ────────────────────────────────────────────
  // Each string is one paragraph.
  bio: [
    "I'm  what you would call a part time artist.During the day, I am sitted behind a computer somewhere serving the system.At night, I sit behind my desk and serve my dream.All my practices feed each other more than I expected: they  are about building something, one small decision at a time,and knowing when to stop.",
    "My art practice cuts across different mediums, but mostly I use charcoal, pencils and acrylics depending on the piece that I am working on.",
    "Most of the work here starts as quick studies on paper and some of it grows into larger pieces on paper or canvas.",
    "I'm open to commissions, collaborations and group shows.",
  ],

  // Optional exhibitions / events list on the About page. Delete entries you don't need.
  exhibitions: [

    { year: "2024", title: "exhibition", place: "Jasper Art gallery" },
  ],

  // ── Commissions page ──────────────────────────────────────
  commissions: {
    intro:
      "I draw a small number of commissions each year, portraits and concept pieces that matter to you, or a piece made for a particular wall.",
    steps: [
      { title: "Get in touch", text: "Message me on WhatsApp or email with what you have in mind, the size, and any photos or references." },
      { title: "Agree the details", text: "We settle the size, medium, price and timeline. A deposit secures your place in the schedule." },
      { title: "Sketch and progress", text: "I share a first sketch for your feedback, then progress photos as the painting develops." },
      { title: "Delivery", text: "Once the final payment is made, the finished piece is delivered in Nairobi or shipped to you." },
    ],
    note: "Typical turnaround is 3–6 weeks depending on size. Prices range from 6000 Ksh upwards depending on the size of the artwork.",
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
