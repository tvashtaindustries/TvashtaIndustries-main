import React from 'react'
import './Links.css'
const Links = ({ onNavClick }) => {
  return (
    <div className='lnk'>
      <h2>Quick Links</h2>
      <div className="flx">
        <svg fill="rgb(201, 31, 31)" className='svga' xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
        </svg>
        <h4 onClick={onNavClick.services}>
          Services
        </h4>
      </div>

      <div className="flx">
        <svg fill="rgb(201, 31, 31)" className='svga' xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
        </svg>
        <h4 onClick={onNavClick.products}>
          Products
        </h4>
      </div>
      <div className="flx">
        <svg fill="rgb(201, 31, 31)" className='svga' xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
        </svg>
        <h4 onClick={onNavClick.projects}>
          Projects
        </h4>
      </div>
      <div className="flx">
        <svg fill="rgb(201, 31, 31)" className='svga' xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
        </svg>
        <h4 onClick={onNavClick.testimonials}>
          Testimonials
        </h4>
      </div>
      <div className="flx">
        <svg fill="rgb(201, 31, 31)" className='svga' xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
        </svg>
        <h4 onClick={onNavClick.contact}>Contact Us</h4>
      </div>
    </div>
  )
}

export default Links
