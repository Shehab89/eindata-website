'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle, X, Mail } from 'lucide-react';
import { LinkedinIcon as Linkedin } from '@/components/icons/LinkedinIcon';

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      {/* Back to top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-[var(--color-surface-card)] dark:bg-[var(--color-dark-surface-card)] border border-[var(--color-border)] dark:border-[var(--color-dark-border)] shadow-lg hover:shadow-xl flex items-center justify-center text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-accent)] transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Contact options popup */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2 mb-2"
          >
            <a
              href="mailto:info@eindata.nl"
              className="w-12 h-12 rounded-full bg-[var(--color-primary)] shadow-lg hover:shadow-xl flex items-center justify-center text-white hover:bg-[var(--color-primary-light)] transition-all"
              aria-label="Send email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#0077B5] shadow-lg hover:shadow-xl flex items-center justify-center text-white hover:bg-[#006097] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating contact button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowContact(!showContact)}
        className="w-14 h-14 rounded-full gradient-bg shadow-xl hover:shadow-2xl flex items-center justify-center text-white transition-all"
        aria-label={showContact ? 'Close contact options' : 'Open contact options'}
      >
        {showContact ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
}
