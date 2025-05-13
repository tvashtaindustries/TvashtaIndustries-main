import React from 'react'
import ContactForm from './ContactForm'
import ContactRight from './ContactRight'
import './Contact.css'
const Contact = () => {
  return (
    <div className='Contact'>
      <h1>Contact Us</h1>
      <h4>Get in touch with our team for inquiries, quotes, or to discuss your project requirements.</h4>
      <div className="Cont1">
        <ContactForm/>
        <ContactRight/>
      </div>
    </div>
  )
}

export default Contact
