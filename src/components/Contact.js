import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import '../styles/Contact.css';

function Contact() {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef);

  return (
    <>
      <section className={`contact ${isInView ? 'visible' : ''}`}>
        <div className="contact-container">
          <div 
            ref={contentRef}
            className={`contact-content ${isInView ? 'fade-in' : ''}`}
          >
            <h2 className="contact-title">Let's work together</h2>
            <p className="contact-description">
              Digital Designer specializing in UI/Visual Design and Branding. Available for new projects.
            </p>
            <div className="contact-actions">
              <a href="mailto:heyo@paoloimbag.com" className="contact-button">
                Start a Project
              </a>
              <div className="contact-links">
                <a href="https://dribbble.com/paoloimbag" target="_blank" rel="noopener noreferrer">Dribbble</a>
                <a 
                  href="https://www.linkedin.com/in/paolo-i-a0b880103/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a href="https://github.com/paoloimbag" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-spacer" aria-hidden="true" />
    </>
  );
}

export default Contact; 