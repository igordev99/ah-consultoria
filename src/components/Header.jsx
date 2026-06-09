import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Force light theme
    document.body.classList.remove('dark');
    localStorage.removeItem('theme');
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <header className="site-header glass-panel">
      <div className="header-container container">
        <a href="#home" className="header-logo">
          <img 
            src="https://andersonhernandes.com.br/wp-content/uploads/2021/12/novo-logo-site.png" 
            alt="Anderson Hernandes" 
            className="logo-img"
          />
        </a>

        <nav className={`header-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Início</a>
          <a href="#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre Anderson</a>
          <a href="#servicos" onClick={() => setMobileMenuOpen(false)}>Diagnósticos</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>Perguntas Frequentes</a>
          <a 
            href="https://wa.me/5511921244033?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20consultoria%20de%20processos!" 
            className="nav-contact-btn" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            Falar no WhatsApp
          </a>
        </nav>

        <div className="header-actions">
          <button 
            className={`menu-burger ${mobileMenuOpen ? 'active' : ''}`} 
            onClick={toggleMobileMenu}
            aria-label="Abrir menu de navegação"
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
