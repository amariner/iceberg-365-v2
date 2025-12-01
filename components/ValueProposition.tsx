import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Gestión de Marketplaces',
    description: 'Estrategia integral en Amazon y marketplaces. Maximizamos la rentabilidad de tu catálogo, protegemos tu marca y gestionamos la expansión internacional con enfoque en margen neto.',
    href: '/servicios/marketplaces',
    icon: (
      <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Ecommerce Shopify',
    description: 'Diseñamos ecosistemas de venta directa sobre Shopify. Diseño de páginas web, tiendas rápidas y escalables integradas nativamente con tu logística y Amazon, listas para facturar desde el día uno.',
    href: '/servicios/shopify-dtc',
    icon: (
      <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    title: 'Retention & Email Marketing',
    description: 'Sistemas automatizados para fidelizar clientes. Aumentamos el valor de vida (LTV) y generamos ventas recurrentes sin coste publicitario, convirtiendo visitas en comunidad.',
    href: '/servicios/retention-email',
    icon: (
      <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Paid Social for Sales',
    description: 'Publicidad en Google Ads, Meta y TikTok con enfoque financiero (ROAS). Estructuras de campaña avanzadas para capturar demanda y generar transacciones reales.',
    href: '/servicios/paid-social',
    icon: (
      <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    title: 'SEO Transaccional',
    description: 'Posicionamiento orgánico para catálogos extensos. Optimizamos miles de referencias para capturar búsquedas con alta intención de compra en Google, superando a los generalistas.',
    href: '/servicios/seo-transaccional',
    icon: (
      <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Inteligencia Artificial & Ops',
    description: 'Implementación de agentes de IA para automatizar catálogos, atención al cliente y procesos repetitivos. Reducimos tu carga operativa para que escales ventas sin disparar costes de personal.',
    href: '/servicios/ia-ops',
    icon: (
      <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const ValueProposition: React.FC = () => {
  return (
    <section id="servicios" className="bg-iceberg-bg py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4 block">Nuestros Servicios</span>
          <h2 className="font-dm-sans font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
            Soluciones integrales para tu crecimiento digital
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Desde marketplaces hasta tu propio ecommerce. Estrategia, diseño y tecnología para escalar tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group cursor-pointer block flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-iceberg-primary transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
              <div className="flex items-center gap-2 text-iceberg-primary font-semibold text-sm group-hover:gap-3 transition-all">
                Ver más
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
