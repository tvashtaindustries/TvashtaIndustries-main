import React from 'react'
import './Svgcom.css'
const Svgcom = (props) => {
  return (
    <>
    <div className="con">
        <div className="lef">
            <svg xmlns="http://www.w3.org/2000/svg" class="svg" viewBox="0 0 20 20" fill="currentColor" id="el-ioyyjbis" alt='svg'>
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" id="el-xbgpbhi5"></path>
                </svg>
                
        </div>
        <div className="rig">
            <h3>{props.title}</h3>
            <h4>{props.desc}</h4>
        </div>
    </div>
    </>
  )
}

export default Svgcom
