'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  UserCheck,
  CloudCog,
  ShieldCheck,
  Target,
  MessageSquare,
  Workflow,
  Handshake,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useInView } from '@/hooks/useAnimations';

const icons = [
  BarChart3,
  UserCheck,
  CloudCog,
  ShieldCheck,
  Target,
  MessageSquare,
  Workflow,
  Handshake,
];

export default function WhyChoose() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  return (
    <section
      id="why-choose"
      ref={ref}
      className="py-24 lg:py-32 bg-[var(--color-surface-alt)] dark:bg-[var(--color-dark-surface-alt)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 rounded-full mb-4">
            {t.whyChoose.title}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text)] dark:text-[var(--color-dark-text)] font-[var(--font-heading)]">
            {t.whyChoose.title}
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)]">
            {t.whyChoose.subtitle}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyChoose.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative bg-[var(--color-surface-card)] dark:bg-[var(--color-dark-surface-card)] rounded-2xl p-6 border border-[var(--color-border)] dark:border-[var(--color-dark-border)] card-hover text-center"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--color-primary)]/5 dark:bg-[var(--color-accent)]/10 group-hover:bg-[var(--color-primary)]/10 dark:group-hover:bg-[var(--color-accent)]/20 transition-colors duration-300 mb-4">
                  <Icon className="w-7 h-7 text-[var(--color-primary)] dark:text-[var(--color-accent)]" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[var(--color-text)] dark:text-[var(--color-dark-text)] mb-2 font-[var(--font-heading)]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
