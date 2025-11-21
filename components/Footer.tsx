import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24">
          <div className="space-y-6">
            <img src="/images/logos/logo-w.png" alt="Iceberg365 Logo" className="h-8" />
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              Vende más y mejor en Marketplaces con estrategia.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 text-sm">
            <div className="flex flex-col space-y-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Enlaces</p>
              <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
              <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
              <a href="#recursos" className="hover:text-white transition-colors">Recursos</a>
            </div>
            <div className="flex flex-col space-y-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Legal</p>
              <a href="#" className="hover:text-white transition-colors">Aviso legal</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
            <div className="flex flex-col space-y-4 col-span-2 sm:col-span-1">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Contacto</p>
              <a href="mailto:hola@iceberg365.com" className="hover:text-white transition-colors">hola@iceberg365.com</a>
              <a href="#contacto" className="hover:text-white transition-colors">Agenda una sesión</a>
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
