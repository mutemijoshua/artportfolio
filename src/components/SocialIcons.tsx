// Social media icons. The shapes come from the open-source `simple-icons` package.

import { siFacebook, siInstagram, siTiktok, siWhatsapp, siX, siYoutube } from "simple-icons";
import { site, whatsappLink, type Social } from "@/content/site";

const icons: Record<Social["platform"] | "whatsapp", { path: string }> = {
  instagram: siInstagram,
  tiktok: siTiktok,
  facebook: siFacebook,
  youtube: siYoutube,
  x: siX,
  whatsapp: siWhatsapp,
};

export function SocialIcon({ platform, size = 18 }: { platform: keyof typeof icons; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d={icons[platform].path} />
    </svg>
  );
}

/** A row of icon links: your socials plus WhatsApp. */
export function SocialIcons({ size = 18, className = "" }: { size?: number; className?: string }) {
  const links = [...site.socials, { platform: "whatsapp" as const, label: "WhatsApp", href: whatsappLink() }];

  return (
    <ul className={`flex items-center gap-4 ${className}`}>
      {links.map((s) => (
        <li key={s.href}>
          <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label} className="block opacity-80 transition-opacity hover:opacity-100">
            <SocialIcon platform={s.platform} size={size} />
          </a>
        </li>
      ))}
    </ul>
  );
}
