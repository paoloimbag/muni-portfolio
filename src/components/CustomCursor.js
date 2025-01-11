import React, { useEffect, useState } from 'react';
import '../styles/CustomCursor.css';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div 
      className="custom-cursor"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    />
  );
}

export default CustomCursor; 