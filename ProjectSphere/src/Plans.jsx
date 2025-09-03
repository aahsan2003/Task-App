import React from 'react';
import './Plans.css';

function Plans() {
  return (
    <section className="plans-section">
      <h2 className="plans-title">Flexible Plans for Everyone</h2>
      <div className="plans-grid">

        <div className="plan-card">
          <h3>Starter</h3>
          <p className="price"><span>$0</span>/month</p>
          <ul>
            <li>✔ Manage up to 5 Projects</li>
            <li>✔ Basic Collaboration</li>
            <li>✔ Email Support</li>
          </ul>
          <button className="plan-button">Join Free</button>
        </div>

        <div className="plan-card popular">
          <div className="popular-badge">Best Value</div>
          <h3>Pro</h3>
          <p className="price"><span>$12</span>/month</p>
          <ul>
            <li>✔ Unlimited Projects</li>
            <li>✔ Team Collaboration</li>
            <li>✔ Priority Support</li>
            <li>✔ Templates & Automation</li>
          </ul>
          <button className="plan-button">Go Pro</button>
        </div>

        <div className="plan-card">
          <h3>Enterprise</h3>
          <p className="price"><span>$25</span>/month</p>
          <ul>
            <li>✔ All Pro Features</li>
            <li>✔ Admin & Security Controls</li>
            <li>✔ Dedicated Manager</li>
          </ul>
          <button className="plan-button">Contact Sales</button>
        </div>

      </div>
    </section>
  );
}

export default Plans;
