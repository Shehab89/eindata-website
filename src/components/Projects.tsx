'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, LayoutDashboard, Users, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useInView } from '@/hooks/useAnimations';

const projectIcons = [Cloud, LayoutDashboard, Users];
const projectGradients = [
  'from-blue-600 to-cyan-500',
  'from-amber-500 to-orange-500',
  'from-violet-600 to-purple-500',
];

export default function Projects() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();

  return (
    <section
      id="projects"
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
            {t.projects.title}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text)] dark:text-[var(--color-dark-text)] font-[var(--font-heading)]">
            {t.projects.title}
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)]">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map((project, index) => {
            const Icon = projectIcons[index];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-[var(--color-surface-card)] dark:bg-[var(--color-dark-surface-card)] rounded-2xl overflow-hidden border border-[var(--color-border)] dark:border-[var(--color-dark-border)] card-hover"
              >
                {/* Project image placeholder */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${projectGradients[index]} flex items-center justify-center overflow-hidden`}
                >
                  {/* Pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <Icon className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-500" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <ArrowUpRight className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--color-text)] dark:text-[var(--color-dark-text)] mb-3 font-[var(--font-heading)]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium text-[var(--color-accent)] bg-[var(--color-accent)]/8 dark:bg-[var(--color-accent)]/15 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
