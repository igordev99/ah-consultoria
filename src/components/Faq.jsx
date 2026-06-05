import React, { useState } from 'react';
import './Faq.css';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "A consultoria se adapta a escritórios pequenos?",
      answer: "Sim! Focamos na estruturação de processos essenciais e ferramentas de ponta para permitir o crescimento escalável e organizado de qualquer tamanho de operação contábil."
    },
    {
      question: "O pagamento é seguro?",
      answer: "Totalmente seguro. Nós utilizamos o checkout oficial da Safe2Pay, que oferece processamento blindado de pagamentos com criptografia ponta a ponta e total conformidade de segurança."
    },
    {
      question: "Quanto tempo leva a implementação?",
      answer: "Para os planos de Mapeamento, as 12 horas de sessões são distribuídas estrategicamente de acordo com nossa agenda e a disponibilidade do seu escritório, geralmente concluindo o mapeamento completo em até 30 dias de acompanhamento."
    },
    {
      question: "Existe suporte após o mapeamento?",
      answer: "Sim. Ao final do processo, entregamos todo o fluxo mapeado e garantimos uma reunião de revisão final dedicada para sanar dúvidas e orientar sua equipe sobre a execução prática do plano."
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
            Tire suas dúvidas rápidas sobre como funcionam os diagnósticos e mapeamentos de processos.
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
