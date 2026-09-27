import { Inter, Manrope } from 'next/font/google';
import type { Locale } from '@/lib/i18n';
import '@/app/globals.css';

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

// Shared <html> shell for the English and Dutch root layouts.
export default function RootDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={locale}
      className={`${inter.variable} ${manrope.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
