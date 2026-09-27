'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, LayoutDashboard, BarChart3, Brain, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useInView } from '@/hooks/useAnimations';

const serviceIcons = [Database, LayoutDashboard, BarChart3, Brain];
const serviceGradients = [
  'from-blue-500 to-cyan-400',
  'from-amber-500 to-orange-400',
  'from-emerald-500 to-teal-400',
  'from-indigo-500 to-blue-400',
];

export default function Services() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 lg:py-28 bg-[var(--color-surface-alt)] dark:bg-[var(--color-dark-surface-alt)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text)] dark:text-[var(--color-dark-text)] font-[var(--font-heading)]">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)]">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index];
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-[var(--color-surface-card)] dark:bg-[var(--color-dark-surface-card)] rounded-2xl p-8 border border-[var(--color-border)] dark:border-[var(--color-dark-border)] card-hover cursor-default overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${serviceGradients[index]} opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.08] transition-opacity duration-500 rounded-2xl`}
                />

                {/* Icon */}
                <div
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${serviceGradients[index]} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="relative text-xl font-bold text-[var(--color-text)] dark:text-[var(--color-dark-text)] mb-2 font-[var(--font-heading)]">
                  {service.title}
                </h3>
                <p className="relative text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)] mb-4">
                  {service.description}
                </p>

                {/* Items */}
                <ul className="relative space-y-3">
                  {service.points.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 transition-colors duration-200 ${
                          isHovered
                            ? 'text-[var(--color-accent)]'
                            : 'text-[var(--color-muted)] dark:text-[var(--color-dark-muted)]'
                        }`}
                      />
                      <span className="text-sm text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
