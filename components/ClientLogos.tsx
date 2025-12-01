
import React from 'react';

const logos = [
  { name: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', className: 'h-8' },
  { name: 'Miravia', src: '/images/logos/miravia.png', className: 'h-[58px] mb-5' },
];

const ClientLogos: React.FC = () => {
  return (
    <div className="bg-white border-y border-gray-100 py-12">
      <div className="container mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-center text-gray-400 mb-8 font-semibold">Marketplaces donde operamos</p>
        <div className="flex flex-wrap justify-center items-center gap-16 transition-all duration-500">
          {logos.map((logo) => (
            <img key={logo.name} src={logo.src} alt={logo.name} className={`${logo.className} w-auto object-contain`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
