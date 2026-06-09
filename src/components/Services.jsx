import React from 'react';
import './Services.css';

export default function Services() {
  return (
    <section id="servicos" className="services-section section">
      <div className="container">
        
        {/* Header da Seção */}
        <div className="services-header text-center">
          <span className="badge">Soluções Estratégicas</span>
          <h2 className="services-title">Otimize a Operação do seu <span className="text-gradient">Escritório</span></h2>
          <p className="lead services-subtitle">
            Do diagnóstico inicial à reestruturação completa de fluxos e implantação de Inteligência Artificial.
          </p>
        </div>

        {/* PRODUTO PRINCIPAL: DIAGNÓSTICO DE PROCESSOS & IA */}
        <div className="diagnostic-container glass-panel">
          <div className="diagnostic-grid">
            <div className="diagnostic-info-col">
              <h3 className="diagnostic-main-title">Sessão de Diagnóstico de Processos &amp; IA</h3>
              <p className="diagnostic-main-desc">
                Identifique gargalos ocultos que atrasam seu time e mapeie a viabilidade prática de implantação de Inteligência Artificial no seu escritório contábil.
              </p>

              <div className="diagnostic-deliverables">
                <h4>O que está incluso:</h4>
                <ul className="deliverables-list">
                  <li>
                    <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>1 Reunião ao vivo (1h30):</strong> Reunião individual por videoconferência com nossos especialistas.</span>
                  </li>
                  <li>
                    <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Auditoria de Ferramentas:</strong> Análise de viabilidade do seu ecossistema contábil atual.</span>
                  </li>
                  <li>
                    <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Relatório PDF Detalhado:</strong> Documento completo com mapeamento de gargalos e plano de ação.</span>
                  </li>
                  <li>
                    <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Suporte WhatsApp (7 dias):</strong> Canal direto para tirar dúvidas sobre o plano sugerido.</span>
                  </li>
                </ul>
              </div>

              <div className="diagnostic-pricing">
                <div className="pricing-box">
                  <span className="price-label">Investimento Único</span>
                  <span className="price-value">R$ 997</span>
                  <span className="price-sub">em até 12x no cartão de crédito</span>
                </div>
                <a 
                  href="https://checkout.safe2pay.com.br/product?code=c2f91036-446b-4621-8692-40b11a1c39b5" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary diagnostic-btn"
                >
                  Contratar Diagnóstico
                </a>
              </div>
            </div>

            {/* Coluna do Passo a Passo */}
            <div className="diagnostic-steps-col">
              <h4 className="steps-title">Como funciona o processo:</h4>
              <div className="steps-timeline">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h5>Briefing Operacional</h5>
                    <p>Preenchimento de um briefing detalhado mapeando suas ferramentas (Domínio, Questor, Alterdata, etc.) e principais gargalos do time.</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h5>Sessão Online Individual</h5>
                    <p>Sessão de imersão de 1h30 para entender a fundo o fluxo atual de trabalho de seus departamentos.</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h5>Mapeamento de IA, Agentes &amp; MCP</h5>
                    <p>Análise de viabilidade técnica e arquitetura para implantação de <strong>Inteligência Artificial (IA)</strong>, <strong>Agentes Autônomos</strong> e <strong>MCP (Model Context Protocol)</strong>, utilizando os principais <strong>LLMs</strong> do mercado para conectar e otimizar com segurança os sistemas e dados do seu escritório.</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h5>Relatório PDF &amp; Roadmap</h5>
                    <p>Você recebe um relatório consolidado com o plano de ação desenhado especificamente para o seu escritório contábil.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEÇÃO MAPEAMENTOS AVANÇADOS (LEAD GENERATION SEM VALOR) */}
        <div className="advanced-mappings-section">
          <div className="mappings-header text-center">
            <span className="badge">Projetos de Alta Performance</span>
            <h3 className="mappings-title">Mapeamento Completo de Departamentos</h3>
            <p className="mappings-subtitle">
              Sua operação contábil reestruturada e otimizada por especialistas em escala.
            </p>
          </div>

          <div className="grid-3 mappings-grid">
            {/* Card Contábil */}
            <div className="mapping-card glass-panel">
              <div className="card-icon-container contabilidade">
                <svg className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="mapping-card-title">Mapeamento Contábil</h4>
              <p className="mapping-card-desc">
                Reestruturação e análise detalhada de todas as rotinas contábeis do escritório.
              </p>
              <ul className="mapping-features">
                <li>Integração automatizada de dados bancários</li>
                <li>Conciliação e importações otimizadas</li>
                <li>Análise de fechamento e balancetes</li>
                <li>Gravação de rotinas em vídeo para treinamento</li>
              </ul>
            </div>

            {/* Card Fiscal */}
            <div className="mapping-card glass-panel">
              <div className="card-icon-container fiscal">
                <svg className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="mapping-card-title">Mapeamento Fiscal</h4>
              <p className="mapping-card-desc">
                Eliminação completa de retrabalho na apuração e parametrização fiscal e tributária.
              </p>
              <ul className="mapping-features">
                <li>Otimização de apurações mensais</li>
                <li>Parametrização profunda de ERPs contábeis</li>
                <li>Mapeamento de integrações de notas de clientes</li>
                <li>Redução de riscos e erros manuais de cálculo</li>
              </ul>
            </div>

            {/* Card Societário / Legalização */}
            <div className="mapping-card glass-panel">
              <div className="card-icon-container legalizacao">
                <svg className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="mapping-card-title">Mapeamento Societário</h4>
              <p className="mapping-card-desc">
                Aceleração do fluxo de abertura, alteração e baixa de empresas.
              </p>
              <ul className="mapping-features">
                <li>Reestruturação total de fluxos do departamento</li>
                <li>Redução no tempo de abertura de CNPJ</li>
                <li>Mapeamento com prefeituras e juntas comerciais</li>
                <li>Automação de controle de certidões e prazos</li>
              </ul>
            </div>
          </div>

          {/* Chamada para Reunião Estratégica */}
          <div className="mappings-cta-container glass-panel">
            <div className="cta-content">
              <h3>Pronto para reestruturar sua operação e escala?</h3>
              <p>
                Os projetos de mapeamento completo de departamentos envolvem uma análise de escopo detalhada para a sua realidade. Eles são contratados exclusivamente após uma <strong>Reunião Estratégica Comercial individual.</strong>
              </p>
            </div>
            <div className="cta-action">
              <a 
                href="https://wa.me/5511921244033?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20estrat%C3%A9gica%20para%20falar%20sobre%20o%20Mapeamento%20Completo%20de%20Departamentos!" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary cta-btn"
              >
                Falar com Consultor no WhatsApp
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="btn-whatsapp-icon">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.464L0 24zm6.59-4.846c1.6.95 3.16 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.63 2.028 14.162.999 11.999 1c-5.444 0-9.87 4.372-9.874 9.802-.001 1.73.473 3.41 1.37 4.915l-.997 3.634 3.759-.976zm11.566-7.514c-.302-.151-1.787-.881-2.063-.982-.276-.1-.476-.151-.677.151-.199.3-.777.982-.95 1.182-.175.2-.35.225-.652.075-1.037-.518-1.782-.956-2.48-1.554-.836-.718-1.412-1.605-1.579-1.881-.168-.302-.018-.465.132-.614.135-.133.302-.352.453-.528.151-.175.2-.3.302-.5.1-.2.05-.376-.026-.527-.075-.151-.676-1.63-1.04-2.513-.3-.724-.626-.626-.856-.626-.226 0-.476-.025-.727-.025-.25 0-.652.094-.99.475-.34.38-1.29 1.258-1.29 3.072 0 1.814 1.32 3.565 1.5 3.816.188.251 2.593 3.96 6.28 5.556.878.38 1.56.606 2.09.774.88.28 1.68.24 2.31.146.7-.106 1.788-.73 2.039-1.434.25-.704.25-1.307.175-1.433-.075-.126-.276-.2-.578-.351z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
