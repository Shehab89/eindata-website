import HomePage from '@/components/HomePage';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata('nl');

export default function Page() {
  return <HomePage locale="nl" />;
}
