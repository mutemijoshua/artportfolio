// Small reusable pieces used across pages: buttons and section headings.

import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  /** solid = red button · outline = on light backgrounds · outline-light = on dark backgrounds */
  variant?: "solid" | "outline" | "outline-light";
  /** Opens in a new tab (for WhatsApp and other outside links) */
  external?: boolean;
};

const buttonStyles = {
  solid: "bg-accent text-white hover:bg-[#8a1f18]",
  outline: "ring-1 ring-ink text-ink hover:bg-ink hover:text-paper",
  "outline-light": "ring-1 ring-chalk text-chalk hover:bg-chalk hover:text-charcoal",
};

export function ButtonLink({ href, children, variant = "solid", external = false }: ButtonProps) {
  const className = `inline-block px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.18em] transition-colors ${buttonStyles[variant]}`;

  // Outside links (WhatsApp, mailto, social) use a normal <a>; pages on this site use <Link>.
  if (external || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={className} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/** The title band at the top of inner pages (Gallery, About, …). */
export function PageHeader({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="bg-stone">
      <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-8 sm:py-20">
        <h1 className="display text-4xl sm:text-6xl">{title}</h1>
        <div className="mx-auto mt-6 h-px w-16 bg-accent" />
        {intro && <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
      </div>
    </div>
  );
}

/** A section heading with a short rule under it. `light` is for dark sections. */
export function SectionTitle({
  children,
  light = false,
  center = false,
}: {
  children: React.ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : undefined}>
      <h2 className={`display text-3xl sm:text-4xl lg:text-5xl ${light ? "text-chalk" : "text-ink"}`}>{children}</h2>
      <div className={`mt-5 h-px w-16 bg-accent ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
