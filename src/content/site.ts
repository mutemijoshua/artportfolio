// ─────────────────────────────────────────────────────────────
// Your details. Edit this file to change your name, photo, bio,
// contact links and colours. Everything on the site that says
// "who you are" comes from here.
// ─────────────────────────────────────────────────────────────

// Your photo: replace src/content/images/portrait.jpg with your own
// (a portrait-shaped photo works best, e.g. 800 × 1000 px).
import portrait from "./images/portrait.jpg";

export const site = {
  name: "Your Name",
  // One line that sits under your name on the home page.
  tagline: "Paintings and drawings made in Nairobi, mostly after dark.",
  // Used in Google results and link previews.
  description:
    "Portfolio of Your Name — paintings, drawings and studies made in Nairobi.",
  // Your live URL once deployed (used for the sitemap and link previews).
  url: "https://your-domain.vercel.app",
  location: "Nairobi, Kenya",

  photo: portrait,
  photoAlt: "Portrait of Your Name in the studio",

  // ── Colours ───────────────────────────────────────────────
  // Pick one: "malachite" (deep green), "indigo" (night blue) or "ochre" (warm sun).
  // Each one has a light and a dark version that follows the visitor's device setting.
  palette: "malachite" as Palette,

  // ── Contact ───────────────────────────────────────────────
  email: "hello@example.com",
  // WhatsApp number in international format: country code + number,
  // no "+", no spaces, no leading 0.  0712 345 678  →  "254712345678"
  whatsapp: "254700000000",

  // Social links. Remove any you don't use; add more in the same shape.
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/yourhandle" },
    { label: "TikTok", href: "https://www.tiktok.com/@yourhandle" },
    { label: "Facebook", href: "https://www.facebook.com/yourpage" },
  ],

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
};

export type Palette = "malachite" | "indigo" | "ochre";

/** A WhatsApp chat link, optionally with a message already typed in. */
export function whatsappLink(message?: string) {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${site.whatsapp}${text}`;
}
