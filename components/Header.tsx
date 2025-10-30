
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Objetivos', href: '#objetivos' },
    { name: 'Testimonios', href: '#testimonios' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F4EDE5]/95 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
            <img src="https://iceberg365.com/img/logo.png" alt="Iceberg365 Logo" className="h-8" />
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-[#2B2925] hover:text-[#DD8B26] transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <a href="#" className="bg-[#14F1D9] text-[#2B2925] text-sm font-bold py-3 px-6 rounded-full hover:opacity-90 transition-opacity">
            Contacto
          </a>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#2B2925]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#F4EDE5] text-[#2B2925] absolute top-full left-0 w-full px-6 pb-6">
          <nav className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-lg font-medium hover:text-[#DD8B26] transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#" className="bg-[#14F1D9] text-[#2B2925] text-lg font-bold py-3 px-6 rounded-full hover:opacity-90 transition-opacity text-center mt-4">
                Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
