'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Moon,
  Sun,
  Languages,
} from 'lucide-react';
import { EinDataLogo } from '@/components/icons/EinDataLogo';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

const navLinks = [
  { key: 'home' as const, href: '#home' },
  { key: 'services' as const, href: '#services' },
  { key: 'about' as const, href: '#about' },
  { key: 'whyChoose' as const, href: '#why-choose' },
  { key: 'projects' as const, href: '#projects' },
  { key: 'contact' as const, href: '#contact' },
];

export default function Navbar() {
  const { t, locale, toggleLocale } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-[var(--color-border)] dark:border-[var(--color-dark-border)] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center group"
            aria-label="EinData — Data, Cloud and AI Consultancy"
          >
            <EinDataLogo
              variant={scrolled ? 'color' : 'white'}
              size="md"
              className="transition-all duration-300 group-hover:opacity-90"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  scrolled
                    ? 'text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-accent)] hover:bg-[var(--color-primary)]/5 dark:hover:bg-[var(--color-accent)]/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {t.nav[link.key]}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={toggleLocale}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-all ${scrolled ? 'text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-accent)] hover:bg-[var(--color-primary)]/5 dark:hover:bg-[var(--color-accent)]/10' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
              aria-label={`Switch to ${locale === 'en' ? 'Dutch' : 'English'}`}
            >
              <Languages className="w-4 h-4" />
              <span className="uppercase font-semibold">{locale === 'en' ? 'NL' : 'EN'}</span>
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all ${scrolled ? 'text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-accent)] hover:bg-[var(--color-primary)]/5 dark:hover:bg-[var(--color-accent)]/10' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a
              href="#contact"
              className={`ml-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg ${scrolled ? 'text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)]' : 'text-[var(--color-primary)] bg-white hover:bg-gray-100'}`}
            >
              {t.hero.cta1}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleLocale}
              className="p-2 text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)] rounded-lg"
              aria-label={`Switch to ${locale === 'en' ? 'Dutch' : 'English'}`}
            >
              <span className="text-sm font-bold uppercase">{locale === 'en' ? 'NL' : 'EN'}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)] rounded-lg"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[var(--color-text)] dark:text-[var(--color-dark-text)] rounded-lg"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden glass border-t border-[var(--color-border)] dark:border-[var(--color-dark-border)] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-[var(--color-text)] dark:text-[var(--color-dark-text)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-primary)]/5 dark:hover:bg-[var(--color-accent)]/10 transition-all"
                >
                  {t.nav[link.key]}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block mt-3 px-4 py-3 text-center text-base font-semibold text-white bg-[var(--color-primary)] rounded-lg shadow-md"
              >
                {t.hero.cta1}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
