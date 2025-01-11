import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import '../styles/Skills.css';

function Skills() {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef);

  const skillCategories = [
    {
      title: "Design",
      tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "After Effects"]
    },
    {
      title: "Development",
      tools: ["HTML/CSS", "JavaScript", "React", "Webflow", "WordPress"]
    },
    {
      title: "Other Tools",
      tools: ["Notion", "Zapier", "Airtable", "Framer", "VS Code"]
    }
  ];

  return (
    <section className="skills">
      <div 
        ref={skillsRef}
        className="skills-container"
      >
        <h2 className="section-title">Tools & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`skill-category ${isInView ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="tools">
                {category.tools.map((tool, toolIndex) => (
                  <span 
                    key={toolIndex} 
                    className="tool"
                    style={{ animationDelay: `${(index * 0.1) + (toolIndex * 0.05)}s` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills; 