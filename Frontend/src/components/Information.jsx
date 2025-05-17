import React from 'react'
import './Information.css'
import EmailSubscribe from './EmailSubscribe'
const Information = () => {
  return (
    <div>
      <div className='lnkb'>
      <h2>Contact Information</h2>
      <div className="flex">
        <svg  className='svga'  xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                {/* <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> */}
              </svg>
                <h4>
                  123 Industrial Avenue,
Tech Park, Sector 5,
Mumbai, Maharashtra 400001
                </h4>
      </div>
      
      <div className="flex">
        <svg   className='svga' xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <h4>
                  +91 98765 43210
                </h4>
      </div>
      <div className="flex">
        <svg  className='svga' xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <h4>
                  info@tvashtaindustries.com 
                </h4>
      </div>
      <div className="flex">
        <svg  className='svga' xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h4>
                  Mon-Fri: 9:00 AM - 6:00 PM
                </h4>
      </div>
      <h3>Subscribe to Our Newsletter</h3>
      <EmailSubscribe/>
    </div>
    </div>
  )
}

export default Information
