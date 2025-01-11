import React, { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { useNavigate } from 'react-router-dom';
import '../styles/Projects.css';

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const isHeaderInView = useInView(headerRef);
  const isListInView = useInView(listRef);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  const projects = [
    {
      id: 'project-1',
      name: "Warpdrive App — Dashboard",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800",
      category: "UI Design",
      tags: ["Dashboard", "UI Design", "Dark Mode"],
      description: "A modern admin dashboard interface with light and dark mode support, featuring clean data visualization and intuitive navigation."
    },
    {
      id: 'project-2',
      name: "Marketing Events — Home Page",
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800",
      category: "Web Design",
      tags: ["Landing Page", "Marketing", "Events"],
      description: "Event marketing platform homepage showcasing upcoming marketing events and conferences."
    },
    {
      id: 'project-3',
      name: "AI-Driven Insights Landing",
      image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?auto=format&fit=crop&w=800",
      category: "Landing Page",
      tags: ["AI", "Web Design", "Landing Page"],
      description: "Modern landing page design for an AI-powered insights platform."
    },
    {
      id: 'project-4',
      name: "C-Suite Mastermind | Apex Operators",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800",
      category: "Web Design",
      tags: ["Landing Page", "Business", "Executive"],
      description: "Landing page design for executive leadership program targeting C-suite professionals."
    }
  ];

  return (
    <section className="projects" onMouseMove={handleMouseMove}>
      <div className="projects-container">
        <div 
          ref={headerRef} 
          className={`section-header ${isHeaderInView ? 'fade-in' : ''}`}
        >
          <h2 className="section-title">Recent Projects</h2>
          <a 
            href="https://dribbble.com/paoloimbag" 
            className="view-all-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View All Projects
            <span className="arrow">→</span>
          </a>
        </div>
        <div 
          ref={listRef} 
          className={`projects-list ${isListInView ? 'fade-in' : ''}`}
        >
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-item ${isListInView ? 'fade-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project.id)}
              role="button"
              tabIndex={0}
            >
              <div className="project-text">
                <div className="project-info">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="project-category">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
        <div 
          className={`project-preview ${hoveredProject ? 'visible' : ''}`}
          style={{
            backgroundImage: hoveredProject ? `url(${hoveredProject?.image})` : 'none',
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`
          }}
        />
      </div>
    </section>
  );
}

export default Projects; 