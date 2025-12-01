
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Gestión de Marketplaces',
      description: 'Estrategia integral en Amazon y marketplaces. Maximizamos rentabilidad y gestionamos expansión internacional.',
      href: '/servicios/marketplaces',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    },
    {
      title: 'Ecommerce Shopify',
      description: 'Diseño de páginas web y tiendas escalables en Shopify. Integradas con tu logística y listas para facturar.',
      href: '/servicios/shopify-dtc',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
      )
    },
    {
      title: 'Retention & Email Marketing',
      description: 'Sistemas automatizados para fidelizar clientes. Aumentamos el LTV y generamos ventas recurrentes.',
      href: '/servicios/retention-email',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: 'Paid Social for Sales',
      description: 'Publicidad en Google Ads, Meta y TikTok con enfoque en ROAS. Campañas avanzadas para generar transacciones reales.',
      href: '/servicios/paid-social',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
        </svg>
      )
    },
    {
      title: 'SEO Transaccional',
      description: 'Posicionamiento orgánico para catálogos extensos. Optimizamos búsquedas con alta intención de compra.',
      href: '/servicios/seo-transaccional',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      )
    },
    {
      title: 'Inteligencia Artificial & Ops',
      description: 'Agentes de IA para automatizar catálogos, atención al cliente y procesos. Escala sin disparar costes.',
      href: '/servicios/ia-ops',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      )
    }
  ];

  const navLinks = [
    { name: 'Nosotros', href: '#expertise' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (href.startsWith('#')) {
      const targetId = href.substring(1);

      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: targetId } });
      } else {
        scrollToSection(targetId);
      }
    } else {
      navigate(href);
    }

    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      const elementHeight = element.offsetHeight;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset - (viewportHeight / 2) + (elementHeight / 2);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle scroll after navigation from another page
  useEffect(() => {
    if (location.pathname === '/' && location.state && (location.state as any).scrollTo) {
      const targetId = (location.state as any).scrollTo;
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        scrollToSection(targetId);
        // Clear state
        window.history.replaceState({}, document.title);
      }, 100);
    } else if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-500 ease-in-out ${isScrolled ? 'top-4' : 'top-0'}`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className={`transition-all duration-500 ease-in-out ${isScrolled ? 'container mx-auto px-6' : ''}`}>
        <div className={`transition-all duration-500 ease-in-out ${isScrolled
          ? `bg-iceberg-bg/90 shadow-lg border border-gray-100/50 backdrop-blur-xl ${isMenuOpen ? 'rounded-t-2xl rounded-b-none' : 'rounded-2xl'}`
          : `border-b ${isMenuOpen ? 'bg-iceberg-bg border-gray-100' : 'bg-transparent backdrop-blur-none border-transparent'}`
          }`}
        >
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center">
              <Logo className="h-12 w-auto text-gray-800" />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <nav className="flex items-center space-x-8">
                {/* Mega Menu Trigger */}
                <div
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown('servicios')}
                >
                  <button
                    className={`flex items-center text-sm font-medium transition-colors cursor-pointer ${activeDropdown === 'servicios' ? 'text-iceberg-primary' : 'text-gray-600 hover:text-gray-900'}`}
                    onClick={() => setActiveDropdown(activeDropdown === 'servicios' ? null : 'servicios')}
                  >
                    Servicios
                    <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === 'servicios' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  {/* Desktop Mega Menu */}
                  <div
                    className={`absolute top-full right-0 w-[900px] bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mt-4 transition-all duration-300 origin-top-right ${activeDropdown === 'servicios' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
                  >
                    <div className="grid grid-cols-3 gap-6">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          to={service.href}
                          onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}
                          className="flex flex-col p-4 rounded-xl hover:bg-gray-50 transition-colors group/item text-left"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-600 group-hover/item:bg-white group-hover/item:text-iceberg-primary group-hover/item:shadow-md transition-all duration-300 mb-4">
                            {service.icon}
                          </div>
                          <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover/item:text-iceberg-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-xs text-gray-500 leading-relaxed">
                            {service.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="flex items-center">
                <a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="bg-gradient-to-r from-[#FFB088] to-[#FFA07A] text-white text-sm font-bold py-2.5 px-5 rounded-xl shadow-lg shadow-orange-200/40 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                  Iniciar proyecto
                </a>
              </div>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#2C2C2C] p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden absolute top-full left-0 w-full bg-iceberg-bg border-x border-b border-gray-100/50 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isScrolled ? 'rounded-b-2xl' : ''} ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <nav className="flex flex-col px-6 py-6 space-y-2">
              <div className="py-2">
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Servicios</span>
                <div className="space-y-1 pl-2">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      to={service.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="text-gray-500">
                        {service.icon}
                      </div>
                      <span className="text-base font-medium text-gray-900">{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-100 my-2"></div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-medium text-gray-900 hover:text-iceberg-primary transition-colors cursor-pointer py-2"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="bg-gradient-to-r from-[#FFB088] to-[#FFA07A] text-white text-lg font-bold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity text-center mt-4 shadow-md block">
                Iniciar proyecto
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
