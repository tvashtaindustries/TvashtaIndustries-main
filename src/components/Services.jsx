
import './Services.css';
import image from '../assets/services1.jpeg';
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

export default function Services() {
  return (
    <div className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-desc">Tvashta Industries & Home Solution provides comprehensive design and construction solutions for residential and commercial projects.</p>
      <div className="services-cards">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <img src={service.img} className="service-img" />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href={service.link} className="service-link">Learn More <span>&rarr;</span></a>
            </div>
          </div>
        ))}
      </div>
      <button className='services-button'>Request a Consultation</button>
    </div>
  );
} 