import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (href.startsWith('#')) {
      const targetId = href.substring(1);

      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: targetId } });
      } else {
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
      }
    } else {
      navigate(href);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24">
          <div className="space-y-6">
            <Logo className="h-12 w-auto text-white" />
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              Vende más y mejor en Marketplaces con estrategia.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 text-sm">
            <div className="flex flex-col space-y-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Categorías</p>
              <a href="#servicios" onClick={(e) => handleNavClick(e, '#servicios')} className="hover:text-white transition-colors cursor-pointer">Servicios</a>
              <a href="#expertise" onClick={(e) => handleNavClick(e, '#expertise')} className="hover:text-white transition-colors cursor-pointer">Nosotros</a>
            </div>
            <div className="flex flex-col space-y-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Legal</p>
              <Link to="/aviso-legal" className="hover:text-white transition-colors">Aviso legal</Link>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
            <div className="flex flex-col space-y-4 col-span-2 sm:col-span-1">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Contacto</p>
              <a href="mailto:hola@iceberg365.com" className="hover:text-white transition-colors">hola@iceberg365.com</a>
              <a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="hover:text-white transition-colors cursor-pointer">Agenda una sesión</a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Iceberg365. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
