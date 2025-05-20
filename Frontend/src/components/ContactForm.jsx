import React, { useState } from 'react';
import './ContactForm.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      toast.error('Please agree to the consent checkbox');
      return;
    }
    setIsSubmitting(true);
    try {
      await axios.post('http://localhost:5000/send-email', formData);
      toast.success("Inquiry sent successfully!");
    } catch (err) {
      toast.error('Failed to send inquiry.');
      console.error(err);
    } finally {
      setIsSubmitting(false); // end loading
    }

  };

  return (
    <div className="form-wrapper">
      <h2>Send Us a Message</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" name="phone" placeholder="Your phone number" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Service Interested In</label>
            <select name="service" value={formData.service} onChange={handleChange}>
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
          <textarea name="message" placeholder="Tell us about your project or inquiry" value={formData.message} onChange={handleChange}></textarea>
        </div>

        <div className="form-check">
          <input type="checkbox" id="consent" name="consent" class="consent" checked={formData.consent} onChange={handleChange} />
          <label htmlFor="consent">
            I agree to the processing of my personal data for contact purposes
          </label>
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>{isSubmitting ?
          <div className="btn-spinner-wrapper">
            <span className="spinner"></span>
            <span>Submitting</span>
          </div> : 'Submit Inquiry'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;