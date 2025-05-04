// src/ParticlesBack.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './ParticlesBack.css';

const ParticlesBack = () => {
  const particlesRef = useRef([]);

  useEffect(() => {
    particlesRef.current.forEach((particle) => {
      initializeParticle(particle);
    });
  }, []);

  const initializeParticle = (particle) => {
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    const size = Math.random() * 4 + 2; // Random size between 2 and 6

    gsap.set(particle, {
      x: startX,
      y: startY,
      width: size,
      height: size,
      opacity: Math.random() * 0.5 + 0.5,
    });

    animateParticle(particle);
  };

  const animateParticle = (particle) => {
    const duration = Math.random() * 10 + 2; // Random duration between 5 and 15 seconds
    const endX = Math.random() * window.innerWidth;
    const endY = Math.random() * window.innerHeight;

    gsap.to(particle, {
      x: endX,
      y: endY,
      duration: duration,
      ease: 'none',
      onComplete: () => animateParticle(particle),
    });
  };

  const createParticles = (num) => {
    let particles = [];
    for (let i = 0; i < num; i++) {
      particles.push(
        <div
          key={i}
          className="particle"
          ref={(el) => (particlesRef.current[i] = el)}
        ></div>
      );
    }
    return particles;
  };

  return <div className="particles-container">{createParticles(100)}</div>;
};

export default ParticlesBack;
