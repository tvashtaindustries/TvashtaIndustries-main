import './RedButton.jsx';
import './Services.css';
import image from '../assets/services1.jpeg';
import RedButton from './RedButton.jsx';
import React from 'react';
const services = [
  {
    title: 'Architecture Design',
    desc: 'Custom architectural solutions tailored to your specific needs and vision.',
    img: image,
    link: '#',
  },
  {
    title: 'PEB Structure',
    desc: 'Warehouses, cold storage, and factories built with pre-engineered building technology.',
    img: image,
    link: '#',
  },
  {
    title: 'Solar Products',
    desc: 'Sustainable energy solutions with high-quality solar installations for homes and businesses.',
    img: image,
    link: '#',
  },
  {
    title: 'Cement Silo Grafting',
    desc: 'Professional cement silo installation and maintenance services for industrial applications.',
    img: image,
    link: '#',
  },
  {
    title: 'Cable Tray & Tiles',
    desc: 'High-quality cable management solutions and premium tile options for all your projects.',
    img: image,
    link: '#',
  },
  {
    title: 'Modular Kitchen',
    desc: 'Custom modular kitchen solutions designed for functionality, aesthetics, and durability.',
    img: image,
    link: '#',
  },
];

export default function Services({onNavClick}) {
  return (
    <div className="max-w-[1200px] mx-auto mt-[60px] mb-[30px] px-[24px] text-center">
      <h2 className="text-[2.5rem] font-bold mb-4 text-[#1a202c]">Our Services</h2>
      <p className="text-[#6b7280] text-[1.15rem] mb-[2.5rem] w-[70%] m-auto">Tvashta Industries & Home Solution provides comprehensive design and construction solutions for residential and commercial projects.</p>
      <div className="flex flex-wrap gap-[2rem] justify-center">
        {services.map((service, idx) => (
          <div className="bg-white rounded-[16px] shadow-[0_4px_24px_rgba(0,0,0,0.07)] overflow overflow-hidden w-[350px] h-auto flex flex-col transition-[transform,box-shadow] duration-300 ease-in-out hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:scale-105 cursor-pointer " key={idx}>
            <img src={service.img} className="w-[100%] h-[175px] object-cover" />
            <div className="px-6 py-3 text-left">
              <h3 className="text-[1.3rem] font-bold mb-2 text-[#1a202c]">{service.title}</h3>
              <p className="text-[#4b5563] text-[1.05rem] mb-[1.2rem] opacity-90">{service.desc}</p>
              <a href={service.link} className="text-[#ef233c] font-medium no-underline text-[1.05rem] transition-colors duration-200 hover:text-[#d90429]">Learn More <span className='text-[1.2em] align-middle'>&rarr;</span></a>
            </div>
          </div>
        ))}
      </div>
        <button className="btn1 mt-[40px]" onClick={onNavClick}>Request a Consultation</button>
    </div>
  );
} 