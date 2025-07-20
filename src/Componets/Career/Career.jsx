import React from 'react';
import './Career.css';

function Career() {
  return (
    <div className="career-container">
      <div className="career-content">
        <h1>Ready to Level Up Your Career?</h1>
        <p className="subtitle">
          Join thousands of professionals who found their dream jobs through our platform.
        </p>
        <button className="cta-button">Start Your Journey</button>
        <p className="subtext">Free to join • No hidden fees • Instant access</p>
      </div>
      {/* These are the decorative shapes for the background effect */}
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>
      <div className="shape shape-4"></div>
    </div>
  );
}

export default Career;