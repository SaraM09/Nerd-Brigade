// import React, { useEffect, useRef } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// function ProductCarousel() {
//   const [products, setProducts] = React.useState([]);
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     axios.get('http://localhost:1119/products')
//       .then(response => setProducts(response.data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   useEffect(() => {
//     if (products.length && carouselRef.current) {
//       // eslint-disable-next-line no-undef, no-unused-vars
//       const bsCarousel = new bootstrap.Carousel(carouselRef.current, {
//         interval: 3000,
//         wrap: true
//       });
//     }
//   }, [products]);

//   return (
//     <div ref={carouselRef} id="productCarousel" className="carousel slide" data-bs-ride="carousel">
//       <div className="carousel-inner">
//         {products.map((product, index) => (
//           <div key={product.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
//             <img src={product.image} className="d-block w-100" alt={product.title} />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>{product.title}</h5>
//               <p>${product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// }

// export default ProductCarousel;
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function ProductCarousel() {
  const [products, setProducts] = useState([]);
  const carouselRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:1119/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  useEffect(() => {
    if (products.length && carouselRef.current) {
      // eslint-disable-next-line no-undef, no-unused-vars
      const bsCarousel = new bootstrap.Carousel(carouselRef.current, {
        interval: 3000,
        wrap: true
      });
    }
  }, [products]);
  // Function to handle the "Buy Now" action
  const handleBuyNow = (productId) => {
    console.log('Buying product:', productId);
    // Redirect to the carts page
    navigate('/payment');
  };
  return (
    <div ref={carouselRef} id="productCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {products.map((product, index) => (
          <div key={product.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={product.image} className="d-block w-100" alt={product.title} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{product.title}</h5>
              <p>${product.price}</p>
              <button className="btn btn-primary" onClick={() => handleBuyNow(product.id)}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default ProductCarousel;


















