import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EinData | Cloud & Data Solutions – The Netherlands',
  description:
    'EinData empowers organizations with cloud services, business intelligence, data analytics, automation, and AI solutions that transform raw data into actionable insights.',
  keywords: [
    'data analytics',
    'cloud migration',
    'business intelligence',
    'Power BI',
    'Microsoft Azure',
    'data engineering',
    'AI solutions',
    'automation',
    'Netherlands',
    'ZZP',
    'freelance consultant',
    'EinData',
  ],
  authors: [{ name: 'Shehab Al-Masri', url: 'https://eindata.nl' }],
  creator: 'EinData',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'nl_NL',
    url: 'https://eindata.nl',
    siteName: 'EinData',
    title: 'EinData | Cloud & Data Solutions That Help Your Business Grow',
    description:
      'EinData empowers organizations with cloud services, business intelligence, data analytics, automation, and AI solutions.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EinData – Cloud & Data Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EinData | Cloud & Data Solutions',
    description:
      'Transform raw data into actionable business insights with EinData.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://eindata.nl',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'EinData',
    description:
      'Cloud & Data solutions consultancy based in the Netherlands, specializing in cloud migration, data analytics, Power BI, automation, and AI.',
    url: 'https://eindata.nl',
    email: 'info@eindata.nl',
    founder: {
      '@type': 'Person',
      name: 'Shehab Al-Masri',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NL',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Netherlands',
    },
    serviceType: [
      'Cloud Migration',
      'Data Analytics',
      'Business Intelligence',
      'Power BI Consulting',
      'Data Engineering',
      'AI Solutions',
      'Automation',
    ],
    priceRange: '$$',
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="msapplication-TileColor" content="#0F172A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
