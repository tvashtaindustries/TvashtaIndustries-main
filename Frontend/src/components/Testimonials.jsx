import "./Testimonials.css";
import img from "../assets/services1.jpeg";
import RedButton from './RedButton.jsx';

const statsData = [
  { number: "150+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "10+", label: "Years Experience" },
  { number: "25+", label: "Industry Awards" },
];


const testimonials = [
  {
    image: img,
    company: "Rajesh Industries",
    project: "Manufacturing Facility",
    review:
      "Tvashta Industries delivered our PEB structure warehouse ahead of schedule. Their attention to detail and quality of materials exceeded our expectations. Highly recommended for industrial construction projects.",
    name: "Amit Kumar",
    role: "Operations Director",
  },
  {
    image: img,
    company: "GreenTech Solutions",
    project: "Commercial Building",
    review:
      "The solar installation by Tvashta Industries has reduced our energy costs by 60%. Their team was professional throughout the entire process, from design to installation and follow-up support.",
    name: "Priya Sharma",
    role: "Sustainability Manager",
  },
  {
    image: img,
    company: "Luxury Homes Ltd.",
    project: "Residential Project",
    review:
      "The modular kitchen designed and installed by Tvashta Industries has transformed our home. The quality of materials, attention to detail, and after-sales service have been exceptional.",
    name: "Vikram Singh",
    role: "Property Developer",
  },
];

export default function Testimonials() {
  return (
    <div className="testimonials-section">
      <h2 className="testimonials-title">Testimonials</h2>
      <p className="testimonials-desc">
        Hear what our clients have to say about their experience working with
        Tvashta Industries & Home Solution.
      </p>
      <div className="testimonials-cards">
        {testimonials.map((testimonial, idx) => (
          <div className="testimonials-card" key={idx}>
            <img src={testimonial.image} className="testimonials-img" />
            <div className="testimonials-company">
              <h3>{testimonial.company}</h3>
              <p>{testimonial.project}</p>
            </div>
            <div className="testimonials-content">
              <h3>{testimonial.review}</h3>
              <p className="testimonials-name">{testimonial.name}</p>
              <p className="testimonials-role">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="stats-section">
        {statsData.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2 className="stat-number">{item.number}</h2>
            <p className="stat-label">{item.label}</p>
          </div>
        ))}
      </section>


      <button className="btn1">View More Testimonials</button>
    </div>
  );
}