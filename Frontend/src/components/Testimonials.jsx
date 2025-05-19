import "./Testimonials.css";
import img from "../assets/services1.jpeg";

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
    <div className="py-[60px] px-[24px] bg-[#f8f9fa] text-center -mt-[30px]">
      <h2 className="text-[2.5rem] font-bold mb-4 text-[#1a202c]">
        Testimonials
      </h2>
      <p className="text-[ #6b7280] text-[1.15rem] mb-[2.5rem] w-[70%] mx-auto">
        Hear what our clients have to say about their experience working with
        Tvashta Industries & Home Solution.
      </p>
      <div className="flex flex-wrap gap-8 justify-center">
        {testimonials.map((testimonial, idx) => (
          <div className="bg-white rounded-[16px] shadow-[0_4px_24px_rgba(0,0,0,0.07)] overflow-hidden w-[350px] h-auto flex flex-col transition-[transform,box-shadow] duration-300 ease-in-out text-left hover:-translate-y-[10px]
    hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]
    cursor-pointer"
           key={idx}>
            <img src={testimonial.image} className="w-[100%] h-[150px] object-cover " />
            
            <div className="relative p-[10px] bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent
    -mt-[70px] text-[white] z-[1]">
              <h3 className="text-[18px] m-0">{testimonial.company}</h3>
              <p className="text-[14px] mt-[2px] mx-0 mb-0">{testimonial.project}</p>
            </div>
            <div className="mb-[1px] ml-[20px] pt-[15px] text-[#e53935] text-[18px] block">
  ★★★★★
</div>
            <div className="p-[20px] pt-[2px]">
              <h3 className="text-[16px] italic font-normal text-[#333] mb-[20px] leading[1.35rem]">{testimonial.review}</h3>
              <p className="font-semibold mb-[5px] text-[16px] text-black">{testimonial.name}</p>
              <p className="font-size-[14px] text-[#777]">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="flex justify-center gap-[20px] px-[40px] py-[20px] bg-[#f9fafb] flex-wrap max-w-[1200px] w-[100%] mx-auto border-box ">
        {statsData.map((item, index) => (
          <div className="flex-[1_1_200px] min-w-[200px] max-w-[300px] bg-white rounded-[12px] px-[20px] py-[30px] text-center shadow-[0_4px_8px_rgba(0,0,0,0.06)] " key={index}>
            <h2 className="text-[32px] font-bold text-[#d32f2f] mb-[10px]">{item.number}</h2>
            <p className="text-[16px] text-[#555]">{item.label}</p>
          </div>
        ))}
      </section>

      <button className="btn1 mt-[30px]">View More Testimonials</button>
    </div>
  );
}