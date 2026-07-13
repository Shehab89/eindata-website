'use client';

import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import WhyChoose from '@/components/WhyChoose';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <WhyChoose />
          <Process />
          <Projects />
          <Testimonials />
          <CTA />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <FloatingButtons />
      </LanguageProvider>
    </ThemeProvider>
  );
}
