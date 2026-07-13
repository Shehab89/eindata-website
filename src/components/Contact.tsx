'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { LinkedinIcon as Linkedin } from '@/components/icons/LinkedinIcon';
import { useLanguage } from '@/context/LanguageContext';
import { useInView } from '@/hooks/useAnimations';

export default function Contact() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 5000);
  };

  return (
    <section
      id="contact"
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
            {t.contact.title}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text)] dark:text-[var(--color-dark-text)] font-[var(--font-heading)]">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)]">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-[var(--color-surface-card)] dark:bg-[var(--color-dark-surface-card)] rounded-2xl p-8 border border-[var(--color-border)] dark:border-[var(--color-dark-border)] shadow-xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
                  <p className="text-lg font-semibold text-[var(--color-text)] dark:text-[var(--color-dark-text)]">
                    {t.contact.form.success}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-[var(--color-text)] dark:text-[var(--color-dark-text)] mb-2"
                      >
                        {t.contact.form.name}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] dark:border-[var(--color-dark-border)] bg-[var(--color-surface)] dark:bg-[var(--color-dark-surface)] text-[var(--color-text)] dark:text-[var(--color-dark-text)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all"
                        placeholder={t.contact.form.name}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-[var(--color-text)] dark:text-[var(--color-dark-text)] mb-2"
                      >
                        {t.contact.form.email}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] dark:border-[var(--color-dark-border)] bg-[var(--color-surface)] dark:bg-[var(--color-dark-surface)] text-[var(--color-text)] dark:text-[var(--color-dark-text)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all"
                        placeholder={t.contact.form.email}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-sm font-medium text-[var(--color-text)] dark:text-[var(--color-dark-text)] mb-2"
                    >
                      {t.contact.form.company}
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] dark:border-[var(--color-dark-border)] bg-[var(--color-surface)] dark:bg-[var(--color-dark-surface)] text-[var(--color-text)] dark:text-[var(--color-dark-text)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all"
                      placeholder={t.contact.form.company}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-[var(--color-text)] dark:text-[var(--color-dark-text)] mb-2"
                    >
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] dark:border-[var(--color-dark-border)] bg-[var(--color-surface)] dark:bg-[var(--color-dark-surface)] text-[var(--color-text)] dark:text-[var(--color-dark-text)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all resize-none"
                      placeholder={t.contact.form.message}
                    />
                  </div>
                  <button
                    type="submit"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {t.contact.form.submit}
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Email */}
            <div className="bg-[var(--color-surface-card)] dark:bg-[var(--color-dark-surface-card)] rounded-2xl p-6 border border-[var(--color-border)] dark:border-[var(--color-dark-border)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 dark:bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-text)] dark:text-[var(--color-dark-text)] mb-1">
                    {t.contact.info.email}
                  </h3>
                  <a
                    href="mailto:info@eindata.nl"
                    className="text-[var(--color-accent)] hover:underline text-sm"
                  >
                    info@eindata.nl
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-[var(--color-surface-card)] dark:bg-[var(--color-dark-surface-card)] rounded-2xl p-6 border border-[var(--color-border)] dark:border-[var(--color-dark-border)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 dark:bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-text)] dark:text-[var(--color-dark-text)] mb-1">
                    {t.contact.info.location}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)]">
                    The Netherlands 🇳🇱
                  </p>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="bg-[var(--color-surface-card)] dark:bg-[var(--color-dark-surface-card)] rounded-2xl p-6 border border-[var(--color-border)] dark:border-[var(--color-dark-border)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 dark:bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-text)] dark:text-[var(--color-dark-text)] mb-1">
                    {t.contact.info.linkedin}
                  </h3>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-accent)] hover:underline text-sm"
                  >
                    linkedin.com/in/eindata
                  </a>
                </div>
              </div>
            </div>

            {/* Working hours */}
            <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-2">Available for Projects</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Monday – Friday, 09:00 – 18:00 CET. We typically respond within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
