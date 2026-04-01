# Nexa

Nexa is a Next.js 14 landing page and demo experience for AI automation services. The project includes a primary marketing homepage, a car dealership demo route, responsive UI components, and production-ready static build output.

## Stack

- Next.js 14 App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- PNPM

## Local Setup

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Available Scripts

```bash
pnpm dev
pnpm build
pnpm start
```

## Project Structure

```text
app/                App Router entrypoints and layouts
components/         Reusable UI and section components
public/             Static assets and icons
styles/             Global style assets
```

## Deployment

This project builds successfully with:

```bash
pnpm build
```

Recommended targets:

- Vercel
- Netlify
- Any Node.js host that supports Next.js 14

## Notes

- The ROI calculator uses deterministic number formatting to avoid React hydration mismatches.
- Footer credits and external portfolio links point to `https://www.pratikdev.site/`.
- The project metadata and package name have been aligned with the `Nexa` brand.
