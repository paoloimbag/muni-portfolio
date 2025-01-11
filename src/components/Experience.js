import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import '../styles/Experience.css';
import CV from '../assets/documents/Paolo Imbag - Resume (2025).pdf';

function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Pilothouse Digital",
      role: "Visual & Graphic Designer for DTC",
      period: "Jun 2021 - Present",
      location: "Victoria, British Columbia, Canada · Remote",
      description: [
        "Led the design of digital media campaigns for DTC, collaborating with internal teams to meet time-sensitive deadlines",
        "Created branding for third-party build-outs, contributing to marketing collateral creation",
        "Provided valuable insights on the latest design trends to enhance creative strategy"
      ],
      skills: ["Graphic Design", "Digital Media", "Branding", "Marketing", "Adobe Creative Suite"]
    },
    {
      id: 2,
      company: "Muni Studio",
      role: "Digital Designer",
      period: "Apr 2014 - Present",
      location: "Toronto, Ontario, Canada",
      description: [
        "Led creative design projects for small businesses, specializing in UIUX, graphic design, branding, and design direction",
        "Collaborated with clients to understand their brand vision and deliver innovative design solutions",
        "Increased client satisfaction and brand visibility through visually appealing and user-friendly designs",
        "Established Muni Studio as a go-to design agency for small businesses in the Philippines"
      ],
      skills: ["UI/UX Design", "Brand Strategy", "Design Direction", "Client Relations", "Web Design"]
    },
    {
      id: 3,
      company: "Oddup",
      role: "Product Designer (UI/UX)",
      period: "Jan 2020 - Jul 2022",
      location: "Los Angeles, California, United States",
      description: [
        "Defined and documented optimal user experiences by collaborating with product and development teams",
        "Conducted concept and usability testing to gather feedback for iterative design refinement",
        "Presented hi-fidelity mock-ups and prototypes to stakeholders for effective communication",
        "Developed UI design guidelines to establish consistency and provide a framework for future projects"
      ],
      skills: ["Product Design", "User Experience", "Prototyping", "Figma", "Design Systems"]
    },
    {
      id: 4,
      company: "iStack Holdings",
      role: "Visual Designer",
      period: "May 2015 - Dec 2019",
      location: "Makati · Hybrid",
      description: [
        "Led UI/UX design for the AMC Education Platform, enhancing user experience",
        "Developed visually appealing materials for iStack Training to effectively communicate concepts",
        "Oversaw visual direction for the SW Conference, ensuring a cohesive brand presence"
      ],
      skills: ["Visual Design", "UI/UX", "Educational Design", "Brand Identity", "Adobe XD"]
    }
  ];

  const headerRef = useRef(null);
  const listRef = useRef(null);
  const isHeaderInView = useInView(headerRef);
  const isListInView = useInView(listRef);

  return (
    <section className="experience">
      <div className="experience-container">
        <div 
          ref={headerRef}
          className={`experience-header ${isHeaderInView ? 'fade-in' : ''}`}
        >
          <div className="header-content">
            <h2 className="section-title">Work Experience</h2>
            <p className="section-subtitle">
              A decade of crafting digital experiences and building brands
            </p>
          </div>
        </div>
        <div 
          ref={listRef}
          className="experience-grid"
        >
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`experience-item ${isListInView ? 'fade-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="experience-header">
                <h3 className="company-name">{exp.company}</h3>
                <span className="period">{exp.period}</span>
              </div>
              <h4 className="role">{exp.role}</h4>
              <span className="location">{exp.location}</span>
              <ul className="description-list">
                {exp.description.map((item, index) => (
                  <li key={index} className="description-item">{item}</li>
                ))}
              </ul>
              <div className="skills-list">
                {exp.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience; 