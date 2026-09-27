import type { Metadata } from 'next';
import { type Locale, pageUrl, site, translations } from '@/lib/i18n';

const keywords: Record<Locale, string[]> = {
  en: [
    'freelance data analyst Eindhoven',
    'Azure data engineer Netherlands',
    'Power BI consultant Eindhoven',
    'data consultant Netherlands',
    'freelance data engineer',
    'Azure Data Factory',
    'reporting automation',
    'data analysis',
    'Brainport',
    'EinData',
    'Shehab Al-Masri',
  ],
  nl: [
    'freelance data-analist Eindhoven',
    'Azure data engineer',
    'Power BI specialist Eindhoven',
    'data consultant Nederland',
    'zzp data engineer',
    'dashboard laten maken',
    'rapportages automatiseren',
    'data-analyse mkb',
    'Brainport',
    'EinData',
    'Shehab Al-Masri',
  ],
};

export function buildMetadata(locale: Locale, path = ''): Metadata {
  const t = translations[locale];
  const url = pageUrl(locale, path);

  return {
    metadataBase: new URL(site.url),
    title: t.meta.title,
    description: t.meta.description,
    keywords: keywords[locale],
    authors: [{ name: site.founder, url: site.linkedin }],
    creator: site.founder,
    alternates: {
      canonical: url,
      languages: {
        en: pageUrl('en', path),
        nl: pageUrl('nl', path),
        'x-default': pageUrl('en', path),
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : 'nl_NL',
      alternateLocale: locale === 'en' ? 'nl_NL' : 'en_US',
      url,
      siteName: site.name,
      title: t.meta.title,
      description: t.meta.description,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: t.meta.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.title,
      description: t.meta.description,
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
        { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    },
    manifest: '/site.webmanifest',
  };
}

// Structured data so search engines and AI assistants can identify the business,
// the person behind it and the answers to common questions.
export function buildJsonLd(locale: Locale) {
  const t = translations[locale];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${site.url}/#business`,
        name: site.name,
        url: site.url,
        email: site.email,
        logo: `${site.url}/logo.svg`,
        image: `${site.url}/og-image.png`,
        description: t.meta.description,
        founder: { '@id': `${site.url}/#founder` },
        address: {
          '@type': 'PostalAddress',
          addressLocality: site.city,
          addressRegion: site.region,
          addressCountry: site.country,
        },
        areaServed: { '@type': 'Country', name: 'Netherlands' },
        knowsLanguage: ['en', 'nl', 'ar'],
        identifier: { '@type': 'PropertyValue', propertyID: 'KVK', value: site.kvk },
        sameAs: [site.linkedin],
        knowsAbout: [
          'Microsoft Azure',
          'Azure Data Factory',
          'Azure Synapse Analytics',
          'Power BI',
          'Tableau',
          'Python',
          'SQL',
          'Data engineering',
          'Data analysis',
          'Natural language processing',
          'Reporting automation',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: t.services.title,
          itemListElement: t.services.items.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.title, description: s.description },
          })),
        },
      },
      {
        '@type': 'Person',
        '@id': `${site.url}/#founder`,
        name: site.founder,
        jobTitle: 'Freelance Data Analyst & Azure Data Engineer',
        worksFor: { '@id': `${site.url}/#business` },
        url: site.url,
        sameAs: [site.linkedin],
        address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: site.country },
        alumniOf: [
          { '@type': 'CollegeOrUniversity', name: 'Utrecht University' },
          { '@type': 'CollegeOrUniversity', name: 'Nile University' },
          { '@type': 'CollegeOrUniversity', name: "Sana'a University" },
        ],
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', name: 'MSc Applied Data Science', credentialCategory: 'degree' },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: ['en', 'nl'],
        publisher: { '@id': `${site.url}/#business` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl(locale)}#faq`,
        inLanguage: locale,
        mainEntity: t.faq.items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  };
}

export function jsonLdScript(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, '\\u003c') };
}
