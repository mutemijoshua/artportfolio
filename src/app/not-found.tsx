import Link from "next/link";

// Shown for any URL that doesn't exist.
export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-8">
      <h1 className="display text-4xl sm:text-5xl">This page isn&apos;t on the wall.</h1>
      <p className="mt-6 text-muted">
        The link may be old, or the piece may have moved.{" "}
        <Link href="/" className="text-accent underline underline-offset-4">
          See all work
        </Link>
      </p>
    </div>
  );
}
