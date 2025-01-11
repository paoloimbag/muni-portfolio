import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

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

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link 
          to="/" 
          className={`nav-logo ${location.pathname === '/' ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Paolo Imbag — UI/Visual & Brand Designer
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
            to="/info" 
            className={`nav-link ${location.pathname === '/info' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Info
            <span className="nav-link-indicator"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 