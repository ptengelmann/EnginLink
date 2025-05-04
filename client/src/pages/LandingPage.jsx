// pages/LandingPage.jsx
import React from 'react';
import './LandingPage.scss';

export default function LandingPage() {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1>Where Engineers Build Careers</h1>
        <p>Show your work. Validate your skills. Get hired.</p>
        <div className="hero__cta">
          <button>Join Now</button>
          <button className="secondary">Explore Projects</button>
        </div>
      </div>
    </section>
  );
}
