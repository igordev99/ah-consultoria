import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="badge badge-accent">Anderson Hernandes Consultoria</span>
          <h1 className="hero-title">
            Transforme seu escritório contábil em uma <span className="text-gradient">máquina de escala</span>
          </h1>
          <p className="lead hero-subtitle">
            O diagnóstico preciso e estratégico que separa escritórios altamente lucrativos e eficientes de operações dependentes e estagnadas.
          </p>
          <div className="hero-ctas">
            <a href="#servicos" className="btn btn-primary">
              Ver Diagnósticos Disponíveis
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="btn-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
            <a href="#sobre" className="btn btn-secondary">
              Conhecer Anderson Hernandes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
