import React from 'react';
import './TouchForm.css';

function TouchForm() {
  return (
    <div className="touchForm">
      <div className="touchForm__container">
        <h1 className="touchForm__title">Get in Touch with US!</h1>
        <p className="touchForm__subtitle">Looking to hire or get hired? Let's make it happen</p>
        
        <form className="touchForm__form">
          <div className="touchForm__row">
            <div className="touchForm__group">
              <label htmlFor="fullName" className="touchForm__label">Full Name</label>
              <input type="text" id="fullName" className="touchForm__input" />
            </div>
            <div className="touchForm__group">
              <label htmlFor="phone" className="touchForm__label">Phone Number</label>
              <input type="tel" id="phone" className="touchForm__input" />
            </div>
          </div>
          
          <div className="touchForm__group">
            <label htmlFor="email" className="touchForm__label">Email</label>
            <input type="email" id="email" className="touchForm__input" />
          </div>
          
          <div className="touchForm__group">
            <label htmlFor="role" className="touchForm__label">Who are you?</label>
            <select id="role" className="touchForm__select" defaultValue="" required>
              <option value="" disabled>I am a...</option>
              <option value="job_seeker">I am a Job Seeker</option>
              <option value="recruiter">I am a Recruiter</option>
            </select>
          </div>

          <div className="touchForm__group">
            <label htmlFor="domain" className="touchForm__label">Select your domain</label>
            <select id="domain" className="touchForm__select" defaultValue="" required>
              <option value="" disabled>Eg. Business Management</option>
              <option value="hr">Human Resources</option>
              <option value="finance">Finance and Accounting</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales and Business Management</option>
              <option value="operations">Operations</option>
              <option value="it">Information Technology</option>
              <option value="product">Product Management</option>
              <option value="support">Customer Service / Support</option>
            </select>
          </div>

          <div className="touchForm__group">
            <label htmlFor="details" className="touchForm__label">Tell us what you're looking for</label>
            <textarea 
              id="details" 
              className="touchForm__textarea" 
              placeholder="“I'm looking to hire 3 content writers.” or “I'm searching for full-time design roles.”"
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="touchForm__button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default TouchForm;