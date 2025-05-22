import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Adventure Awaits</h1>
        <p>Discover handcrafted travel experiences with local experts to make your journey unforgettable.</p>
        <button className="cta-button">Explore Destinations</button>
      </div>
    </section>
  );
};

export default Hero;