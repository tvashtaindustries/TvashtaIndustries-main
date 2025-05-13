import React from 'react';
import './EmailSubscribe.css';

const EmailSubscribe = () => {
  return (
    <div className="email-box">
      <input type="email" placeholder="Your Email Address" className="email-input" />
      <button className="email-button">Submit</button>
    </div>
  );
};

export default EmailSubscribe;
