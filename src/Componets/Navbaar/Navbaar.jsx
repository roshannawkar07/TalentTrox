import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Navbaar.css';

function Navbaar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <h2>Talentrox</h2>
        <p>Talent That Rocks</p>
      </div>
      <button className="navbar-cta-button">
        Get in Touch <FaArrowRight />
      </button>
    </nav>
  );
}

export default Navbaar;