
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Objetivos', href: '#objetivos' },
    { name: 'Testimonios', href: '#testimonios' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // Cerrar el menú móvil si está abierto
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-[#E6E6E6]">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
            <img src="https://iceberg365.com/img/logo.png" alt="Iceberg365 Logo" className="h-8" />
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm font-medium text-[#2C2C2C] hover:text-[#17EBEB] transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <a href="#" className="bg-[#FF7A00] text-white text-sm font-bold py-3 px-6 rounded-full hover:opacity-90 transition-opacity">
            Contacto
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
        <div className="lg:hidden bg-white text-[#2C2C2C] absolute top-full left-0 w-full px-6 pb-6 border-b border-[#E6E6E6]">
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
