'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  BarChart3,
  Brain,
  Database,
  ArrowRight,
  Zap,
  LineChart,
  Shield,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

function FloatingIcon({
  icon: Icon,
  className,
  delay,
}: {
  icon: React.ElementType;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, type: 'spring' }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut' }}
        className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
      >
        <Icon className="w-6 h-6 text-white/90" />
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 hero-gradient-mesh" />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating Icons - visible only on larger screens */}
      <div className="hidden lg:block">
        <FloatingIcon icon={Cloud} className="top-[20%] right-[15%]" delay={0.5} />
        <FloatingIcon icon={BarChart3} className="top-[35%] right-[8%]" delay={0.8} />
        <FloatingIcon icon={Brain} className="bottom-[30%] right-[12%]" delay={1.1} />
        <FloatingIcon icon={Database} className="bottom-[20%] right-[22%]" delay={1.4} />
        <FloatingIcon icon={Zap} className="top-[25%] right-[28%]" delay={0.6} />
        <FloatingIcon icon={LineChart} className="top-[55%] right-[6%]" delay={1.0} />
        <FloatingIcon icon={Shield} className="bottom-[40%] right-[25%]" delay={1.3} />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--color-primary-light)]/15 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-medium text-white/90">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight font-[var(--font-heading)]"
          >
            {t.hero.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl"
          >
            {t.hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-[var(--color-primary)] bg-white rounded-xl shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300"
            >
              {t.hero.cta1}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white bg-white/10 backdrop-blur-md border border-white/25 rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              {t.hero.cta2}
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4" />
              <span>Microsoft Azure</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span>Power BI · Tableau</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              <span>Python · SQL</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span>NLP · Machine learning</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-surface)] dark:from-[var(--color-dark-surface)] to-transparent" />
    </section>
  );
}
