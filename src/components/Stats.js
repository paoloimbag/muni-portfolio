import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import '../styles/Stats.css';

function Stats() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef);

  const stats = [
    {
      number: "10+",
      label: "Years Experience"
    },
    {
      number: "50+",
      label: "Projects Completed"
    },
    {
      number: "30+",
      label: "Happy Clients"
    }
  ];

  return (
    <section className="stats">
      <div 
        ref={statsRef}
        className="stats-container"
      >
        {stats.map((stat, index) => (
          <div 
            key={index}
            className={`stat-item ${isInView ? 'animate' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats; 