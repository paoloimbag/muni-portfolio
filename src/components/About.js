import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import profileImage from '../assets/paolo-profile.jpg';
import Navbar from './Navbar';
import Contact from './Contact';
import '../styles/About.css';
import Gallery from './Gallery';

function About() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef);

  return (
    <>
      <Navbar />
      <main>
        <section className="about">
          <div ref={aboutRef} className={`about-container ${isInView ? 'fade-in' : ''}`}>
            <div className="about-header">
              <div className="header-content">
                <h1 className="about-title">Digital Designer & Problem Solver</h1>
                <p className="about-subtitle">
                  I'm a Digital Designer with over a decade of experience crafting digital experiences 
                  and building brands. Based in Toronto, I specialize in UI/UX design, visual design, 
                  and branding for businesses worldwide.
                </p>
                <div className="social-links">
                  <a 
                    href="https://dribbble.com/paoloimbag" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    Dribbble
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/paolo-i-a0b880103/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/paoloimbag" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="profile-image">
                <img src={profileImage} alt="Paolo Imbag" />
              </div>
            </div>

            <div className="about-grid">
              <div className="about-card">
                <h3>Experience</h3>
                <p>10+ years in digital design, working with startups and established brands.</p>
              </div>
              <div className="about-card">
                <h3>Expertise</h3>
                <p>UI/UX Design, Visual Design, Brand Identity, Web Development</p>
              </div>
              <div className="about-card">
                <h3>Location</h3>
                <p>Based in Toronto, Canada. Working globally.</p>
              </div>
            </div>

            <div className="about-content">
              <div className="content-section">
                <h2>My Approach</h2>
                <p>
                  My approach combines aesthetic sensibility with strategic thinking, 
                  ensuring that every design not only looks beautiful but also serves 
                  its intended purpose effectively. I believe in creating designs that 
                  not only catch the eye but also solve real problems.
                </p>
              </div>
              
              <div className="content-section">
                <h2>Work Process</h2>
                <div className="process-steps">
                  <div className="step">
                    <span className="step-number">01</span>
                    <h4>Research & Strategy</h4>
                    <p>Understanding the problem space and defining clear objectives.</p>
                  </div>
                  <div className="step">
                    <span className="step-number">02</span>
                    <h4>Design & Iterate</h4>
                    <p>Creating solutions and refining through feedback.</p>
                  </div>
                  <div className="step">
                    <span className="step-number">03</span>
                    <h4>Deliver & Support</h4>
                    <p>Implementing solutions and ensuring long-term success.</p>
                  </div>
                </div>
              </div>
            </div>

            <Gallery />
          </div>
        </section>
        <Contact />
      </main>
    </>
  );
}

export default About; 