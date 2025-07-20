import React from 'react';
import { FaRegLightbulb, FaMicrophone, FaLink, FaUserFriends } from 'react-icons/fa';
import './Process.css';

const processSteps = [
  {
    icon: <FaRegLightbulb />,
    title: 'Attribute Test',
    description: 'Showcase your skills through our comprehensive assessment.',
  },
  {
    icon: <FaMicrophone />,
    title: 'Interview',
    description: 'Connect with our team to understand your career goals.',
  },
  {
    icon: <FaLink />,
    title: 'Company & Profile Matching',
    description: 'We match you with companies that fit your values and skills.',
  },
  {
    icon: <FaUserFriends />,
    title: 'Final Interview with Company',
    description: 'Meet your potential employer and secure your dream role.',
  }
];

function Process() {
  return (
    <section className="process-section">
      <div className="process-header">
        <h2>How Our Process Works</h2>
        <p>Our streamlined approach connects you with your perfect career opportunity</p>
      </div>
      <div className="process-timeline">
        {processSteps.map((step, index) => (
          <div key={index} className="process-step">
            <div className="process-icon-wrapper">
              <div className="process-icon">{step.icon}</div>
            </div>
            <div className="process-card">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="process-footer">
        <p>Ready to start your journey? Our process typically takes 2-3 weeks from start to finish.</p>
      </div>
    </section>
  );
}

export default Process;
