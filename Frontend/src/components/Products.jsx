import "./Products.css";
import image from '../assets/services2.jpeg';
export default function Products({onNavClick}) {

  let products = [
    {
      img: image,
      title: 'Roofing Solutions',
      desc: "High-quality roofing sheets designed for durability, weather resistance, and aesthetic appeal.",
      features: [
        "Weather-resistant materials", "Multiple design options", "Easy installation system"
      ]
    },
    {
      img: image,
      title: 'Roofing Solutions',
      desc: "High-quality roofing sheets designed for durability, weather resistance, and aesthetic appeal.",
      features: [
        "Weather-resistant materials", "Multiple design options", "Easy installation system"
      ]
    },
    {
      img: image,
      title: 'Roofing Solutions',
      desc: "High-quality roofing sheets designed for durability, weather resistance, and aesthetic appeal.",
      features: [
        "Weather-resistant materials", "Multiple design options", "Easy installation system"
      ]
    },
    {
      img: image,
      title: 'Roofing Solutions',
      desc: "High-quality roofing sheets designed for durability, weather resistance, and aesthetic appeal.",
      features: [
        "Weather-resistant materials", "Multiple design options", "Easy installation system"
      ]
    },
    {
      img: image,
      title: 'Roofing Solutions',
      desc: "High-quality roofing sheets designed for durability, weather resistance, and aesthetic appeal.",
      features: [
        "Weather-resistant materials", "Multiple design options", "Easy installation system"
      ]
    },
    {
      img: image,
      title: 'Roofing Solutions',
      desc: "High-quality roofing sheets designed for durability, weather resistance, and aesthetic appeal.",
      features: [
        "Weather-resistant materials", "Multiple design options", "Easy installation system"
      ]
    },

  ]


  return (
    <div className="max-w-[1200px] text-center my-[48px] mx-auto py-[50px] px-[24px]">
      <h2 className="text-[2.5rem] font-bold text-[#1a202c] mb-2">Products</h2>
      <p className="text-[#6b7280] text-[1.15rem] mb-[2.5rem] w-[55%] mx-auto text-center">Discover our premium range of construction and home solution products designed for durability, efficiency, and aesthetic appeal.</p>
      <div className="flex flex-wrap gap-8 justify-center">
        {
          products.map((product, idx) => {
            return (
              <div className="group bg-white rounded-[16px] overflow-hidden w-[350px] flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-in-out hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
                <div className="h-[16rem] overflow-hidden w-full">
                  <img
                    src={product.img} 
                    alt="product image"
                    class="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-[inset_0_-40px_60px_rgba(0,0,0,1)]"
                  />
                </div>
                <div className="products-content px-6 py-3 text-left">
                  <h3 className="text-[1.3rem] font-semibold mb-3 text-[#1c1c1c]">{product.title}</h3>
                  <p className="text-[1.05rem] text-gray-600 mb-4 leading-6">{product.desc}</p>
                  {product.features.map((feature, idx) => {
                    return <li className="before:content-['✔'] before:text-red-600 before:absolute before:left-0 before:top-0 before:font-bold list-none relative pl-6 mb-2 text-gray-600 text-[0.95rem]" key={idx}>{feature}</li>;
                  })}
                  <button className="bg-[#ef233c] text-white border-0 py-[0.7rem] px-[1.2rem] rounded-[8px] cursor-pointer mt-4 w-full transition-colors duration-300 ease hover:bg-[#cc2f3d]">View Details</button>
                </div>
              </div>
            );

          })
        }
      </div>

      <button onClick={onNavClick}className="px-6 py-3 text-base rounded-[8px] border border-[#ef233c] bg-white text-[#ef233c] cursor-pointer transition-transform duration-300 ease-in-out mt-[50px] hover:bg-[#df1a31] hover:text-white mt-[50px]">Request Product Catalog</button>

    </div>
  );
}