import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import product images (if you have them)
// If you don't have actual images, you can use these placeholders
const filterOilImg = 'https://via.placeholder.com/150?text=Filter+Oil';
const oilShellImg = 'https://via.placeholder.com/150?text=Oil+Shell';
const kampasRemImg = 'https://via.placeholder.com/150?text=Kampas+Rem';
const filterUdaraImg = 'https://via.placeholder.com/150?text=Filter+Udara';

function Home() {
  const [activeTab, setActiveTab] = useState('for-you');

  const products = [
    { id: 1, name: 'Filter Oli', price: 40000, image: filterOilImg },
    { id: 2, name: 'Oil Shell', price: 200000, image: oilShellImg },
    { id: 3, name: 'Kampas Rem', price: 250000, image: kampasRemImg },
    { id: 4, name: 'Filter Udara', price: 50000, image: filterUdaraImg },
    { id: 5, name: 'Filter Oli', price: 40000, image: filterOilImg },
    { id: 6, name: 'Oil Shell', price: 200000, image: oilShellImg },
    { id: 7, name: 'Filter Udara', price: 50000, image: filterUdaraImg },
    { id: 8, name: 'Kampas Rem', price: 250000, image: kampasRemImg },
    { id: 9, name: 'Filter Oli', price: 40000, image: filterOilImg },
    { id: 10, name: 'Oil Shell', price: 200000, image: oilShellImg },
    { id: 11, name: 'Filter Udara', price: 50000, image: filterUdaraImg },
    { id: 12, name: 'Kampas Rem', price: 250000, image: kampasRemImg }
  ];

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
              <Link to={`/product/${product.id}`}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">Rp {product.price.toLocaleString()}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home; 