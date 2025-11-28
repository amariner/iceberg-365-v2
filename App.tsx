import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MarketplacesPage from './pages/MarketplacesPage';
import EcommercePage from './pages/EcommercePage';
import WebDesignPage from './pages/WebDesignPage';
import PaidMediaPage from './pages/PaidMediaPage';
import GeoSeoPage from './pages/GeoSeoPage';
import AiIntegrationsPage from './pages/AiIntegrationsPage';
import LegalPage from './pages/LegalPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="servicios/marketplaces" element={<MarketplacesPage />} />
          <Route path="servicios/ecommerce" element={<EcommercePage />} />
          <Route path="servicios/diseno-web" element={<WebDesignPage />} />
          <Route path="servicios/paid-media" element={<PaidMediaPage />} />
          <Route path="servicios/geo-seo" element={<GeoSeoPage />} />
          <Route path="servicios/integraciones-ia" element={<AiIntegrationsPage />} />
          <Route path="aviso-legal" element={<LegalPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
