
import React from 'react'
import Industries from './Industries'
import Links from './Links'
import MyServices from './MyServices'
import Information from './Information'
import './FootBlack.css'
import HeroSection2 from './HeroSection2'
import FinalComp from './FinalComp'
const FootBlack = () => {
  return (
    <footer className='bg'>
         <div className="hero-section1">
      <div className="hero-overlay1"></div>
      <div className="hero-content1">
        <h2>Building Tomorrow's Infrastructure Today</h2>
        <p>Partner with Tvashta Industries for innovative solutions that transform your vision into reality.</p>
        <button className="hero-button1">Start Your Project</button>
      </div>
    </div>
     <div className="botcontainer">
      <Industries/>
      <Links/>
      <MyServices/>
      <Information/>
     </div>
     <HeroSection2/>
     <hr className='thinline'/>
     <FinalComp/>
    </footer>
  )
}

export default FootBlack

