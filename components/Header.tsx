
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/80 backdrop-blur-xl border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/logos/logo.png" alt="Iceberg365 Logo" className="h-8" />
        </div>

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
          <a href="#contacto" className="bg-transparent border-2 border-[#ebf213] text-gray-900 text-sm font-semibold py-2.5 px-5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            Hablemos
          </a>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#2C2C2C]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF7] text-gray-900 absolute top-full left-0 w-full px-6 pb-6 border-b border-gray-100 shadow-lg">
          <nav className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-lg font-medium hover:text-[#17EBEB] transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a href="#" className="bg-[#FF7A00] text-white text-lg font-bold py-3 px-6 rounded-full hover:opacity-90 transition-opacity text-center mt-4">
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
