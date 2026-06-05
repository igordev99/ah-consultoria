import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="sobre" className="about-section section">
      <div className="container">
        <div className="grid-2 about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-glow"></div>
            <img 
              src="https://andersonhernandes.com.br/wp-content/uploads/2023/05/Foto-Camada-3-989x1024.png" 
              alt="Anderson Hernandes" 
              className="about-image"
            />
            <div className="about-experience-badge glass-panel">
              <span className="exp-years">29+</span>
              <span className="exp-label">Anos de Experiência</span>
            </div>
          </div>

          <div className="about-content">
            <span className="badge">Especialista & Mentor</span>
            <h2 className="about-title">
              Quem é <span className="text-gradient">Anderson Hernandes</span>?
            </h2>
            
            <blockquote className="about-quote">
              "O segredo do sucesso é fazer cada dia melhor aquilo que as pessoas insistem que você faz muito bem."
            </blockquote>

            <p className="about-description">
              Fundador e CEO da <strong>Tactus Contabilidade Digital</strong>, uma das maiores referências do mercado contábil do Brasil. Anderson possui ampla formação em Contabilidade, Marketing e Gestão de Negócios.
            </p>
            
            <p className="about-description">
              Em 2015, liderou a transição da Tactus de uma contabilidade tradicional para o modelo digital, expandindo a carteira para mais de <strong>3.000 clientes ativos</strong> e formando uma equipe com cerca de 100 profissionais altamente capacitados. É também autor de <strong>11 livros publicados</strong> e já realizou mais de mil eventos no setor.
            </p>

            <div className="about-stats">
              <div className="stat-card glass-panel">
                <span className="stat-number">11</span>
                <span className="stat-text">Livros Escritos</span>
              </div>
              <div className="stat-card glass-panel">
                <span className="stat-number">1.000+</span>
                <span className="stat-text">Palestras & Eventos</span>
              </div>
              <div className="stat-card glass-panel">
                <span className="stat-number">3.000+</span>
                <span className="stat-text">Clientes Digitais</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
