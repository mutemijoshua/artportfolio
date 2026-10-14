"use client";
// Click the artwork to see it full-screen. Uses the browser's built-in <dialog>,
// which handles the Escape key and focus for us.

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";

export function Lightbox({ image, alt, title }: { image: StaticImageData; alt: string; title: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="block w-full cursor-zoom-in"
        aria-label={`View ${title} full screen`}
      >
        <Image
          src={image}
          alt={alt}
          placeholder="blur"
          loading="eager"
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="mx-auto h-auto max-h-[82dvh] w-auto object-contain"
        />
      </button>

      <dialog
        ref={dialogRef}
        onClick={() => dialogRef.current?.close()}
        aria-label={title}
        className="m-0 h-dvh max-h-none w-dvw max-w-none cursor-zoom-out bg-wall p-0 backdrop:bg-wall"
      >
        <div className="flex h-full w-full items-center justify-center p-4 sm:p-10">
          <Image
            src={image}
            alt={alt}
            sizes="100vw"
            quality={90}
            className="h-auto max-h-full w-auto max-w-full object-contain"
          />
        </div>
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          className="absolute right-4 top-4 bg-wall px-3 py-1 text-sm text-ink"
        >
          Close
        </button>
      </dialog>
    </>
  );
}
