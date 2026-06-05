import React from 'react';
import './Services.css';

export default function Services() {
  const serviceList = [
    {
      id: 1,
      title: "Diagnóstico de IA",
      description: "Viabilidade e mapeamento para implementação de inteligência artificial prática, visando drástica redução de retrabalho operacional.",
      price: "R$ 997",
      link: "https://checkout.safe2pay.com.br/product?code=c2f91036-446b-4621-8692-40b11a1c39b5",
      isPopular: true,
      features: [
        "Identificação de gargalos",
        "Mapeamento de ferramentas",
        "Plano prático de IA",
        "Redução de custos operacionais"
      ]
    },
    {
      id: 2,
      title: "Mapeamento Contábil",
      description: "12 horas intensivas de reuniões e acompanhamento para rotinas contábeis mapeadas e otimizadas detalhadamente por vídeo.",
      price: "R$ 15.000",
      link: "https://checkout.safe2pay.com.br/product?code=77fe8d5d-4db8-4d48-a81b-a7f80c33dd03",
      isPopular: false,
      features: [
        "12h de análise dedicada",
        "Rotinas gravadas em vídeo",
        "Plano de eliminação de erros",
        "Otimização de rotinas diárias"
      ]
    },
    {
      id: 3,
      title: "Mapeamento Legalização",
      description: "12 horas de sessões consultivas voltadas ao mapeamento integral e reestruturação do seu departamento societário e de legalização.",
      price: "R$ 15.000",
      link: "https://checkout.safe2pay.com.br/product?code=ed40b798-3759-42e4-b98b-0fd8ec39b677",
      isPopular: false,
      features: [
        "12h de sessões consultivas",
        "Reestruturação de fluxos",
        "Gargalos de societário resolvidos",
        "Redução no tempo de abertura"
      ]
    },
    {
      id: 4,
      title: "Mapeamento Fiscal",
      description: "12 horas de consultoria focada para mapeamento profundo de rotinas, parametrizações tributárias e otimização total do setor fiscal.",
      price: "R$ 15.000",
      link: "https://checkout.safe2pay.com.br/product?code=d327b4bc-6a3b-4f15-a1f9-07ff8e38480b",
      isPopular: false,
      features: [
        "12h de imersão no setor fiscal",
        "Mapeamento de integrações",
        "Auditoria de parametrização",
        "Fluxograma otimizado"
      ]
    }
  ];

  return (
    <section id="servicos" className="services-section section">
      <div className="container">
        <div className="services-header text-center">
          <span className="badge">Nossos Serviços</span>
          <h2 className="services-title">Mapeamentos Profundos &amp; <span className="text-gradient">Diagnósticos</span></h2>
          <p className="lead services-subtitle">
            Estruture a sua contabilidade para a escala e eficiência operacional com quem lidera o mercado digital.
          </p>
        </div>

        <div className="grid-4 services-grid">
          {serviceList.map((service) => (
            <div 
              key={service.id} 
              className={`service-card glass-panel ${service.isPopular ? 'popular-card' : ''}`}
            >
              {service.isPopular && (
                <div className="popular-badge">
                  <span>Recomendado</span>
                </div>
              )}
              <div className="card-header-info">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
              </div>

              <div className="service-features">
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="check-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="price-container">
                <span className="price-label">Investimento</span>
                <span className="price-value">{service.price}</span>
              </div>

              <a 
                href={service.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`btn card-btn ${service.isPopular ? 'btn-primary' : 'btn-secondary'}`}
              >
                Contratar Diagnóstico
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
