'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Clock, MessageCircle, FileText, Wrench } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useInView } from '@/hooks/useAnimations';

const optionIcons = [Users, Target, Clock];
const stepIcons = [MessageCircle, FileText, Wrench];

export default function Process() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-20 lg:py-28 bg-[var(--color-surface-alt)] dark:bg-[var(--color-dark-surface-alt)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] dark:text-[var(--color-dark-text)] font-[var(--font-heading)]">
            {t.howItWorks.title}
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)]">
            {t.howItWorks.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.howItWorks.options.map((option, index) => {
            const Icon = optionIcons[index];
            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[var(--color-surface-card)] dark:bg-[var(--color-dark-surface-card)] rounded-2xl p-6 sm:p-8 border border-[var(--color-border)] dark:border-[var(--color-dark-border)]"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5 shadow-md">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text)] dark:text-[var(--color-dark-text)] mb-2 font-[var(--font-heading)]">
                  {option.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)] leading-relaxed">
                  {option.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <h3 className="mt-16 mb-8 text-center text-xl font-bold text-[var(--color-text)] dark:text-[var(--color-dark-text)] font-[var(--font-heading)]">
          {t.howItWorks.stepsTitle}
        </h3>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.howItWorks.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-14 h-14 rounded-full bg-[var(--color-accent)]/10 dark:bg-[var(--color-accent)]/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[var(--color-accent)] text-white text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <h4 className="font-bold text-[var(--color-text)] dark:text-[var(--color-dark-text)] mb-1">
                  {step.title}
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)] max-w-xs">
                  {step.description}
                </p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
