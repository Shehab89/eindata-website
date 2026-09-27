import Link from 'next/link';
import { EinDataLogo } from '@/components/icons/EinDataLogo';
import { type Locale, localePath, translations } from '@/lib/i18n';

export default function PrivacyPage({ locale }: { locale: Locale }) {
  const t = translations[locale].privacy;

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <Link href={localePath[locale]} aria-label="EinData">
        <EinDataLogo variant="color" size="md" />
      </Link>
      <h1 className="mt-10 text-3xl sm:text-4xl font-bold font-[var(--font-heading)]">{t.title}</h1>
      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{t.updated}</p>
      {t.sections.map((section) => (
        <section key={section.heading} className="mt-8">
          <h2 className="text-xl font-semibold">{section.heading}</h2>
          <p className="mt-2 leading-relaxed text-[var(--color-text-secondary)]">{section.body}</p>
        </section>
      ))}
      <Link
        href={localePath[locale]}
        className="inline-block mt-12 text-[var(--color-accent)] hover:underline font-medium"
      >
        ← {t.back}
      </Link>
    </main>
  );
}
