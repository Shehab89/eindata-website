import HomePage from '@/components/HomePage';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata('en');

export default function Page() {
  return <HomePage locale="en" />;
}
