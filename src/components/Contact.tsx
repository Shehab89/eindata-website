'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { LinkedinIcon as Linkedin } from '@/components/icons/LinkedinIcon';
import { useLanguage } from '@/context/LanguageContext';
import { useInView } from '@/hooks/useAnimations';
import { site } from '@/lib/i18n';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-[var(--color-border)] dark:border-[var(--color-dark-border)] bg-[var(--color-surface)] dark:bg-[var(--color-dark-surface)] text-[var(--color-text)] dark:text-[var(--color-dark-text)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent outline-none transition-all';
const labelClass =
  'block text-sm font-medium text-[var(--color-text)] dark:text-[var(--color-dark-text)] mb-2';
const cardClass =
  'bg-[var(--color-surface-card)] dark:bg-[var(--color-dark-surface-card)] rounded-2xl p-6 border border-[var(--color-border)] dark:border-[var(--color-dark-border)]';

// Public Web3Forms access key (safe to expose; it only allows sending to your own inbox).
const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '2dec4101-ad4c-43e0-b0af-eb94e61d0acc';

const emptyForm ={ name: '', email: '', company: '', message: '', website: '' };

export default function Contact() {
  const { t, locale } = useLanguage();
  const { ref, isInView } = useInView();
  const [status, setStatus] = useState<Status>('idle');
  const [formData, setFormData] = useState(emptyForm);

  const update = (key: keyof typeof emptyForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData({ ...formData, [key]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot filled in: silently pretend success for bots.
    if (formData.website) {
      setStatus('sent');
      return;
    }
    setStatus('sending');
    try {
      if (!WEB3FORMS_KEY) throw new Error('Contact form key not configured');
      // Web3Forms (free) emails the message to the address linked to the access key.
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New message via eindata.nl from ${formData.name}`,
          from_name: 'EinData website',
          name: formData.name,
          email: formData.email,
          company: formData.company || '-',
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || String(res.status));
      setStatus('sent');
      setFormData(emptyForm);
    } catch {
      setStatus('error');
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: t.contact.info.email,
      content: (
        <a href={`mailto:${site.email}`} className="text-[var(--color-accent)] hover:underline text-sm">
          {site.email}
        </a>
      ),
    },
    {
      icon: Linkedin,
      label: t.contact.info.linkedin,
      content: (
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-accent)] hover:underline text-sm"
        >
          {site.linkedinLabel}
        </a>
      ),
    },
    {
      icon: MapPin,
      label: t.contact.info.location,
      content: (
        <p className="text-sm text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)]">
          {site.city}, {locale === 'nl' ? 'Nederland' : 'the Netherlands'}
        </p>
      ),
    },
    {
      icon: Clock,
      label: t.contact.info.response,
      content: null,
    },
  ];

  return (
    <section
      id="contact"
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
            {t.contact.title}
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)]">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-[var(--color-surface-card)] dark:bg-[var(--color-dark-surface-card)] rounded-2xl p-6 sm:p-8 border border-[var(--color-border)] dark:border-[var(--color-dark-border)] shadow-xl">
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center" role="status">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
                  <p className="text-lg font-semibold text-[var(--color-text)] dark:text-[var(--color-dark-text)]">
                    {t.contact.form.success}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className={labelClass}>{t.contact.form.name}</label>
                      <input id="contact-name" name="name" type="text" required autoComplete="name"
                        value={formData.name} onChange={update('name')} className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={labelClass}>{t.contact.form.email}</label>
                      <input id="contact-email" name="email" type="email" required autoComplete="email"
                        value={formData.email} onChange={update('email')} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-company" className={labelClass}>{t.contact.form.company}</label>
                    <input id="contact-company" name="company" type="text" autoComplete="organization"
                      value={formData.company} onChange={update('company')} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className={labelClass}>{t.contact.form.message}</label>
                    <textarea id="contact-message" name="message" required rows={5}
                      value={formData.message} onChange={update('message')} className={`${inputClass} resize-none`} />
                  </div>
                  {/* Honeypot field, hidden from people */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="contact-website">Website</label>
                    <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off"
                      value={formData.website} onChange={update('website')} />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                      {t.contact.form.error}{' '}
                      <a href={`mailto:${site.email}`} className="underline font-medium">{site.email}</a>.
                    </p>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] disabled:opacity-60 rounded-xl shadow-lg transition-all duration-300"
                    >
                      {status === 'sending' ? t.contact.form.sending : t.contact.form.submit}
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-xs text-[var(--color-text-secondary)] dark:text-[var(--color-dark-text-secondary)]">
                      {t.contact.form.privacy}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactItems.map(({ icon: Icon, label, content }) => (
              <div key={label} className={cardClass}>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-accent)]/10 dark:bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-text)] dark:text-[var(--color-dark-text)]">
                      {label}
                    </h3>
                    {content}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
