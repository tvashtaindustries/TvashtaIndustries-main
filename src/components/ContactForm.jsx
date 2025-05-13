import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="form-wrapper">
      <h2>Send Us a Message</h2>
      <form className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Your email" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" placeholder="Your phone number" />
          </div>
          <div className="form-group">
            <label>Service Interested In</label>
            <select>
              <option className='sel'>Select a service</option>
              <option>Architechture Design</option>
              <option>PEB Structure Warehouse</option>
              <option>Solar Products</option>
              <option>Cement Silo Grafting</option>
              <option>Cable Tray</option>
              <option>Tiles</option>
              <option>Modular Kitchen</option>
              <option>Roofing Sheets</option>
              <option>Others</option>
            </select>
          </div>
        </div>

        <div className="form-group full-width">
          <label>Message</label>
          <textarea placeholder="Tell us about your project or inquiry"></textarea>
        </div>

        <div className="form-check">
          <input type="checkbox" id="consent" />
          <label htmlFor="consent">
            I agree to the processing of my personal data for contact purposes
          </label>
        </div>

        <button type="submit" className="submit-button">Submit Inquiry</button>
      </form>
    </div>
  );
};

export default ContactForm;
