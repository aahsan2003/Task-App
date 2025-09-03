import React from 'react';
import './Voices.css';

function Voices() {
  return (
    <section className="voices-section">
      <h2 className="voices-title">What People Say</h2>
      <div className="voices-container">
        <div className="voice-card">
          <p className="voice-quote">
            "ProjectSphere simplified our workflow completely. The interface is smooth and the features are truly practical."
          </p>
          <cite className="voice-author">— Ayesha Khan</cite>
        </div>
        <div className="voice-card">
          <p className="voice-quote">
            "It keeps our team organized without feeling overwhelming. A refreshing way to manage projects."
          </p>
          <cite className="voice-author">— Daniel Scott</cite>
        </div>
      </div>
    </section>
  );
}

export default Voices;
