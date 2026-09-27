import PrivacyPage from '@/components/PrivacyPage';
import { buildMetadata } from '@/lib/seo';
import { translations } from '@/lib/i18n';

export const metadata = {
  ...buildMetadata('nl', 'privacy/'),
  title: `${translations.nl.privacy.title} | EinData`,
};

export default function Page() {
  return <PrivacyPage locale="nl" />;
}
