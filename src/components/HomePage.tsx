import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import type { Locale } from '@/lib/i18n';
import { buildJsonLd, jsonLdScript } from '@/lib/seo';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <ThemeProvider>
      <LanguageProvider locale={locale}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(buildJsonLd(locale))}
        />
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Process />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}
