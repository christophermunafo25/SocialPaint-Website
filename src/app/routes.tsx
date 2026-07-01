import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { IntegrationsPage } from './pages/IntegrationsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ClientsPage } from './pages/ClientsPage';
import { PricingPage } from './pages/PricingPage';
import { WaitlistPage } from './pages/WaitlistPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'products/:slug', Component: ProductPage },
      { path: 'integrations', Component: IntegrationsPage },
      { path: 'resources', Component: ResourcesPage },
      { path: 'clients', Component: ClientsPage },
      { path: 'pricing', Component: PricingPage },
      { path: 'waitlist', Component: WaitlistPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);