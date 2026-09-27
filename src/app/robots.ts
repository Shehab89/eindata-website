import type { MetadataRoute } from 'next';
import { site } from '@/lib/i18n';

// Search engines and AI assistants (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, …)
// are all welcome: the site is public marketing content.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
