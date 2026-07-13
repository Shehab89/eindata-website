'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, FolderKanban, ThumbsUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useInView, useAnimatedCounter } from '@/hooks/useAnimations';

function StatCard({
  icon: Icon,
  value,
  label,
  suffix,
  delay,
  isInView,
}: {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix: string;
  delay: number;
  isInView: boolean;
}) {
  const animatedValue = useAnimatedCounter(value, 2000, isInView, suffix);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 dark:bg-[var(--color-accent)]/20 mb-3">
        <Icon className="w-6 h-6 text-[var(--color-accent)]" />
      </div>
      <div className="text-3xl lg:text-4xl font-bold text-[var(--color-text)] dark:text-[var(--color-dark-text)] font-[var(--font-heading)]">
        {animatedValue}
      </div>
      <div className="mt-1 text-sm text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)]">
        {label}
      </div>
    </motion.div>
  );
}

export default function About() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 lg:py-32 bg-[var(--color-surface)] dark:bg-[var(--color-dark-surface)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 rounded-full mb-4">
              {t.about.title}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text)] dark:text-[var(--color-dark-text)] font-[var(--font-heading)]">
              {t.about.subtitle}
            </h2>
            <p className="mt-6 text-lg text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)] leading-relaxed">
              {t.about.description}
            </p>

            {/* Founder info */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                S
              </div>
              <div>
                <div className="font-semibold text-[var(--color-text)] dark:text-[var(--color-dark-text)]">
                  Shehab Al-Masri
                </div>
                <div className="text-sm text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)]">
                  Founder & Data Consultant
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative bg-[var(--color-surface-card)] dark:bg-[var(--color-dark-surface-card)] rounded-3xl p-10 border border-[var(--color-border)] dark:border-[var(--color-dark-border)] shadow-xl">
              {/* Decorative gradient */}
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" />

              <div className="grid grid-cols-2 gap-10">
                <StatCard
                  icon={Award}
                  value={5}
                  label={t.about.stats.experience}
                  suffix="+"
                  delay={0.3}
                  isInView={isInView}
                />
                <StatCard
                  icon={FolderKanban}
                  value={30}
                  label={t.about.stats.projects}
                  suffix="+"
                  delay={0.4}
                  isInView={isInView}
                />
                <StatCard
                  icon={Users}
                  value={20}
                  label={t.about.stats.clients}
                  suffix="+"
                  delay={0.5}
                  isInView={isInView}
                />
                <StatCard
                  icon={ThumbsUp}
                  value={100}
                  label={t.about.stats.satisfaction}
                  suffix="%"
                  delay={0.6}
                  isInView={isInView}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
