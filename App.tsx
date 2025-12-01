import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MarketplacesPage from './pages/MarketplacesPage';
import ShopifyPage from './pages/ShopifyPage';
import RetentionPage from './pages/RetentionPage';
import PaidSocialPage from './pages/PaidSocialPage';
import SeoPage from './pages/SeoPage';
import AiOpsPage from './pages/AiOpsPage';
import LegalPage from './pages/LegalPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="servicios/marketplaces" element={<MarketplacesPage />} />
          <Route path="servicios/shopify-dtc" element={<ShopifyPage />} />
          <Route path="servicios/retention-email" element={<RetentionPage />} />
          <Route path="servicios/paid-social" element={<PaidSocialPage />} />
          <Route path="servicios/seo-transaccional" element={<SeoPage />} />
          <Route path="servicios/ia-ops" element={<AiOpsPage />} />
          <Route path="aviso-legal" element={<LegalPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
