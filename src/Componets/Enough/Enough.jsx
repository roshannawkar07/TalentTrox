import React from 'react';
import { FaArrowRight, FaBriefcase, FaStar, FaCheckCircle } from 'react-icons/fa';
import './Enough.css';

// Data for the professionals list inside the phone
const professionals = [
  { name: 'Sarah Chen', role: 'Software Developer at TechCorp', initials: 'SC', color: '#8e7dff' },
  { name: 'Marcus Rivera', role: 'UX Designer at InnovateLab', initials: 'MR', color: '#ff7d7d' },
  { name: 'Aisha Patel', role: 'Data Scientist at DataFlow', initials: 'AP', color: '#7de5ff' },
  { name: 'James Kim', role: 'Product Manager at StartupX', initials: 'JK', color: '#e37dff' },
];

function Enough() {
  return (
    <section className="enough-section">
      <div className="enough-content">
        <h1>Enough Searching. Let's Get You Hired</h1>
        <p>From startups to global enterprises, we connect top talent with the roles they deserve.</p>
        <div className="button-group">
          <button className="btn btn-primary">
            Book a Call <FaArrowRight />
          </button>
          <button className="btn btn-secondary">Explore</button>
        </div>
      </div>
      <div className="enough-visuals">
        <div className="phone-mockup">
          {professionals.map((prof, index) => (
            <div key={index} className="professional-item">
              <div className="initials-circle" style={{ backgroundColor: prof.color }}>
                {prof.initials}
              </div>
              <div className="professional-info">
                <p className="name">{prof.name}</p>
                <p className="role">{prof.role}</p>
              </div>
            </div>
          ))}
           <div className="phone-footer">
                <p>10,000+</p>
                <span>Tech professionals matched</span>
           </div>
        </div>
        {/* Floating Stat Cards */}
        <div className="stat-card card-careers">
          <FaBriefcase className="stat-icon" />
          <p><strong>15,000+</strong></p>
          <p>Careers Launched</p>
        </div>
        <div className="stat-card card-satisfaction">
          <FaStar className="stat-icon" />
          <p><strong>4.9/5</strong> Candidate</p>
          <p>Satisfaction</p>
        </div>
        <div className="stat-card card-verified">
          <FaCheckCircle className="stat-icon" />
          <p>Verified</p>
          <p>Professionals</p>
        </div>
      </div>
    </section>
  );
}

export default Enough;