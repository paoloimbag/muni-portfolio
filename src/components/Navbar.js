import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import CV from '../assets/documents/Paolo Imbag - Resume (2025).pdf';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleDownloadCV = (e) => {
    e.preventDefault();
    window.open(CV, '_blank');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link 
          to="/" 
          className={`nav-logo ${location.pathname === '/' ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Paolo Imbag
        </Link>

        {/* Hamburger Menu Button */}
        <button 
          className={`menu-button ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="menu-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About
            <span className="nav-link-indicator"></span>
          </Link>
          <Link 
            to="/projects" 
            className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Projects
            <span className="nav-link-indicator"></span>
          </Link>
          <Link 
            to="/get-in-touch" 
            className={`nav-link ${location.pathname === '/get-in-touch' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Get In Touch
            <span className="nav-link-indicator"></span>
          </Link>
          <a 
            href={CV}
            className="nav-link download-cv"
            onClick={handleDownloadCV}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
            <span className="nav-link-indicator"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 