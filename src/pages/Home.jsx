import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { productService } from '../services/api';

function Home() {
  const [activeTab, setActiveTab] = useState('for-you');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await productService.getAllProducts();
        setProducts(response.data);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="product-section">
        <h2 className="section-title">Special For You</h2>
        
        <div className="tabs-container">
          <button 
            className={`tab-button ${activeTab === 'for-you' ? 'active' : ''}`}
            onClick={() => setActiveTab('for-you')}
          >
            For You
          </button>
          <button 
            className={`tab-button ${activeTab === 'featured' ? 'active' : ''}`}
            onClick={() => setActiveTab('featured')}
          >
            Featured
          </button>
          <button 
            className={`tab-button ${activeTab === 'top-of-week' ? 'active' : ''}`}
            onClick={() => setActiveTab('top-of-week')}
          >
            Top Of Week
          </button>
          <button 
            className={`tab-button ${activeTab === 'oil' ? 'active' : ''}`}
            onClick={() => setActiveTab('oil')}
          >
            Oil
          </button>
        </div>
        
        <div className="products-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img 
                  src={product.image_url || `https://via.placeholder.com/150?text=${product.name}`} 
                  alt={product.name} 
                />
              </div>
              <div className="product-info">
                <Link to={`/product/${product.id}`}>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">Rp {product.price.toLocaleString()}</p>
                </Link>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="add-to-cart-btn"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home; 