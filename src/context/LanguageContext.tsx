'use client';

import React, { createContext, useContext } from 'react';
import { type Locale, type Translations, translations } from '@/lib/i18n';

interface LanguageContextType {
  locale: Locale;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// The locale comes from the route (/ or /nl), so each language has its own indexable URL.
export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale] }}>
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
