import React from 'react';
import './SiteFooter.css';

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-socials">
        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
      </div>
      <p className="footer-text">
        © {new Date().getFullYear()} ProjectSphere • Crafted with ❤️ for productivity
      </p>
    </footer>
  );
}

export default SiteFooter;
