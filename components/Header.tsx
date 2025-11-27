
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Recursos', href: '#recursos' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      const elementHeight = element.offsetHeight;

      // Calcular la posición para centrar la sección verticalmente en el viewport
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset - (viewportHeight / 2) + (elementHeight / 2);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    // Cerrar el menú móvil si está abierto
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ease-in-out ${isScrolled
        ? 'top-4 left-4 right-4 lg:left-12 lg:right-12 w-auto rounded-2xl bg-iceberg-bg/90 shadow-lg border border-gray-100/50 backdrop-blur-xl'
        : 'top-0 w-full bg-transparent backdrop-blur-none border-b border-transparent'
        }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center">
          <Logo className="h-12 w-auto text-gray-800" />
        </a>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <a href="#contacto" className="bg-iceberg-primary text-white text-sm font-bold py-2.5 px-5 rounded-xl shadow-lg shadow-iceberg-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            Hablemos
          </a>
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
      <div className={`lg:hidden absolute top-full left-0 w-full bg-iceberg-bg border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isScrolled ? 'rounded-b-2xl' : ''} ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col space-y-4 px-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-lg font-medium text-gray-900 hover:text-iceberg-primary transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a href="#contacto" className="bg-iceberg-primary text-white text-lg font-bold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity text-center mt-4 shadow-md">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
