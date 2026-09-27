import type { MetadataRoute } from 'next';
import { site } from '@/lib/i18n';

// Search engines and AI assistants (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, …)
// are all welcome: the site is public marketing content.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
