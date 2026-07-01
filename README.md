# noverix-site

A modern landing page for Avelix, built with Next.js, TypeScript, Tailwind CSS, and a deployment setup for Cloudflare/OpenNext.

## Features
- Next.js App Router with a `src/` layout
- TypeScript
- Tailwind CSS
- ESLint
- SEO-focused metadata and structure
- Accessible, responsive, and performance-minded pages
- Routes for Home, About, and Contact

## Tech Stack
- Next.js 16
- React 19
- Cloudflare/OpenNext deployment support

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

- `npm run dev` - start the local Next.js dev server
- `npm run build` - create a production build
- `npm run start` - run the production server locally
- `npm run lint` - run ESLint
- `npm run preview` - build and preview with OpenNext
- `npm run deploy` - build and deploy to Cloudflare Workers with OpenNext
- `npm run upload` - build and upload with OpenNext

## Project Structure
- `src/app` - App Router pages and global layout
- `src/components` - Shared UI components
- `open-next.config.ts` - OpenNext configuration
- `wrangler.jsonc` - Cloudflare deployment configuration

## Customization
- Update the route content in `src/app` as needed.
- Update shared UI in `src/components`.
- Review Cloudflare settings and GitHub Actions secrets before deploying.

## Linting
```bash
npm run lint
```

## Building for Production
```bash
npm run build
npm start
```

---

Before shipping, verify the deployment settings and environment variables for your target environment.
