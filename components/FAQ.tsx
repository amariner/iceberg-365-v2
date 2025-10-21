import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const AccordionItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-transparent" style={{ borderBottomColor: isOpen ? 'transparent' : '#DD8B26' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-6 flex justify-between items-center transition-colors duration-300 ${isOpen ? 'bg-[#DD8B26] text-white' : 'bg-[#2B2925] text-white hover:bg-zinc-700'}`}
      >
        <span className="text-lg font-medium">{question}</span>
        <span className="text-2xl font-thin">{isOpen ? '-' : '+'}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out bg-[#2B2925] text-[#cbc8c5] ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 text-lg">{answer}</div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "¿Cómo funcionan los servicios de reembolso de Amazon FBA de terceros?",
      answer: (
        <>
          <p>Los servicios de reembolso de terceros como Iceberg365 auditan continuamente tus transacciones de Amazon FBA, identificando discrepancias de FBA y presentando reclamaciones de reembolso en tu nombre.</p>
          <p className="mt-4">Iceberg365 aprovecha nuestra experiencia y tecnología patentada para agilizar el proceso, maximizando tu potencial total de recuperación de reembolsos de FBA.</p>
        </>
      )
    },
    {
      question: "¿Qué tipo de problemas califican para el reembolso de Amazon FBA?",
      answer: <p>Los problemas comunes incluyen unidades de inventario de FBA perdidas, dañadas, desechadas, con sobrecargo de tarifas y/o inventario no contabilizado o dañado, discrepancias en envíos entrantes, órdenes de retirada perdidas, tarifas de Amazon cobradas incorrectamente y más.</p>
    },
    {
      question: "¿Cuáles son las mejores prácticas para rastrear los reembolsos de Amazon FBA?",
      answer: <p>Mantener registros detallados del inventario y los envíos de FBA, monitorear tu cuenta de Seller Central para recibir notificaciones de Amazon y/o Iceberg365, y usar el panel de Iceberg365 puede ayudarte a rastrear y administrar eficazmente tus reembolsos de Amazon.</p>
    },
    {
      question: "¿Cómo pueden los vendedores abordar las discrepancias de FBA en los reembolsos de Amazon?",
      answer: <p>En Iceberg365, identificamos las discrepancias de FBA durante nuestras auditorías de discrepancias de FBA patentadas, luego resolvemos los problemas presentando reclamaciones con nuestro equipo de gestión de casos dedicado y proporcionando todos los datos necesarios para demostrar tu elegibilidad según las políticas de Amazon.</p>
    }
  ];

  return (
    <section className="bg-[#F4EDE5] py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-dm-sans-black text-5xl md:text-6xl text-[#2B2925]">PREGUNTAS FRECUENTES (FAQs)</h2>
        <p className="mt-4 text-lg md:text-xl text-[#62605C]">A continuación se presentan algunas preguntas frecuentes sobre este tema.</p>
        <div className="max-w-4xl mx-auto mt-12 text-left rounded-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;