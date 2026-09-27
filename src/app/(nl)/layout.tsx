import type { Viewport } from 'next';
import RootDocument from '@/components/RootDocument';

export const viewport: Viewport = { themeColor: '#0F172A' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="nl">{children}</RootDocument>;
}
