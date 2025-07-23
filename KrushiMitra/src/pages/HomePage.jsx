import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container my-4">
      <h1 className="display-4 mb-4">Welcome to Krushimitra</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map(product => (
          <div key={product.productId} className="col">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;