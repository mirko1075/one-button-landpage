import React from 'react';
import PhoneMockup from './PhoneMockup';

function Hero() {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-logo">
            <img src="/inonebutton-logo.svg" alt="InOneButton logo" />
          </div>
          <h1 className="hero-headline fade-up">InOneButton</h1>
          <p className="hero-subheadline fade-up delay-1">Meetings. Made effortless.</p>
          <div className="hero-microtext fade-up delay-2">
            <p>One tap.</p>
            <p>Zero setup.</p>
            <p>Clarity begins.</p>
            <p>Automation follows.</p>
          </div>
          <button className="hero-cta join-btn fade-up delay-3" onClick={scrollToWaitlist}>
            Join the waitlist
          </button>
        </div>
        <div className="hero-right fade-up delay-4">
          <div className="hero-phone">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
