'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Map,
  DatabaseZap,
  Wrench,
  TrendingUp,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useInView } from '@/hooks/useAnimations';

const stepIcons = [Search, Map, DatabaseZap, Wrench, TrendingUp];

export default function Process() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  return (
    <section
      id="process"
      ref={ref}
      className="py-24 lg:py-32 bg-[var(--color-surface)] dark:bg-[var(--color-dark-surface)]"
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
            {t.process.title}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text)] dark:text-[var(--color-dark-text)] font-[var(--font-heading)]">
            {t.process.title}
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)]">
            {t.process.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary)]" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {t.process.steps.map((step, index) => {
              const Icon = stepIcons[index];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step number circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full gradient-bg flex items-center justify-center shadow-lg mb-6 ring-4 ring-[var(--color-surface)] dark:ring-[var(--color-dark-surface)]">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Step number badge */}
                  <div className="absolute -top-1 -right-1 lg:right-auto lg:-top-2 w-7 h-7 rounded-full bg-[var(--color-accent)] text-white text-xs font-bold flex items-center justify-center shadow-md z-20">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-[var(--color-text)] dark:text-[var(--color-dark-text)] mb-2 font-[var(--font-heading)]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)] leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
