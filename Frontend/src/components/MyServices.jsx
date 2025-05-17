import React from 'react'
import './MyServices.css'
const MyServices = ({onNavClick}) => {
  return (
    <div className='lnka'>
      <h2>Our Services</h2>
      <div className="flex">
        <svg  fill="rgb(201, 31, 31)" className='svga' xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                <h4 onClick={onNavClick}>
                  Architechture Design
                </h4>
      </div>
      
      <div className="flex">
        <svg fill="rgb(201, 31, 31)"  className='svga' xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                <h4 onClick={onNavClick}>
                  PEB Structure Warehouse
                </h4>
      </div>
      <div className="flex">
        <svg fill="rgb(201, 31, 31)" className='svga' xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                <h4 onClick={onNavClick}>
                  Solar Products 
                </h4>
      </div>
      <div className="flex">
        <svg fill="rgb(201, 31, 31)" className='svga' xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                <h4 onClick={onNavClick}>
                  Modular Kitchen
                </h4>
      </div>
      <div className="flex">
        <svg fill="rgb(201, 31, 31)" className='svga' xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                <h4 onClick={onNavClick}>View All Services</h4>
      </div>
    </div>
  )
}

export default MyServices
