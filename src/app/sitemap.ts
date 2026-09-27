import type { MetadataRoute } from 'next';
import { pageUrl } from '@/lib/i18n';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', priority: 1 },
    { path: 'privacy/', priority: 0.2 },
  ];

  return pages.flatMap(({ path, priority }) => {
    const languages = { en: pageUrl('en', path), nl: pageUrl('nl', path) };
    return [
      { url: languages.en, changeFrequency: 'monthly' as const, priority, alternates: { languages } },
      { url: languages.nl, changeFrequency: 'monthly' as const, priority, alternates: { languages } },
    ];
  });
}
