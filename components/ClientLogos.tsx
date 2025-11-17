
import React from 'react';

const logos = [
  { name: 'Caudalie', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Caudalie_logo.svg' },
  { name: 'Loewe', src: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Loewe_logo.svg' },
  { name: 'Tous', src: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/TOUS_logo.svg' },
  { name: 'Casall', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Casall_logo.svg' },
  { name: 'Bimba y Lola', src: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Bimba_y_Lola_logo.svg' },
];

const ClientLogos: React.FC = () => {
  return (
    <div className="bg-white border-y border-[#e6e3dd] py-8">
      <div className="container mx-auto px-6">
        <p className="text-xs tracking-[0.4em] uppercase text-center text-[#969186] mb-6">Marcas que confían en nosotros</p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
          {logos.map((logo) => (
            <img key={logo.name} src={logo.src} alt={logo.name} className="h-6 object-contain grayscale" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
