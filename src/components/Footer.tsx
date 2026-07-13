'use client';

import React from 'react';
import { LinkedinIcon as Linkedin } from '@/components/icons/LinkedinIcon';
import { EinDataLogo } from '@/components/icons/EinDataLogo';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[var(--color-text)] dark:bg-[var(--color-dark-surface-card)] border-t border-[var(--color-border)] dark:border-[var(--color-dark-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <EinDataLogo variant="white" size="md" showTagline />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {[
                { label: t.nav.home, href: '#home' },
                { label: t.nav.services, href: '#services' },
                { label: t.nav.about, href: '#about' },
                { label: t.nav.projects, href: '#projects' },
                { label: t.nav.contact, href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.legal}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.connect}
            </h3>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[var(--color-accent)] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <a
                href="mailto:info@eindata.nl"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                info@eindata.nl
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              {t.footer.copyright}
            </p>
            <p className="text-sm text-gray-500">
              KVK: 12345678 | BTW: NL123456789B01
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
