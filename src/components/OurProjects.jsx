
import './OurProjects.css';
import image from '../assets/our-projects-image.jpeg';
import image2 from '../assets/our-projects-2.jpeg';
import RedButton from "./RedButton.jsx";
export default function OurProjects() {
  let projects = [
    {
      img: image2,
      title: 'Corporate Office Tower',
      desc: 'Modern architectural design for a corporate headquarters with sustainable features.',
      type: 'Architecture Design'
    },
    {
      img: image2,
      title: 'Corporate Office Tower',
      desc: 'Modern architectural design for a corporate headquarters with sustainable features.',
      type: 'Architecture Design'
    },
    {
      img: image2,
      title: 'Corporate Office Tower',
      desc: 'Modern architectural design for a corporate headquarters with sustainable features.',
      type: 'Architecture Design'
    },
    {
      img: image,
      title: 'Corporate Office Tower',
      desc: 'Modern architectural design for a corporate headquarters with sustainable features.',
      type: 'Architecture Design'
    },
    {
      img: image,
      title: 'Corporate Office Tower',
      desc: 'Modern architectural design for a corporate headquarters with sustainable features.',
      type: 'Architecture Design'
    },
    {
      img: image,
      title: 'Corporate Office Tower',
      desc: 'Modern architectural design for a corporate headquarters with sustainable features.',
      type: 'Architecture Design'
    },
  ]
  return (
    <div className="our-projects-section">
      <h2 className="our-projects-title">Our Projects</h2>
      <p className="our-projects-desc">Explore our portfolio of successful projects that showcase our expertise in architecture, construction, and industrial solutions.</p>
      <div className="our-projects-cards">
        {
          projects.map((project, idx) => {
            return (
              <div className="our-projects-card">
                <div className="our-projects-image-wrapper">
                  <img src={project.img} className="our-projects-img" />
                  </div>
                <div className="our-projects-content">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <button className="our-projects-btn">{project.type}</button>

                </div>
              </div>
            );

          })
        }
      </div>

      <RedButton text="View More Projects" />

    </div>
  );
}