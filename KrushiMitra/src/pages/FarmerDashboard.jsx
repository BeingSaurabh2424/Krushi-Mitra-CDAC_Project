import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FarmerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', pricePerKg: 0, stockQty: 0 });

  useEffect(() => {
    // Replace with actual farmer ID
    axios.get('http://localhost:8080/api/products/farmer/1')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/products', { ...newProduct, farmerId: 1 });
      setProducts([...products, newProduct]);
      setNewProduct({ name: '', description: '', pricePerKg: 0, stockQty: 0 });
    } catch (error) {
      console.error('Failed to add product:', error);
    }
  };           
  
  return (
    <div className="container my-4">
      <h2 className="mb-4">Farmer Dashboard</h2>
      <h3 className="h4 mb-3">Add New Product</h3>
      <form onSubmit={handleAddProduct} className="mb-5">
        <div className="mb-3">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Price per kg"
            value={newProduct.pricePerKg}
            onChange={(e) => setNewProduct({ ...newProduct, pricePerKg: e.target.value })}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Stock Quantity"
            value={newProduct.stockQty}
            onChange={(e) => setNewProduct({ ...newProduct, stockQty: e.target.value })}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-success">Add Product</button>
      </form>
      <h3 className="h4 mb-3">Your Products</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map(product => (
          <div key={product.productId} className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ₹{product.pricePerKg}/kg</p>
                <p className="card-text">Stock: {product.stockQty} kg</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmerDashboard;