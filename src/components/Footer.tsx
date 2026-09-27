'use client';

import React from 'react';
import { LinkedinIcon as Linkedin } from '@/components/icons/LinkedinIcon';
import { EinDataLogo } from '@/components/icons/EinDataLogo';
import { useLanguage } from '@/context/LanguageContext';
import { site } from '@/lib/i18n';

export default function Footer() {
  const { t, locale } = useLanguage();
  const links = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="bg-[var(--color-text)] dark:bg-[var(--color-dark-surface-card)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="max-w-sm">
            <EinDataLogo variant="white" size="md" showTagline />
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">{t.footer.description}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="space-y-3">
            <a href={`mailto:${site.email}`} className="block text-sm text-gray-400 hover:text-white transition-colors">
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.city} · KVK {site.kvk}
          </p>
          <a href={locale === 'nl' ? '/nl/privacy' : '/privacy'} className="hover:text-white transition-colors">
            {t.footer.privacy}
          </a>
        </div>
      </div>
    </footer>
  );
}
