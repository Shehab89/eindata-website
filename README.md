# eindata.nl

Website of EinData, the freelance data consultancy of Shehab Al-Masri (Eindhoven, KVK 42115043).

Built with Next.js 16 (App Router), Tailwind CSS 4 and framer-motion.

- `/`: English, `/nl/`: Dutch (separate URLs so Google indexes both languages)
- All text lives in `src/lib/i18n.ts`. Edit it there, for both languages.
- SEO: metadata and JSON-LD in `src/lib/seo.ts`, plus `sitemap.xml`, `robots.txt` and `public/llms.txt` (a summary for AI assistants)
- Contact form: `public/contact.php` emails messages to info@eindata.nl (PHP `mail()` on the hosting)
- Hosting: static export (`out/`) on GoDaddy cPanel, deployed by `.github/workflows/deploy.yml`

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
```

See [docs/GO-LIVE.md](docs/GO-LIVE.md) for deployment, email setup and Google registration.
