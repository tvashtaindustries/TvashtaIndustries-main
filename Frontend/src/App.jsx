import React, { useRef } from 'react'
import { Toaster } from 'react-hot-toast';
import './App.css'

import Hero from './components/Hero'
import Details from './components/Details'
import Svgcom from './components/Svgcom'

import FootBlack from './components/FootBlack'
import HeroSection from './components/HeroSection'
import Header from './components/Header'
import Services from './components/Services'
import OurProjects from './components/OurProjects'
import Products from './components/Products'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'


function App() {
  const contactRef = useRef(null); // 1. Create ref to ContactUs section

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' }); // 2. Scroll to ref
  };
  const homeRef = useRef(null); // 1. Create ref to ContactUs section

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' }); // 2. Scroll to ref
  };
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' }); // 2. Scroll to ref
  };
  const projectsRef = useRef(null); // 1. Create ref to ContactUs section

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' }); // 2. Scroll to ref
  };
  const testimonialsRef = useRef(null); // 1. Create ref to ContactUs section

  const scrollToTestimonials = () => {
    testimonialsRef.current?.scrollIntoView({ behavior: 'smooth' }); // 2. Scroll to ref
  };
  const productsRef = useRef(null); // 1. Create ref to ContactUs section

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' }); // 2. Scroll to ref
  };
  const servicesRef = useRef(null); // 1. Create ref to ContactUs section

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' }); // 2. Scroll to ref
  };
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div useRef={homeRef}>
        <Header onNavClick={{ home: scrollToHome, contact: scrollToContact, about: scrollToAbout, services: scrollToServices, products: scrollToProducts, projects: scrollToProjects }} /> </div>
      <Hero onNavClick={{ contact: scrollToContact, services: scrollToServices }} />
      <div className="container">
        <Details title='10+' desc='Years Experience' />
        <Details title='200+' desc='Projects Completed' />
        <Details title='50+' desc='Expert Team' />
        <Details title='98%' desc='Client Satisfaction' />

      </div>
      <h1 className='about' ref={aboutRef}>About</h1>
      <hr className='boldLine' />
      <div className="container2">

        <div className="left">
          <h2>Your Trusted Partner in Construction & Home Solutions </h2>
          <h4>At Tvashta Industries & Home Solution Pvt Ltd, we combine innovative design with precision engineering to deliver exceptional architectural and construction solutions.</h4>
          <h4>With years of industry experience, we've established ourselves as leaders in providing comprehensive services from architectural design to modular kitchens and industrial structures.</h4>
          <div className="container3">
            <Svgcom title='Quality Assurance' desc='Highest standards in every project' />
            <Svgcom title='Expert Team' desc='Skilled professionals at your service' />
            <Svgcom title='Innovative Solutions' desc='Modern designs and technologies' />
            <Svgcom title='Customer Satisfaction' desc='Client-focused approach' />

          </div>
          <button className='btn1' onClick={scrollToContact}>Get in Touch</button>



        </div>
        <div className="right">
          <img src="https://images.unsplash.com/photo-1526546334624-2afe5b01088d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bW9kZXJuJTIwYXJjaGl0ZWN0dXJlJTIwZmlybSUyMG9mZmljZXxlbnwwfHx8fDE3NDY2ODkzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="" />
        </div>
      </div>
      <div ref={servicesRef} ><Services onNavClick={scrollToContact} /></div>
      <div ref={projectsRef}><OurProjects /></div>
      <div ref={productsRef}><Products onNavClick={scrollToContact} /></div>
      <div ref={testimonialsRef}><Testimonials /></div>

      <div ref={contactRef}><Contact /></div>

      <div className="cont">
        <h2>Visit Our Office</h2>
        <p>Find us at our headquarters or at one of our regional offices across India.</p>
      </div>
      <HeroSection />
      <FootBlack onNavClick={{ testimonials: scrollToTestimonials, contact: scrollToContact, about: scrollToAbout, services: scrollToServices, products: scrollToProducts, projects: scrollToProjects }} />

    </>

  )
}

export default App
