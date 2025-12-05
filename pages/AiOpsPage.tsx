import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import CTA from '../components/CTA';

const CheckIcon = () => (
    <svg className="w-5 h-5 text-[#DD8B26] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

const AccordionItem: React.FC<{ question: string; answer: React.ReactNode }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left py-6 flex justify-between items-center group"
            >
                <span className="text-lg font-medium text-gray-900 group-hover:text-[#DD8B26] transition-colors font-dm-sans">{question}</span>
                <span className={`text-2xl font-thin text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="text-gray-600 leading-relaxed font-dm-sans">{answer}</div>
            </div>
        </div>
    );
};

const AiOpsPage: React.FC = () => {
    return (
        <div className="bg-white font-dm-sans">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-iceberg-bg pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-[60vh] flex items-center">
                <div className="absolute inset-x-0 top-[-200px] sm:top-[-300px] mx-auto h-[480px] w-[480px] sm:h-[640px] sm:w-[640px] rounded-full bg-[#E2E8F0] blur-[160px] opacity-70 pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <FadeIn>
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-semibold text-gray-500 bg-white/50 border border-gray-200 rounded-full px-3 py-1.5 backdrop-blur-sm mb-6">
                                IA & AUTOMATIZACIÓN DE PROCESOS
                            </span>
                            <h1 className="font-dm-sans font-bold text-4xl md:text-6xl text-gray-900 mb-8 leading-[1.1] tracking-tight">
                                Inteligencia Artificial & Ops: <br className="hidden md:block" />
                                <span className="text-[#DD8B26]">Escala sin Límites.</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Automatiza tareas repetitivas, reduce costes operativos y libera a tu equipo para que se enfoque en lo que realmente importa: estrategia y creatividad.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="#contacto" className="bg-gradient-to-r from-[#FFB088] to-[#FFA07A] text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-orange-200/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                                    Automatizar mi Negocio
                                    <ArrowRightIcon />
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Problem Identification */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <FadeIn>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="font-dm-sans font-bold text-3xl md:text-4xl text-gray-900 mb-6">¿Tu equipo está saturado de tareas manuales?</h2>
                            <p className="text-lg text-gray-600">El tiempo es tu recurso más valioso. No lo desperdicies en copiar y pegar datos.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                "¿Pasas horas actualizando hojas de cálculo manualmente?",
                                "¿Tu atención al cliente es lenta y repetitiva?",
                                "¿Tienes datos desconectados entre diferentes herramientas?",
                                "¿Te cuesta escalar operaciones sin contratar más personal?"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="bg-[#FDF0D6] p-2 rounded-full mr-4 flex-shrink-0">
                                        <svg className="w-6 h-6 text-[#DD8B26]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </div>
                                    <p className="text-lg text-gray-800 font-medium font-dm-sans">{item}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-dm-sans font-bold text-3xl md:text-4xl text-gray-900 mb-4">Soluciones de IA & Automatización</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Tecnología punta aplicada a la eficiencia operativa de tu empresa.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <FadeIn>
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full flex flex-col">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-dm-sans">Automatización de Procesos (RPA)</h3>
                                <p className="text-gray-500 mb-6">Conectamos tus herramientas para que hablen entre sí.</p>
                                <ul className="space-y-4 mt-auto">
                                    {[
                                        { title: "Sincronización de Datos", desc: "Mantén tu CRM, ERP y Marketing siempre actualizados en tiempo real." },
                                        { title: "Facturación Automática", desc: "Generación y envío de facturas sin intervención humana." },
                                        { title: "Gestión de Pedidos", desc: "Automatiza el flujo desde la compra hasta la notificación de envío." },
                                        { title: "Reportes Automatizados", desc: "Informes de rendimiento en tu email cada lunes a las 9:00." }
                                    ].map((service, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckIcon />
                                            <div className="ml-3">
                                                <span className="font-bold text-gray-900 block font-dm-sans">{service.title}</span>
                                                <span className="text-sm text-gray-600">{service.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>

                        <FadeIn>
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full flex flex-col">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-dm-sans">Agentes de IA & Chatbots</h3>
                                <p className="text-gray-500 mb-6">Atención 24/7 y generación de contenido inteligente.</p>
                                <ul className="space-y-4 mt-auto">
                                    {[
                                        { title: "Chatbots de Atención al Cliente", desc: "Resuelve el 80% de las dudas frecuentes automáticamente." },
                                        { title: "Generación de Contenido", desc: "Descripciones de producto y posts de blog optimizados para SEO." },
                                        { title: "Análisis Predictivo", desc: "Anticípate a la demanda y tendencias con modelos de IA." },
                                        { title: "Personalización Web", desc: "Muestra productos dinámicos según el comportamiento del usuario." }
                                    ].map((service, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckIcon />
                                            <div className="ml-3">
                                                <span className="font-bold text-gray-900 block font-dm-sans">{service.title}</span>
                                                <span className="text-sm text-gray-600">{service.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-20 bg-[#EBF5FF]">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <FadeIn>
                            <div>
                                <h2 className="font-dm-sans font-bold text-3xl md:text-5xl mb-6 text-gray-900">Metodología: Automation First</h2>
                                <p className="text-xl text-gray-600 mb-8">Primero simplificamos, luego automatizamos.</p>
                                <div className="space-y-6">
                                    {[
                                        { title: "Mapeo de Procesos", desc: "Identificamos los cuellos de botella y tareas repetitivas de tu flujo actual." },
                                        { title: "Diseño de la Solución", desc: "Elegimos las herramientas (Make, Zapier, Python) más adecuadas." },
                                        { title: "Implementación & Testing", desc: "Construimos las automatizaciones y verificamos su fiabilidad." },
                                        { title: "Formación & Entrega", desc: "Te enseñamos a gestionar y mantener tu nuevo sistema automatizado." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#DD8B26]/10 flex items-center justify-center text-[#DD8B26] font-bold text-xl font-dm-sans">
                                                {i + 1}
                                            </div>
                                            <div className="ml-6">
                                                <h4 className="text-xl font-bold mb-2 font-dm-sans text-gray-900">{item.title}</h4>
                                                <p className="text-gray-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <div className="relative">
                                <div className="aspect-square rounded-3xl overflow-hidden bg-white border border-blue-100 shadow-2xl">
                                    <img
                                        src="/images/automation_flow.png"
                                        alt="Diagrama de flujo de automatización de procesos con IA"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-dm-sans font-bold text-3xl md:text-4xl text-gray-900 mb-8 text-center">Preguntas Frecuentes</h2>
                        <div className="space-y-2">
                            <AccordionItem
                                question="¿La IA va a sustituir a mi equipo?"
                                answer="No. La IA está aquí para potenciar a tu equipo, no para reemplazarlo. Al eliminar las tareas aburridas y repetitivas, tus empleados pueden dedicarse a tareas de mayor valor añadido, creatividad y estrategia."
                            />
                            <AccordionItem
                                question="¿Es seguro conectar mis datos a herramientas de IA?"
                                answer="La seguridad es nuestra prioridad. Trabajamos con herramientas empresariales que cumplen con GDPR y estándares de seguridad. Tus datos están encriptados y protegidos en todo momento."
                            />
                            <AccordionItem
                                question="¿Qué herramientas utilizáis?"
                                answer="Somos agnósticos en cuanto a tecnología, pero solemos trabajar con Make (antiguo Integromat), Zapier, n8n, OpenAI API, y herramientas específicas de cada sector."
                            />
                            <AccordionItem
                                question="¿Cuánto cuesta automatizar un proceso?"
                                answer="Depende de la complejidad. Un flujo sencillo puede costar desde unos cientos de euros, mientras que una implementación completa de IA a medida requiere un presupuesto mayor. Siempre empezamos con una auditoría para valorar el ROI."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Shared CTA Section */}
            <FadeIn>
                <CTA />
            </FadeIn>
        </div>
    );
};

export default AiOpsPage;
