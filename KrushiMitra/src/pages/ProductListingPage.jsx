import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  // Add filtering logic here if needed
  return (
    <div className="container my-4">
      <h2 className="mb-4">Products</h2>
      <div className="mb-3">
        <label className="form-label">Filter by Category</label>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="form-select w-auto"
        >
          <option value="">All</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
        </select>
      </div>
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

export default ProductListingPage;