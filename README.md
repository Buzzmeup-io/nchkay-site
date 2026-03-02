# Nch'ḵay̓ portfolio — intro package

A connected portfolio demo for Nch'ḵay̓ Development Corporation and the Squamish Nation. Built to showcase their properties and member businesses, with a shared design system and a path to more work.

## What’s included

- **Hub** (`/`) — Slide hero scroller with links to each property and the directory; “coming soon” for Mosquito Creek Marina, Lynnwood Marina, Matthews West, Squamish Valley Gas Bar.
- **Property sites** — Capilano RV Park, International Plaza, Marine Drive (X̱wemelch'sten), Sen̓áḵw. Real pulled content where noted; same design system and tagline.
- **Squamish Nation business directory** (`/directory`) — Placeholder listings and **$1,000 website special for Nation members** CTA.
- **Design system** (`/design`) — Colours (deep red + First Nations orange), spacing, components. Fonts: to be provided.
- **Working with us** (`/working-with-us`) — FAQ and contact/next steps. Hub footer: “Get in touch” (update email in `Footer.tsx` and `working-with-us/page.tsx`).

## Logo

The Nchkay logo is pulled from [nchkay.com](https://www.nchkay.com): `public/logo-nchkay.png` (header/footer, from their site header) and `public/logo-nchkay-square.jpg` (square version from their schema/organization logo). The app uses `logo-nchkay.png` in the header and footer.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Contact placeholder

Update `hello@example.com` in:

- `src/components/layout/Footer.tsx`
- `src/app/working-with-us/page.tsx`
- `src/app/directory/page.tsx` (Express interest link)

to your real contact email.
