import React from 'react'
import './Details.css'
const Details = (props) => {
  return (
    
      <div className='det'>
        <h2>{props.title}</h2>
        <h4>{props.desc}</h4>
      </div>
    
  )
}

export default Details
