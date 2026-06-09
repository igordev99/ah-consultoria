import React, { useState } from 'react';
import './Faq.css';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Como funciona a Sessão de Diagnóstico?",
      answer: "A Sessão de Diagnóstico é um atendimento individual e ao vivo de 1h30 via videoconferência. Analisamos detalhadamente os fluxos, gargalos operacionais e o ecossistema de ferramentas do seu escritório. Com base nisso, elaboramos e entregamos um relatório PDF estratégico contendo o mapeamento de gargalos e o roadmap recomendado para implantação de IAs e automações de processos."
    },
    {
      question: "O pagamento é seguro?",
      answer: "Sim, totalmente seguro. O processamento de pagamentos é feito de forma blindada pela plataforma da Safe2Pay, com criptografia de ponta a ponta. Você pode realizar o pagamento no cartão de crédito em até 12x, PIX ou boleto."
    },
    {
      question: "Quanto tempo leva para receber o relatório PDF?",
      answer: "A sessão ao vivo é agendada conforme a sua disponibilidade de agenda. Após a realização da videoconferência, nosso time de especialistas desenvolve o plano personalizado e entrega o relatório PDF finalizado em até 7 dias úteis."
    },
    {
      question: "Existe suporte pós-entrega do diagnóstico?",
      answer: "Com certeza! Para garantir que você consiga dar os primeiros passos e tirar dúvidas sobre as sugestões apresentadas, você terá acesso a 7 dias de suporte exclusivo direto via WhatsApp após a entrega do seu relatório PDF."
    },
    {
      question: "A consultoria e diagnóstico servem para escritórios pequenos?",
      answer: "Sim! O diagnóstico de processos é desenhado sob medida para escritórios de qualquer tamanho. O objetivo principal é otimizar rotinas e eliminar o retrabalho manual do time para que a sua operação consiga escalar sem inflar a folha de pagamento."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="faq-section section">
      <div className="container">
        <div className="faq-header text-center">
          <span className="badge">Dúvidas Frequentes</span>
          <h2 className="faq-title">Perguntas <span className="text-gradient">Frequentes</span></h2>
          <p className="lead faq-subtitle">
            Tire suas dúvidas rápidas sobre como funciona a contratação e o agendamento da sua Sessão de Diagnóstico.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item glass-panel ${isOpen ? 'active' : ''}`}
                onClick={() => handleToggle(index)}
              >
                <div className="faq-question-container">
                  <h3 className="faq-question">{faq.question}</h3>
                  <div className="faq-icon-wrapper">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2.5} 
                      stroke="currentColor" 
                      className={`faq-icon ${isOpen ? 'rotate' : ''}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                </div>
                <div className={`faq-answer-container ${isOpen ? 'open' : ''}`}>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
