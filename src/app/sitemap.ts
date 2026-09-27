import type { MetadataRoute } from 'next';
import { site } from '@/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', priority: 1 },
    { path: '/privacy', priority: 0.2 },
  ];

  return pages.flatMap(({ path, priority }) => {
    const languages = { en: `${site.url}${path}`, nl: `${site.url}/nl${path}` };
    return [
      { url: languages.en, changeFrequency: 'monthly' as const, priority, alternates: { languages } },
      { url: languages.nl, changeFrequency: 'monthly' as const, priority, alternates: { languages } },
    ];
  });
}
