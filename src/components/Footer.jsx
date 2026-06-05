import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="contato" className="site-footer-section">
      <div className="container footer-container">
        <div className="footer-top-grid">
          <div className="footer-brand-column">
            <img 
              src="https://andersonhernandes.com.br/wp-content/uploads/2021/12/novo-logo-sitebranco-m.png" 
              alt="Anderson Hernandes" 
              className="footer-logo"
            />
            <p className="footer-brand-desc">
              Especialista em Gestão Estratégica, Tecnologia e Inteligência Artificial para escritórios de contabilidade.
            </p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/andersonhernandesoficial/" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@AndersonHernandes" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links-column">
            <h4 className="footer-col-title">Links Rápidos</h4>
            <ul className="footer-links">
              <li><a href="#home">Início</a></li>
              <li><a href="#sobre">Sobre Anderson</a></li>
              <li><a href="#servicos">Diagnósticos</a></li>
              <li><a href="#faq">Dúvidas</a></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4 className="footer-col-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="https://andersonhernandes.com.br/termos-de-uso/" target="_blank" rel="noopener noreferrer">Termos de Uso</a></li>
              <li><a href="https://andersonhernandes.com.br/poltica-de-privacidade/" target="_blank" rel="noopener noreferrer">Políticas de Privacidade</a></li>
            </ul>
          </div>

          <div className="footer-contact-column">
            <h4 className="footer-col-title">Contatos e Suporte</h4>
            <ul className="footer-contact-details">
              <li>
                <span className="contact-label">WhatsApp:</span>
                <a href="https://wa.me/5511921244033?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20consultoria%20de%20processos!" target="_blank" rel="noopener noreferrer" className="contact-link whatsapp-contact">
                  11 92124-4033
                </a>
              </li>
              <li>
                <span className="contact-label">E-mail:</span>
                <a href="mailto:suporte@andersonhernandes.com.br" className="contact-link">
                  suporte@andersonhernandes.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Anderson Hernandes. Todos os direitos reservados. Estratégia e Consultoria para Escritórios Contábeis.</p>
        </div>
      </div>
    </footer>
  );
}
