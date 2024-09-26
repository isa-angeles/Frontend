import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor1">
        <div className="footer-row">
          <div className="footer-links">
            <h4>GAROME</h4>
            <ul>
              <li><a href="#">Sobre Nosotros</a></li>
              <li><a href="#">Políticas De Privacidad</a></li>
              <li><a href="#">Políticas De Cookies</a></li>
              <li><a href="#">Términos De Uso</a></li>
              <li><a href="#">Preferecias De cookies</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>SIGUENOS</h4>
            <div className="social-link">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-discord"></i></a>
              <a href="#"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
