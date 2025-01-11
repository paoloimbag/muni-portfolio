import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Contact from './Contact';
import '../styles/ProjectDetail.css';

const projects = {
  'project-1': {
    title: "Warpdrive App — Dashboard Redesign",
    subtitle: "Dashboard UI Design",
    description: "A modern admin dashboard interface with light and dark mode support, featuring clean data visualization and intuitive navigation.",
    role: "Lead Designer",
    duration: "3 months",
    year: "2024 - 2025",
    client: "Warpdrive",
    services: ["Visual Identity", "Design System", "Brand Guidelines"],
    challenge: "The challenge was to create a distinctive brand identity that would stand out in the crowded tech market while maintaining simplicity and scalability.",
    solution: "Developed a flexible design system that adapts across different platforms while maintaining brand consistency. Created a unique visual language that combines geometric shapes with a modern color palette.",
    images: [
      require('../assets/projects/warpdrive/Admin Dashboard Light Dark Mode.webp'),
      require('../assets/projects/warpdrive/Admin Dashboard Dark Mode.webp'),
      require('../assets/projects/warpdrive/Admin Dashboard Light Mode.webp')
    ],
    nextProject: "project-2"
  },
  'project-2': {
    title: "UI/UX Design",
    subtitle: "Financial App Redesign",
    description: "A complete redesign of a financial management application, focusing on improving user experience and accessibility.",
    role: "UI/UX Designer",
    duration: "4 months",
    year: "2023",
    client: "FinanceFlow",
    services: ["UX Research", "UI Design", "Interaction Design", "Prototyping"],
    challenge: "The main challenge was simplifying complex financial data visualization while making the interface more intuitive and user-friendly.",
    solution: "Created a clean, minimalist interface with clear hierarchy and improved navigation. Implemented new data visualization components and simplified user flows.",
    images: [
      "assets/projects/warpdrive/og-image.jpg",
      "/images/project2/wireframes.jpg",
      "/images/project2/ui-components.jpg",
      "/images/project2/final-designs.jpg"
    ],
    nextProject: "project-3"
  },
  // Add more projects as needed
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projects[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div>Project not found</div>;

  return (
    <>
      <Navbar />
      <main className="project-detail">
        <div className="project-hero">
          <div className="project-hero-content">
            <h1>{project.title}</h1>
            <p className="project-subtitle">{project.subtitle}</p>
          </div>
          <img src={project.images[0]} alt={project.title} className="hero-image" />
        </div>

        <div className="project-content">
          <div className="project-info">
            <div className="info-grid">
              <div className="info-item">
                <h3>Role</h3>
                <p>{project.role}</p>
              </div>
              <div className="info-item">
                <h3>Duration</h3>
                <p>{project.duration}</p>
              </div>
              <div className="info-item">
                <h3>Year</h3>
                <p>{project.year}</p>
              </div>
              <div className="info-item">
                <h3>Client</h3>
                <p>{project.client}</p>
              </div>
            </div>
          </div>

          <div className="project-description">
            <h2>Overview</h2>
            <p>{project.description}</p>

            <div className="services-list">
              <h3>Services</h3>
              <ul>
                {project.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>

            <h2>Challenge</h2>
            <p>{project.challenge}</p>

            <h2>Solution</h2>
            <p>{project.solution}</p>
          </div>

          <div className="project-gallery">
            {project.images.slice(1).map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Project view ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="next-project">
            <p>Next Project</p>
            <a href={`/project/${project.nextProject}`} className="next-project-link">
              {projects[project.nextProject]?.title}
            </a>
          </div>
        </div>
      </main>
      <Contact />
    </>
  );
}

export default ProjectDetail; 