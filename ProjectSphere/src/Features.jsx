import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features-section">
      <h2 className="features-title">Why Choose ProjectSphere?</h2>
      <div className="features-grid">
        <div className="feature-card">
          <i className="fas fa-lightbulb"></i>
          <h3>Smart Planning</h3>
          <p>Break down complex projects into simple steps with clarity and ease.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-calendar-check"></i>
          <h3>Stay on Track</h3>
          <p>Deadlines, reminders, and alerts keep your work moving forward smoothly.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-handshake"></i>
          <h3>Seamless Collaboration</h3>
          <p>Work together in real-time, share progress, and achieve goals faster.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
