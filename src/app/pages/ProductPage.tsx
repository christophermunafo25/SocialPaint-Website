import { useParams, Navigate } from 'react-router-dom';
import { StyleDNAPage } from './features/StyleDNAPage';
import { ContentStudioPage } from './features/ContentStudioPage';
import { BrandGuardPage } from './features/BrandGuardPage';
import { SmartTemplatesPage } from './features/SmartTemplatesPage';
import { InsightsPage } from './features/InsightsPage';

const PAGES: Record<string, React.ComponentType> = {
  'style-dna': StyleDNAPage,
  'content-studio': ContentStudioPage,
  'brand-guard': BrandGuardPage,
  'smart-templates': SmartTemplatesPage,
  'insights': InsightsPage,
};

// Backward compatibility redirects for old slugs
const REDIRECTS: Record<string, string> = {
  'analytics': '/products/insights',
  'templates': '/products/smart-templates',
};

export function ProductPage() {
  const { slug } = useParams();
  const key = slug || '';

  // Handle redirects from old slugs
  if (REDIRECTS[key]) {
    return <Navigate to={REDIRECTS[key]} replace />;
  }

  const Page = PAGES[key];

  if (!Page) {
    return <Navigate to="/" replace />;
  }

  return <Page />;
}
