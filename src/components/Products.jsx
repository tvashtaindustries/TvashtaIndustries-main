import "./Products.css";
import RedButton from "./RedButton.jsx";
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
    <div className="products-section">
      <h2 className="products-title">Products</h2>
      <p className="products-desc">Discover our premium range of construction and home solution products designed for durability, efficiency, and aesthetic appeal.</p>
      <div className="products-cards">
        {
          products.map((product, idx) => {
            return (
              <div className="products-card">
                <div className="products-img-wrapper">
                  <img
                    src={product.img} 
                    alt="product image"
                    class="products-img"
                  />
                </div>
                <div className="products-content">
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
                  {product.features.map((feature, idx) => {
                    return <li key={idx}>{feature}</li>;
                  })}
                  <button className="products-btn">View Details</button>
                </div>
              </div>
            );

          })
        }
      </div>

      <button onClick={onNavClick}className="btn1">Request Product Catalog</button>

    </div>
  );
}