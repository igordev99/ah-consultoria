import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const bodyClass = document.body.classList;
    if (theme === 'dark') {
      bodyClass.add('dark');
    } else {
      bodyClass.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <header className="site-header glass-panel">
      <div className="header-container container">
        <a href="#home" className="header-logo">
          {theme === 'dark' ? (
            <img 
              src="https://andersonhernandes.com.br/wp-content/uploads/2021/12/novo-logo-sitebranco-m.png" 
              alt="Anderson Hernandes" 
              className="logo-img"
            />
          ) : (
            <img 
              src="https://andersonhernandes.com.br/wp-content/uploads/2021/12/novo-logo-site.png" 
              alt="Anderson Hernandes" 
              className="logo-img"
            />
          )}
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
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label="Alternar tema visual"
            title={theme === 'dark' ? "Ativar Modo Claro" : "Ativar Modo Escuro"}
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon-sun">
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.16 5.1a.75.75 0 0 1 1.06 0l1.59 1.59a.75.75 0 1 1-1.06 1.06L6.16 6.16a.75.75 0 0 1 0-1.06ZM18.84 5.1a.75.75 0 0 1 0 1.06l-1.59 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59a.75.75 0 0 1 1.06 0ZM12 5.25a6.75 6.75 0 1 0 6.75 6.75A6.75 6.75 0 0 0 12 5.25Zm0 12a5.25 5.25 0 1 1 5.25-5.25A5.25 5.25 0 0 1 12 17.25ZM20.25 12a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H21a.75.75 0 0 1-.75-.75ZM3 11.25a.75.75 0 0 0 0 1.5h2.25a.75.75 0 0 0 0-1.5H3ZM16.19 16.19a.75.75 0 0 1 1.06 0l1.59 1.59a.75.75 0 1 1-1.06 1.06l-1.59-1.59a.75.75 0 0 1 0-1.06ZM7.22 16.19a.75.75 0 0 1 0 1.06l-1.59 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59a.75.75 0 0 1 1.06 0ZM12 17.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V18a.75.75 0 0 1 .75-.75Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon-moon">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 1 1-16.949-11.84.75.75 0 0 1 .633-.131Z" clipRule="evenodd" />
              </svg>
            )}
          </button>

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
