'use client'
import React, { useEffect, useState } from 'react';

const GradientBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
          rgba(138, 43, 226, 0.15) 0%, 
          rgba(75, 0, 130, 0.08) 40%, 
          rgba(25, 25, 112, 0.03) 70%, 
          transparent 100%)`,
        transition: 'background 0.2s ease-out',
      }}
    />
  );
};

export default GradientBackground;
