import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">ProjectSphere</h1>
        <p className="hero-subtitle">Smart, simple, and elegant task management for modern teams.</p>
        <button className="hero-button">Start Your Journey</button>
      </div>
    </section>
  );
}

export default Hero;
