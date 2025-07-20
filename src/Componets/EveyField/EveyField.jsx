import React from 'react';
import './EveryField.css';
import Image1 from './1.svg';
import Image2 from './2.svg';
import Image3 from './3.svg'; 
import Image4 from './4.svg'; 
import Image5 from './5.svg';
import Image6 from './6.svg';
import Image7 from './7.svg';
import Image8 from './8.svg';



const fields = [
  { id: 1, alt: 'Human Resources and Finance' },
  { id: 2, alt: 'Digital Marketing' },
  { id: 3, alt: 'Financial Growth Chart' },
  { id: 4, alt: 'Accounting and Billing' },
  { id: 5, alt: 'Global Networking' },
  { id: 6, alt: 'Product Development Lifecycle' },
  { id: 7, alt: 'Process Optimization' },
  { id: 8, alt: 'Customer Support' },
];

function EveryField() {
  return (
    <section className="every-field-section">
      <h2>Explore Opportunities in every field</h2>
      <div className="fields-grid">
        {fields.map(field => (
          <div key={field.id} className="field-card">
            <img 
              src={`https://placehold.co/340x208/e9eaf2/7d7f82?text=${field.alt.replace(/\s/g, '+')}`} 
              alt={field.alt} 
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default EveryField;