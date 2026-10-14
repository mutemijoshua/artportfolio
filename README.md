# Artist portfolio

A portfolio site built with Next.js 16, React 19 and Tailwind CSS 4, ready to deploy on Vercel.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Edits show up instantly.

## Make it yours

| What                          | Where                                   |
| ----------------------------- | --------------------------------------- |
| Name, bio, email, social links | `src/content/site.ts`                  |
| Artworks (and their details)  | `src/content/artworks.ts`               |
| Artwork image files           | `src/content/images/`                   |
| Colours and fonts             | `src/app/globals.css`                   |

**To add a piece:** drop the image into `src/content/images/`, import it at the top of
`src/content/artworks.ts`, and add an entry to the list. The placeholder images are generated —
delete them once your own work is in.

## Deploy

Push to GitHub, then import the repo at vercel.com/new. Every push to `main` redeploys.
After the first deploy, set `url` in `src/content/site.ts` to your live address.

## Commands

- `npm run dev` — local development server
- `npm run build` — production build (run this before pushing to catch errors)
- `npm run lint` — check code for common mistakes
