'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { type Locale, type Translations, translations } from '@/lib/i18n';

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const saved = localStorage.getItem('eindata-locale') as Locale | null;
    if (saved && (saved === 'en' || saved === 'nl')) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('eindata-locale', newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  const toggleLocale = useCallback(() => {
    const newLocale = locale === 'en' ? 'nl' : 'en';
    setLocale(newLocale);
  }, [locale, setLocale]);

  return (
    <LanguageContext.Provider
      value={{
        locale,
        t: translations[locale],
        setLocale,
        toggleLocale,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
