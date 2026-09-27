'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, GraduationCap, Languages } from 'lucide-react';
import { LinkedinIcon as Linkedin } from '@/components/icons/LinkedinIcon';
import { useLanguage } from '@/context/LanguageContext';
import { useInView } from '@/hooks/useAnimations';
import { site } from '@/lib/i18n';

export default function About() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 lg:py-28 bg-[var(--color-surface)] dark:bg-[var(--color-dark-surface)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 rounded-full mb-4">
              {t.about.title}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] dark:text-[var(--color-dark-text)] font-[var(--font-heading)]">
              {t.about.headline}
            </h2>
            {t.about.paragraphs.map((p) => (
              <p
                key={p}
                className="mt-5 text-lg text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)] leading-relaxed"
              >
                {p}
              </p>
            ))}

            <div className="mt-8 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                S
              </div>
              <div>
                <div className="font-semibold text-[var(--color-text)] dark:text-[var(--color-dark-text)]">
                  {site.founder}
                </div>
                <div className="text-sm text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)]">
                  {t.about.role} · KVK {site.kvk}
                </div>
              </div>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto w-10 h-10 rounded-lg bg-[#0077B5] flex items-center justify-center text-white hover:bg-[#006097] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-[var(--color-surface-card)] dark:bg-[var(--color-dark-surface-card)] rounded-2xl p-6 sm:p-8 border border-[var(--color-border)] dark:border-[var(--color-dark-border)] shadow-lg">
              <h3 className="text-lg font-bold text-[var(--color-text)] dark:text-[var(--color-dark-text)] mb-4 font-[var(--font-heading)]">
                {t.about.highlightsTitle}
              </h3>
              <ul className="space-y-3">
                {t.about.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--color-accent)]" />
                    <span className="text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)]">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--color-surface-card)] dark:bg-[var(--color-dark-surface-card)] rounded-2xl p-6 sm:p-8 border border-[var(--color-border)] dark:border-[var(--color-dark-border)]">
              <h3 className="flex items-center gap-2 text-lg font-bold text-[var(--color-text)] dark:text-[var(--color-dark-text)] mb-4 font-[var(--font-heading)]">
                <GraduationCap className="w-5 h-5 text-[var(--color-accent)]" />
                {t.about.educationTitle}
              </h3>
              <ul className="space-y-3">
                {t.about.education.map((e) => (
                  <li key={e.degree} className="flex justify-between gap-4">
                    <span>
                      <span className="block font-medium text-[var(--color-text)] dark:text-[var(--color-dark-text)]">
                        {e.degree}
                      </span>
                      <span className="text-sm text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)]">
                        {e.school}
                      </span>
                    </span>
                    <span className="text-sm text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)]">
                      {e.year}
                    </span>
                  </li>
                ))}
              </ul>
              <h3 className="flex items-center gap-2 text-lg font-bold text-[var(--color-text)] dark:text-[var(--color-dark-text)] mt-6 mb-2 font-[var(--font-heading)]">
                <Languages className="w-5 h-5 text-[var(--color-accent)]" />
                {t.about.languagesTitle}
              </h3>
              <p className="text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)]">
                {t.about.languages}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
