
import React from 'react';

const ClientLogos: React.FC = () => {
  const logos = [
    { name: "Bulletproof", src: "https://getida.com/wp-content/uploads/2023/08/Bulletproof-client-logo.svg", height: "h-10" },
    { name: "Claire's", src: "https://getida.com/wp-content/uploads/2023/08/Claires-client-logo.svg", height: "h-8" },
    { name: "Leatherman", src: "https://getida.com/wp-content/uploads/2023/08/Leatherman-client-logo.svg", height: "h-6" },
    { name: "Nutrafol", src: "https://getida.com/wp-content/uploads/2023/08/Nutrafol-client-logo.svg", height: "h-6" },
    { name: "Zumba", src: "https://getida.com/wp-content/uploads/2023/08/Zumba-client-logo.svg", height: "h-8" },
  ];

  return (
    <div className="bg-[#8A63D2] py-8 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-around items-center space-x-8 md:space-x-12 animate-marquee whitespace-nowrap">
          {logos.concat(logos).map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.name} className={`${logo.height} opacity-80 hover:opacity-100 transition-opacity`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
