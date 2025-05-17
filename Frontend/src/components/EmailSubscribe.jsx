import React ,{ useState } from 'react';
import './EmailSubscribe.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const EmailSubscribe = () => {
  const [email,setEmail] = useState('');
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter a valid email address');
      return;
    }

    try {
      await axios.post('http://localhost:5000/subscribe', {email});
      toast.success('Subscribed to newsletter successfully!');
    } catch (err) {
      toast.error('Failed to send confirmation.');
      console.error(err);
    }
  };



  return (
    <div className="email-box">
      <input
        type="email"
        placeholder="Your Email Address"
        className="email-input"
        onChange={handleChange}
      />
      <button className="email-button" onClick={HandleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default EmailSubscribe;
