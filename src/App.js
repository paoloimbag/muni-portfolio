import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import profileImage from './assets/paolo-profile.jpg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail';
import CustomCursor from './components/CustomCursor';
import Stats from './components/Stats';
import Skills from './components/Skills';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [hoveredSpecialty, setHoveredSpecialty] = useState(null);
  const [hoveredName, setHoveredName] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const specialties = {
    ui: {
      text: "UI",
      image: "https://cdn.dribbble.com/userupload/17458755/file/original-55433e9c65321f0c0f2887df44ad6dff.png"
    },
    visual: {
      text: "Visual Design",
      image: "https://cdn.dribbble.com/userupload/16835631/file/original-554269b224760b06f71ff951cbe10cc4.png"
    },
    branding: {
      text: "Branding",
      image: "https://cdn.dribbble.com/userupload/16555802/file/original-eb3285079252768d402865865be17521.png"
    }
  };

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <Router>
      <ScrollToTop />
      <AppContent 
        handleMouseMove={handleMouseMove}
        hoveredSpecialty={hoveredSpecialty}
        setHoveredSpecialty={setHoveredSpecialty}
        hoveredName={hoveredName}
        setHoveredName={setHoveredName}
        mousePosition={mousePosition}
        specialties={specialties}
        profileImage={profileImage}
      />
    </Router>
  );
}

function AppContent({ 
  handleMouseMove, 
  hoveredSpecialty, 
  setHoveredSpecialty, 
  hoveredName, 
  setHoveredName, 
  mousePosition, 
  specialties, 
  profileImage 
}) {
  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <div className="content-wrapper">
              <div className="hero">
                <h1 className="hero-title">
                  I am{' '}
                  <span 
                    className="name-text"
                    onMouseEnter={() => setHoveredName(true)}
                    onMouseLeave={() => setHoveredName(false)}
                  >
                    Paolo Imbag
                  </span>
                  {' '}a<br />
                  Digital Designer — Specialise in{' '}
                  <span 
                    className="specialty-text"
                    onMouseEnter={() => setHoveredSpecialty('ui')}
                    onMouseLeave={() => setHoveredSpecialty(null)}
                  >
                    UI
                  </span>
                  /{' '}
                  <span 
                    className="specialty-text"
                    onMouseEnter={() => setHoveredSpecialty('visual')}
                    onMouseLeave={() => setHoveredSpecialty(null)}
                  >
                    Visual Design
                  </span>
                  /{' '}
                  <span 
                    className="specialty-text"
                    onMouseEnter={() => setHoveredSpecialty('branding')}
                    onMouseLeave={() => setHoveredSpecialty(null)}
                  >
                    Branding
                  </span>
                </h1>
              </div>
              <Projects />
              <Stats />
              <Skills />
              <Experience />
            </div>
            <Contact />
          </main>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <div 
        className={`specialty-preview ${hoveredSpecialty ? 'visible' : ''}`}
        style={{
          backgroundImage: hoveredSpecialty ? `url(${specialties[hoveredSpecialty].image})` : 'none',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />
      <div 
        className={`name-preview ${hoveredName ? 'visible' : ''}`}
        style={{
          backgroundImage: `url(${profileImage})`,
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />
    </div>
  );
}

export default App;
