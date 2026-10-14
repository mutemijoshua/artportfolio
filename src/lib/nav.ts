// The site's menu. Used by the header, the phone menu and the footer.
// Add or reorder pages here.

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/commissions", label: "Commissions" },
  { href: "/contact", label: "Contact" },
];

/** Is this menu item the page being viewed? */
export function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  // Artwork pages (/work/...) count as part of the Gallery.
  if (href === "/gallery") return pathname.startsWith("/gallery") || pathname.startsWith("/work");
  return pathname.startsWith(href);
}
