import React from 'react';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>HOW IT WORKS</h2>
      <div className="steps">
        <div className="step">
          <div className="step-number">1</div>
          <h3>Choose Your Destination</h3>
          <p>Browse our carefully selected locations worldwide.</p>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <h3>Customize Your Trip</h3>
          <p>Select activities, accommodations, and trip duration.</p>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <h3>Travel with Confidence</h3>
          <p>We handle all details for a seamless experience.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;